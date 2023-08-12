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
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

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

  const filter = (e) => {
    let target = e.target;
    if (target.name === "category") {
      setCategory(target.value);
    } else {
      if (target.name === "author") {
        setAuthor(target.value);
      } else {
        if (target.name === "minPrice") {
          setMinPrice(target.value);
        } else {
          if (target.name === "maxPrice") {
            setMaxPrice(target.value);
          }
        }
      }
    }
  };

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
                              value={c.name}
                              key={c._id}
                              name='category'
                              onClick={filter}
                            >
                              {c.name}
                            </MenuItem>
                          ))
                        ) : f.name === "Authors" ? (
                          authors.map((a) => (
                            <MenuItem
                              value={a.name}
                              key={a._id}
                              name='author'
                              onClick={filter}
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
                                  value={minPrice}
                                  onChange={filter}
                                ></input>
                              </div>
                              <p className='m-1'> - </p>
                              <div className=''>
                                <input
                                  type='number'
                                  name='maxPrice'
                                  value={maxPrice}
                                  onChange={filter}
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
            {books
              .filter(
                (b) =>
                  b.title.toLowerCase().includes(keyword) ||
                  (b.category.name === category &&
                    b.author.name === author &&
                    b.price >= minPrice &&
                    b.price <= maxPrice),
              )
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
