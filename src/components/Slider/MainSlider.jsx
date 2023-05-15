import React from "react";
import "./Slider.css";
import Slider from "react-slick";
import imgOne from "../../assets/slider_image/slide-00.jpg";
import imgTwo from "../../assets/slider_image/slide-01.jpg";
import imgThree from "../../assets/slider_image/slide-02.jpg";
import imgFour from "../../assets/slider_image/slide-03.jpg";
import imgFive from "../../assets/slider_image/slide-04.jpg";
import imgSix from "../../assets/slider_image/slide-05.jpg";

const MainSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="">
        <Slider {...settings}>
          <div>
            <img src={imgOne} alt="" className="img-fluid" />
          </div>
          <div>
            <img src={imgTwo} alt="" className="img-fluid" />
          </div>
          <div>
            <img src={imgThree} alt="" className="img-fluid" />
          </div>
          <div>
            <img src={imgFour} alt="" className="img-fluid" />
          </div>
          <div>
            <img src={imgFive} alt="" className="img-fluid" />
          </div>
          <div>
            <img src={imgSix} alt="" className="img-fluid" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MainSlider;
