import axios from 'axios';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ArrowLeftIcon from '../../svg/ArrowLeftIcon';
import Loading from '../../svg/Loading';

interface CountryFullType {
  cca3: string;
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
      };
    };
  };
  tld: string;
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  region: string;
  subregion: string;
  population: number;
  capital: string;
  flags: {
    png: string;
  };
  languages: string;
  borders: string[];
}

export default function CountryInfo() {
  const { countryName: country } = useParams();
  const nav = useNavigate();
  const { data, isLoading, isError } = useQuery<CountryFullType[]>(
    ['country', country],
    async () => {
      return axios
        .get<CountryFullType[]>(
          `https://restcountries.com/v3.1/alpha/${country}`,
        )
        .then((response) => response.data);
    },
    { refetchOnWindowFocus: false },
  );
  const info = data && data[0];

  if (isLoading) {
    return (
      <div className="mx-auto container flex-grow">
        <div className="flex justify-center items-center text-center h-full">
          <Loading />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mx-auto container flex-grow">
        <div className="flex justify-center items-center text-center h-full">
          <p className="text-texts-light dark:text-texts-dark">
            Error fetching data
          </p>
        </div>
      </div>
    );
  }

  if (!data?.length || !info) {
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
    <div className="container mx-auto">
      <div className="flex flex-col justify-between mt-10 text-texts-light dark:text-texts-dark">
        <button
          onClick={() => nav(-1)}
          className="flex gap-1 self-start items-center justify-center m-auto sm:m-0 sm:justify-normal w-11/12 sm:w-auto rounded bg-elements-light px-8 py-2 shadow-lg hover:border hover:border-gray-900 dark:bg-elements-dark dark:hover:border-white "
        >
          <ArrowLeftIcon className="w-4" /> Back
        </button>
        <div className="flex flex-col justify-center items-center sm:flex-row sm:items-start sm:justify-normal gap-6 sm:gap-10 my-10">
          <div className="w-2/3 sm:w-1/3 flex h-full">
            <img
              className="w-full h-full "
              src={info.flags.png}
              alt="flag"
            />
          </div>
          <div className="flex flex-col gap-6 w-2/3 text-xs md:text-sm lg:text-base">
            <h2 className="text-xl font-bold">{info.name.common}</h2>
            <div className="flex flex-col gap-0 sm:flex-row sm:gap-14">
              <div className="flex flex-col gap-2">
                <p className="font-bold">
                  Native Name:
                  <span className="font-light ml-2">
                    {Object.values(info.currencies!)[0].name}
                  </span>
                </p>
                <p className="font-bold">
                  Population:
                  <span className="font-light ml-2">{info.population}</span>
                </p>
                <p className="font-bold">
                  Region: <span className="font-light ml-2">{info.region}</span>
                </p>
                <p className="font-bold">
                  Sub Region:
                  <span className="font-light ml-2">{info.subregion}</span>
                </p>
                <p className="font-bold">
                  Capital:
                  <span className="font-light ml-2">{info.capital}</span>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold">
                  Top Level Domain:
                  <span className="font-light ml-2">{info.tld}</span>
                </p>
                <p className="font-bold">
                  Currencies:
                  <span className="font-light ml-2">
                    {Object.values(info.currencies!)[0].name}
                  </span>
                </p>
                <p className="font-bold">
                  Languages:
                  <span className="font-light ml-2">
                    {Object.values(info.languages!).join(', ')}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-center ">
              <p className="font-bold">Border Countries: </p>
              {(info.borders?.length > 0 &&
                info.borders.map((border) => (
                  <>
                    <Link
                      to={`/${border}`}
                      key={border}
                      className="rounded bg-elements-light dark:bg-elements-dark px-4 py-1 shadow-md hover:bg-gray-100 dark:bg-element-dark dark:hover:border dark:hover:border-white"
                    >
                      {border}
                    </Link>
                  </>
                ))) ||
                'None'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
