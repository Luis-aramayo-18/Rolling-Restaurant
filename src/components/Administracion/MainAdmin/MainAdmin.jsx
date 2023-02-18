import React from "react";
import FormAdmin from "../FormAdmin/FormAdmin";
import ListAdmin from "../ListAdmin/ListAdmin";

const MainAdmin = () => {
  return (
    <main className="container my-2">
      <section className="my-4 d-flex justify-content-center">
        <hr />
        <FormAdmin />
      </section>

      <div className="mt-0 pt-3">
        <ListAdmin />
      </div>
    </main>
  );
};

export default MainAdmin;
