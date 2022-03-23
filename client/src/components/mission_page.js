import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Footer from "./footer";
import Header from "./header";
 
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
     <section>
         <Header />
         {/* J'ai mis toutes les infos d'une mission ici, libre à toi de les arranger comme tu le souhaites */}
   <div>
    
     <h3>{form.title}</h3>
     <p>{form.body1}</p>
     <p>{form.body2}</p>
     <p>{form.localisation}</p>
     <p>{form.link}</p>
     <img alt={form.title} src={form.image}/>
     <img alt={form.title} src={form.image2}/>
     <p>{form.duree}</p>
     <p>{form.prerequis}</p>
     <img alt={form.assoTitle} src={form.assoImg}/>
     <p>{form.assoTitle}</p>
     <p>{form.assoBody}</p>
     <p>{form.assoContact}</p>
     <p>{form.assoFB}</p>


      
   </div>
   <Footer />
   </section>
 );
}