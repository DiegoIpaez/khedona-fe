import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "../assets/logo-home.png";

const Navbarjsx = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="logo-home" alt="logoDelNav" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mb-1">
              <Nav.Link eventKey={2} href="#memes">
                Inicio
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Contacto
              </Nav.Link>
            </Nav>
            <Nav className="mb-1">
              <Nav.Link eventKey={2} href="#memes">
                Carrito
              </Nav.Link>
              {/* Boton desplegable */}
              <NavDropdown title="Usuario" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarjsx;
