import React from 'react';
import { FaStar } from 'react-icons/fa';

type StarProps = {
  isSelected?: boolean;
  clicked: () => void;
};

const Star = ({ isSelected = false, clicked }: StarProps): JSX.Element => {
  return <FaStar
    color={isSelected ? 'red' : 'grey'}
    size={40}
    onClick={clicked}
    style={{ cursor: 'pointer' }}
  />
};

export default Star;
