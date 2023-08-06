import React from "react";
import { ListGroup } from "react-bootstrap";
import "./Indexes.scss";

function Indexes(props) {
  let categories = props.categories;
  return (
    <div>
      <div className='indexs'>
        <ListGroup variant='flush' bsPrefix='list-group'>
          <ListGroup.Item bsPrefix='list-group-item'>
            <a href='/'>All books</a>
          </ListGroup.Item>
          {categories.map((c) => (
            <ListGroup.Item key={c.id} bsPrefix='list-group-item'>
              <a href='/'>{c.name}</a>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default Indexes;
