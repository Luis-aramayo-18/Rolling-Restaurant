import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import jwt_decode from "jwt-decode"
import logo from "./logo_2.png";



const BarraNav = () => {

  let tokenAdmin=false

  let activeStyle = {
    color: "#ff0000",
  };
  let inactiveStyle = {
    textDecoration: "none",
    color: "#fff",
  };

  const token = sessionStorage.getItem("token")

  if(token){
    const dataDecoded = jwt_decode(token)
    let adminLogueado = dataDecoded.isAdmin;
    
    if(adminLogueado===true){
      tokenAdmin=true
    }
  }
  
  const handleClick =()=>{
    if(token){
    sessionStorage.clear()
    window.location.reload()
    }
    return
  }

  return (
    <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="d-flex align-items-center" href="#home">
          <img
            src={logo}
            width="60"
            height="50"
            className="d-inline-block align-top"
            alt="Logo DevsFood"
          />
          <Link className="text-light text-decoration-none" to="/">
            DevsFood
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavLink
              className="ms-3 py-2 nav-link"
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            >
              Inicio
            </NavLink>
            
            <NavLink
              className="ms-3 py-2 nav-link"
              to="/nosotros"
              style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            >
              Nosotros
            </NavLink>

            <NavLink
              className="ms-3 py-2 nav-link"
              to="/contacto"
              style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            >
              Contacto
            </NavLink>
          </Nav>

          <div className="ms-3 text-center py-2">
            <NavLink to="/login">
              <button onClick={handleClick} type="button" className="bg-danger rounded">
                {token ? `salir` : `ingresar`}
              </button>
            </NavLink>
          </div>

          { tokenAdmin &&
          <div className="ms-3 text-center py-2">
            <NavLink to="/administracion">
              <button type="button" className="bg-success rounded">
              admin
              </button>
            </NavLink>
          </div>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraNav;
