import React, { useContext } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { DataContext } from "./Contexts/DataContext";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const { isConnected } = useContext(DataContext);
  return (
    <div className="App">{isConnected ? <MainPage /> : <ErrorPage />}</div>
  );
};

export default App;
