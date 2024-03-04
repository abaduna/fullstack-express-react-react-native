import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink } from "react-router-dom"
import "./NavBar.css"
const NavBar = () => {
  return <Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand href="home">Ventas</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link ><NavLink to="/" >Home</NavLink></Nav.Link>
        <Nav.Link ><NavLink to="/uploadingSale" >Subir venta</NavLink></Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
};

export default NavBar;
