import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./formAdmin.css";

const FormAdmin = () => {
  return (
    <Card className="formAdminCard">
      <Card.Body>
        <Card.Title className="text-dark">Añadir Producto</Card.Title>
        <hr />

        <Form>
          <Form.Group className="mb-3" controlId="formAdminNombre">
            <Form.Label className="text-dark">Nombre del producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese nombre del producto"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAdminURLImagen">
            <Form.Label className="text-dark">URL de la Imagen</Form.Label>
            <Form.Control type="URL" placeholder="Ingrese URL de la Imagen" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAdminPrecio">
            <Form.Label className="text-dark">Precio del producto</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese precio del producto"
            />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formAdminDescripcion">
            <Form.Label className="text-dark">Descripción del producto</Form.Label>
            <Form.Control as="textarea" placeholder="Ingrese la descripción del producto" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formAdminDisponbible">
            <Form.Label className="text-dark">¿Está disponible?</Form.Label>
            <br />
            <Form.Label className="text-dark mx-2">Si</Form.Label>
            <Form.Check inline label="Si" name="rb-Disponible" type="radio" className="text-dark"/>
            <Form.Label className="text-dark mx-2">No</Form.Label>
            <Form.Check inline label="No" name="rb-Disponible" type="radio" className="text-dark"/>
          </Form.Group>



          <Button variant="danger" type="submit">
            Guardar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormAdmin;
