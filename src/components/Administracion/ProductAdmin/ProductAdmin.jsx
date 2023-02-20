import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductAdmin = (props) => {
  const {
    name: nombre,
    image: url_imagen,
    price: precio,
    description: descripcion,
  } = props;
  return (
    <Card>
      <Card.Img variant="top" src={url_imagen} />
      <Card.Body>
        <Card.Title className="text-dark">{nombre}</Card.Title>
        <Card.Text className="text-dark">{descripcion}</Card.Text>
        <h5 className="text-dark">${precio}</h5>
        <div className="text-end"></div>

        <Button className="m-1" variant="danger">
          Editar
        </Button>
        <Button className="m-1" variant="danger">
          Borrar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductAdmin;
