import React from "react";
import "./Quotations.scss";
import Quotation from "../Quotation/Quotation";
import Slider from "react-slick";

function Quotations(props) {
  let quotations = props.quotations;
  let settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    draggable: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <div className='container p-5'>
      <h2>Quotes</h2>
      <Slider {...settings}>
        {quotations.map((q, k) => (
          <Quotation key={k} quotation={q} />
        ))}
      </Slider>
    </div>
  );
}

export default Quotations;
