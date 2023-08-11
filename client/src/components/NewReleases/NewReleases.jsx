import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./NewReleases.scss";

function NewReleases(props) {
  let books = props.books;
  return (
    <div className='newReleases p-5' id='newReleases'>
      <h2>What's new?</h2>
      <Carousel
        slide={true}
        fade={true}
        indicators={false}
        controls={false}
        interval={3000}
        className='h-100'
      >
        {books.map((b) => (
          <Carousel.Item key={b._id}>
            <div className='row p-5'>
              <div className='col-md-6'>
                <div className='mb-3 d-flex flex-column align-items-center justify-content-center'>
                  <img
                    width='50%'
                    height='80%'
                    src={b.cover}
                    alt='First slide'
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                  <h3>{b.title}</h3>
                  <p>By: {b.author.name}</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default NewReleases;
