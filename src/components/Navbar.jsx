import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/tips" className="nav-link">Tips & Guides</Link>
      <Link to="/trends" className="nav-link">Trends & News</Link>
      <Link to="/skin-types" className="nav-link">Skin Types</Link>
    </nav>
  );
};

export default Navbar;
