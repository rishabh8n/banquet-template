import React from "react";
import "./Testimonials.scss";
import useEmblaCarousel from "embla-carousel-react";

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ align: "center", loop: true });
  return (
    <div className="testimonials  bg-neutral-150">
      <p className="about-title clr-accent-500 fs-700 fw-500 align-center">
        Reviews
      </p>
      <h2 className="fs-800">Testimonials</h2>
      <div className="testimonials-container-caraousal" ref={emblaRef}>
        <div className="testimonials-container">
          <div className="testimonials-item">
            <p className="fs-400">
              ❝ Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              aliquam enim ratione ad at deleniti consequatur in porro officiis
              aut ex numquam dolorum, odit perspiciatis? Eum dolore cupiditate
              assumenda corrupti? ❞
            </p>
            <p className="fs-600">-Rohan</p>
          </div>
          <div className="testimonials-item">
            <p className="fs-400">
              ❝ Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              aliquam enim ratione ad at deleniti consequatur in porro officiis
              aut ex numquam dolorum, odit perspiciatis? Eum dolore cupiditate
              assumenda corrupti? ❞
            </p>
            <p className="fs-600">-Rohan</p>
          </div>
          <div className="testimonials-item">
            <p className="fs-400">
              ❝ Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              aliquam enim ratione ad at deleniti consequatur in porro officiis
              aut ex numquam dolorum, odit perspiciatis? Eum dolore cupiditate
              assumenda corrupti? ❞
            </p>
            <p className="fs-600">-Rohan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
