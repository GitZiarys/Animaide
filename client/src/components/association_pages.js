import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Header_button = {
  display: "inline-block",
};
 
export default function AssociationPage() {
 const [form, setForm] = useState({
   localisation: "",
   image1: "",
   image2: "",
   logo: "",
   title: "",
   body1: "",
   body2: "",
   contact: "",
   FB: "",
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const slug = params.slug.toString();

     const response = await fetch(`http://localhost:8080/api/associations/${params.slug.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Association with id ${slug} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.slug, navigate]);
 

 
 return (
  <section>
      {/* J'ai mis toutes les infos d'une association ici, libre à toi de les arranger comme tu le souhaites */}
    <div>
      <img className="association_header" alt={form.title} src={form.image1}/>
      <Link className="association_back_link" to={"/associations"} style={Header_button}></Link>
      <div className="container_association">
        <div className="association_left">
          <div className="association_left_img">
            <img className="association_img" alt={form.title} src={form.logo}/>
          </div>
          <h2 className="mission_left_title">Contact</h2>
          <div className="association_contact">
            <a className="association_left_contact contact_web" href={form.contact} target="_blank"></a>
            <a className="association_link" href={form.contact} target="_blank">Site Web</a>
          </div>
          <div className="association_contact">
            <a className="association_left_contact contact_facebook" href={form.FB} target="_blank"></a>
            <a className="association_link" href={form.FB} target="_blank">Voir Facebook</a> 
          </div>
          <div className="association_contact">
            <div className="association_left_contact contact_localisation"></div>
            <p className="association_localisation"> {form.localisation}</p>
          </div>
        </div>
        <div className="association_right">
          <h1 className="association_title">{form.title}</h1>
          <h2 className="association_subtitle">L’association</h2>
          <p className="association_description">{form.body1}</p>
          <img className="association_right_img" alt={form.title} src={form.image2}/>
          <h2 className="association_subtitle">Ses missions</h2>
          <p className="association_description">{form.body2}</p>
        </div>
      </div>
    </div>
   </section>
 );
}