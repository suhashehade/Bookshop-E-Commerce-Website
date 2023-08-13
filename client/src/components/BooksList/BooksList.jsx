import React, { useState } from "react";
import BookCard from "../BookCard/BookCard";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import { Icon } from "@iconify/react";
import "../../../node_modules/react-paginate/theme/basic/react-paginate.css";
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
import ReactPaginate from "react-paginate";

function BooksList(props) {
  const [keyword, setKeyword] = useState("");
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
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

  const itemsPerPage = 6;
  const filteredBooks = books.filter((book) => {
    const meetsCategory =
      !userFilters.category || book.category.name === userFilters.category;
    const meetsAuthor =
      !userFilters.author || book.author.name === userFilters.author;
    const meetsMinPrice =
      !userFilters.minPrice || book.price >= parseFloat(userFilters.minPrice);
    const meetsMaxPrice =
      !userFilters.maxPrice || book.price <= parseFloat(userFilters.maxPrice);
    return meetsCategory && meetsAuthor && meetsMinPrice && meetsMaxPrice;
  });
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredBooks().slice(itemOffset, endOffset);
  const pageCount = Math.ceil(books.length / itemsPerPage);

  const menuToggle = () => {
    setMenuCollapse(!menuCollapse);
  };
  const search = (title) => {
    setKeyword(title);
  };
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % books.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
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
                          <select
                            className='form-control'
                            value={userFilters.category}
                            onChange={(e) => {
                              setUserFilters({
                                ...userFilters,
                                category: e.target.value,
                              });
                            }}
                          >
                            <option value=''>All Categories</option>
                            {categories.map((c) => (
                              <option value={c.name} key={c._id}>
                                {c.name}
                              </option>
                            ))}
                          </select>
                        ) : f.name === "Authors" ? (
                          <select
                            className='form-control'
                            value={userFilters.author}
                            onChange={(e) => {
                              setUserFilters({
                                ...userFilters,
                                author: e.target.value,
                              });
                            }}
                          >
                            <option value=''>All Authors</option>
                            {authors.map((a) => (
                              <option value={a.name} key={a._id}>
                                {a.name}
                              </option>
                            ))}
                          </select>
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
            {currentItems
              .filter((b) => b.title.toLowerCase().includes(keyword))
              .map((b) => (
                <div className='col-lg-4 col-md-12'>
                  <BookCard key={b.id} book={b} />
                </div>
              ))}
            <ReactPaginate
              breakLabel='...'
              nextLabel='next >'
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel='< previous'
              pageClassName='page-item'
              pageLinkClassName='page-link'
              previousClassName='page-item'
              previousLinkClassName='page-link'
              nextClassName='page-item'
              nextLinkClassName='page-link'
              breakClassName='page-item'
              breakLinkClassName='page-link'
              containerClassName='pagination'
              activeClassName='active'
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default BooksList;
