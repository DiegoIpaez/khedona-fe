import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "../assets/logo-home.png";

const Navbarjsx = () => {
  // Login
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} className="logo-home" alt="logoDelNav" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mb-1">
              <Nav.Link eventKey={2} as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link eventKey={2} as={Link} to="/contact">
                Contacto
              </Nav.Link>
            </Nav>
            <Nav> 
              <Nav.Link eventKey={2} as={Link} to="/cart" className="pt-3" >
              <i className="fas fa-shopping-cart"></i>
              </Nav.Link>
              {/* Boton desplegable */}
              <NavDropdown
                title={<i className="fas fa-user ms-2"></i>}
                id="collasible-nav-dropdown"
                className="nav-link"
              >
                <NavDropdown.Item as={Link} to="/user" className="nav-link">
                <i className="far fa-user me-1"></i>Yo
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} className="nav-link" to="/admin">
                  Admin
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>
                  <span className="nav-link">
                    <i className="fas fa-sign-out-alt"></i> Salir
                  </span>
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
