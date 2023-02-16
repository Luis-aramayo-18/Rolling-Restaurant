import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BarraNav from '../components/BarraNav/BarraNav'
import Footer from '../components/Footer/Footer'
import FormCliente from '../components/FormCliente/FormCliente'
import Login from '../components/Login/Login'
import AboutUs from '../pages/AboutUs'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const RoutesApp = () => {
  const [clients, setClients] = useState([]);

  const changeClientsList = (newList)=>{
    setClients(newList);

    localStorage.setItem("clientes", JSON.stringify(newList));

  }
  return (
    <BrowserRouter>
      <BarraNav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/nosotros' element={<AboutUs/>}/>
            <Route path='/contacto' element={<Contact/>}/>
            <Route path='/*' element={<NotFound/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registro' element={<FormCliente changeClientsList={changeClientsList} clientes={clients}/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default RoutesApp