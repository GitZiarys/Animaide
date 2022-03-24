import React from "react";
import "../App.css";

import Header from "../components/header";
import Footer from "../components/footer";
import SearchMissions from "../components/search_missions";



const Missions = () => {
  return (
    <section>
      <Header />
      <SearchMissions />
      <Footer />
    </section>
  );
}

export default Missions;