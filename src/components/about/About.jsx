import React from "react";
import aboutimg from "../../assets/about.jpg";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <p className="about-title clr-accent-500 fs-700 fw-500">About Us</p>
      <h2 className="about-head clr-neutral-800 fs-800">ABC Banquet Hall</h2>
      <div className="about-desc">
        <p className="clr-neutral-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque
          id iure laboriosam et, debitis pariatur, distinctio est eveniet
          dolores ipsa natus vero optio. Dolore nisi cupiditate ullam nostrum
          eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          itaque id iure laboriosam et, debitis pariatur, distinctio est eveniet
          dolores ipsa natus vero optio. Dolore nisi cupiditate ullam nostrum
          eaque?
        </p>
        <p className="clr-neutral-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque
          id iure laboriosam et, debitis pariatur, distinctio est eveniet
          dolores ipsa natus vero optio. Dolore nisi cupiditate ullam nostrum
          eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          itaque id iure laboriosam et, debitis pariatur, distinctio est eveniet
          dolores ipsa natus vero optio. Dolore nisi cupiditate ullam nostrum
          eaque?
        </p>
      </div>
      <div className="about-img">
        <img src={aboutimg} alt="" />
      </div>
    </div>
  );
};

export default About;
