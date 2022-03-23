import React from "react";
import "./App.css";

import RestoreScroll from "./scripts/RestoreScroll";


import Acceuil from "./pages/Acceuil";
import Connexion from "./pages/connexion";
import Inscription from "./pages/inscription";
import TermsConditions from "./pages/terms_and_conditions";
import Animaide from "./pages/Animaide";
import Eg from "./pages/EG";

import {Route, Routes } from "react-router-dom";

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
          </Routes>
      </RestoreScroll>
      </div> 
      );
}
export default App;
