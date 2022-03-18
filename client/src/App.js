import React from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/header";
import Indexits from "./components/index_its";

const App = () => {
  return (
      <div className="App">
       <Header /> 
       <Indexits />
      </div>
  );
}

export default App;
