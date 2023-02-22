<<<<<<< HEAD
=======
import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import img1 from "../assets/imagen1.jpg"
import img2 from "../assets/imagen2.jpg"
import img3 from "../assets/imagen3.jpg"

const Home = () => {
  return (
    <>
       <Container>
        <div className='text-center bg-danger rounded-top p-2'>
          <h4>CONOCÉ NUESTRO MENÚ</h4>
          <hr />
          <p className='text-dark'>Nuestras burgers están hechas con carne 100% Angus, con pan casero que horneamos todos los días y una selección de ingredientes que las hacen únicas. Incluyen papas o una ensaladita de mix de hojas verdes.</p>
          <NavLink to="/login"><button type='button' className='bg-secondary rounded p-1'>Ver la carta <i class="fa-solid fa-arrow-right"></i></button></NavLink>
        </div>
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <hr />
    <div className='bg-light rounded my-2 pt-2 px-4'>
      <h2 className='text-center text-dark'>DELIVERY 🛵</h2>
      <hr className='text-dark' />
      <p className='text-dark text-center pb-2'>Tambien podes recibir el pedido en tu casa. Buscanos en estas plataformas:</p>
      <div className='d-flex justify-content-around'>
        <div id='img-pedido'>
        <img className='img-fluid rounded-circle' src="https://ordatic.com/wp-content/uploads/2022/04/Pedidosya_square_650x650.png" alt="logo de pedidosya" />
        </div>
        <div id='img-rappi'>
        <img className='img-fluid rounded-5' src="https://juanoflyer.com/wp-content/uploads/2019/02/b73e04_5309f096e9344041bfdc98305581ad4b_mv2_d_2133_1600_s_2.png" alt="logo de rappi" />
        </div>
      </div>
    </div>
            <div className="d-flex flex-column justify-content-center">
              <h3 className="text-center fs-2 my-2">
                DIRECCIÓN
              </h3>
              <p className="text-center">
                General Paz 576, San Miguel de Tucumán, Tucumán
              </p>
              <h3 className="text-center fs-2 my-2">
                TELÉFONO
              </h3>
              <p className="text-center">(381) 3123456</p>
              <h3 className="text-center fs-2 my-2">EMAIL</h3>
              <p className="text-center">devsfood.code@gmail.com</p>
            </div>
        </Container>
    </>
  )
}

export default Home
>>>>>>> 9b4f4b477b669a61b9279bdd84a114952b0291de
