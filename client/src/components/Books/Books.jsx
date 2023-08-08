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
          slidesToShow: 2,
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
    <div className='p-5 books'>
      <div className='container'>
        <h2 className='mb-5 '>Most Selling Books</h2>

        <div className='d-flex flex-column justify-content-end align-items-end'>
          <Link to='/products' className='see-more-btn rounded'>
            <p className='d-inline'>see more</p>
            <Icon icon='ic:round-read-more' className='read-more' />
          </Link>
        </div>

        <Slider {...settings} className='mt-2'>
          {books.map((b) => (
            <BookCard book={b} key={b._id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Books;
