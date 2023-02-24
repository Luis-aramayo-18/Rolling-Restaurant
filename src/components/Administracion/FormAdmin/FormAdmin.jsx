import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";

import "./formAdmin.css";

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;
const productPostUrl = process.env.REACT_APP_PRODUCT_POST_URL;
const productGetUrl = process.env.REACT_APP_PRODUCT_GET_URL;
const productPutUrl = process.env.REACT_APP_PRODUCT_PUT_URL;

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
      const response = await axios.get(
        `${baseUrl}/products/${modifyingProduct}`
      );
      setValue("formAdmin_nombre", response.data.name);
      setValue("formAdmin_categoria", response.data.categoria);
      setValue("formAdmin_urlimagen", response.data.image);
      setValue("formAdmin_precio", response.data.price);
      setValue("formAdmin_descripcion", response.data.description);
      setValue("formAdmin_disponible", response.data.isActive);
    };
    if (modifyingProduct) {
      fetchProduct();
    }
  }, [modifyingProduct, setValue]);

  const customHandleSubmit = async (data) => {
    if (modifyingProduct) {
      //Caso editar
      const response = await axios.put(
        `${baseUrl}/product/${modifyingProduct}`,
        {
          name: data.formAdmin_nombre,
          category: data.formAdmin_categoria,
          image: data.formAdmin_urlimagen,
          price: data.formAdmin_precio,
          description: data.formAdmin_descripcion,
          isActive: data.formAdmin_disponible,
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
      const response = await axios.post(`${baseUrl}/product`, {
        name: data.formAdmin_nombre,
        category: data.formAdmin_categoria,
        image: data.formAdmin_urlimagen,
        price: data.formAdmin_precio,
        description: data.formAdmin_descripcion,
        isActive: data.formAdmin_disponible,
      });

      if (response.status === 201) {
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
    <Card className="formAdminCard">
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
              {modifyingProduct ? "Editar" : "Añadir"}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormAdmin;
