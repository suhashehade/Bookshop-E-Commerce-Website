import React from "react";
import "./Cart.scss";
import NavBar from "../NavBar/NavBar";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import axios from "axios";
import { Alert } from "react-bootstrap";
import validator from "validator";
import { useForm } from "react-hook-form";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(true);
  const [showError, setShowError] = useState(true);

  const {
    register,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    setTotalCost();
  });

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.cart || "[]"));
  }, []);

  const setTotalCost = () => {
    let sum = 0;
    cartItems.forEach((i) => {
      let t = i.bookPrice * i.quantity;
      sum += t;
    });
    setTotal(sum);
  };

  const removeFromCart = (e) => {
    let index = e.target.id;
    console.log(index);
    let cart = [...cartItems];
    cart.splice(index, 1);
    setCartItems(cart);
    setTotalCost();
    localStorage.cart = JSON.stringify(cart);
  };

  const handleInputs = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    if (id === "name") {
      setName(value);
    } else {
      if (id === "email") {
        setEmail(value);
      } else {
        if (id === "phone") {
          setPhone(value);
        } else {
          setAddress(value);
        }
      }
    }
  };

  const submitOrder = () => {
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      address === "" ||
      !validator.isEmail(email) ||
      JSON.parse(localStorage.cart || "[]") === undefined
    ) {
      setError(
        "Make sure that all fields are filled and enter valid email and the cart is not empty",
      );
    } else {
      let orderDetails = {
        username: name,
        userEmail: email,
        userPhone: phone,
        userAddress: address,
        cart: cartItems,
      };
      axios({
        method: "post",
        url: "http://localhost:4000/order",
        data: orderDetails,
      }).then(function (response) {
        localStorage.clear();
        setCartItems(JSON.parse(localStorage.cart || "[]"));
        setName("");
        setEmail("");
        setAddress("");
        setPhone("");
        setSuccess(
          "Congratulation! the order is submitted successfully, please check your email for more details",
        );
      });
    }
  };

  const setEmailError = () => {
    if (validateEmail()) {
      setError("invalid email");
    }
  };

  const validateEmail = () => {
    if (validator.isEmail(email)) {
      return true;
    }
    return false;
  };
  return (
    <div>
      <NavBar />
      <div className='container p-5'>
        {success !== "" ? (
          showSuccess ? (
            <Alert
              variant='success'
              onClose={() => setShowSuccess(false)}
              dismissible
            >
              <p>{success}</p>
            </Alert>
          ) : null
        ) : null}
        {error !== "" ? (
          showError ? (
            <Alert
              variant='danger'
              onClose={() => setShowError(false)}
              dismissible
            >
              <p>{error}</p>
            </Alert>
          ) : null
        ) : null}
        <div className='table border rounded p-4'>
          <h3>Cart Items</h3>
          <div className='table-responsive'>
            <table className='table text-center'>
              <thead>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Book Title</th>
                  <th scope='col'>Book Price</th>
                  <th scope='col'>Quantity</th>
                  <th scope='col'>Deliverables</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{item.bookTitle}</td>
                    <td>${item.bookPrice}</td>
                    <td>{item.quantity}</td>
                    <td>{item.deliverables}</td>
                    <td>
                      <button
                        type='button'
                        className='btn btn-danger'
                        id={index}
                        onClick={removeFromCart}
                      >
                        <p className="d-inline">X</p>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className='text-success'>Total Cost: ${total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className='user-info'>
          <form>
            <div className='row'>
              <div className='col-md-3 mb-2'>
                <div className='form-group'>
                  <input
                    required
                    type='text'
                    className='form-control'
                    id='name'
                    value={name}
                    placeholder='Name'
                    onChange={handleInputs}
                  ></input>
                </div>
              </div>
              <div className='col-md-3 mb-2'>
                <div className='form-group'>
                  <input
                    required
                    type='email'
                    className='form-control'
                    id='email'
                    {...register("email", {
                      required: "Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                    })}
                    onBlurCapture={setEmailError}
                    value={email}
                    placeholder='Email'
                    onChange={handleInputs}
                  >
                    {errors.email && errors.email.message}
                  </input>
                </div>
              </div>
              <div className='col-md-3 mb-2'>
                <div className='form-group'>
                  <input
                    required
                    type='number'
                    className='form-control'
                    id='phone'
                    value={phone}
                    placeholder='Phone Number'
                    onChange={handleInputs}
                  ></input>
                </div>
              </div>
              <div className='col-md-3 mb-2'>
                <div className='form-group'>
                  <input
                    required
                    type='text'
                    className='form-control'
                    id='address'
                    value={address}
                    placeholder='address'
                    onChange={handleInputs}
                  ></input>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-center w-100 mt-2'>
              <button
                type='button'
                className='btn btn-dark m-2'
                onClick={submitOrder}
              >
                Submit the order
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
