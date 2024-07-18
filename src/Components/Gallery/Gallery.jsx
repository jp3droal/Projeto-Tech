import teste from '../../assets/logo.png'

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';

function CustomCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        indicators={false}
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={teste}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={teste}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={teste}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="carousel-indicators">
        {[0, 1, 2].map(index => (
          <button
            key={index}
            className={`indicator-btn ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleSelect(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default CustomCarousel;

