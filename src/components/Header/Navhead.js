import React from "react";
import "./Header.css";
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
// import StorefrontIcon from '@material-ui/icons/Storefront';
// import SearchIcon from '@material-ui/icons/Search';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import SearchIcon from '@mui/icons-material/Search';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { useStateValue } from "../../context/StateProvider";

function Navhead() {
  const [{ basket }] = useStateValue();
  return (

    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <CheckroomIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle"> Fitme </h2>
        </div>
      </Link>


      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <Nav variant="dark">
        <Nav.Link > <Link to="/" style={{ textDecoration: "none", color: "white" }}>  Home</Link> </Nav.Link>
        <Nav.Link> <Link to="/product2" style={{ textDecoration: "none", color: "white" }}>Products </Link>  </Nav.Link>
        <Nav.Link ><Link to="/contact" style={{ textDecoration: "none", color: "white" }}> Contact </Link>   </Nav.Link>
        <Nav.Link ><Link to="/tshirt" style={{ textDecoration: "none", color: "white" }}> Custom </Link>   </Nav.Link>
      </Nav>


      <div className="header__nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="nav__item">
            {/* <span className="nav__itemLineOne"> <Link to="/" >  Home</Link> </span>
          <span className="nav__itemLineOne"> <Link to="/product2">Products </Link> </span>
          <span className="nav__itemLineOne"> <Link to="/contact"> Contact </Link> </span>
            <span className="nav__itemLineTwo"> <Link to="/tshirt"> Custom </Link> </span> */}
            <span className="nav__itemLineOne">  <Link to="/login" style={{ textDecoration: "none", color: "white" }}> Hello Admin</Link></span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket"> <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            <FaShoppingCart />
          </Link>
            <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>


  )
}

export default Navhead
