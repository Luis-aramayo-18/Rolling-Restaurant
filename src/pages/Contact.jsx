import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";

const Contact = () => {
  const enviarConsulta = () => {
    //validar
    Swal.fire({
      icon: "success",
      title: "Gracias!",
      text: "Su consulta fue enviada con exito!",
      timer: 2000,
      showCancelButton: false,
      showConfirmButton: false,
    });
  };

  return (
    <Container className="vh-100">
      <Row>
        <div className="text-center mb-4">
        <h1>Formulario de Contacto</h1>
        <h5>Deje su consulta</h5>
        </div>
        <Col xs={12} md={6}>
          <Form onSubmit={enviarConsulta} className="w-100">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Juan Perez"
                required
                maxLength={25}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
                maxLength={25}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Consulta</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Escriba su consulta..."
                required
                maxLength={25}
              />
            </Form.Group>
            <div className="text-end my-2">
              <Button variant="danger" type="submit">
                Enviar
              </Button>
            </div>
          </Form>
        </Col>
        <Col xs={12} md={6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1022203025154!2d-65.20939584893898!3d-26.83670088307771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses!2sar!4v1677075274254!5m2!1ses!2sar"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-100"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
