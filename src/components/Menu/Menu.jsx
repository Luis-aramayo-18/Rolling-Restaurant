import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import Producto from '../Producto/Producto';
import Swal from 'sweetalert2';

function MyVerticallyCenteredModal(props) {
    const ref = useRef();
    const mesa = localStorage.getItem("mesa");

    const calculateOrderTotal = () => {
      let total = 0;
      props.ordenProducts.forEach(product => {
        total += product.price;
      });

      return total;
    }

    const deleteProductFromOrder = (productName) => {
      console.log('productName', productName);
      const newOrderProductsList = props.ordenProducts.filter((item) => item.name!==productName);
      props.setOrdenProducts([...newOrderProductsList]);
    }

    const limpiarOrder = () =>{
      props.setOrdenProducts([]);
      props.setNewStateOrder("Esperando a que realices tu pedido...");
    }

    const confirmarOrder = () =>{
      if(props.ordenProducts.length >0){
        props.setNewStateOrder("Que lo disfrutes!");

        Swal.fire({
        title: 'Pedido realizado 😋',
        width: "30rem",
        icon: 'success',
        timer: 2000,
        showCancelButton: false,
        showConfirmButton: false,
      }).then(() => {
        limpiarOrder();
        ref.current.click();
      });
      }else{
        Swal.fire({
          title: 'Error',
          width: "30rem",
          text: "No se puede realizar el pedido. El carrito está vacio!",
          icon: 'error',
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false,
        });
      }
      
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-dark' id="contained-modal-title-vcenter">
          <div className='text-dark'>Mesa: {mesa}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {props.ordenProducts.map((product) => (
            <ul className='d-flex justify-content-between'>
              <li className='text-dark'>{product.name}</li>
              <Button variant='danger'className='mb-2' onClick={() => deleteProductFromOrder(product.name)}>Eliminar</Button>
            </ul>
          ))}
        </Modal.Body>
        <Modal.Footer className='d-flex flex-column'>
            <h4 className='text-dark my-2'>{`Subtotal: $ ${calculateOrderTotal()}`}</h4>
            <div className='text-end'>
            <Button variant='danger' className='mx-2' onClick={()=> confirmarOrder()}>Realizar pedido</Button>
            <Button ref={ref} variant='danger' className='mx-2' onClick={props.onHide}>Cerrar</Button>
            </div>
            <div className='text-dark py-4'>{props.stateOrder}</div>
        </Modal.Footer>
      </Modal>
    );
}
const Menu = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [products, setProducts]= useState([]);
    const [ordenProducts, setOrdenProducts] = useState([]);
    const [stateOrder, setNewStateOrder] = useState("Esperando a que realices tu pedido...");

    useEffect(()=>{
        const productsFetch= async ()=>{
            const data = await axios().get(`/products`);
            setProducts(data.data);
        };
        productsFetch();

        const orderProductsBackup =  JSON.parse(localStorage.getItem("orderProducts"));
        setOrdenProducts((prev) => ([...prev, ...orderProductsBackup]));
    }, []);

    useEffect(() => {
      localStorage.setItem('orderProducts', JSON.stringify([...ordenProducts]));
    }, [ordenProducts]);


  return (
    <Container className=''>
        <div className='text-end'>
        <button onClick={() => setModalShow(true)} type="button" class="mx-2 btn btn-primary"> Mi pedido 
        <i class=" ms-2 fa-solid fa-bell-concierge"></i>
        </button>
        <MyVerticallyCenteredModal
        setOrdenProducts={setOrdenProducts}
        ordenProducts={ordenProducts}
        stateOrder={stateOrder}
        setNewStateOrder={setNewStateOrder}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
        <hr />
        <h1 className='text-center'>Nuestra carta</h1>
        <Container className='pb-5'>
        <Row className='g-3'>
            {products.map((elemento)=>{
                return(
                    <Col key={elemento.id} xs={12} md={6} lg={6} >
                        <Producto 
                          {...elemento}
                          setOrdenProducts={setOrdenProducts}
                          ordenProducts={ordenProducts}
                        />
                    </Col>
                )
            })}
        </Row>
        </Container>
        
    </Container>
  )
}

export default Menu