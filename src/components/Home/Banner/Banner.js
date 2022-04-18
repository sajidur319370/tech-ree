import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner-1.png";
import banner2 from "../../../images/banner/banner-2.png";
import banner3 from "../../../images/banner/banner-3.png";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h2 className="display-3 text-warning">Be Stylish</h2>
          <p className="fw-600 display-2 text-capitalize">
            Tech Free is always with You to rech Yor Goal
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h2 className="display-3 text-warning">Greatest Amusement</h2>
          <p className="fw-600 display-2 text-capitalize">
            Live with A Sound Mind
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h2 className="display-3 text-warning ">Go for Smartest World</h2>
          <p className="fw-600 display-2 text-capitalize">
            Grow your ability to cope with the world with smart technology
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
