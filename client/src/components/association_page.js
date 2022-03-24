import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

 
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
    

     <p>{form.localisation}</p>
     <img alt={form.title} src={form.logo}/>
     <p>{form.title}</p>
     <p>{form.body1}</p>
     <p>{form.body2}</p>
     <img alt={form.title} src={form.image1}/>
     <img alt={form.title} src={form.image2}/>
     <p>{form.contact}</p>
     <a href={form.FB}>Voir Facebook</a>


      
   </div>

   </section>
 );
}