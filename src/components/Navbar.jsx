import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">🌿 Nature</h2>
      <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className={`line ${isMenuOpen ? 'line1' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'line2' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'line3' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
