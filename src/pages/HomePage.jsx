import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <section className="homepage">
      <div className="homepage-content">
        <div className="homepage-text">
          <h2 className="homepage-title">SkinTalk</h2>
          <p className="homepage-description">
            Dapatkan wawasan dan informasi aktual mengenai dunia perawatan kulit, disajikan secara ringkas dan jelas.
          </p>
        </div>
        <div className="homepage-image-wrapper">
          <img
            src="/logoskintalk.png"
            alt="Skincare Illustration"
            className="homepage-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
