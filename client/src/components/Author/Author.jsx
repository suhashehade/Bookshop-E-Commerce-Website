import React from "react";
import "./Author.scss";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Author(props) {
  let author = props.author;
  return (
    <div className='author m-2'>
      <div className='auhtor-picture m-auto'>
        <img
          alt={author.name}
          src={author.picture}
          width='100%'
          height='100%'
        ></img>
        <div className='author-contact'>
          <ul className='list-unstyled w-100 h-100 d-flex justify-content-center align-items-center'>
            <li className='bg-light author-contact-info'>
              <Link to={`tel:${author.phone}`}>
                <Icon
                  className='phone-icon'
                  icon='gridicons:phone'
                  color='#000000'
                />
              </Link>
            </li>
            <li className='bg-light author-contact-info'>
              <Link to={`mailto:${author.email}`}>
                <Icon
                  className='email-icon'
                  icon='ic:baseline-email'
                  color='#000000'
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
