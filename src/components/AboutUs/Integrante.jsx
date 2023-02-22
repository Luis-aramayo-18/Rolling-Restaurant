import React from "react";

const Integrante = (props) => {
  const { imagenURL, nombre } = props;

  return (
    <div>
      <img
        className="integrantes"
        src={imagenURL}
        alt={`${nombre} Integrante`}
      />
      <h5 className="text-center">{nombre}</h5>
    </div>
  );
};

export default Integrante;
