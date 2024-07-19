import teste from '../../assets/logo.png'
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css';

import SneakersGallery from '../../assets/Sneakers-Gallery.png'
import SneakersGallery4 from '../../assets/home-slide-4.png'
import SneakersGallery6 from '../../assets/home-slide-6.png'
import SneakersGallery8 from '../../assets/home-slide-8.png'

import CircleGallery from '../../assets/CircleGallery.png'

const images = [
  { src: SneakersGallery, alt: 'Imagem 1' },
  { src: SneakersGallery4, alt: 'Imagem 2' },
  { src: SneakersGallery6, alt: 'Imagem 3' },
  { src: SneakersGallery8, alt: 'Imagem 4' }
];

export default function Gallery() {

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
          <div className='galleryPrincipal'>
            <div className='galleryExtra'>
              <div className='galleryTexto'>
                <p className='melhoresOfertas'>
                  Melhores ofertas personalizadas
                </p>
                <h1>
                  Queima de estoque Nike 🔥
                </h1>
                <p className='textoPenultimo'>
                  Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                </p>
                <a href="#">
                  <button>Ver Ofertas</button>
                </a>
              </div>
              <div className='galleryImagem'>
                <img src={images[0].src} alt={images[activeIndex].alt} />
              </div>
              <div className='circleGallery'>
                <img src={CircleGallery} alt="" />
              </div>
            </div>

          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='galleryPrincipal'>
            <div className='galleryExtra'>
              <div className='galleryTexto'>
                <p className='melhoresOfertas'>
                  Melhores ofertas personalizadas
                </p>
                <h1>
                  Queima de estoque Nike 🔥
                </h1>
                <p className='textoPenultimo'>
                  Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                </p>
                <a href="#">
                  <button>Ver Ofertas</button>
                </a>
              </div>
              <div className='galleryImagem'>
                <img src={images[1].src} alt={images[activeIndex].alt} />
              </div>
              <div className='circleGallery'>
                <img src={CircleGallery} alt="" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='galleryPrincipal'>
            <div className='galleryExtra'>
              <div className='galleryTexto'>
                <p className='melhoresOfertas'>
                  Melhores ofertas personalizadas
                </p>
                <h1>
                  Queima de estoque Nike 🔥
                </h1>
                <p className='textoPenultimo'>
                  Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                </p>
                <a href="#">
                  <button>Ver Ofertas</button>
                </a>
              </div>
              <div className='galleryImagem'>
                <img src={images[2].src} alt={images[activeIndex].alt} />
              </div>
              <div className='circleGallery'>
                <img src={CircleGallery} alt="" />
              </div>
            </div>

          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='galleryPrincipal'>
            <div className='galleryExtra'>
              <div className='galleryTexto'>
                <p className='melhoresOfertas'>
                  Melhores ofertas personalizadas
                </p>
                <h1>
                  Queima de estoque Nike 🔥
                </h1>
                <p className='textoPenultimo'>
                  Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                </p>
                <a href="#">
                  <button>Ver Ofertas</button>
                </a>
              </div>
              <div className='galleryImagem'>
                <img src={images[3].src} alt={images[activeIndex].alt} />
              </div>
              <div className='circleGallery'>
                <img src={CircleGallery} alt="" />
              </div>
            </div>

          </div>
        </Carousel.Item>
      </Carousel>
      <div className="carousel-indicators">
        {[0, 1, 2, 3].map(index => (
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

