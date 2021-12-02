import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../assets/carousel.png";
import img2 from "../assets/carousel2.png";
import img3 from "../assets/carousel3.jpg";

const Carrusel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel "
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mmm....Rosquillas</h3>
          <p>- Homero Simpson.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Un negocio... </h3>
          <h3>redondo no? jajaj</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h5>La vida es corta...</h5>
          <h3>Come mas donas!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
