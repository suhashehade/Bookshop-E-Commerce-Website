import React from "react";
import Card from "react-bootstrap/Card";
import StarRating from "./../StarRating/StarRating";
import "./BookCard.scss";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

function BookCard(props) {
  let book = props.book;

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
        <div className='ribbon'>
          <span className='heart-icon ps-1 pe-1 text-center'>
            <p className='text-white d-inline me-1'>Add to wishlist</p>
            <Icon
              icon='mdi:heart-outline'
              width='30'
              height='30'
              color='white'
            />
          </span>
        </div>
        <Card.Body>
          <p>{book.category.name}</p>
          {/* <Badge className='badge' pill bg='warning'>
            sale
          </Badge> */}
          <Link to={`/bookDetails/${book.title}`} className='book_title'>
            <h5>{book.title}</h5>
          </Link>
          <p>By: {book.author.name}</p>

          <p>price: ${book.price}</p>
          <StarRating />

          <Link
            to={`/bookDetails/${book.title}`}
            className='blue-btn p-2 m-1 rounded'
          >
            Add To Cart{" "}
            <Icon className='mb-1' icon='bi:cart' width='20' height='20' />
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookCard;
