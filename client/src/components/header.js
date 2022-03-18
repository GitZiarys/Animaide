import React from "react";
import "../App.css";

const Header = () => {
  return (
      <div className="container_header">
          <div className="header_left">
            <a className="header_logo" href="./"></a>
            <a className="header_link">Nos missions</a>
            <a className="header_link">Les associations</a>
            <a className="header_link">Pourquoi Animaide ?</a>
          </div>
          <div className="header_right">
          <a className="header_button connect">Se connecter</a>
          <a className="header_button signin">S'inscrire</a>
          </div>
      </div>
  );
}

export default Header;