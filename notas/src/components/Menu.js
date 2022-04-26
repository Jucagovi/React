import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
  /* Integración menús Bootstarp con react-router-dom
    ->  Hay que utilizar el atributo as={NavLink} àra que funcione como un objeto de react-router-dom,
        pero aplicando los estilos de Bootstrap.
    */
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Notas App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/addnota">
              Discentes
            </Nav.Link>
            <NavDropdown title="Prácticas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Informe resumen
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Inserción de notas
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Evaluaciones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Informe resumen
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Revisar prácticas
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Herramientas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Administrar prácticas
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/discentes">
                Administrar discentes
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/modulos">
                Administrar módulos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/acercade">
                Acerca de...
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
