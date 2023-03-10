import React from 'react'
import { Button, Card } from 'react-bootstrap'

import "./producto.css"

const Producto = (props) => {

    const {name, price, image, description}= props;

  return (
    <Card className='' id=''>
      <Card.Body className=''>
      <div className='d-flex'>
        <Card.Title className='text-dark'>{name}</Card.Title>
        <Card.Text className='ms-auto'>
          <h3 className='text-dark'>$ {price}</h3>
        </Card.Text>
        </div>
        <div className='d-flex'>
        <img className='img-prod px-3' src={image} alt="" />
        <Card.Text className='text-dark'>
          {description}
        </Card.Text>
        </div> 
        <div className='text-end mt-2'>
        <Button variant="danger">Agregar a pedido</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Producto