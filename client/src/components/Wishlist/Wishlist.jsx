import React from "react";
import "./Wishlist.scss";
import { useState } from "react";
import BookCard from "../BookCard/BookCard";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { useEffect } from "react";

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    setWishlistItems([...JSON.parse(localStorage.wishlist || "[]")]);
  }, []);

  const removeFromWishlist = (e) => {
    let index = e.target.id;
    let wishlist = [...wishlistItems];
    wishlist.splice(index, 1);
    setWishlistItems(wishlist);
    localStorage.wishlist = JSON.stringify(wishlist);
  };

  return (
    <div>
      <NavBar />
      <div className='container pt-5 pb-5'>
        <div className='row wishlist'>
          {wishlistItems.map((b, index) => (
            <div className='col-lg-3 col-md-6 wishlist-item'>
              <BookCard key={b.id} book={b} />
              <button
                type='button'
                className='btn btn-danger delete-wishlist-item'
                id={index}
                onClick={removeFromWishlist}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Wishlist;
