"use strict";

import React from "react";
import Product from "./Product";

const ProductList = ({ products, cb }) => {
  return products.map((product, idx) => (
    <Product key={idx} data={product} cb={cb} />
  ));
};

export default ProductList;
