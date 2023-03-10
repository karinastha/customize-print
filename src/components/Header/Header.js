import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Badge, Dropdown } from 'react-bootstrap';

// import StorefrontIcon from '@mui/icons-material/Storefront';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import CheckroomIcon from '@mui/icons-material/Checkroom';


function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ backgroundColor: "white", textDecorationStyle: "unset" }}>
      <Container>
        <Navbar.Brand as={Link} to="/"> <CheckroomIcon /> Fit-Me </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Nav variant="dark">
          <Nav.Link variant="dark"> <Link to="/" >  Home</Link> </Nav.Link>
          <Nav.Link> <Link to="/product2">Products </Link>  </Nav.Link>
          <Nav.Link ><Link to="/contact"> Contact </Link>   </Nav.Link>
          <Nav.Link ><Link to="/tshirt"> Custom </Link>   </Nav.Link>
          <Nav.Link ><Link to="/loginguest"> Sign In </Link>   </Nav.Link>
          <NavDropdown title={<FaShoppingCart color="white" />} id="collasible-nav-dropdown">
            <Nav.Link ><Link to="">  <Badge> 10</Badge></Link>   </Nav.Link>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>
                Cart is Empty!
              </span>
            </Dropdown.Menu>

          </NavDropdown>

          {/* <Nav.Link ><Link to=""> <ShoppingBasketIcon /> </Link>   </Nav.Link> */}


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