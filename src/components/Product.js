"use strict";

import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import NumericInput from "react-numeric-input";
NumericInput.style.input.maxWidth = "100px";

const Product = ({ data, cb: parentCallback }) => {
  const handleChange = quantity => {
    const newProductDetails = { ...data, quantity };

    parentCallback(newProductDetails);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl placeholder={data.ProductName} disabled />
      <InputGroup.Append>
        <InputGroup.Text>${data.UnitPrice.toFixed(2)}</InputGroup.Text>
        <NumericInput
          min={0}
          placeholder={0}
          step={1}
          mobile
          className="form-control"
          onChange={handleChange}
        />
      </InputGroup.Append>
    </InputGroup>
  );
};

export default Product;