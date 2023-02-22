import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const baseUrl = process.env.REACT_APP_POST_LOGIN_URL;

const Login = () => {

  const {register, handleSubmit: handleRHF}= useForm();

  const navigate = useNavigate();

  const [users, setUsers]= useState([]);

    useEffect(()=>{
        const usersFetch= async ()=>{
            const data = await axios.get(`${baseUrl}/login`);
            setUsers(data.data);
        };
        usersFetch();
    }, []);


  const handleSubmit = (data)=>{
    console.log(data)
    //tengo que traer usuarios y admin de BD
    const pruebaAdmin = users.filter(elemento => elemento.username === data.username && elemento.password === data.password);
    
    if(pruebaAdmin.length !== 0){
      if(pruebaAdmin[0].username === "admin@admin.com" && pruebaAdmin[0].password === "abc123"){
        
        Swal.fire({
        title: 'Bienvenido',
        timer: 2000,
        showCancelButton: false,
        showConfirmButton: false,
      })
      navigate("/administracion")
      }else if(pruebaAdmin[0].username === data.username && pruebaAdmin[0].password === data.password){
        Swal.fire({
                    title: 'Bienvenido',
                    text: 'Recordá elegir tu mesa antes de realizar el pedido 😋',
                    timer: 4000,
                    showCancelButton: false,
                    showConfirmButton: false,
                  })
                  
                  navigate("/menu")
      }}
      else{
        Swal.fire({
          title: 'Lo sentimos!',
          text: 'Los datos son incorrectos',
          icon: 'error',
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false,
        })
        
      }
    }
    
  return (
    <div className='formLogin vh-100 container'>
      
      <div className='p-5 bg-danger rounded'>
            <h1 className='text-center'>Bienvenido!</h1>
            <div>
            <Form onSubmit={handleRHF(handleSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="email" {...register("username", {pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/})} placeholder="Ingresa tu usuario" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" {...register("password", {minLength: 6, maxLength: 8, pattern: /(?=.*[a-z]){2}(?=.*[0-9]){2}/})} placeholder="Máximo de 8 caracteres" required />
          </Form.Group>
      
          <div className='text-center mb-3'>
            <Button className='mt-2' variant="secondary" type="submit">
              Ingresar
            </Button>
          </div>
      
        </Form>
            </div>
        <p>Si olvidaste tu contraseña hace click <Link className='text-light' to="/*">aqui</Link> o <Link className='text-light' to="/registro">Registrate</Link></p>
      </div>
    </div>
        
    
  )
}

export default Login