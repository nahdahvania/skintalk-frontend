import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">SkinTalk</h1>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tips">Tips & Guides</Link></li>
          <li><Link to="/trends">Trends & News</Link></li>
          <li><Link to="/types">Skin Types</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
