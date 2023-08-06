import React from "react";
import "./Header.scss";
import Search from "./../Search/Search";

function Header(props) {
  return (
    <div className='header'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='d-flex'>
            <img
              alt=''
              width='30%'
              height='50%'
              src={require("../../assets/images/logo_light.png")}
            />
            <h6 className='mt-5 text-white'>Knowledge Journey</h6>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='mt-5 p-2'>
            <Search search={props.search} keyword={props.keyword} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
