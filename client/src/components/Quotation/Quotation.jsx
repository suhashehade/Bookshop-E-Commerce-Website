import React from "react";
import "./Quotation.scss";

function Quotation(props) {
  let quote = props.quotation;

  return (
    <div className='quote'>
      <div className='card m-3'>
        <div className='card-body'>
          <blockquote className='blockquote mb-0'>
            <p>{quote.quote}</p>
            <footer className='blockquote-footer'>
              <cite title='Source Title'>{quote.source}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Quotation;
