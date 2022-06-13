import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CardSliderItems } from './items/CardSliderItems';
import '../styles/SliderCards.css';

const SliderCards = () => {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      pauseOnHover: true,
      arrows: false,
      speed: 3000,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
    <>
        <div className="slider-container">
            <Slider {...settings}>
                {CardSliderItems.map(item => {
                    return(
                        <div className="card" key={item.id}>
                            <div className="card-top">
                                <img src={require('../assets/' + item.image + '.png')} alt={item.title}/>
                            </div>
                            <div className="card-bottom">
                                <h3>{item.title}</h3>
                                <h4>${item.price}</h4>
                                <h4>{item.type}</h4>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    </>
    )
}

export default SliderCards