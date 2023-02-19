import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "./formAdmin.css";

const FormAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const customHandleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card className="formAdminCard">
      <Card.Body>
        <Card.Title className="text-dark">Añadir Producto</Card.Title>
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

            <ErrorMessage
              errors={errors}
              name="formAdmin_nombre"
              render={({ message }) => (
                <p className="text-danger text-left p-1">{message}</p>
              )}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAdminCategoria">
            <Form.Label className="text-dark">Categoria</Form.Label>
            <Form.Select
              {...register("formAdmin_categoria")}
              aria-label="Elija una categoría..."
            >
              <option value="Comidas">Comidas</option>
              <option value="Bebidas">Bebidas</option>
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
                    /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
                  message: "Error: URL incorrecta",
                },
              })}
              type="text"
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
                  value: /falta hacer/,

                  message: "Error: Formato incorrecto (Ej: 345,05)",
                },
              })}
              type="text"
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
              as="textarea"
              placeholder="Ingrese descripción del producto"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAdminDisponbible">
            <Form.Label className="text-dark">¿Está disponible?</Form.Label>
            <br />
            <Form.Label className="text-dark mx-2">Si</Form.Label>
            <Form.Check
              inline
              label="Si"
              name="rb-Disponible"
              type="radio"
              className="text-dark"
            />
            <Form.Label className="text-dark mx-2">No</Form.Label>
            <Form.Check
              inline
              label="No"
              name="rb-Disponible"
              type="radio"
              className="text-dark"
            />
          </Form.Group>

          <div className="text-end">
            <Button variant="danger" type="submit">
              Guardar
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormAdmin;
