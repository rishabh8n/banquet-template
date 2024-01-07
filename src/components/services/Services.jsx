import React from "react";
import service1 from "../../assets/service1.jpg";
import "./Services.scss";
import useEmblaCarousel from "embla-carousel-react";

const Services = () => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className="services bg-neutral-150">
      <p className="fs-700 clr-accent-500 fw-500 align-center">Our Services</p>
      <h2 className="fs-800">What we Offer</h2>
      <div className="services-container-caraousal">
        <div className="services-container">
          <div className="services-item">
            <img src={service1} alt="" />
            <p className="fs-750">Marriage</p>
          </div>
          <div className="services-item">
            <img src={service1} alt="" />
            <p className="fs-750">Social Gathering</p>
          </div>
          <div className="services-item">
            <img src={service1} alt="" />
            <p className="fs-750">Corporate Events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
