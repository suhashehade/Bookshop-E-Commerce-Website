import React from "react";

function Quotation(props) {
  let quote = props.quotation;
  return (
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
  );
}

export default Quotation;
