import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'

import "./formCliente.css"

const FormCliente = (props) => {
    
  
    const {clientes, changeClientsList}= props;

    const {register, handleSubmit}= useForm();

    const costumHandleSubmit = (data) =>{
        // console.log(data);
        // console.log(clientes)

        const newClient= {
          nombre: data.nombre,
          apellido: data.apellido,
          email: data.email
        }

        changeClientsList([...clientes,newClient]);
        
      }
  //     let templateParams = {
  //       from_name: 'DevsFood',
  //       username: nombre,
  //       message: "Deseamos que tengas una linda experiencia",
  //       destinatario: email
  //   };
   
  // const enviarMail=()=>{

  //   emailjs.send('service_jtx466k', 'template_7nlfgvf', templateParams)
  //       .then(function(response) {
  //          console.log('SUCCESS!', response.status, response.text);
  //       }, function(error) {
  //          console.log('FAILED...', error);
  //       });
  // }

  return (
    <Container className='pb-5' id='form-cliente'>
      <h3 className="text-light text-center">Registrate para acceder a nuestro menú 🍔🍟🍺</h3>
        <Form onSubmit={handleSubmit(costumHandleSubmit)} className='bg-light p-5 text-center rounded'>
        <Form.Group className="mb-3" controlId="name">
        <Form.Label className='text-dark'>Nombre</Form.Label>
        <Form.Control {...register("nombre", {maxLength: 20, pattern:/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/})} type="text" placeholder="Juan" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label className='text-dark'>Apellido</Form.Label>
        <Form.Control {...register("apellido", {maxLength: 30, pattern:/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/})} type="text" placeholder="Perez" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label className='text-dark'>Email</Form.Label>
        <Form.Control {...register("email", {pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/})} type="email" placeholder="juancito@gmail.com" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label className='text-dark'>Contraseña</Form.Label>
        <Form.Control {...register("password")} type="password" placeholder="******" required/>
        <Form.Text className="text-muted">
         Debe contener al menos 2 caracteres numéricos, 2 alfabéticos y en total tiene que tener un mínimo de 6 caracteres.
        </Form.Text>
      </Form.Group>
      <Button variant="danger" type="submit">
        Guardar
      </Button>
    </Form>
    </Container>
    
  )
}

export default FormCliente