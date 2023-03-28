import React from 'react'
import { Button, Card, OverlayTrigger, Popover } from 'react-bootstrap'

import "./producto.css"

const Producto = (props) => {

    const {name, price, image, description,isActive} = props;
    const {ordenProducts,setOrdenProducts} = props;
    const {...elemento} = props

    const popover = (
      <Popover id="popover-basic" name="popOverInfo bg-transparent">
        <Popover.Body className="popOverInfo text-light">
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

    <Card id='cardProduct'>
      <OverlayTrigger 
      trigger="click"
      placement="bottom"
      overlay={popover}
      rootClose={true}>
      <Card.Img 
      className={`${isActive===false? "opacity-50" : "desvanecer img-fluid rounded-start img-prod"}`}
      variant="top" 
      src={image} 
      alt={name}/>
      </OverlayTrigger>

    <Card.Body>
    <Card.Title className='text-dark'>{name}</Card.Title>
    <Card.Text className='text-dark'>{description}</Card.Text>
    <div className='text-end'>
    <Button 
      className={`${isActive===false ? "disabled" : ""}`} 
      variant="success" 
      onClick={addProduct}>{`${isActive===true ? (`Agregar: $${price}`) : ("no disponible")}`}
    </Button>
    </div>
    </Card.Body>
    </Card>

  )
}

export default Producto