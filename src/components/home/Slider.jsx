import React, { useState } from "react";
// import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import car1 from "../../assets/images/caraousel-1.png";
import car2 from "../../assets/images/image3.png";
import car3 from "../../assets/images/pen_stand4.jpg";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="caraousel_wrapper">
      <Carousel activeIndex={index} onSelect={handleSelect} interval="1000">
        <Carousel.Item>
          <img
            className="d-block w-100 caraousel_image"
            src={car1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caraousel_image"
            src={car2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caraousel_image"
            src={car3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
