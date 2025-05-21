import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div
        className="logo"
        style={{
          display: "flex",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "x-large",
          color: "#112D4E",
        }}
      >
        <img
          src="/logoskintalk.png" 
          alt="Logo"
          style={{ height: "30px", marginRight: "10px" }}
        />
        Skintalk
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/tips" className="nav-link">Tips & Guides</Link>
        <Link to="/trends" className="nav-link">Trends & News</Link>
        <Link to="/skin-types" className="nav-link">Skin Types</Link>
      </div>
    </nav>
  );
};

export default Navbar;
