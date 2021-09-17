import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
import { useFormik } from 'formik';

//  logic
import { validationRules } from './validation-rules';
import * as authActions from '../../../store/auth/actions';
import { StoreState } from '../../../store/rootReducer';
import { SERVER_PREFIX } from '../../../fakeServer/fakeServer';

//  ui
import Loader from '../../ui/Loader';
import Input from "../../ui/Input";
import InputError from '../../ui/InputError';
import Box from "../../ui/Box";
import MainButton from "../../ui/MainButton";


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

type LoginProps = {
  toggleLogin: (isLoginPage: boolean) => void,
};

interface FormValues {
  login: string;
  password: string;
};

const Login = ({ toggleLogin }: LoginProps): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loginRef = useRef<HTMLInputElement>(null);
  const error = useSelector((state: StoreState) => state.auth.error);
  const isAuth = useSelector((state: StoreState) => state.auth.isAuth);
  const loading = useSelector((state: StoreState) => state.auth.loading);
  const history = useHistory();
  const token = localStorage.getItem(`${SERVER_PREFIX}_token`);

  useEffect(() => {
    if (token) {
      history.push("/");
    }
  }, [history, token]);

  useEffect(() => {
    if (isAuth) {
      history.push('/');
    }
  }, [history, isAuth]);

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: validationRules,
    onSubmit: (values: FormValues) => {
      const { login, password } = values;
      dispatch(authActions.authThunk(login, password));
    },
  });

  //  point at first, login field after page is loaded
  useEffect(() => {
    if (loginRef) {
      loginRef.current?.focus();
    };
  }, []);

  const toggleLoginHandler = (): void => {
    toggleLogin(false);
  };

  const formTouched = Object.keys(formik.touched).length > 0;

  return (
    <>
      <form className={classes.root} onSubmit={formik.handleSubmit}>
        <Box>
          <>
            <Input 
              id="login"
              name="login"
              type="text"
              label="Login"
              inputRef={loginRef}
              changed={formik.handleChange}
              blured={formik.handleBlur}
              inputValue={formik.values.login}
            />
            {formik.touched.login && formik.errors.login ? (
              <InputError>{formik.errors.login}</InputError>
            ) : null}
          </>
        </Box>
        
        <Box mt="15">
          <>
            <Input
              id="password"
              name="password"
              type="password"
              label="Password"
              changed={formik.handleChange}
              blured={formik.handleBlur}
              inputValue={formik.values.password}
            />
            {formik.touched.login && formik.errors.password ? (
                <InputError>{formik.errors.password}</InputError>
              ) : null}
          </>
        </Box>
        
        {formik.touched.login && error ? (
          <InputError>The login and password combination is incorrect.</InputError>
        ) : null}

        <Box mt="30">
          <MainButton type="submit" clicked={() => {}} isDisabled={formTouched ? formik.isValid : false}>Log in</MainButton>
        </Box>
        
        <Box mt="30">
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <Typography variant="subtitle2">No account?</Typography>
            </Grid>
            <Grid item>
              <Box mr="5" ml="5" />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" className={classes.link} onClick={toggleLoginHandler}>Create one</Typography>
            </Grid>
          </Grid>
        </Box>
      </form>
      {loading && <Loader />}
    </>
  );
};

export default Login;