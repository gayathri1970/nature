import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Nature</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Nature is not a place to visit — it is home. It brings peace to our souls,
              teaches patience, and reminds us of beauty in simplicity.
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
  );
};

export default About;
