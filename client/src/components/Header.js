import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => (
  <>
    <Navbar className="header">
      <Nav className="mr-auto">
        <Nav.Link href="/search">Search</Nav.Link>
        <Nav.Link href="/saved">Saved</Nav.Link>
      </Nav>
      <br />
      <br />
      </Navbar>
      <br />
  </>
);

export default Header;