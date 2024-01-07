import React from "react";
import hero from "../../assets/hero.jpg";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="fs-900 clr-neutral-100">
        Welcome To <br />
        <span className="fs-950">ABC Banquet</span>
      </h1>
      <button className="action-btn fs-500 bg-accent-500 clr-neutral-100">
        Book Now
      </button>
    </div>
  );
};

export default Hero;
