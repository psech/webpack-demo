"use strict";

import React, { useState } from "react";
import Summary from "../components/Summary";
import ProductList from "../components/ProductList";
import { Container, Row, Col, Button } from "react-bootstrap";

const products = [
  { ProductName: "Product 1", UnitPrice: 2, ProductId: "abc-123" },
  { ProductName: "Product 2", UnitPrice: 3, ProductId: "def-456" },
  { ProductName: "Product 3", UnitPrice: 5, ProductId: "ghi-789" },
  { ProductName: "Product 4", UnitPrice: 10, ProductId: "jkl-1011" }
];

const UpdateParent = () => {
  const [shopCart, setShopCart] = useState([]);

  const handleOrder = item => {
    const foundItem = shopCart.find(
      current => current.ProductId === item.ProductId
    );

    const updatedShopCard = foundItem
      ? shopCart.map(current =>
          current.ProductId === item.ProductId ? item : current
        )
      : shopCart.concat(item);

    setShopCart(updatedShopCard);
  };

  return (
    <Container>
      <Row>
        <Col>
          <ProductList products={products} cb={handleOrder} />
        </Col>
        <Col>
          <Summary data={shopCart} />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg="2">
          <Button variant="success" size="sm" block>
            Confirm
          </Button>
        </Col>
        <Col lg="2">
          <Button
            variant="danger"
            size="sm"
            block
            onClick={() => window.location.reload(false)}
          >
            Reset
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateParent;
