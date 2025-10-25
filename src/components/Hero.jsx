import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Discover the Beauty of Nature 🌿</h1>
        <p>Explore the wonders of forests, mountains, and oceans that make our world magical.</p>
        <div className="hero-buttons">
          <a href="#" className="btn btn-primary">Explore Gallery</a>
          <a href="#" className="btn btn-secondary">Learn More</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
