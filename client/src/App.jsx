import "./App.scss";
import MainPage from "./components/MainPage/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BooksList from "./components/BooksList/BooksList";
import { useEffect, useState } from "react";
import axios from "axios";
import BookDetails from "./components/BookDetails/BookDetails";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";

function App() {
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [book, setBook] = useState({});

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getAuthors();
  }, []);

  useEffect(() => {
    getBooks();
  }, []);

  const getBook = () => {
    axios.get("https://online-bookshop.vercel.app/book").then((response) => {
      setBook(response.data);
    });
  };

  const getAuthors = () => {
    axios.get("https://online-bookshop.vercel.app/authors").then((response) => {
      setAuthors(response.data);
    });
  };

  const getCategories = () => {
    axios
      .get("https://online-bookshop.vercel.app/categories")
      .then((response) => {
        setCategories(response.data);
      });
  };

  const getBooks = () => {
    axios.get("https://online-bookshop.vercel.app/books").then((response) => {
      setBooks(response.data);
    });
  };

  let quotations = [
    {
      id: 0,
      quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
      source: "Winston Churchill",
    },
    {
      id: 1,
      quote: `"The future belongs to those who believe in the beauty of their dreams."`,
      source: "Eleanor Roosevelt",
    },
    {
      id: 2,
      quote: `"Believe you can and you're halfway there."`,
      source: "Theodore Roosevelt",
    },
    {
      id: 3,
      quote: `"Life is 10% what happens to us and 90% how we react to it."`,
      source: "Charles R. Swindoll",
    },
  ];
  let filters = [
    {
      id: 0,
      name: "Categories",
    },
    {
      id: 1,
      name: "Price",
    },
    {
      id: 2,
      name: "Authors",
    },
  ];
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <MainPage
                books={books}
                authors={authors}
                quotations={quotations}
                book={book}
                getBook={getBook}
              />
            }
          />
          <Route
            path='/products'
            element={
              <BooksList
                filters={filters}
                categories={categories}
                books={books}
                authors={authors}
              />
            }
          />

          <Route path='/bookDetails/:bookTitle' element={<BookDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
