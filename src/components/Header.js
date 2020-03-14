import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import danetLogo from "../public/Danet_Logo_SVG.svg";

const Header = () => {
  return (
    <Navbar sticky="top" bg="light" variant="light">
      <Navbar.Brand href="/">
        <img src={danetLogo} height="30" alt="Danet" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/page1">Page 1</Nav.Link>
          <Nav.Link href="/page2">Page 2</Nav.Link>
          <Nav.Link href="/page-hooks">Page Hooks</Nav.Link>
          <Nav.Link href="/update-parent">Update Parent</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
