import React, { useContext } from 'react';

import { StarRatingCtx } from '../../../context/starRating';

const StarRatingLabel = (): JSX.Element => {
  const { rating = 0, labelText } = useContext(StarRatingCtx);
  
  return (
    <div>{labelText && labelText(rating)}</div>
  );
};

export default StarRatingLabel;
