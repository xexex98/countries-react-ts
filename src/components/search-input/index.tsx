import { useSearch } from '../../store/useStore';
import SearchIcon from '../../svg/SearchIcon';

export default function SearchInput() {
  const { search, setSearch } = useSearch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="w-full sm:w-1/2 mb-6 bg-elements-light flex px-2 dark:bg-elements-dark">
      <SearchIcon />
      <input
        value={search}
        onChange={handleChange}
        placeholder="Search for a country ..."
        className="text-inputs-light dark:text-inputs-dark bg-transparent text-xs rounded w-full h-10 p-2 focus:outline-none"
      />
    </div>
  );
}
