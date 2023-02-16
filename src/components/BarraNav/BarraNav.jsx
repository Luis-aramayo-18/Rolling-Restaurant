import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import logo from './logo_2.png'

const BarraNav = () => {

let activeStyle ={
    color: "#ff0000"
  }
let inactiveStyle ={
    textDecoration: "none",
    color: "#fff"
  }

  return (
    <Navbar fixed="top" bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand className='d-flex align-items-center' href="#home">
        <img
              src={logo}
              width="60"
              height="50"
              className="d-inline-block align-top"
              alt="Logo DevsFood"
            /><Link className="text-light text-decoration-none" to="/">DevsFood</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavLink className="ms-3 py-2 nav-link" to="/" style={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }>Inicio</NavLink>
            <NavLink className="ms-3 py-2 nav-link" to="/nosotros" style={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }>Nosotros</NavLink>
            <NavLink className="ms-3 py-2 nav-link" to="/contacto" style={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }>Contacto</NavLink>
          </Nav>
          <div  className="ms-3 text-center py-2">
            <NavLink to="/login"><button type='button' className='bg-danger rounded'>Ingresar</button></NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BarraNav