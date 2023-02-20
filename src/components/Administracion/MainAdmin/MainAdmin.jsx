import React from "react";
import { Container } from "react-bootstrap";
import FormAdmin from "../FormAdmin/FormAdmin";
import ListAdmin from "../ListAdmin/ListAdmin";
import "./mainAdmin.css";

const MainAdmin = () => {
  return (
    <Container className="mainAdmin">
      <h1 className="text-center">Panel de Administración</h1>
      <hr />
      <FormAdmin />
      <Container className="my-5">
        <ListAdmin />
      </Container>
    </Container>
  );
};

export default MainAdmin;
