import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Producto from '../Producto/Producto';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-dark' id="contained-modal-title-vcenter">
          Mesa: 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-dark'>
            Pedido
          </p>
        </Modal.Body>
        <Modal.Footer>
            <h4 className='text-dark'>Subtotal: $</h4>
            <div className='text-end'>
            <Button variant='danger' className='mx-2'>Realizar pedido</Button>
            <Button variant='danger' className='mx-2' onClick={props.onHide}>Cerrar</Button>
            </div>
        </Modal.Footer>
      </Modal>
    );
}
const Menu = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        const productsFetch= async ()=>{
            const data = await axios().get(`/products`);
            setProducts(data.data);
            console.log(data.data)
        };
        productsFetch();
    }, []);

  return (
    <Container className='vh-100'>
        <div className='text-end'>
        <Button variant="danger" className='pill mx-2'><i class="fa-regular fa-user"></i></Button>
        <button onClick={() => setModalShow(true)} type="button" class="mx-2 btn btn-primary"> Mi pedido 
        <i class=" ms-2 fa-solid fa-bell-concierge"></i>
        </button>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <NavLink to="/login"><button variant="danger" type='button' className='bg-danger pill mx-2 rounded'>Cerrar sesión</button></NavLink>
        </div>
        <hr />
        <h1 className='text-center'>Nuestra carta</h1>
        <Container className='pb-5'>
        <Row className='g-3'>
            {products.map((elemento)=>{
                return(
                    <Col key={elemento.id} xs={12} md={6} lg={4} >
                        <Producto {...elemento}/>
                    </Col>
                )
            })}
        </Row>
        </Container>
        
    </Container>
  )
}

export default Menu