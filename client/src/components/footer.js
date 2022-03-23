import React from "react";
import "../App.css";

import { Routes, Route, Link } from "react-router-dom";

const Header_button = {
    display: "inline-block",
};

const Footer = () => {
  return (
      <section className="container_footer">
          <div className="footer footer_left">
              <div className="footer_info">
                  <h2 className="footer_title">Naviguation</h2>
                  <a className="footer_link" href="./">Accueil</a>
                  <a className="footer_link">Toutes les missions</a>
                  <a className="footer_link">Les associations</a>
              </div>
              <div className="footer_info">
                  <h2 className="footer_title">À propos</h2>
                  <Link className="footer_link" to={"/animaide"} style={Header_button}> Pourquoi Animaide ?</Link>
                  <Link className="footer_link" to={"/termsconditions"} style={Header_button}> Termes et Conditions</Link>
                  <Link className="footer_link waiting" to={"/eg"} style={Header_button}> Easter Egg</Link>
              </div>
          </div>
          <a className="footer footer_center" href="./"></a>
          <div className="footer footer_right">
              <a className="footer_icon instagram"></a>
              <a className="footer_icon twitter" href="https://www.facebook.com/Amimaide" target="_blank"></a>
              <a className="footer_icon facebook" href="" target="_blank"></a>
              <a className="footer_icon mail"></a>
          </div>
      </section>
  );
}

export default Footer;