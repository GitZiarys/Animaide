import React from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/header";
import AnimaideShort from "./components/animaide_short";
import AssociationsDisplay from "./components/associations_display";

const App = () => {
  return (
      <div className="App">
       <Header /> 
       <AnimaideShort />
       <AssociationsDisplay />
      </div>
  );
}

export default App;
