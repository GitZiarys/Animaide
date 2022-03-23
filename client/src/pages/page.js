import React from "react";
import "../App.css";

import Header from "../components/header";

import { Routes, Route, Link } from "react-router-dom";
import MissionPage from "../components/mission_page";




const Page = () => {
  return (
    <section>
    <Header />
    <MissionPage />
    </section>
  );
}

export default Page;