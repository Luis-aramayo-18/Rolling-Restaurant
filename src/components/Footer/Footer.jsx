import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='py-3 bg-dark text-light'>
        <Container className='text-center'>
            <p>Todos los derechos reservados © - DevsFood - 2023</p>
            <div>
            <a href="https://www.instagram.com"><i class="fa-brands fa-instagram mx-2"></i></a>
            <a href="https://www.whatsapp.com"><i class="fa-brands fa-whatsapp mx-2"></i></a>
            <a href="https://www.facebook.com"><i class="fa-brands fa-facebook mx-2"></i></a>
            </div>
        </Container>
    </div>
  )
}

export default Footer
 
