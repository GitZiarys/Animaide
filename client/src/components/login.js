import React from "react";
import "../App.css";
import Header from "./header";
import Footer from "./footer";
import { Route, Routes } from "react-router-dom";
import WithNavigate from "./login.component";
const Login = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<>
        <Header />
        <WithNavigate />
      

      <Footer /> </>} />
      
      </Routes>
      </div> 
      );
}
export default Login;
