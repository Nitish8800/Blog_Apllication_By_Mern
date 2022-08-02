import React from "react";
import "./App.css";

// Components
import Login from "./components/account/Login";
import DataProvider from "./context/DataProvider";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div style={{ marginTop: 65 }}>
      <DataProvider>
        <Login />
        <Home />
      </DataProvider>
    </div>
  );
};

export default App;
