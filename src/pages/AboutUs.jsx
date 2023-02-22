import { Container } from "react-bootstrap";
import React from "react";
import Integrante from "../components/AboutUs/Integrante";

export const AboutUs = () => {
  return (
    <Container>

      <div className="text-center mb-3">
        <h1 className="text-danger mt-3">DevsFood</h1>
        <h5>
          DevsFood nace como todo negocio, pequeño, pero con tremendas ganas de
          crecer, y lo haremos ofreciéndote las mejores hamburguesas de Tucumán.
          Si no nos conoces, queremos que lo hagas a través del sabor de
          nuestras hamburguesas. Todos sabemos que se preparan a la plancha. Sin
          embargo, en DevsFood le agregamos los principales ingredientes: mucho
          amor y dedicación. Nos esmeramos para que estén a la altura de tus
          expectativas. Vení y disfrutá! Aquí estaremos, cerca, como vecinos.
        </h5>
      </div>

      <Container className="d-flex flex-wrap justify-content-center mb-2">
        <div className="m-2">
        <img className="img-fluid rounded" src="./img/imgAboutUs/foto de hamburguesa.jpg" alt="chef" />
        </div>
        <div className="m-2">
        <img className="img-fluid rounded" src="./img/imgAboutUs/chef3.png" alt="chef" />
        </div>
      </Container>

        <h3 className="text-center">Nuestro equipo</h3>
        <hr />
      <div className="d-flex mb-2 flex-wrap justify-content-center gap-3">
        <Integrante nombre="Paula Bejarano" imagenURL="/img/imgAboutUs/pau.png"/>
        <Integrante nombre="Luis Aramayo" imagenURL="/img/imgAboutUs/Luis.jpg"/>
        <Integrante nombre="Leonardo Zurita" imagenURL="/img/imgAboutUs/leo.jpg"/>
        <Integrante nombre="Jenny González" imagenURL="/img/imgAboutUs/Jenny.png"/>
        <Integrante nombre="Fabiana Ibañez" imagenURL="/img/imgAboutUs/Fabi.png"/>
        <Integrante nombre="Felix Diaz" imagenURL="/img/imgAboutUs/Felix.jpg"/>
      </div>
    </Container>
  );
};
export default AboutUs;
