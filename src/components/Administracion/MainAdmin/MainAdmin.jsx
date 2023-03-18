import { useState } from "react";
import { Container } from "react-bootstrap";
import FormAdmin from "../FormAdmin/FormAdmin";
import TableAdmin from "../TableAdmin/TableAdmin";
import "./mainAdmin.css";

const MainAdmin = () => {
  const [modifyingProduct, setModifyingProduct] = useState(null);
  return (
    <Container className="mainAdmin">
      <h1 className="text-center">Panel de Administración</h1>
      <hr />
      <FormAdmin modifyingProduct={modifyingProduct} setModifyingProduct={setModifyingProduct} />
      <TableAdmin setModifyingProduct={setModifyingProduct} />
    </Container>
  );
};

export default MainAdmin;  
