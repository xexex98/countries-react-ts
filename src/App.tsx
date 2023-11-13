import Countries from './components/countries';
import Header from './components/header';
import Search from './components/search';

function App() {
  return (
    <div className="w-screen min-h-screen bg-backgrounds-light dark:bg-backgrounds-dark flex flex-col">
      <Header />
      <Search />
      <Countries />
    </div>
  );
}

export default App;
