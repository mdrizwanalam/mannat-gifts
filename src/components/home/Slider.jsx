import React, { useState } from "react";
// import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import car1 from "../../assets/images/img-5.png";
import car2 from "../../assets/images/mug2.jpg";
import car3 from "../../assets/images/mug3.jpg";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="caraousel_wrapper">
      <Carousel activeIndex={index} onSelect={handleSelect} interval="1000">
        {/* <Carousel.Item>
          <img
            className="d-block w-100 caraousel_image"
            src={car1}
            alt="First slide"
          />
        </Carousel.Item> */}
        <Carousel.Item>
          <img
            className="d-block w-100 caraousel_image"
            src={car2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caraousel_image"
            src={car3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
