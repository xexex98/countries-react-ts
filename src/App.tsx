import Header from './components/header';
import Search from './components/search';
import Countries from './components/countries';

function App() {
  return (
    <div className="w-screen h-screen overflow-auto bg-backgrounds-light dark:bg-backgrounds-dark flex flex-col">
      <Header />
      <Search />
      <Countries />
    </div>
  );
}

export default App;
