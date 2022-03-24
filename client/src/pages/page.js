import React from "react";
import "../App.css";

import Header from "../components/header";
import Footer from "../components/footer";
import MissionPage from "../components/mission_page";




const Page = () => {
  return (
    <section>
    <Header />
    <MissionPage />
    <Footer />
    </section>
  );
}

export default Page;