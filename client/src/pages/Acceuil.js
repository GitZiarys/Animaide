import React from "react";
import "../App.css";

import Header from "../components/header";

import AnimaideShort from "../components/animaide_short";
import AssociationsDisplay from "../components/associations_display";
import AnimaideEngage from "../components/animaide_engagments";
import AnimaideRecentMissions from "../components/animaide_recent_mission";
import AnimaideStake from "../components/animaide_stake";
import AnimaideNewsletter from "../components/animaide_newsletter";

import Footer from "../components/footer";

const Acceuil = () => {
  return (
        <section className="Acceuil">
            <Header />

            <AnimaideShort />
            <AssociationsDisplay />
            <AnimaideEngage />
            <AnimaideRecentMissions />
            <AnimaideStake />
            <AnimaideNewsletter />

            <Footer />
        </section>
  );
}

export default Acceuil;