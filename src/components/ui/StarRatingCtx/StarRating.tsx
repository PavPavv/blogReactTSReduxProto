import React, { useState } from 'react';

import { StarRatingCtx } from '../../../context/starRating';

//  ui
import StarRatingLabel from './StarRatingLabel';
import StarList from './StarList';

type StarRatingProps ={
  defaultState?: number;
  emptyColor?: string;
  fillColor?: string;
  height?: number;
  labelText: () => string;
  maxValue?: number;
  onChangeHover: (value: number | null) => void;
  onChangeValue: (value: number) => void;
  readOnly?: boolean;
  width?: number;
};

const StarRating = ({
  defaultState = 0,
  emptyColor = 'grey',
  fillColor = '#edaa10',
  width = 100,
  height = 100,
  labelText,
  maxValue = 5,
  onChangeHover,
  onChangeValue,
  readOnly = true,
}: StarRatingProps): JSX.Element => {
  const [rating, setRating] = useState(defaultState);
  const [hover, setHover] = useState<number | null>(null);

  const setRatingFn = (value: number): void => {
    if (readOnly) return;
    setRating(value);
    onChangeValue(value);
  };

  const setHoverFn = (value: number | null): void => {
    if (readOnly) return;
    setHover(value);
    onChangeHover(value);
  };

  return (
    <>
      <StarRatingCtx.Provider value={{
        maxValue,
        emptyColor,
        fillColor,
        width,
        height,
        hover,
        labelText,
        rating,
        setHover: setHoverFn,
        setRating: setRatingFn,
      }}>
        <>
          <StarRatingLabel />
          <StarList />
        </>
      </StarRatingCtx.Provider>
    </>
  );
};

export default StarRating;
