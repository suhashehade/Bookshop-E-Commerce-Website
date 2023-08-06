import React from "react";
import "./Search.scss";
import { Icon } from "@iconify/react";


function Search(props) {

  const search = (e) => {
    let value = e.target.value;
    props.search(value); 
  }

  return (
    <div className='search_bar d-flex p-2'>
      <input
        type='text'
        name='search_book'
        id='serach_book'
        placeholder='Search by title'
        value={props.keyword}
        onChange={search}
      ></input>
      <button className='search-icon' onClick={search}>
        <Icon icon='material-symbols:search' className='text-white' />
      </button>
    </div>
  );
}

export default Search;
