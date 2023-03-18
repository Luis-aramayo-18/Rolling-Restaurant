import React from 'react'
import { Container } from 'react-bootstrap'

const NotFound = () => {
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center my-2 vh-100'>
        <h3 className='text-center'>Lo sentimos esta pagina se encuentra en reparación</h3>
        <img className="img-fluid"src='./img/imgNotFound/404.png' alt='Error 404'></img>
    </Container>
  )
}

export default NotFound