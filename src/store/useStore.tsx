import { create } from 'zustand';

export interface CountryType {
  cca3: string;
  name: {
    common: string;
  };
  region: string;
  population: number;
  capital: string;
  flags: {
    png: string;
  };
}

interface FilterState {
  filter: string;
  setFilter: (filter: string) => void;
}
export const useFilter = create<FilterState>((set) => ({
  filter: 'All',
  setFilter: (filter) => set(() => ({ filter })),
}));

interface SearchState {
  search: string;
  setSearch: (search: string) => void;
}
export const useSearch = create<SearchState>((set) => ({
  search: '',
  setSearch: (search) => set(() => ({ search })),
}));

interface CountriesState {
  allCountries: CountryType[];
  setAllCountries: (by: CountryType[]) => void;
}

export const useCountries = create<CountriesState>((set) => ({
  allCountries: [],
  setAllCountries: (allCountries) => set(() => ({ allCountries })),
}));
