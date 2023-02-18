import React from "react";
import FormAdmin from "../FormAdmin/FormAdmin";
import ListAdmin from "../ListAdmin/ListAdmin";
import "./mainAdmin.css";

const MainAdmin = () => {
  return (
    <div className="mainAdmin">
      <FormAdmin />
      <ListAdmin />
    </div>
  );
};

export default MainAdmin;
