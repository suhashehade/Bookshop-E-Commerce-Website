import React from "react";
import Slider from "react-slick";
import Author from "../Author/Author";
import "./Authors.scss";

function Authors(props) {
  let authors = props.authors;
  let settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    draggable: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className='p-4 authors'>
      <h2>Authors</h2>
      <Slider {...settings}>
        {authors.map((a) => (
          <Author key={a._id} author={a} />
        ))}
      </Slider>
    </div>
  );
}

export default Authors;
