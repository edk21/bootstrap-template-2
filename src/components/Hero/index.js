import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { heroItems } from './heroItems'

const Hero = () => {
  var settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  
  return (
    <section className='hero' id="hero">
        <Container className='hero-container'>
            <Slider 
              className=""
              {...settings}
            >
                {
                  heroItems.map(item => (
                    <div key={item.id} className="d-flex flex-column">
                      <h1 className="text-center text-white py-3">{item.h1}</h1>
                      <p className="text-center text-white w-75 mx-auto py-3">{item.p}</p>
                      <button className='cBtn'>Read More</button>
                    </div>
                  ))
                }
            </Slider>
        </Container>
    </section>
  )
}

export default Hero