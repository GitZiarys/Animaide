import React from "react";
import "../App.css";

import Header from "../components/header";

import SearchAssociations from "../components/search_associations";
import Footer from "../components/footer";



const Associations = () => {
  return (
    <section>
    <Header />
    <SearchAssociations />
    <Footer />
    </section>
  );
}

export default Associations;