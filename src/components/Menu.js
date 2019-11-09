import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Menu() {
  return (
  	<Navbar bg="dark" variant="dark" style={{marginBottom: '30px'}}>
      <Navbar.Brand >E-commerce</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/">Envio de Productos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
