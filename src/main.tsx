import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import CountryInfo from './components/country-info/index.tsx';
import './index.css';
import ThemeProvider from './providers/ThemeProvider.tsx';
import Header from './components/header/index.tsx';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <App />
      </>
    ),
  },
  {
    path: '/:countryName',
    element: (
      <>
        <div className="w-screen h-screen overflow-auto bg-backgrounds-light dark:bg-backgrounds-dark flex flex-col">
          <Header />
          <CountryInfo />
        </div>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
