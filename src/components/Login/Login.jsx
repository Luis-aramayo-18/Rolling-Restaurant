import axios from '../../Api/axios'
import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import "./login.css"

const Login = () => {

  const { handleSubmit: handleRHF } = useForm();

  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (data) => {
    try {
      const response = await axios.post('/login', {
        user: data.user,
        password: data.password,
      });

      if (response.status === 200) {
        setIsError(false);
        const token = response.data.token;

        sessionStorage.setItem('token', token);

        Swal.fire({
          title: 'Bienvenido',
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false,
        }).then(() => {
          navigate('/admin');
        });
      }
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className='formLogin vh-100 container'>
      
      <div className='p-5 bg-danger rounded'>
            <h1>INICIA SESIÓN</h1>
            <div>
            <Form onSubmit={handleRHF(handleSubmit)}>
            {isError && (
        <Alert variant='danger'>{errorMessage || 'Revise los campos'}</Alert>
      )}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control  type="email" placeholder="Ingresa tu email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control  type="password" placeholder="Máximo de 8 caracteres" />
          </Form.Group>
      
          <div className='text-center mb-3'>
            <Button className='mt-2' variant="secondary" type="submit">
              Ingresar
            </Button>
          </div>
      
        </Form>
            </div>
        <p>Si olvidaste tu contraseña hace click <Link to="/*">aqui</Link> o <Link to="/registro">Registrate</Link></p>
      </div>
    </div>
        
    
  )
}

export default Login