import React from "react";
import "./hero-img.css";
import { Link } from "react-router-dom";

function HeroImage() {
  return (
    <div className="home-container">
      <div className="home-right">
        <img src="images/teaching.jpg" alt="controller" />
      </div>
      <div className="home-left">
        <h5>Your kids are safe!</h5>
        <h1>Huge collection of your kid's favorite books </h1>
        <p>Place appointments with the best teachers of all time.</p>
        <Link to="/books">
          <button>
            VIEW BOOKS{" "}
            <i aria-hidden="true" className="fas fa-angle-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroImage;
