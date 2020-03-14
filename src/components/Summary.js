"use strict";

import React from "react";
import { Table } from "react-bootstrap";

const Summary = ({ data }) => {
  const total = data.reduce(
    (total, product) => total + product.UnitPrice * product.quantity,
    0
  );

  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Unit Price</th>
        </tr>
      </thead>
      <tbody>
        {data
          .filter(d => d.quantity > 0)
          .sort((a, b) => a.ProductName.localeCompare(b.ProductName))
          .map((d, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{d.ProductName}</td>
              <td>{d.quantity}</td>
              <td>{d.UnitPrice.toFixed(2)}</td>
            </tr>
          ))}
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>
            <strong>Total:</strong>
          </td>
          <td>
            <strong>${total.toFixed(2)}</strong>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Summary;
