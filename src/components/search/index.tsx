import Filter from '../filter/filter';
import SearchInput from '../search-input';
import Wrapper from '../wrapper';

export default function Search() {
  return (
    <Wrapper>
      <div className="p-4 mt-4 flex justify-between flex-col sm:flex-row">
        <SearchInput />
        <Filter />
      </div>
    </Wrapper>
  );
}
