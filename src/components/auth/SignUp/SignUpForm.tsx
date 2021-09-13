import { useState, useEffect } from 'react';
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';

import Input from "../../ui/Input";
import InputError from '../../ui/InputError';
import Box from "../../ui/Box";
import MainButton from "../../ui/MainButton";
import { fields } from "./signUpFields";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 400,
    width: '100%',
    boxSizing: 'border-box',
  },
  link: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
}));

type Field = {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
};

export type RegisterError = {
  status: string;
  code: string;
  message: string;
};  

type SignUpFormProps = {
  formik: any;
  toggleLoginHandler: () => void;
  error: null | RegisterError;
};

const SignUpForm = ({ formik, toggleLoginHandler, error }: SignUpFormProps): JSX.Element => {
  const classes = useStyles();
  const formTouched = Object.keys(formik.touched).length > 0;
  const errorCode = error?.code;
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    if (errorCode) {
      if (errorCode === 'Bad name') {
        setInputError('name');
      } else if (errorCode === 'Bad email') {
        setInputError('email');
      } else if (errorCode === 'Bad login') {
        setInputError('login');
      }
    }

    console.log('inputError', inputError)
  }, [errorCode, inputError]);


  return (
    <form className={classes.root} onSubmit={formik.handleSubmit}>
      {fields.map((field: Field) => {
        console.log(field.name === inputError)
        return (
          <Box mb="30" key={field.id}>
            <>
              <Input
                id={field.id}
                name={field.name}
                type={field.type}
                label={field.label}
                changed={formik.handleChange}
                blured={formik.handleBlur}
                inputValue={formik.values[`${field.name}`]}
                ph={field.placeholder}
                error={inputError === field.name}
              />
              {formik.touched[`${field.name}`] && formik.errors[`${field.name}`] ? (
              <InputError>{formik.errors[`${field.name}`]}</InputError>
            ) : null}
            {inputError == field.name ? <InputError>{`${field.label} already exists`}</InputError> : null}
            </>
          </Box>
        );
      })}
      
      <Box mt="30"> 
        <MainButton type="submit" clicked={() => {}} isDisabled={formTouched ? formik.isValid : false}>Sign up</MainButton>
      </Box>
      
      <Box>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Typography variant="subtitle2">Already have an account?</Typography>
          </Grid>
          <Grid item>
            <Box mr="5" ml="5" />
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" className={classes.link} onClick={toggleLoginHandler}>Log in</Typography>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default SignUpForm;

