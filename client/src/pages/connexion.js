import React from "react";
import "../App.css";

import HeaderLite from "../components/header_lite";
import WithNavigate from "../components/login.component";

import { Routes, Route, Link } from "react-router-dom";

const Header_button = {
    display: "inline-block",
};

const Connexion = () => {
  return (
        <section className="Connexion">
            <HeaderLite />
            <div className="container_login"></div>
            <div className="login_display">
                <div className="login_image"></div>
                <div className="login_form">
                    <h2 className="login_title">Connexion à un compte</h2>
                    <WithNavigate />
                    <div className="login_details">
                        <div className="login_details_left">
                        <label for="newsletter_check" className="newsletter_check_label">
                            <input className="newsletter_check" id="newsletter_check" type="checkbox" required></input>
                            <div className="newsletter_checkbox_check"></div>
                            Se souvenir de moi
                        </label>
                        </div>
                        <div className="login_details_right">
                            <Link className="forget_password" to={"/"} style={Header_button}> Mot de passe oublié</Link>
                        </div>
                    </div>
                    <p className="login_new">Tu es nouveau ? <Link className="forget_password" to={"/register"} style={Header_button}> Crée un compte</Link></p>
                </div>
            </div>
        </section>
  );
}

export default Connexion;