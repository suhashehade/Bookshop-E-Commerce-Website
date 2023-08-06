import React from "react";
import "./Author.scss";

function Author(props) {
  let author = props.author;
  return (
    <div className='author m-2 p-3'>
      <div className='auhtor-picture m-auto'>
        <img
          alt={author.name}
          src={"http://localhost:4000/uploads/authors/" + author.picture}
          width='100%'
          height='100%'
        ></img>
      </div>
      <div className='body mt-1'>
        <h3 className="text-center">{author.name}</h3>
      </div>
    </div>
  );
}

export default Author;
