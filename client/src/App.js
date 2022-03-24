import React from "react";
import "./App.css";

import RestoreScroll from "./scripts/RestoreScroll";


import Acceuil from "./pages/Acceuil";
import Connexion from "./pages/connexion";
import Missions from "./pages/missions";
import Inscription from "./pages/inscription";
import TermsConditions from "./pages/terms_and_conditions";
import Animaide from "./pages/Animaide";
import Eg from "./pages/EG";

import {Route, Routes } from "react-router-dom";

import Profile from "./components/profile.component";
import Page from "./pages/page";
import MissionPage from "./components/mission_page";
import Associations from "./pages/associations";
import PageAssoc from "./pages/pageassoc";


const App = () => {

  return (
    <div className="App">
      <RestoreScroll >
        <Routes>
          <Route path="/" element={<><Acceuil /></>} />
          <Route path="/login" element={<><Connexion /></>} />
          <Route path="/register" element={<><Inscription /></>} />
          <Route path="/termsconditions" element={<><TermsConditions /></>} />
          <Route path="/animaide" element={<><Animaide /></>} />
          <Route path="/eg" element={<><Eg /></>} />
          <Route path="/profile" element={<><Profile /></>} />
          <Route path="/missions" element={<><Missions /></>} />
          <Route path="/missions/:slug" element={<><Page /></>} />
          <Route path="/associations" element={<><Associations /></>} />
          <Route path="/associations/:slug" element={<><PageAssoc /></>} />
        </Routes>
      </RestoreScroll>
      </div> 
      );
}
export default App;
