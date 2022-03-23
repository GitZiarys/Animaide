import React from "react";
import "../App.css";

import Header from "../components/header";

import { Routes, Route, Link } from "react-router-dom";
import SearchMissions from "../components/search_missions";



const Missions = () => {
  return (
    <section>
    <Header />
    <SearchMissions />
    </section>
  );
}

export default Missions;