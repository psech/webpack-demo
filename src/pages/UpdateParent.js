"use strict";

import React, { useState } from "react";
import Summary from "../components/Summary";
import ProductList from "../components/ProductList";
import { Container, Row, Col } from "react-bootstrap";

const products = [
  { ProductName: "Product 1", UnitPrice: 2, ProductId: "abc-123" },
  { ProductName: "Product 2", UnitPrice: 3, ProductId: "def-456" },
  { ProductName: "Product 3", UnitPrice: 5, ProductId: "ghi-789" },
  { ProductName: "Product 4", UnitPrice: 10, ProductId: "jkl-1011" }
];

const UpdateParent = () => {
  const [shopCard, setShopCard] = useState([]);

  const handleOrder = item => {
    const foundItem = shopCard.find(
      current => current.ProductId === item.ProductId
    );

    const updatedShopCard = foundItem
      ? shopCard.map(current =>
          current.ProductId === item.ProductId ? item : current
        )
      : shopCard.concat(item);

    setShopCard(updatedShopCard);
  };

  return (
    <Container>
      <Row>
        <Col>
          <ProductList products={products} cb={handleOrder} />
        </Col>
        <Col>
          <Summary data={shopCard} />
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateParent;
