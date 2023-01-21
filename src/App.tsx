import React from 'react';
import './App.css';
import MainPage from './pages';
import DataProvider from './Contexts/DataContext';

const App = () => {

  return (
    <div className="App">
      <DataProvider>
        <MainPage/>
      </DataProvider>
    </div>
  );
}

export default App;
