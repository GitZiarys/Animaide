import React from "react";
import "../App.css";

import HeaderLite from "../components/header_lite";
import Register from "../components/register.component";

import { Link } from "react-router-dom";

const Header_button = {
    display: "inline-block",
};

const Inscription = () => {
  return (
        <section className="Connexion">
            <HeaderLite />
            <div className="container_login"></div>
            <div className="login_display">
                <div className="login_image"></div>
                <div className="register_form">
                    <h2 className="login_title">Création de compte</h2>
                    <Register />
                        <p className="login_new">Tu as déjà un compte ? <Link className="forget_password" to={"/login"} style={Header_button}> Connecte-toi !</Link></p>
                        <p className="login_creation">En cliquant sur Créer un compte, tu déclares avoir lu et accepté <Link className="legal_mention" to={"/termsconditions"} style={Header_button}> nos Termes et Conditions d'utilisation.</Link></p>
                    </div>
                </div>
        </section>
  );
}

export default Inscription;