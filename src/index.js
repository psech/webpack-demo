"use strict";

import App from "./components/App";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import ReactDom from "react-dom";

const wrapper = document.getElementById("container");
if (wrapper) {
  ReactDom.render(<App />, wrapper);
}
