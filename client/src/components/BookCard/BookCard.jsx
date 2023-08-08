import React from "react";
import Card from "react-bootstrap/Card";
import StarRating from "./../StarRating/StarRating";
import "./BookCard.scss";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function BookCard(props) {
  let book = props.book;
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let stordedWishlistItems = JSON.parse(localStorage.wishlist || "[]");
    setWishlist(stordedWishlistItems);
  }, wishlist);

  const storeInWishlist = () => {
    let wishlistItems = [...wishlist];
    if (wishlist.find((i) => i.title === book.title) === undefined) {
      wishlistItems.push(book);
      setWishlist(wishlistItems);
      localStorage.wishlist = JSON.stringify(wishlistItems);
    }
    navigate("/wishlist");
  };

  return (
    <div className='book-card'>
      <Card className='mb-3 ms-2'>
        <div className=''>
          <Card.Img
            variant='top'
            className='book_cover'
            src={"http://localhost:4000/uploads/covers/" + book.cover}
            height='55%'
            width='50%'
          />
        </div>
        <div className='ribbon' onClick={storeInWishlist}>
          <span className='heart-icon ps-1 pe-1 text-center'>
            <p className='text-white d-inline me-1'>Add to wishlist</p>
            <Icon
              icon='mdi:heart-outline'
              className='heart-outline-icon'
              color='white'
            />
          </span>
        </div>
        <Card.Body className="card-body">
          <p className="book-details-p">{book.category.name}</p>
          <Link to={`/bookDetails/${book.title}`} className='book_title'>
            <h5>{book.title}</h5>
          </Link>
          <p className="book-details-p">By: {book.author.name}</p>

          <p className="book-details-p">price: ${book.price}</p>
          <StarRating />

          <Link
            to={`/bookDetails/${book.title}`}
            className='add-cart-btn rounded m-auto'
          >
            <p className='d-inline-block add-cart-p'>Add To Cart</p>
            <Icon className='mb-1 cart-icon' icon='bi:cart' color='green' />
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookCard;
