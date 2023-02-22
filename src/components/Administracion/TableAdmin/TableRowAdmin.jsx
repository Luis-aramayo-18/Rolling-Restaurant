import axios from "axios";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;
const productDeleteUrl = process.env.REACT_APP_PRODUCT_DELETE_URL;

const TableRowAdmin = (props) => {
  const {
    id,
    name,
    category,
    image,
    price,
    description,
    isActive,
    setModifyingProduct,
  } = props;
  const handleEdit = () => {
    setModifyingProduct(id);
  };
  const handleDelete = () => {
    Swal.fire({
      title: "Eliminar",
      text: `¿Desea eliminar ${name}?`,
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
    }).then(async (response) => {
      if (response.isConfirmed) {
        const response = await axios.delete(
          `${baseUrl}${productDeleteUrl}/${id}`
        ); //Cambiar products por product para que coincida con la ruta del backend.

        if (response.status === 200) {
          Swal.fire({
            title: "Operacion exitosa",
            text: "Producto borrado correctamente",
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
            text: `Ocurrió un error al borrar el producto: ${response.statusText}`,
            icon: "error",
            timer: 1250,
            showCancelButton: false,
            showConfirmButton: false,
          });
        }
      }
    });
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <img className="img_table" src={image} alt={name} />
      </td>
      <td>{price}</td>
      <td>{description}</td>
      <td>{isActive}</td>
      <td>
        <Button variant="primary" className="me-1" onClick={handleEdit}>
          {" "}
          Editar
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default TableRowAdmin;
