import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Learn = () => {
  var settings={
    dots:true,
    infinite:true,
    speed:500,
    slideToShow:1,
    slideToScroll:1,
  };
  return (
    <div className="slide-container">
      <Slider {...settings}>
        <div>
          <h1>hello</h1>
        </div>
      </Slider>
    </div>
  )
}

export default Learn
