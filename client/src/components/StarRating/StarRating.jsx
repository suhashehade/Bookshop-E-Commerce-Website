import React from "react";
import { Icon } from "@iconify/react";
function StarRating() {
  return (
    <div className='star-rating mb-3'>
      {[...Array(5)].map((star, i) => {
        return (
          <Icon
            icon='material-symbols:star'
            className='star'
            color='orange'
            key={i}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
