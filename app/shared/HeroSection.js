import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./HeroSection.css";
import Button from "@/components/Button";

const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

const HeroSection = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <div className="lg:flex lg:justify-between  lg:items-center w-full lg:px-10 px-5 lg:py-20 py-7 bg-gradient-to-r from-secondary to-midnight">
      <div className="lg:w-1/2">
        <h1 className="text-5xl leading-snug text-color tracking-wide">
          We Make Better{" "}
          <span className="text-primary font-bold">Products</span> <br />{" "}
          <span className="text-primary font-bold">You</span> Get Better Result
        </h1>
        <p className="text-silver tracking-wide my-9">
          Find the Latest Trends and Must-Have Items, a powerful statement that
          captures the essence of staying up-to-date with the ever-changing
          fashion landscape.
        </p>
        <Button>Get Started</Button>
      </div>
      <div className="wrapper lg:w-1/2 lg:py-0 py-16">
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderRef}>
            <div className="carousel__cell number-slide1 ">1</div>
            <div className="carousel__cell number-slide2">2</div>
            <div className="carousel__cell number-slide3">3</div>
            <div className="carousel__cell number-slide4">4</div>
            <div className="carousel__cell number-slide5">5</div>
            <div className="carousel__cell number-slide6">6</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
