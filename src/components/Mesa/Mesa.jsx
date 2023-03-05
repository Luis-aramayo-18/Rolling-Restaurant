import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'



const Mesa = () => {

    const {register, formState:{errors}, handleSubmit:handleRHF} = useForm()
    const navigate = useNavigate()

    const handleSubmit = (data)=> {
        console.log(data)

        const numMesa = data.numMesa
        localStorage.setItem("mesa",numMesa)

        Swal.fire({
            title: 'Disfrute nuestro menu',
            timer: 2000,
            showCancelButton: false,
            showConfirmButton: false,
          }).then(()=>{
            navigate("/menu")
          })
    }

  return (
    <div className='container'>

        <p className='text-center'>Por favor seleccione una mesa</p>
        <hr />

        <div className='row d-flex justify-content-center align-items-center'>
        <Form onSubmit={handleRHF(handleSubmit)} className='mt-3 mb-5 w-50'>

        <Form.Group>
        <Form.Label>mesa :</Form.Label>
        <Form.Select {...register("numMesa",{ required: {
            value: true,
            message: "Error: Por favor seleccione una mesa"
        }})}>
            <option className='text-dark' value="1">1</option>
            <option className='text-dark' value="2">2</option>
            <option className='text-dark' value="3">3</option>
            <option className='text-dark' value="4">4</option>
            <option className='text-dark' value="5">5</option>
            <option className='text-dark' value="6">6</option>
            <option className='text-dark' value="7">7</option>
            <option className='text-dark' value="8">8</option>
            <option className='text-dark' value="9">9</option>
        </Form.Select>
        <p className='mt-1 fs-8 text-danger'>{errors.mesa?.message}</p>
        </Form.Group>

        <div className='text-end mt-2'>
        <Button className="btn-sm" variant="primary" type="submit">Continuar</Button>
        </div>
        </Form>
        </div>

    </div>
  )
}

export default Mesa