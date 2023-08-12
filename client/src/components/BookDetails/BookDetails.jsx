import React, { useEffect, useState } from "react";
import "./BookDetails.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Icon } from "@iconify/react";
import "reactjs-popup/dist/index.css";
import StarRating from "../StarRating/StarRating";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function BookDetails() {
  const [book, setBook] = useState({});
  const [category, setCategory] = useState({});
  const [author, setAuthor] = useState({});
  const [cart, setCart] = useState([]);
  const [deliverables, setDeliverables] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();
  let { bookTitle } = useParams();

  useEffect(() => {
    getBook();
  }, []);

  useEffect(() => {
    let stordedCartItems = JSON.parse(localStorage.cart || "[]");
    setCart(stordedCartItems);
  }, cart);

  const getBook = () => {
    axios
      .get(`https://online-bookshop.vercel.app/book?title=${bookTitle}`)
      .then((response) => {
        setBook(response.data[0]);
        setCategory(response.data[0].category);
        setAuthor(response.data[0].author);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleDeliverables = (e) => {
    setDeliverables(e.target.value);
  };

  const storeInCart = () => {
    if (quantity !== "" && deliverables !== "") {
      let cartItems = JSON.parse(localStorage.cart || "[]");
      if (cartItems.length !== 0) {
        cartItems.forEach((i, index) => {
          if (i.bookTitle === book.title && i.deliverables === deliverables) {
            cartItems.splice(index, 1);
            localStorage.cart = JSON.stringify([
              ...cartItems,
              { ...i, quantity: i.quantity + parseInt(quantity) },
            ]);
            navigate("/cart");
          } else {
            let newCartItem = {
              bookTitle: book.title,
              bookPrice: book.price,
              quantity: parseInt(quantity),
              deliverables: deliverables,
            };
            let newCart = [...cart];
            newCart.push(newCartItem);
            setCart(newCart);
            localStorage.cart = JSON.stringify(newCart);
            navigate("/cart");
          }
        });
      } else {
        let newCartItem = {
          bookTitle: book.title,
          bookPrice: book.price,
          quantity: parseInt(quantity),
          deliverables: deliverables,
        };
        let newCart = [...cart, newCartItem];
        setCart(newCart);
        localStorage.cart = JSON.stringify(newCart);
        navigate("/cart");
      }
    } else {
      alert("Please enter the quantity and deliverables way");
    }
  };

  return (
    <div className=''>
      <NavBar />
      <div className='book p-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 mb-3'>
              <div className='border rounded p-3'>
                <div className='row mb-3'>
                  <div className='col-md-4'>
                    <div className='book_cover border rounded mt-4 mb-2 w-100'>
                      <img
                        alt={book.title}
                        src={book.cover}
                        height='100%'
                        width='100%'
                      ></img>
                    </div>
                  </div>
                  <div className='col-md-8 border rounded'>
                    <div className='book_info p-3'>
                      <h3>Book Details</h3>
                      <ul className='list-unstyled'>
                        <li>Title: {book.title}</li>
                        <li>Category: {category.name}</li>
                        <li>Edition: {book.edition}</li>
                        <li>Published Date: {book.published_date}</li>
                        <li>Pages: {book.pages}</li>
                        <li>Price: ${book.price}</li>
                        <li>Author Name: {author.name}</li>
                        <li>
                          rates: <StarRating />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='book_description border rounded p-3'>
                  <h3>Book Description</h3>
                  <p>{book.description}</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 border rounded p-4'>
              <Link to='#' className='btn btn-danger w-100'>
                <Icon icon='bi:file-pdf' color='white' className='mb-1' />
                <p className='d-inline ms-1 preview-pdf'>Preview PDF</p>
              </Link>
              <span className='seperate-line mb-3 mt-3'></span>
              <div className='form border rounded p-3'>
                <form>
                  <div className='form-group mb-3'>
                    <label>Quantity</label>
                    <input
                      type='number'
                      className='form-control'
                      id='quantity'
                      value={quantity}
                      onChange={handleQuantity}
                    ></input>
                  </div>
                  <label>Deliverables</label>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='deliverables'
                      id='pdf'
                      value='PDF'
                      onChange={handleDeliverables}
                    ></input>
                    <label className='form-check-label'>PDF</label>
                  </div>
                  <div className='form-check mb-3'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='deliverables'
                      id='paper'
                      value='Paper Copy'
                      onChange={handleDeliverables}
                    ></input>
                    <label className='form-check-label'>Paper Copy</label>
                  </div>
                  <button
                    type='button'
                    className='btn btn-outline-primary'
                    onClick={storeInCart}
                  >
                    Add To Cart{" "}
                    <Icon
                      className='mb-1'
                      icon='bi:cart'
                      width='20'
                      height='20'
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BookDetails;
