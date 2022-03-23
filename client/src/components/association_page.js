import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

 
export default function AssociationPage() {
 const [form, setForm] = useState({
   localisation: "",
   assoImg: "",
   assoTitle: "",
   assoBody: "",
   assoContact: "",
   assoFB: "",
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const assoslug = params.assoslug.toString();

     const response = await fetch(`http://localhost:8080/api/associations/${params.assoslug.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Association with id ${assoslug} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.assoslug, navigate]);
 

 
 return (
     <section>
         {/* J'ai mis toutes les infos d'une association ici, libre à toi de les arranger comme tu le souhaites */}
   <div>
    

     <p>{form.localisation}</p>
     <img alt={form.assoTitle} src={form.assoImg}/>
     <p>{form.assoTitle}</p>
     <p>{form.assoBody}</p>
     <p>{form.assoContact}</p>
     <a href={form.assoFB}>Voir Facebook</a>


      
   </div>

   </section>
 );
}