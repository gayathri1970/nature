

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Navbar */}
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

      {/* Hero Section */}
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

      {/* Gallery */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <h2>Nature Gallery</h2>
          <p className="section-subtitle">Immerse yourself in the breathtaking beauty of our natural world</p>
          <div className="image-gallery">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Forest" />
              <div className="overlay">
                <h3>Mystical Forest</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="Mountains" />
              <div className="overlay">
                <h3>Majestic Mountains</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Beach" />
              <div className="overlay">
                <h3>Serene Beach</h3>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="Sunset" />
              <div className="overlay">
                <h3>Crystal River</h3>
               
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" alt="River" />
              <div className="overlay">
                <h3>Golden Sunset</h3> 
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9" alt="Trees" />
              <div className="overlay">
                <h3>Ancient Trees</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About Nature</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Nature is not a place to visit — it is home. It brings peace to our souls, 
                teaches patience, and reminds us of beauty in simplicity. Every element in 
                nature tells a story of resilience, adaptation, and harmony.
              </p>
              <div className="features">
                <div className="feature">
                  <span className="feature-icon">🌱</span>
                  <h4>Sustainable</h4>
                  <p>Nature maintains perfect balance</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">💧</span>
                  <h4>Renewable</h4>
                  <p>Constant cycle of regeneration</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">🌍</span>
                  <h4>Diverse</h4>
                  <p>Home to millions of species</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get in Touch</h2>
          <p className="section-subtitle">Have a suggestion or feedback? Let's connect!</p>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <blockquote>
            "Look deep into nature, and then you will understand everything better."  
            <br />— Albert Einstein
          </blockquote>
          <div className="footer-content">
            <p>© 2025 Nature Landing Page | Designed by me</p>
      
          </div>
        </div>
      </footer>

      {/* Scroll-to-top button */}
      <button 
        className={`scroll-top ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop}
      >
        ↑
      </button>
    </div>
  );
}

export default App;