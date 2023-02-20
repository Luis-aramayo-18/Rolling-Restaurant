import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ItemAdmin from "../ItemAdmin/ItemAdmin";

const baseUrl = process.env.REACT_APP_BASE_URL;

const ListAdmin = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await axios.get(`${baseUrl}/items`);
      setItems(data.data);
    };
    fetchItems();
  }, []);

  return (
    <Row>
      {items.map((elemento) => {
        return (
          <Col xs={12} md={4} lg={3} key={elemento.id} className="p-2">
            <ItemAdmin {...elemento} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ListAdmin;
