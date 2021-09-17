import React, { useState, useEffect } from 'react';
import { makeStyles, Theme } from "@material-ui/core/styles";

//  ui
import search from '../../assets/icons/search.svg';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
  },
  searchTouched: {
    width: '100%',
    padding: '7px 20px 7px 10px',
    border: 0,
    borderBottom: `2px solid ${theme.palette.divider}`,
    fontSize:16,
    outline: 'none',
    backgroundColor: theme.palette.common.white,
  },
  search: {
    width: '100%',
    padding: '7px 20px 7px 10px',
    border: 0,
    borderBottom: `2px solid ${theme.palette.divider}`,
    fontSize:16,
    outline: 'none',
    backgroundColor: theme.palette.common.white,
    backgroundImage: `url(${search})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 20,
    backgroundPosition: '97% 10px'
  },
}));

type SeacrhProps = {
  ph?: string;
  searched: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
};

const Search = ({ ph, searched, inputValue }: SeacrhProps): JSX.Element => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue, value]);

  return (
    <div className={classes.root}>
      <input
        className={value ? classes.searchTouched : classes.search}
        type="search"
        placeholder={ph}
        onChange={searched}
      />
    </div>
  );
};

export default Search;