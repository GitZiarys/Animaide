import React from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/header";
import AnimaideShort from "./components/animaide_short";
import AssociationsDisplay from "./components/associations_display";
import AnimaideEngage from "./components/animaide_engagments";
import AnimaideRecentMissions from "./components/animaide_recent_mission";
import Footer from "./components/footer";


const App = () => {
  return (
      <div className="App">
        <Header /> 

        <AnimaideShort />
        <AssociationsDisplay />
        <AnimaideEngage />
        <AnimaideRecentMissions />

        <Footer />
      </div>
  );
}

export default App;
