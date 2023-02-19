import React from "react";
import { Col, Row } from "react-bootstrap";
import ItemAdmin from "../ItemAdmin/ItemAdmin";

const fakeArray = [{
  id:1,
  nombre:"producto 1",
  categoria:"comidas",
  url_imagen: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/08/hamburguesa-2028707.jpg?tf=1200xgoogle.com/jpg",
  precio: 23.23,
  descripcion: "blabla",
  disponible:"si",
}, {
  id:2,
  nombre:"producto 1",
  categoria:"comidas",
  url_imagen: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/08/hamburguesa-2028707.jpg?tf=1200x",
  precio: 23.23,
  descripcion: "blabla",
  disponible:"si",
}, {
  id:3,
  nombre:"producto 1",
  categoria:"comidas",
  url_imagen: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/08/hamburguesa-2028707.jpg?tf=1200x",
  precio: 23.23,
  descripcion: "blabla",
  disponible:"si",
}, {
  id:4,
  nombre:"producto 1",
  categoria:"comidas",
  url_imagen: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/08/hamburguesa-2028707.jpg?tf=1200x",
  precio: 23.23,
  descripcion: "blabla",
  disponible:"si",
}, {
  id:5,
  nombre:"producto 1",
  categoria:"comidas",
  url_imagen: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/08/hamburguesa-2028707.jpg?tf=1200x",
  precio: 23.23,
  descripcion: "blabla",
  disponible:"si",
}, {
  id:6,
  nombre:"producto 1",
  categoria:"comidas",
  url_imagen: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/08/hamburguesa-2028707.jpg?tf=1200x",
  precio: 23.23,
  descripcion: "blabla",
  disponible:"si",
}];



const ListAdmin = () => {
  return (
    <Row>
      {fakeArray.map((elemento) => {
        return (
          <Col xs={12} md={4} lg={3} key={elemento.id} className="p-2">
            <ItemAdmin  {...elemento}/>
          </Col>
        );
      })}
    </Row>
  );
};

export default ListAdmin;
