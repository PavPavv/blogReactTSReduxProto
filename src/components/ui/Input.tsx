import { useState } from 'react';
import { makeStyles, Theme } from "@material-ui/core/styles";

import hiddenIcon from '../../assets/icons/hide-pass.svg';
import shownIcon from '../../assets/icons/show-pass.svg';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '12px 22px',
    fontSize: 16,
    outline: 'none',
    borderRadius: '5px',
    border: `2px solid ${theme.palette.primary.dark}`,
    color: theme.palette.primary.dark,
    background: theme.palette.info.main,
  },
  inputError: {
    width: '100%',
    padding: '12px 22px',
    fontSize: 16,
    outline: 'none',
    borderRadius: '5px',
    border: `2px solid ${theme.palette.error.main}`,
    color: theme.palette.primary.dark,
    background: theme.palette.info.main,
  },
  label: {
    position: 'absolute',
    top: -7,
    left: 10,
    display: 'block',
    padding: '1px 8px',
    fontSize: 12,
    color: theme.palette.primary.dark,
    background: theme.palette.info.main,
  },
  passIcon: {
    position: 'absolute',
    top: 11,
    right: 15,
    display: 'block',
    width: 26,
    height: 26,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    cursor: 'pointer',
  },
}));

type InputProps = {
  id: string;
  name: string;
  type: string;
  label: string;
  inputRef?: any;
  changed: any;
  blured: any;
  inputValue: string;
  ph?: string;
  error?: boolean;
};

const Input = ({ id, name, type, label, inputRef, changed, blured, inputValue, ph, error }: InputProps): JSX.Element => {
  const classes = useStyles();
  const [inputType, setInputType] = useState(type);
  const [isHidden, setIsHidden] = useState(false);
  const isPassword = type === 'password';

  const togglePassHandler = (): void => {
    setIsHidden(!isHidden);
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
  };

  return (
    <div className={classes.root}>
      <label htmlFor={id} className={classes.label}>{label}</label>
      <input 
        id={id}
        name={name}
        type={inputType}
        className={error ? classes.inputError : classes.input}
        ref={inputRef}
        onChange={changed}
        onBlur={blured}
        value={inputValue}
        placeholder={ph}
      />
      {isPassword && 
        <div 
          className={classes.passIcon} 
          onClick={togglePassHandler}
          style={isHidden ? {  backgroundImage: `url(${shownIcon})`, } : {  backgroundImage: `url(${hiddenIcon})`, }}
        ></div>
      }
    </div>
  );
};

export default Input;