import React from "react";
import "../App.css";

const Indexits = () => {
  return (
      <div className="container_indexits">
            <div className="indexits_left">
                <h1 className="indexits_title">Animaide c'est...</h1>
                <p className="indexits_description">Une plateforme présentant des missions locales se focalisant sur les animaux allant de l’aide en refuges à la préservation d’espèces en danger. </p>
                <div className="container_indexits_buttons">
                    <a className="indexits_button contact">Nous contacter</a>
                    <a className="indexits_button missions">Voir les missions</a>
                </div>
            </div>
            <div className="indexits_right">
                <div className="indexits_image"></div>
            </div>
      </div>
  );
}

export default Indexits;