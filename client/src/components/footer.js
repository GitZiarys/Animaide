import React from "react";
import "../App.css";

import { Link } from "react-router-dom";

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
                  <Link className="footer_link" to={"/missions"} style={Header_button}> Toutes les missions</Link>
                  <Link className="footer_link" to={"/associations"} style={Header_button}> Les associations</Link>
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
              <a className="footer_icon instagram" href="https://instagram.com/ani.maide?utm_medium=copy_link"></a>
              <a className="footer_icon linkedin" href=" https://www.linkedin.com/company/84119255/admin/" target="_blank"></a>
              <a className="footer_icon facebook" href="https://www.facebook.com/Amimaide" target="_blank"></a>
              <a className="footer_icon mail"></a>
          </div>
      </section>
  );
}

export default Footer;