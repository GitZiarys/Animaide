import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

 
export default function MissionPage() {
 const [form, setForm] = useState({
   title: "",
   body1: "",
   body2: "",
   localisation: "",
   link: "",
   image: "",
   image2: "",
   duree: "",
   prerequis: "",
   assoImg: "",
   assoTitle: "",
   assoBody: "",
   assoContact: "",
   assoFB: "",
 });
 const params = useParams();
 const navigate = useNavigate();

 const Header_button = {
  display: "inline-block",
};
 
 useEffect(() => {
   async function fetchData() {
     const slug = params.slug.toString();
     const response = await fetch(`http://localhost:8080/api/${params.slug.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Mission with id ${slug} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.slug, navigate]);
 

 
 return (
    <section className="mission_page">
    {/* J'ai mis toutes les infos d'une mission ici, libre à toi de les arranger comme tu le souhaites */}
      <div className="container_mission">
        <div className="mission_header">
          <Link className="mission_back_link" to={"/missions"} style={Header_button}></Link>
          <h1 className="mission_title">{form.title}</h1>
          <div className="void"></div>
        </div>
        <img className="mission_header_img" alt={form.title} src={form.image}/>
        <div className="mission_display">
          <div className="mission_left">
            <h2 className="mission_left_title">L'association</h2>
            <img className="mission_left_img" alt={form.assoTitle} src={form.assoImg}/>
            <div className="mission_left_contact">
              <a className="mission_left_facebook" href={form.assoContact} target="_blank">Site internet de l'association</a> 
              <a className="mission_left_facebook_icon" href={form.assoFB} target="_blank"></a> 
            </div>
            <h3 className="mission_left_title">La mission</h3>
            <p className="mission_left_subtitle">Lieu : <span id="mission_left_info">{form.localisation}</span></p>
            <p className="mission_left_subtitle">Durée : <span id="mission_left_info">{form.duree}</span></p>
            <p className="mission_left_subtitle">Prérequis : <span id="mission_left_info">{form.prerequis}</span></p>
          </div>
          <div className="mission_right">
            <h3 className="mission_left_title">Qui sommes-nous ?</h3>
            <p className="mission_right_txt">{form.body1}</p>
            <img className="mission_right_img" alt={form.title} src={form.image2}/> 
            <h3 className="mission_left_title">Descriptif de cette mission</h3>
            <p className="mission_right_txt">{form.body2}</p>
            <a className="mission_right_button" href={form.link} target="_blank"> Rejoindre la mission</a>       
            <div className="mission_association">
              <img className="mission_association_img" alt={form.assoTitle} src={form.assoImg}/>
              <div className="mission_association_info">
                <h4 className="mission_association_info_title" >{form.assoTitle}</h4>
                <p className="mission_association_info_description" >{form.assoBody}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 );
}