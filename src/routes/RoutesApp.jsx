import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BarraNav from "../components/BarraNav/BarraNav";
import Footer from "../components/Footer/Footer";
import FormCliente from "../components/FormCliente/FormCliente";
import Login from "../components/Login/Login";
import Menu from '../components/Menu/Menu'
import AboutUs from "../pages/AboutUs";
import Administracion from "../pages/Administracion";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <BarraNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<FormCliente />}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path="/administracion" element={<Administracion />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesApp;
