import axios from '../../api/axios'
import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import jwt_decode from "jwt-decode"


const Login = () => {

  const {register, watch, formState:{errors}, handleSubmit: handleRHF}= useForm();

  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // const [users, setUsers]= useState([]);

  //   useEffect(()=>{
  //       const usersFetch= async ()=>{
  //           const data = await axios.post(`/login`);
  //           setUsers(data.data);
  //       };
  //       usersFetch();
  //   }, []);


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
        console.log(adminLogueado)

        if(adminLogueado === true){

          Swal.fire({
            title: 'Bienvenido admin',
            timer: 2000,
            showCancelButton: false,
            showConfirmButton: false,
          }).then(()=>{
            navigate("/administracion")
          })

        } else{

          Swal.fire({
            title: 'Bienvenido',
            timer: 2000,
            showCancelButton: false,
            showConfirmButton: false,
          }).then(()=>{
            navigate("/menu")
          })

        }
      }
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.response.data.message);
    }

    // console.log(data)
    // //tengo que traer usuarios y admin de BD
    // const response = await axios.post('/login', {
    //   username: data.email,
    //   password: data.password,
    // });

    // // const pruebaAdmin = users.filter(elemento => elemento.username === data.username && elemento.password === data.password);
    
    // if(pruebaAdmin.length !== 0){
    //   if(pruebaAdmin[0].username === "admin@admin.com" && pruebaAdmin[0].password === "abc123"){
        
    //     Swal.fire({
    //     title: 'Bienvenido',
    //     timer: 2000,
    //     showCancelButton: false,
    //     showConfirmButton: false,
    //   })
    //   navigate("/administracion")
    //   }else if(pruebaAdmin[0].username === data.username && pruebaAdmin[0].password === data.password){
    //     Swal.fire({
    //                 title: 'Bienvenido',
    //                 text: 'Recordá elegir tu mesa antes de realizar el pedido 😋',
    //                 timer: 4000,
    //                 showCancelButton: false,
    //                 showConfirmButton: false,
    //               })
                  
    //               navigate("/menu")
    //   }}
    //   else{
    //     Swal.fire({
    //       title: 'Lo sentimos!',
    //       text: 'Los datos son incorrectos',
    //       icon: 'error',
    //       timer: 2000,
    //       showCancelButton: false,
    //       showConfirmButton: false,
    //     })
        
    //   }
    }
    
  return (
    <div className='formLogin vh-100 container mb-3'>
      
      <div className='p-5 bg-dark rounded'>
            <h1 className='text-center'>Bienvenido!</h1>
            <div>
            <Form onSubmit={handleRHF(handleSubmit)}>
              {isError && <Alert variant="danger">{errorMessage || "revise los campos"}</Alert>}

        <Form.Group>
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type='email'
            {...register('email', { required: true, pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, maxLength:100, minLength:5 })}/>
            {errors.email && <span>Por favor ingrese un Email valido, no puede ser menor a 5 caracteres</span>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control 
            type="password"
            {...register('password', { required: true, pattern:/(?=.*[a-z]){3}(?=.*[0-9]){3}/, minLength:8 })}/>
            {errors.password && <span>Por favor ingrese una contraseña que contenga al menos 2 numero y 2 letras</span>}
        </Form.Group>
      
          <div className='text-center mb-3'>
            <Button className='mt-2' variant="primary" type="submit">
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