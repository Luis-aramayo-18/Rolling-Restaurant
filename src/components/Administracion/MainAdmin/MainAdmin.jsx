import React from "react";
import { Container } from "react-bootstrap";
import FormAdmin from "../FormAdmin/FormAdmin";
import ListAdmin from "../ListAdmin/ListAdmin";
import "./mainAdmin.css";

const MainAdmin = () => {
  return (
    <div className="mainAdmin">
      <FormAdmin />
      <Container className="my-5">
        <ListAdmin />
      </Container>
    </div>
  );
};

export default MainAdmin;
