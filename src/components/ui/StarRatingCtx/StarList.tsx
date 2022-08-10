import React, { useContext } from 'react';

import { StarRatingCtx } from '../../../context/starRating';

//  ui
import Star from './Star';

const StarList = (): JSX.Element => {
  const { maxValue } = useContext(StarRatingCtx);

  return (
    <div className="star-rating">
      {[...Array(maxValue)].map((star, index) => {
        const value = index + 1;
        return (
          <Star key={index} value={value} />
        );
      })}
    </div>
  );
};

export default StarList;
