import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import "./login.css"

const Login = () => {
  return (
    <div className='formLogin vh-100 container'>
      
      <div className='p-5 bg-danger rounded'>
            <h1>INICIA SESIÓN</h1>
            <div>
            <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Máximo de 8 caracteres" />
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