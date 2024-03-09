import React from "react";
import logo from "../../Assets/Main-logo.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Nav-main">
      <div className="Nav-logo">
        <img src={logo} alt="App-Logo" />
      </div>
      <div className="Nav-items">
        <ul>
          <Link to="home" className="link">
            <li>Home</li>
          </Link>
          <Link to="about" className="link">
            <li>About</li>
          </Link>
          <li>Contact</li>
          <li>
            <ShoppingCartIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
