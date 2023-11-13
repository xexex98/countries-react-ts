import Countries from './components/countries';
import Search from './components/search';

function App() {
  return (
    <div className="w-screen h-screen overflow-auto bg-backgrounds-light dark:bg-backgrounds-dark flex flex-col">
      <Search />
      <Countries />
    </div>
  );
}

export default App;
