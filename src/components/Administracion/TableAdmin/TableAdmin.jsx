import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TableRowAdmin from "./TableRowAdmin";
import "./tableRowAdmin.css";

const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;
const productsGetUrl = process.env.REACT_APP_PRODUCTS_GET_URL;

const TableAdmin = (props) => {
  const { setModifyingProduct } = props;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await axios.get(`${baseUrl}${productsGetUrl}`);
      setItems(data.data);
    };
    fetchItems();
  }, []);

  return (
    <Table striped hover responsive className="mt-5 rounded" variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Categoría</th>
          <th>Imagen</th>
          <td>Precio</td>
          <td>Descripción</td>
          <td>Disponible</td>
          <td>Acciones</td>
        </tr>
      </thead>
      <tbody>
        {items.map((elemento) => {
          return (
            <TableRowAdmin
              setModifyingProduct={setModifyingProduct}
              key={elemento.id}
              {...elemento}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableAdmin;
