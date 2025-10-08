import React from "react";
import { Link } from "react-router-dom"; // <- import Link
import "../styles/main.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <h1 className="logo">ShaktiLink</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
