import axios from 'axios';
import { useQuery } from 'react-query';
import { CountryType, useFilter, useSearch } from '../../store/useStore';
import Loading from '../../svg/Loading';
import Country from '../country';
import { useEffect, useState } from 'react';

export default function Countries() {
  const { data, isLoading, isError } = useQuery<CountryType[]>(
    'countries',
    async () => {
      return axios
        .get<CountryType[]>('https://restcountries.com/v3.1/all')
        .then((response) => response.data);
    },
    { refetchOnWindowFocus: false },
  );
  const [count, setCount] = useState<number>(12);

  const { filter } = useFilter();
  const { search } = useSearch();

  const info = data?.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&
      (country.region.toLowerCase() === filter.toLowerCase() ||
        filter.toLowerCase() === 'All'.toLowerCase())
    );
  });

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + Math.round(window.scrollY) >=
          document.body.offsetHeight - 100 &&
        data &&
        count < data?.length
      ) {
        setCount((prev) => (prev += 12));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [data, count]);

  if (isLoading) {
    return (
      <div className="mx-auto container flex-grow flex flex-col justify-center">
        <div className="flex justify-center items-center text-center h-full">
          <Loading />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-texts-light dark:text-texts-dark">
        Error fetching data
      </p>
    );
  }

  if (!info?.length) {
    return (
      <div className="mx-auto container flex-grow">
        <div className="flex justify-center items-center text-center h-full">
          <p className="text-center mt-10 text-texts-light dark:text-texts-dark">
            Country does not exist
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex-grow">
      <div className="flex flex-col items-center p-4 sm:grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {info?.map((country, index) => {
          if (index < count) {
            return (
              <Country
                country={country}
                key={country.cca3}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
