import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "../../../api/axios";
import Swal from "sweetalert2";
import { useEffect } from "react";

import "./formAdmin.css";
import { NavLink } from "react-router-dom";

const FormAdmin = (props) => {
  const { modifyingProduct, setModifyingProduct } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios().get(`/products`);

      const product = response.data
      const productToModify = product.find(
        (element)=>element.id===modifyingProduct)

      setValue("formAdmin_nombre", productToModify.name);
      setValue("formAdmin_categoria", productToModify.categoria);
      setValue("formAdmin_urlimagen", productToModify.image);
      setValue("formAdmin_precio", productToModify.price);
      setValue("formAdmin_descripcion", productToModify.description);
    };
    if (modifyingProduct) {
      fetchProduct();
    }
  }, [modifyingProduct, setValue]);

  const customHandleSubmit = async (data) => { 
    if (modifyingProduct) {
      //Caso editar
      const response = await axios().put(
        `/product/${modifyingProduct}`,
        {
          name:data.formAdmin_nombre,
          categoria:data.formAdmin_categoria,
          image:data.formAdmin_urlimagen,
          price:data.formAdmin_precio,
          description:data.formAdmin_descripcion
        }
      );
      if (response.status === 200) {
        Swal.fire({
          title: "Operacion exitosa",
          text: "Producto editado correctamente",
          icon: "success",
          timer: 1250,
          showCancelButton: false,
          showConfirmButton: false,
        }).then(() => {
          window.location.reload();
        });
        setModifyingProduct(null);
      } else {
        Swal.fire({
          title: "Error",
          text: `Ocurrió un error al editar el producto: ${response.statusText}`,
          icon: "error",
          timer: 1250,
          showCancelButton: false,
          showConfirmButton: false,
        });
      }
    } else {
      //Caso añadir
      const response = await axios().post(`/product`, {
        name: data.formAdmin_nombre,
        category: data.formAdmin_categoria,
        image: data.formAdmin_urlimagen,
        price: data.formAdmin_precio,
        description: data.formAdmin_descripcion
      });

      if (response.status === 200) {
        Swal.fire({
          title: "Operacion exitosa",
          text: "Producto agregado correctamente",
          icon: "success",
          timer: 1250,
          showCancelButton: false,
          showConfirmButton: false,
        }).then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          title: "Error",
          text: `Ocurrió un error al guardar el producto: ${response.statusText}`,
          icon: "error",
          timer: 1250,
          showCancelButton: false,
          showConfirmButton: false,
        });
      }
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-dark">
           {modifyingProduct ? "Editar Producto" : "Añadir Producto"}
        </Card.Title>
        <hr />

        <Form onSubmit={handleSubmit(customHandleSubmit)}>

          <Form.Group className="mb-3" controlId="formAdminNombre">
            <Form.Label className="text-dark">Nombre del producto</Form.Label>
            <Form.Control
              {...register("formAdmin_nombre", {
                required: {
                  value: true,
                  message: "Error: Nombre del producto no puede estar vacío",
                },

                minLength: {
                  value: 5,
                  message: "Error: Nombre demasiado corto (5 caracteres min)",
                },

                maxLength: {
                  value: 80,
                  message: "Error: Nombre demasiado largo (80 caracteres max)",
                },

                pattern: {
                  value: /^[A-Za-z]+.*[A-Za-z]+$/,
                  message: "Error: Nombre con caracteres no permitidos",
                },
              })}
              type="text"
              placeholder="Ingrese nombre del producto"
            />
            <p className='mt-1 fs-8 text-danger'>{errors.formAdmin_nombre?.message}</p> 
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAdminCategoria">
            <Form.Label className="text-dark">Categoria</Form.Label>
            <Form.Select
              {...register("formAdmin_categoria")}
              aria-label="Elija una categoría..."
            >
              <option className="text-dark" value="Comidas">Comidas</option>
              <option className="text-dark" value="Bebidas">Bebidas</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAdminURLImagen">
            <Form.Label className="text-dark">URL de la Imagen</Form.Label>
            <Form.Control
              {...register("formAdmin_urlimagen", {
                required: {
                  value: true,
                  message: "Error: URL no puede estar vacío",
                },
                pattern: {
                  value:
                    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/,
                  message: "Error: URL incorrecta",
                },
              })}
              type="url"
              placeholder="Ingrese URL de la Imagen"
            />
            <ErrorMessage
              errors={errors}
              name="formAdmin_urlimagen"
              render={({ message }) => (
                <p className="text-danger text-left p-1">{message}</p>
              )}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAdminPrecio">
            <Form.Label className="text-dark">Precio del producto</Form.Label>
            <Form.Control
              {...register("formAdmin_precio", {
                required: {
                  value: true,
                  message: "Error: Precio no puede estar vacío",
                },
                pattern: {
                  value: /^[0-9]+.[0-9]{1,2}$/,
                  message: "Error: Formato incorrecto (Ej: 345.05)",
                },
              })}
              type="number"
              min="0"
              step="0.01"
              placeholder="Ingrese precio del producto"
            />
            <ErrorMessage
              errors={errors}
              name="formAdmin_precio"
              render={({ message }) => (
                <p className="text-danger text-left p-1">{message}</p>
              )}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAdminDescripcion">
            <Form.Label className="text-dark">
              Descripción del producto
            </Form.Label>
            <Form.Control
              {...register("formAdmin_descripcion", {
                maxLength: {
                  value: 256,
                  message: "Error: máximo de caracteres excedidos (256)",
                },
              })}
              as="textarea"
              rows="3"
              placeholder="Ingrese descripción del producto"
            />
            <ErrorMessage
              errors={errors}
              name="formAdmin_descripcion"
              render={({ message }) => (
                <p className="text-danger text-left p-1">{message}</p>
              )}
            />
          </Form.Group>

          <div className="text-end">
            <Button variant="danger" type="submit">
              {modifyingProduct ? "Editar" : "Añadir"}
            </Button>
          </div>
        </Form>
      </Card.Body>
      <hr />
      <div className="ms-3 text-center py-2">
            <NavLink to="/menu">
              <button type="button" className="bg-success rounded">
              menu
              </button>
            </NavLink>
          </div>
    </Card>
  );
};

export default FormAdmin;
