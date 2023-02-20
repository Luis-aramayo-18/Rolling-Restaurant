import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";

import "./formAdmin.css";

const baseUrl = process.env.REACT_APP_BASE_URL;

const FormAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const customHandleSubmit = async (data) => {
    await axios.post(`${baseUrl}/product`, {
      name: data.formAdmin_nombre,
      category: data.formAdmin_categoria,
      image: data.formAdmin_urlimagen,
      price: data.formAdmin_precio,
      decription: data.formAdmin_descripcion,
      isActive: data.formAdmin_disponible,
    });
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

          <Form.Group className="mb-3" controlId="formAdminDisponible">
            <Form.Label className="text-dark">¿Está disponible?</Form.Label>
            <Form.Select
              {...register("formAdmin_disponible")}
              aria-label="Elija una opción..."
            >
              <option value="si">Si</option>
              <option value="no">No</option>
            </Form.Select>
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
