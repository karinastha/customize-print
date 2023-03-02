import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import StorefrontIcon from '@mui/icons-material/Storefront';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { Link } from "react-router-dom";



function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"> <CheckroomIcon /> Fit-Me </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Nav>
          <Nav.Link> <Link to="/">  Home</Link> </Nav.Link>
          <Nav.Link> <Link to="/product2">Products </Link>  </Nav.Link>
          <Nav.Link ><Link to="/about"> About </Link>   </Nav.Link>
          <Nav.Link ><Link to="/tshirt"> Custom </Link>   </Nav.Link>

          {/* <Nav.Link href="#homet"> Home  </Nav.Link>
          <Nav.Link href="#products">Products   </Nav.Link>
          <Nav.Link href="#about"> About    </Nav.Link> */}
          {/* <NavDropdown title="Customize Studio" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> T-shirt </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"> Caps</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;