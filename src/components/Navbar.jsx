import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import CarritoContext from "../components/CarritoContext"
import logoHome from "../assets/logo-home.png";

const Navbarjsx = () => {
  const { carrito } = useContext(CarritoContext)
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
            <img src={logoHome} className="logo-home" alt="logoDelNav" />
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
              <Nav.Link eventKey={2} as={Link} to="/cart" className="pt-3 ps-1" >
              <i className="fas fa-shopping-cart"></i>{carrito?.total !== 0 && (
											<b>
												<span style={{ fontWeight:"400", fontSize:"20px" }}>
													{" "}{carrito.total} <span> | </span>
													<span>$</span>
													{carrito.costo}
												</span>
											</b>
										)}
              </Nav.Link>
              {/* Boton desplegable */}
              <NavDropdown
                title={<i className="fas fa-user ms-2"></i>}
                id="collasible-nav-dropdown"
                className="nav-link"
              >
                <NavDropdown.Item as={Link} to="/user" className="nav-link droopdown-nav ps-2">
                <i className="far fa-user me-1"></i> MiCuenta
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} className="nav-link droopdown-nav ps-2" to="/admin">
                <i className="fas fa-cogs"></i> Admin
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>
                  <span className="nav-link droopdown-nav">
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
