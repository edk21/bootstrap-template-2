import React from 'react'
import { Container } from 'react-bootstrap'
import Zoom from "react-reveal/Zoom"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clientImages } from "./clientImages"

const Clients = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 622,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ],
    };

  return (
    <section id="clients" className='clients'>
        <Container>
            <Zoom>
            <div className="swiper__container">
                <Slider {...settings}>
                    
                        {
                            clientImages.map(client=> (
                                <div key={client.id} className="swiper__wrapper">
                                    <div className="swiper__slide">
                                        <img className='img-fluid' src={client.img} alt="" />
                                    </div>
                                </div>
                            ))
                        }
                    
                </Slider>
            </div>
            </Zoom>
        </Container>
    </section>
  )
}

export default Clients