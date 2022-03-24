import React from "react";
import "../App.css";

import Header from "../components/header";
import Footer from "../components/footer";
import AssociationPage from "../components/association_pages";




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