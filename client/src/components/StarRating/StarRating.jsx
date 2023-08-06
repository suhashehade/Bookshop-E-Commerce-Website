import React from "react";
import { Icon } from '@iconify/react'; 
function StarRating() {
  return (
    <div className='star-rating mb-3'>
      {[...Array(5)].map((star, i) => {
        return <Icon icon="material-symbols:star" color="orange" width="25" height="25" key={i}/>;
      })}
    </div>
  );
}

export default StarRating;
