import React from "react";
import "./Sidebar.css";
import { slide as Menu } from "react-burger-menu";
import Indexes from "./../Indexes/Indexes";

function Sidebar(props) {
  let categories = props.categories;
  return (
    <div className='bg-danger'>
      <Menu>
        <Indexes categories={categories} />
      </Menu>
    </div>
  );
}

export default Sidebar;
