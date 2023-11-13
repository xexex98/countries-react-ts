import { Link } from 'react-router-dom';
import { CountryType } from '../../store/useStore';

type PropsCountry = {
  country: CountryType;
};

export default function Country({ country }: PropsCountry) {
  const {
    flags: { png },
    population,
    name,
    region,
    capital,
    cca3,
  } = country;

  return (
    <Link to={`/${cca3}`}>
      <div className="flex flex-col w-[230px] h-[320px] sm:w-auto bg-elements-light dark:bg-elements-dark text-texts-light dark:text-texts-dark hover:animate-pulse cursor-pointer rounded-md shadow-md">
        <div className="h-[40%]">
          <img
            className="w-full h-full rounded-t-md"
            src={png}
          ></img>
        </div>
        <div className="p-6 h-[60%] flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-extrabold mb-4">{name.common}</h2>
          </div>
          <div>
            <p className="font-semibold">
              Population:{' '}
              <span className="text-inputs-light text-sm">
                {population.toLocaleString()}
              </span>
            </p>
            <p className="font-semibold">
              Region:{' '}
              <span className="text-inputs-light text-sm">{region}</span>
            </p>
            <p className="font-semibold">
              Capital:{' '}
              <span className="text-inputs-light text-sm">{capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
