import React from "react";
import { Form } from "react-bootstrap";

const FormAdmin = () => {
  return (
    <div className="row col-xl-6 col-sm-12 ">
      <h1>Cargar Producto</h1>
      <hr />
      <section className="bg-transparent container text-light py-3 rounded ">
        <Form id="formAdmin">
          <div className="mt-3">
            <label for="nombreProducto">Nombre del producto</label>
            <input
              maxlength="50"
              minlength="1"
              type="text"
              className="form-control"
              id="nombreProducto"
              placeholder="Ej: Papas Fritas"
            />
          </div>
          <div className="mt-3">
            <label for="urlImagen">URL de la imagen</label>
            <input
              maxlength="50"
              minlength="1"
              type="text"
              className="form-control"
              id="urlImagen"
              placeholder="http://..."
            />
          </div>

          <div className="mt-3">
            <label for="precio">Precio</label>
            <input
              maxlength="50"
              minlength="1"
              type="text"
              className="form-control"
              id="precio"
              placeholder="Ej: $50"
            />
          </div>

          <div className="mb-3 mt-3">
            <label for="descripcion" className="form-label">
              Descripción básica
            </label>
            <textarea
              className="form-control"
              id="descripcion"
              rows="3"
            ></textarea>
          </div>

          <div className="mb-3 mt-3">
            <label for="disponible" className="form-label">
              ¿Está disponible?
            </label>
            <Form.Check type="switch" id="disponible" label="Si" />
          </div>

          <div className="text-end mt-3">
            <button id="buttonCargar" className="btn btn-danger" type="submit">
              Cargar
            </button>
            <hr className="mt-4" />
          </div>
        </Form>
      </section>
    </div>
  );
};

export default FormAdmin;
