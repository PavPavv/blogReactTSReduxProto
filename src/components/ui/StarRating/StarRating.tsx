import React from 'react';
import CSS from 'csstype';

import { createArr } from '../../../utils/funcs/arrays';

//  ui
import Star from './Star';

type StarRatingProps = {
  totalStars?: number;
  selectedNum?: number;
  setSelected: (value: number) => void;
  styles?: CSS.Properties;
};

const StarRating = ({
  totalStars = 5,
  selectedNum = 0,
  setSelected,
  styles = {}
}: StarRatingProps): JSX.Element => {
  return (
    <div style={{ padding: '10px', ...styles }}>
      {createArr(totalStars).map((star, index) => (
        <Star 
          key={index}
          isSelected={selectedNum > index}
          clicked={() => setSelected(index + 1)} 
        />)
      )}
    </div>
  );
};

export default StarRating;
