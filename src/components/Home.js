import React, { useEffect, useState } from "react";
import Product from "./Product";
import {
  Container,
  Alert,
  Row,
  Spinner,
  Accordion,
  Card,
  Button
} from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const requestOptions = {
        method: "GET",
        // url:
        //   "https://fp4vid2tef.execute-api.ap-southeast-2.amazonaws.com/prod/products/available",
        url: "http://localhost:8080/root",
        headers: {
          "x-api-key": "zteYeOxgRB9P9vi1GGy2862qUdja3TIp75URlb1h"
        }
      };

      try {
        const response = await axios.request(requestOptions);
        const productGroups = response.data.ProductGroups;

        setProducts(productGroups);
      } catch (error) {
        setProducts(null);
      }
    })();
  }, []);

  if (!products) {
    return (
      // TODO: Remove style
      <Alert variant="danger" style={{ width: "100%" }}>
        Sorry, something went wrong.
      </Alert>
    );
  }

  if (products.length === 0) {
    return <Spinner animation="grow" />;
  }

  return (
    <Container>
      <Row>
        <Alert variant="info" style={{ width: "100%" }}>
          Please provide API Key.
        </Alert>
      </Row>
      <Accordion>
        {products.map((group, idx) => (
          <Card key={group.GroupId}>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey={idx}>
              {group.GroupName || "Other"}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={idx}>
              {/* TODO: Remove style */}
              <ul style={{ marginTop: "20px", marginRight: "40px" }}>
                {group.Products.map(product => (
                  <Product key={product.ProductId} data={product} />
                ))}
              </ul>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </Container>
  );
};

export default Home;
