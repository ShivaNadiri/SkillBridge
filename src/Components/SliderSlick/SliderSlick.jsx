import React from "react";
import Slider from "react-slick";
import styles from "./SliderSlick.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import Card1 from "../CardsComponent/Card1";
import Card2 from "../CardsComponent/Card2";
import Card3 from "../CardsComponent/Card3";
import Card4 from "../CardsComponent/Card4";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={styles.FaArrowLeft}>
      <FaArrowLeft />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={styles.FaArrowRight}>
      <FaArrowRight />
    </div>
  );
}
function SliderSlick() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings} className={styles.SliderSlick}>
      <div>
        <Card1 />
      </div>
      <div>
        <Card2 />
      </div>
      <div>
        <Card3 />
      </div>
      <div>
        <Card4 />
      </div>
    </Slider>
  );
}

export default SliderSlick;
