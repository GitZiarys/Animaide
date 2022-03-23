import React from "react";
import "./App.css";


import Acceuil from "./pages/Acceuil";
import Connexion from "./pages/connexion";
import Missions from "./pages/missions";

import { Route, Routes } from "react-router-dom";

import WithNavigate from "./components/login.component";
import Profile from "./components/profile.component";
import Page from "./pages/page";
import MissionPage from "./components/mission_page";


const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><Acceuil /></>} />
        <Route path="/login" element={<><Connexion /></>} />
        <Route path="/profile" element={<><Profile /></>} />
        <Route path="/missions" element={<><Missions /></>} />
        <Route path="/mission/:slug" element={<><MissionPage /></>} />
      </Routes>
      </div> 
      );
}
export default App;
