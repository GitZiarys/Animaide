import React from "react";
import "./App.css";


import Acceuil from "./pages/Acceuil";
import Connexion from "./pages/connexion";

import { Route, Routes } from "react-router-dom";

import WithNavigate from "./components/login.component";
const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><Acceuil /></>} />
        <Route path="/login" element={<><Connexion /></>} />
      </Routes>
      </div> 
      );
}
export default App;
