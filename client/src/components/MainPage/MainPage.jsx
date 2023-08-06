import React from "react";
import Home from "../Home/Home";
import "./MainPage.scss";
import Books from "./../Books/Books";
import Adds from "../Adds/Adds";
import Authors from "../Authors/Authors";
import Quotations from "../Quotations/Quotations";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import NewReleases from "../NewReleases/NewReleases";

function MainPage(props) {
  let books = props.books;
  let authors = props.authors;
  let quotations = props.quotations;
  return (
    <div>
      <Home />
      <Books books={books} />
      <Adds />
      <Authors authors={authors} />
      <NewReleases books={books} />
      <Quotations quotations={quotations} />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainPage;
