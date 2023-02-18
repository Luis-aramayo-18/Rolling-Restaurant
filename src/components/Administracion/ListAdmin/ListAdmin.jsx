import React from "react";
import { Button } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const ListAdmin = () => {
  return (
    <div className="container bg-dark">
      <h3 className="text-light">Productos Cargados</h3>
      <section className="my-4 d-flex justify-content-center">
        <table class="table">
          <thead className="text-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Imagen (url)</th>
              <th scope="col">Precio</th>
              <th scope="col">Descripción</th>
              <th scope="col">Editar/Borrar</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-light">
              <th scope="row">1</th>
              <td>Burger1</td>
              <td>http://...</td>
              <td>$551</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td><Button className="bg-dark border-dark">
                <FiEdit2/>
                </Button>
                <Button className="bg-dark border-dark" >
                <RiDeleteBin6Line/>
                </Button>
                </td>
        
            </tr>
            <tr className="text-light">
              <th scope="row">2</th>
              <td>Burger2</td>
              <td>http://...</td>
              <td>$542</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td><Button className="bg-dark border-dark" >
                <FiEdit2/>
                </Button>
                <Button className="bg-dark border-dark" >
                <RiDeleteBin6Line/>
                </Button>
                </td>
            </tr>
            <tr className="text-light">
              <th scope="row">3</th>
              <td>Burger3</td>
              <td>http://...</td>
              <td>$45</td> 
              <td>Lorem ipsum dolor sit amet.</td> 
              <td><Button className="bg-dark border-dark">
                <FiEdit2/>
                </Button>
                <Button className="bg-dark border-dark">
                <RiDeleteBin6Line/>
                </Button>
                </td>
            </tr>

          </tbody>
        </table>
      </section>
     
    </div>
  
  );
};

export default ListAdmin;
