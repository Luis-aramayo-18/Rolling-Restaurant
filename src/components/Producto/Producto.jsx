import React from 'react'
import { Button, Card, OverlayTrigger, Popover } from 'react-bootstrap'

import "./producto.css"

const Producto = (props) => {

    const {name, price, image, description,isActive} = props;
    const {ordenProducts,setOrdenProducts} = props;
    const {...elemento} = props

    const popover = (
      <Popover id="popover-basic" name="popOverInfo bg-transparent">
        <Popover.Body className="popOverInfo text-white">
            {isActive === true
              ? description
                : "Disculpe , el producto no se encuentra disponible actualmente"}
      </Popover.Body>
      </Popover>
    )

    const addProduct = () => {
      setOrdenProducts([
      ...ordenProducts,
         elemento
      ]);
    }

  return (

      <Card className='' id=''>
        <OverlayTrigger>
             
        </OverlayTrigger>
        <Card.Body className=''>
        <div className='d-flex'>
          <Card.Title className='text-dark'>{name}</Card.Title>
          <Card.Text className='ms-auto'>
          </Card.Text>
          </div>
          <div className='d-flex'>
          <img className='img-prod' src={image} alt={name}/>
          <Card.Text className='text-dark ms-2'>
            {description}
          </Card.Text>
          </div> 
          <div className='text-end mt-2'>
          <Button variant="danger" onClick={addProduct}>{`Añadir: $${price}`}</Button>
          </div>
        </Card.Body>
      </Card>

  )
}

export default Producto