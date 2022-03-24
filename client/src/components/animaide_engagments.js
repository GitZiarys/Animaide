import React from "react";
import "../App.css";

const AnimaideEngage = () => {
  return (
        <section className="container_animaide_engage">
            <h1 className="animaide_engage_title">Ensemble, engageons nous <br/> pour la cause animale</h1>
            <div className="container_animaide_3engages">
                <div className="animaide_engage">
                    <div className="animaide_engage_image volontary"></div>
                    <h2 className="animaide_engage_subtitle">Devenir volontaire</h2>
                    <p className="animaide_engage_subtitle_description">N’hésitez plus a participer au diverses missions que nous proposons</p>
                </div>
                <div className="animaide_engage">
                    <div className="animaide_engage_image quick"></div>
                    <h2 className="animaide_engage_subtitle">Engagement rapide</h2>
                    <p className="animaide_engage_subtitle_description">En quelques clics vous pourrez vous engager sur nos missions</p>
                </div>
                <div className="animaide_engage">
                    <div className="animaide_engage_image strenght"></div>
                    <h2 className="animaide_engage_subtitle">Causes impactantes</h2>
                    <p className="animaide_engage_subtitle_description">Suivez avec nous les causes qui vous importent et sauvez nos amis les animaux</p>
                </div>
            </div>
            <a className="animaide_engage_button" href="/register">Inscription</a>
        </section>
  );
}

export default AnimaideEngage;