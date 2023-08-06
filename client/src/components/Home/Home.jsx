import React from "react";
import NavBar from "./../NavBar/NavBar";
import "./Home.scss";

function Home(props) {
  return (
    <div>
      <div className='home'>
        <div className='home-overlay'>
          <NavBar />
          <div className='main-text d-flex flex-column justify-content-center align-items-center'>
            <h1 className='text-white w-50 text-center'>
              Read!, let the books take you on adventures to far-off lands
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
