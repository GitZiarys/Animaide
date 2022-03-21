import React from "react";
import "../App.css";
import { Routes, Route, Link } from "react-router-dom";

const HeaderLite = () => {
  return (
        <section className="container_headerlite">
            <Link className="headerlite_logo" to={"/"}></Link>
        </section>
  );
}

export default HeaderLite;