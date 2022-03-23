import React from "react";
import "../App.css";

import Header from "../components/header";
import Footer from "../components/footer";

import { Routes, Route, Link } from "react-router-dom";
import AssociationPage from "../components/association_page";




const PageAssoc = () => {
  return (
    <section>
    <Header />
    <AssociationPage />
    <Footer />
    </section>
  );
}

export default PageAssoc;