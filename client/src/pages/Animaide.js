import React from "react";
import "../App.css";

import Header from "../components/header";

import Footer from "../components/footer";

const Animaide = () => {
  return (
        <section className="Animaide">
            <Header />
            <div className="container_animaide">
                <h1 className="animaide_title">Pourquoi Animaide ? </h1>
                <div className="animaide_header_img"></div>
                <div className="animaide_first">
                    <div className="animaide_first_img"></div>
                    <div className="animaide_first_description">
                        <h2 className="animaide_first_title">Animaide c’est quoi ?</h2>
                        <p className="animaide_first_subdescription">Animaide vient d’une initiative d’étudiants, voulant créer une plateforme dédiée à la mise en relation d’associations bénévoles qui luttent contre la maltraitance animale et les personnes souhaitant participer à des missions pour contribuer à sauver les animaux dans des situations désavantageuses.</p>
                    </div>
                </div>
                <div className="animaide_second">
                    <div className="animaide_second_img"></div>
                    <div className="animaide_second_description">
                        <h2 className="animaide_first_title">Mais alors, pourquoi nous choisir?</h2>
                        <p className="animaide_first_subdescription">Animaide pourrait être l’aventure de demain ! Nous te proposons une expérience, des missions qui aident la cause animale. Tu pourras directement retrouver toutes les missions liées à la cause animale près de chez toi !<br />Il n’y a pas forcément besoin d’avoir des connaissances, ni de diplôme. Dans chaque mission tu pourras retrouver les infomations nécessaire pour pouvoir participer et aider l’association. <br />Tu seras directement affilié à l’association proposant la ou les missions. <br />Il n’y a plus qu’à foncer !</p>
                    </div>
                </div>
                <div className="animaide_footer"></div>
            </div>
            <Footer />
        </section>
  );
}

export default Animaide;