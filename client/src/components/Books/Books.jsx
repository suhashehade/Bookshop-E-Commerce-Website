import React from "react";
import "./Books.scss";
import Slider from "react-slick";
import BookCard from "../BookCard/BookCard";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Books(props) {
  let books = props.books;
  let settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    draggable: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
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
    <div className='p-5'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <h2 className='mb-5'>Most Selling Books</h2>
          <Link to='/products' className='blue-btn p-2 rounded h-25'>
            see more <Icon icon='ic:round-read-more' fontSize={25} />
          </Link>
        </div>

        <Slider {...settings}>
          {books.map((b) => (
            <BookCard book={b} key={b._id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Books;
