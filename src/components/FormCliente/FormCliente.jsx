import axios from 'axios';
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';


const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

const FormCliente = () => {

    const {register, handleSubmit}= useForm();

    const costumHandleSubmit = async (data) =>{

        const res= await axios.post(`${baseUrl}/login`, {
          name: data.name,
          lastName: data.lastName,
          username: data.username,
          password: data.password,
          isActive: true
        });

        if (res.status === 201) {
          Swal.fire({
            title: 'Operacion exitosa',
            text: 'Usuario creado correctamente',
            icon: 'success',
            timer: 2000,
            showCancelButton: false,
            showConfirmButton: false,
          }).then(() => {
            window.location.reload();
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: `Ocurrio un error al guardar el elemento, que es: ${res.statusText} o Revise los campos`,
            icon: 'error',
            timer: 2000,
            showCancelButton: false,
            showConfirmButton: false,
          });
        }
      } 
  
  return (
    <Container className='pb-5' id='form-cliente'>
      <h3 className="text-light text-center">Registrate para acceder a nuestro menú 🍔🍟🍺</h3>
        <Form onSubmit={handleSubmit(costumHandleSubmit)} className='bg-light p-5 text-center rounded'>
        <Form.Group className="mb-3" controlId="name">
        <Form.Label className='text-dark'>Nombre</Form.Label>
        <Form.Control {...register("name", {maxLength: 20, pattern:/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/})} type="text" placeholder="Juan" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label className='text-dark'>Apellido</Form.Label>
        <Form.Control {...register("lastName", {maxLength: 30, pattern:/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/})} type="text" placeholder="Perez" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label className='text-dark'>Email</Form.Label>
        <Form.Control {...register("username", {pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/})} type="email" placeholder="juancito@gmail.com" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label className='text-dark'>Contraseña</Form.Label>
        <Form.Control {...register("password", {minLength: 6, maxLength: 8, pattern: /(?=.*[a-z]){2}(?=.*[0-9]){2}/})} type="password" placeholder="******" required/>
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