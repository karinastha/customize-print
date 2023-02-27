import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"> Design-Me </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Nav>
          <Nav.Link href="#"> Home </Nav.Link>
          <Nav.Link href="#memes"> Products </Nav.Link>
          <Nav.Link href="#memes"> About  </Nav.Link>
          <NavDropdown title="Customize Studio" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> T-shirt </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"> Caps</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>

      </Container>
    </Navbar>
  );
}

export default Header;