import React from "react";
import service1 from "../../assets/service1.jpg";
import "./Gallery.scss";
const Gallery = () => {
  return (
    <div className="gallery">
      <h2 className="fs-800">Gallery</h2>
      <div className="gallery-container">
        <div className="gallery-item">
          <img src={service1} alt="" />
        </div>
        <div className="gallery-item">
          <img src={service1} alt="" />
        </div>
        <div className="gallery-item">
          <img src={service1} alt="" />
        </div>
        <div className="gallery-item">
          <img src={service1} alt="" />
        </div>
        <div className="gallery-item">
          <img src={service1} alt="" />
        </div>
        <div className="gallery-item">
          <img src={service1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
