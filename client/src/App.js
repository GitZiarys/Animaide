import React from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/header";
import AnimaideShort from "./components/animaide_short";
import AssociationsDisplay from "./components/associations_display";
import AnimaideEngage from "./components/animaide_engagments";


const App = () => {
  return (
      <div className="App">
       <Header /> 
       <AnimaideShort />
       <AssociationsDisplay />
       <AnimaideEngage />
      </div>
  );
}

export default App;
