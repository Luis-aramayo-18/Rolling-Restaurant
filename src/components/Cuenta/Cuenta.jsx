import React from 'react'
import { Container } from 'react-bootstrap'
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom'

const Cuenta = () => {

  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');
  const dataDecoded = jwt_decode(token)
  let nombreUsuario = dataDecoded.name
  let apellidoUsuario = dataDecoded.lastName
  let emailUsuario = dataDecoded.email

  const navigateToMenu =()=>{
    navigate("/menu");

    return
  }

  const closeSession =()=>{
    sessionStorage.clear();
    window.location.reload();

    return
  }

  return (
    <Container>
      <div className='text-center'>
        <div>
          <hr />

          <div className='d-flex justify-content-center'>
          <div className='bg-light rounded py-3'>
          <h2 className='text-dark'>Gracias por elegirnos, esperamos verte pronto 🤗</h2>
          <hr className='text-dark'/>
          <h4 className='text-dark'>Nombre: {nombreUsuario}</h4>
          <h4 className='text-dark'>Apellido: {apellidoUsuario}</h4>
          <h4 className='text-dark'>Email: {emailUsuario}</h4>
          <hr className='text-dark'/>
          <button onClick={closeSession} type='button' className='m-2 btn btn-danger text-white btn-lg'>Cerrar Sesion</button>
          <button onClick={navigateToMenu} type='button' className='m-1 btn btn-success text-white btn-lg'>Menu</button>
          </div>
          </div>

          <hr />
        </div>
      </div>
    </Container> 
  )
}

export default Cuenta
