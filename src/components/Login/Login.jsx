import axios from '../../api/axios'
import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import jwt_decode from "jwt-decode"


const Login = () => {

  const {register, formState:{errors}, handleSubmit: handleRHF}= useForm();

  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit =  async (data)=>{
    try {
      const response = await axios().post('/login', {
        email: data.email,
        password: data.password,
      });

      if (response.status === 200) {
        setIsError(false);
        const token = response.data.token;

        sessionStorage.setItem('token', token);

        const dataDecoded = jwt_decode(token);

        let adminLogueado = dataDecoded.isAdmin;

        if(adminLogueado === true){

          Swal.fire({
            title: 'Bienvenido admin',
            timer: 2000,
            showCancelButton: false,
            showConfirmButton: false,
          }).then(()=>{
            navigate("/administracion")
            window.location.reload()
          })

        } else{

          Swal.fire({
            title: 'Bienvenido',
            timer: 2000,
            showCancelButton: false,
            showConfirmButton: false,
          }).then(()=>{
            navigate("/mesa")
            window.location.reload()
          })

        }
      }
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.response.data.message);
    }
    }
    
  return (
    <div className='formLogin vh-100 container'>
      <div className='p-4 bg-light rounded'>
            <h1 className='text-center text-dark mb-3'>Bienvenido!</h1>
            <div className='row d-flex justify-content-center align-items-center'>
            <Form className='text-center' onSubmit={handleRHF(handleSubmit)}>
              {isError && <Alert variant="danger">{errorMessage || "revise los campos"}</Alert>}

        <Form.Group>
          <Form.Label className='text-dark'>Usuario</Form.Label>
          <Form.Control
            type='email'
            placeholder='Ingrese su email'
            {...register("email", {
              required: {
                value: true,
                message: "Error: Email no puede estar vacío",
              },

              minLength: {
                value: 5,
                message: "Error: Email demasiado corto (5 caracteres min)",
              },

              maxLength: {
                value:100,
                message: "Error: Email demasiado largo (100 caracteres max)",
              },

              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Error: Ingrese un Email valido",
              },
            })}/>
            <p className='mt-1 fs-8 text-danger'>{errors.email?.message}</p>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className='text-dark'>Contraseña</Form.Label>
          <Form.Control 
            type="password"
            placeholder='Ingrese su contraseña'
            {...register("password", {
              required: {
                value: true,
                message: "Error: La contraseña no puede estar vacía",
              },

              minLength: {
                value: 4,
                message: "Error: Contraseña demasiado corta (4 caracteres min)",
              },

              maxLength: {
                value:100,
                message: "Error: Contrasea demasiado larga (100 caracteres max)",
              },

              pattern: {
                value: /(?=.*[a-z]){2}(?=.*[0-9]){2}/,
                message: "Error: debe contener por lo menos 2 letras y 2 numeros",
              },
            })}/>
            <p className='mt-1 fs-8 text-danger'>{errors.password?.message}</p>
        </Form.Group>
      
          <div className='text-center'>
            <Button className='m-2' variant="danger" type="submit" >
              Ingresar
            </Button>
            <p className="text-start p-3 text-dark">Si olvidaste tu contraseña hace click <Link className='' to="/*">aqui</Link> o <Link className='' to="/registro">Registrate</Link></p>
          </div>
         
        </Form>
        </div>
        </div>
      </div>
        
    
  )
}

export default Login
