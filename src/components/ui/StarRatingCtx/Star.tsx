import React, { useContext } from 'react';

import { StarRatingCtx } from '../../../context/starRating';

type StarProps = {
  value: number;
};

const Star = ({ value }: StarProps): JSX.Element => {
  const {
    hover,
    fillColor,
    emptyColor,
    rating = 0,
    width,
    height,
    setRating,
    setHover
  } = useContext(StarRatingCtx);

  const handleClick = (): void => {
    if (setRating) {
      setRating(value);
    }
  };

  const handleMouseEnter = (): void => {
    if (setHover) {
      setHover(value);
    }
  };

  const handleMouseLeave = (): void => {
    if (setHover) {
      setHover(null);
    }
  };

  return (
    <div
      className="star"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        data-rating={value}
        fill={value <= (hover || rating) ? fillColor : emptyColor}
        height={height}
        viewBox="0 0 25 25"
        width={width}
      >
        <polygon
          strokeWidth="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
};

export default Star;
