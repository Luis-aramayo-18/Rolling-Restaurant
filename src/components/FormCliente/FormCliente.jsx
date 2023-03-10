import axios from 'axios';
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';


const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;
const userPostUrl = process.env.REACT_APP_POST_USER_URL;

const FormCliente = () => {

    const {register, handleSubmit,formState: { errors }}= useForm();

    const costumHandleSubmit = async (data) =>{

        const res= await axios.post(`${baseUrl}${userPostUrl}`, {
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
      <h3 className="text-light text-center mb-3">Registrate para acceder a nuestro menú 🍔🍟🍺</h3>
        <Form onSubmit={handleSubmit(costumHandleSubmit)} className='bg-light p-5 text-center rounded'>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label className='text-dark'>Nombre</Form.Label>
        <Form.Control {...register("nombre", {
                required: {
                  value: true,
                  message: "Error: Por favor complete este campo",
                },

                minLength: {
                  value: 2,
                  message: "Error: Nombre demasiado corto (2 caracteres minimo)",
                },

                maxLength: {
                  value: 20,
                  message: "Error: Nombre demasiado largo (20 caracteres maximo)",
                },

                pattern: {
                  value: /^[A-Za-z]+.*[A-Za-z]+$/,
                  message: "Error: Ingrese un nombre valido",
                },
              })} type="text" placeholder="Juan" required/>
              <p className='mt-1 fs-8 text-danger'>{errors.nombre?.message}</p>
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label className='text-dark'>Apellido</Form.Label>
        <Form.Control {...register("apellido", {
                required: {
                  value: true,
                  message: "Error: Por favor complete este campo",
                },

                minLength: {
                  value: 2,
                  message: "Error: Nombre demasiado corto (2 caracteres minimo)",
                },

                maxLength: {
                  value: 20,
                  message: "Error: Nombre demasiado largo (20 caracteres maximo)",
                },

                pattern: {
                  value: /^[A-Za-z]+.*[A-Za-z]+$/,
                  message: "Error: Ingrese un apellido valido",
                },
              })} type="text" placeholder="Perez" required/>
              <p className='mt-1 fs-8 text-danger'>{errors.apellido?.message}</p>
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label className='text-dark'>Email</Form.Label>
        <Form.Control {...register("email", {
                required: {
                  value: true,
                  message: "Error: por favor complete este campo",
                },

                minLength: {
                  value: 5,
                  message: "Error: email demasiado corto (5 caracteres minimo)",
                },

                maxLength: {
                  value: 50,
                  message: "Error: nombre demasiado largo (50 caracteres maximo)",
                },

                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Error: ingrese un email valido",
                },
              })} type="email" placeholder="juancito@gmail.com" required/>
              <p className='mt-1 fs-8 text-danger'>{errors.email?.message}</p>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label className='text-dark'>Contraseña</Form.Label>
        <Form.Control {...register("contraseña", {
                required: {
                  value: true,
                  message: "Error: por favor complete este campo",
                },

                minLength: {
                  value: 6,
                  message: "Error: contraseña demasiada corta (6 caracteres minimo)",
                },

                maxLength: {
                  value: 50,
                  message: "Error: contraseña demasiada larga (50 caracteres maximo)",
                },

                pattern: {
                  value: /(?=.*[a-z]){2}(?=.*[0-9]){2}/,
                  message: "Error: debe contener al menos 2 caracteres numericos y 2 caracteres alfabeticos",
                },
              })} type="password" placeholder="******" required/>
              <p className='mt-1 fs-8 text-danger'>{errors.contraseña?.message}</p>
        <Form.Text className="text-muted">
         Debe contener al menos 2 caracteres numéricos, 2 alfabéticos y en total tiene que tener un mínimo de 6 caracteres.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Guardar
      </Button>

    </Form>
    </Container>
    
  )
}

export default FormCliente