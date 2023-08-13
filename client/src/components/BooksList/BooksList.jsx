import React, { useState } from "react";
import BookCard from "../BookCard/BookCard";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import { Icon } from "@iconify/react";
import "./BooksList.scss";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";

import "react-pro-sidebar/dist/css/styles.css";
import Footer from "../Footer/Footer";

function BooksList(props) {
  const [keyword, setKeyword] = useState("");
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  // const [minPrice, setMinPrice] = useState(0);
  // const [maxPrice, setMaxPrice] = useState(100);

  const [userFilters, setUserFilters] = useState({
    category: "",
    author: "",
    minPrice: "",
    maxPrice: "",
  });

  let categories = props.categories;
  let filters = props.filters;
  let books = props.books;
  let authors = props.authors;

  const menuToggle = () => {
    setMenuCollapse(!menuCollapse);
  };
  const search = (title) => {
    setKeyword(title);
  };

  const filteredBooks = books.filter((book) => {
    const meetsCategory =
      !userFilters.category || book.category === userFilters.category;
    const meetsAuthor =
      !userFilters.author || book.author === userFilters.author;
    const meetsMinPrice =
      !userFilters.minPrice || book.price >= parseFloat(userFilters.minPrice);
    const meetsMaxPrice =
      !userFilters.maxPrice || book.price <= parseFloat(userFilters.maxPrice);
    return meetsCategory && meetsAuthor && meetsMinPrice && meetsMaxPrice;
  });

  return (
    <div className='books-list' id='most-selling'>
      <NavBar />
      <Header search={search} keyword={keyword} />
      <div className='container p-2'>
        <div className='logotext' onClick={menuToggle}>
          {menuCollapse ? (
            <p className='d-inline-block'>
              <Icon icon='system-uicons:filter' /> filters
            </p>
          ) : (
            <p>
              <Icon icon='ph:x' /> filters
            </p>
          )}
        </div>

        <div className='d-flex'>
          <div id='filters' className='filters'>
            <ProSidebar collapsed={menuCollapse}>
              <SidebarContent>
                <Menu iconShape='square'>
                  {filters.map((f) => (
                    <MenuItem key={f.id}>
                      <SubMenu title={f.name}>
                        {f.name === "Categories" ? (
                          categories.map((c) => (
                            <MenuItem
                              value={userFilters.category}
                              key={c._id}
                              name='category'
                              onClick={(e) =>
                                setUserFilters({
                                  ...userFilters,
                                  category: e.target.value,
                                })
                              }
                            >
                              {c.name}
                            </MenuItem>
                          ))
                        ) : f.name === "Authors" ? (
                          authors.map((a) => (
                            <MenuItem
                              value={userFilters.author}
                              key={a._id}
                              name='author'
                              onClick={(e) =>
                                setUserFilters({
                                  ...userFilters,
                                  author: e.target.value,
                                })
                              }
                            >
                              {a.name}
                            </MenuItem>
                          ))
                        ) : (
                          <MenuItem>
                            <div className='d-flex justify-content-between'>
                              <div classname=''>
                                <input
                                  type='number'
                                  name='minPrice'
                                  value={userFilters.minPrice}
                                  onChange={(e) =>
                                    setUserFilters({
                                      ...userFilters,
                                      minPrice: e.target.value,
                                    })
                                  }
                                ></input>
                              </div>
                              <p className='m-1'> - </p>
                              <div className=''>
                                <input
                                  type='number'
                                  name='maxPrice'
                                  value={userFilters.maxPrice}
                                  onChange={(e) =>
                                    setUserFilters({
                                      ...userFilters,
                                      maxPrice: e.target.value,
                                    })
                                  }
                                ></input>
                              </div>
                            </div>
                          </MenuItem>
                        )}
                      </SubMenu>
                    </MenuItem>
                  ))}
                </Menu>
              </SidebarContent>
            </ProSidebar>
          </div>
          <div className='row books all-books'>
            {filteredBooks
              .filter((b) => b.title.toLowerCase().includes(keyword))
              .map((b) => (
                <div className='col-lg-4 col-md-12'>
                  <BookCard key={b.id} book={b} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default BooksList;
