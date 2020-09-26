import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const AppNavbar = ({ containerized }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="nav-transparent nav-tall">
      { containerized ? <Container>{navContent()}</Container> : navContent() }
    </Navbar>
  );
};

const navContent = () => {
  return (
  <React.Fragment>
    <Navbar.Brand href="#home">Boulder Bike Tour</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </React.Fragment>
  )
};

export default AppNavbar;
