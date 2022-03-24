import React from "react";
import "../App.css";

import Header from "../components/header";
import Footer from "../components/footer";

const Header_button = {
    display: "inline-block",
};

const Eg = () => {
  return (
        <section className="Eg">
            <Header />
                <h1 className="eg_title">YOU FOUND THE EASTER EGG</h1>
                <div className="eg_chara"></div>
                <p className="eg_txt">Yo...that’s sus . <br />Get outta here before I vote you out</p>
            <Footer />
        </section>
  );
}

export default Eg;