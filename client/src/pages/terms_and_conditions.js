import React from "react";
import "../App.css";

import Header from "../components/header";


import Footer from "../components/footer";

const TermsConditions = () => {
  return (
        <section className="TermsConditions">
            <Header />
              <div className="container_tc">
                <div className="tc_header">
                  <div className="tc_header_img"></div>
                  <h1 className="tc_header_title">Conditions d’utilisation du site Animaide</h1>
                </div>
                <div className="tc_informations">
                  <h2 className="tc_subtitle">Termes et conditions</h2>
                  <p className="tc_description">En accédant à ce site, nous supposons que vous acceptez ces termes et conditions dans leur intégralité. Ne continuez pas à utiliser le site Web de l’Association Animaide si vous n’acceptez pas l’ensemble des termes et conditions énoncés sur cette page. <br/><br/>La terminologie suivante s’applique aux présentes conditions d’utilisation, à la déclaration de confidentialité et à la clause de non-responsabilité, ainsi qu’à tout ou partie des contrats: accepter les termes et conditions de la société. «La société», «nous-mêmes», «nous», «notre» et «nous» désignent notre association. «Partie», «Parties» ou «Nous» désignent à la fois le client et nous-mêmes, ou le client ou nous-mêmes. Toutes les conditions font référence à l’offre, à l’acceptation et à la prise en compte du paiement nécessaire pour engager le processus de notre assistance au client de la manière la plus appropriée, que ce soit par le biais de réunions formelles à durée déterminée ou par tout autre moyen, dans le but exprès de rencontrer les parties. Les besoins du client en ce qui concerne la fourniture des services/produits mentionnés de la société, conformément aux lois en vigueur en France et sous réserve de ces lois. <br /><br/>Toute utilisation de la terminologie ci-dessus ou d’autres mots au singulier, au pluriel, en majuscules et/ou il / elle ou ils sont considérés comme interchangeables et, par conséquent, comme se référant à ceux-ci.</p>
                </div>
                <div className="tc_informations">
                  <h2 className="tc_subtitle">Cookies</h2>
                  <p className="tc_description">Nous utilisons des cookies. En utilisant le site Web de l’association Animaide, vous consentez à l’utilisation de cookies conformément à la politique de confidentialité de l’association Animaide.<br /><br />La plupart des sites Web interactifs modernes utilisent des cookies pour nous permettre de récupérer les détails de l’utilisateur à chaque visite. Les cookies sont utilisés dans certaines zones de notre site pour permettre la fonctionnalité de cette zone et la facilité d’utilisation pour les visiteurs. Certains de nos partenaires publicitaires / affiliés peuvent également utiliser des cookies.</p>
                </div>
                <div className="tc_informations last_info">
                  <h2 className="tc_subtitle">L’équipe</h2>
                  <p className="tc_description">Ce projet a été réalisé dans le cadre d’un projet scolaire pour le compte de HETIC. Notre équipe est composée de Matthieu Barbe et Jonathan Bories en pôle de developpement, ainsi que Iris Chaix, Audrey Pont, Amandine Goncalves, Ambrose Ben Tiba et Hugo Ferrer en pôle design et communication marketing.</p>
                </div>
              </div>
            <Footer />
        </section>
  );
}

export default TermsConditions;