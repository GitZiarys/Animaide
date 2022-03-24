import React from "react";
import "../App.css";

const AnimaideStake = () => {
  return (
        <section className="container_stake">
            <h1 className="stake_title">Aide-nous à améliorer <br />les conditions de vie animale</h1>
            <div className="stake_display">
                <div className="stake">
                    <div className="stake_image image1"></div>
                    <div className="stake_txt">
                        <h2 className="stake_subtitle">Trouve des missions</h2>
                        <p className="stake_description">Nous regroupons les missions les plus pertinentes par rapport à tes disponibilités et ta région afin de t’aider à trouver la mission parfaite pour toi !</p>
                    </div>
                </div>
                <div className="stake stake_reverse">
                    <div className="stake_image image2"></div>
                    <div className="stake_txt">
                        <h2 className="stake_subtitle">Aide la cause animale</h2>
                        <p className="stake_description">En participant aux missions de protection et de bien-être animal, tu contribues grandement à l’amélioration de la qualité de vie des animaux en France !</p>
                    </div>
                </div>
                <div className="stake">
                    <div className="stake_image image3"></div>
                    <div className="stake_txt">
                        <h2 className="stake_subtitle">Différents animaux t’attendent</h2>
                        <p className="stake_description">Selon tes envies et disponibilités, aides des associations à s’occuper de différents types d’animaux. Des missions pour aider des animaux domestiques, de la ferme ou bien même plus exotiques vous attendent !</p>
                    </div>
                </div>
                <div className="stake stake_reverse">
                    <div className="stake_image image4"></div>
                    <div className="stake_txt">
                        <h2 className="stake_subtitle">D’autres manières de nous aider</h2>
                        <p className="stake_description">Participer à une de nos missions n’est pas la seule manière de contribuer, tu peux aussi faire un don dans une de nos nombreuses associations partenaires.</p>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default AnimaideStake;