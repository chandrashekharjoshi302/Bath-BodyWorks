import React from "react";
import Fresh from "../Fresh.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Shampoo.css";


function Shampoo() {
  const settings = {
    dots: true,

    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div>
      <h1 className="MoreyourAdore">More You’ll Adore</h1>
      <Slider {...settings} className="SliderCandle">
        {Fresh.map((e) => {
          return (
            <div>
              <img src={e.img} />
              <p>{e.name}</p>
              <p className="candleprice">{`₹${e.Price}`}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
function Shampooone() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h1 className="MoreyourAdore">Customer Also viewed</h1>
      <Slider {...settings} className="SliderCandle">
        {Fresh.map((e) => {
          return (
            <div>
              <img src={e.img} />
              <p>{e.name}</p>
              <p className="candleprice">{`₹${e.Price}`}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export { Shampoo, Shampooone };
