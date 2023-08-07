import React from "react";
import "./Author.scss";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

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
        <div className='author-contact'>
          <ul className='list-unstyled w-100 h-100 d-flex justify-content-center align-items-center'>
            <li className='bg-light m-1 author-contact-info p-1'>
              <Link to={`tel:${author.phone}`}>
                <Icon
                  icon='gridicons:phone'
                  color='#000000'
                  width={20}
                  height={20}
                />
              </Link>
            </li>
            <li className='bg-light m-1 author-contact-info p-1'>
              <Link to={`mailto:${author.email}`}>
                <Icon
                  icon='ic:baseline-email'
                  color='#000000'
                  width={20}
                  height={20}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='body mt-1'>
        <h3 className='text-center'>{author.name}</h3>
      </div>
    </div>
  );
}

export default Author;
