import React from "react";
import "../App.css";
import { Routes, Route, Link } from "react-router-dom";

const Header_button = {
    display: "inline-block",
};

const AnimaideShort = () => {
  return (
      <section className="container_indexits">
            <div className="indexits_left">
                <h1 className="indexits_title">Animaide c'est...</h1>
                <p className="indexits_description">Trouve une association luttant pour l’amélioration du bien-être animal proche de chez toi et participes à des missions de protection animale. </p>
                <div className="container_indexits_buttons">
                    <a className="indexits_button contact">Nous contacter</a>
                    <Link className="indexits_button missions" to={"/missions"} style={Header_button}>Voir les missions</Link>
                </div>
            </div>
            <div className="indexits_right">
                <div className="indexits_image"></div>
            </div>
      </section>
  );
}

export default AnimaideShort;