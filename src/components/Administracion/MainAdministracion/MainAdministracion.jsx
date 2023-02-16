import React from "react";
import FormAdmin from "../FormAdmin/FormAdmin";
import TableAdmin from "../TableAdmin/TableAdmin";

const MainAdministracion = () => {
  return (
    <main className="container my-2">
      <section className="my-4 d-flex justify-content-center">
        <hr />
        <FormAdmin />
      </section>

      <div className="mt-0 pt-3">
        <TableAdmin />
      </div>
    </main>
  );
};

export default MainAdministracion;
