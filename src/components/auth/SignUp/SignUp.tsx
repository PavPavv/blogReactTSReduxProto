import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import SignUpForm from './SignUpForm';
import SignUpSuccess from './SignUpSuccess';
import * as registerActions from '../../../store/register/actions';
import { User } from '../../../store/register/actions';
import { validationRules } from './validation-rules';
import { StoreState } from '../../../store/rootReducer';


type SignUpProps = {
  toggleLogin: (isLoginPage: boolean) => void,
};

interface FormValues {
  name: string;
  email: string;
  login: string;
  password: string;
  confirmPassword: string;
};

const SignUp = ({ toggleLogin }: SignUpProps): JSX.Element => {
  const isRegistered = useSelector((state: StoreState) => state.register.registerSuccess);
  const error = useSelector((state: StoreState) => state.register.error);
  const loginRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      login: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationRules,
    onSubmit: (values: FormValues) => {
      const userData: User = {
        name: values.name,
        email: values.email,
        login: values.login,
        password: values.password,
      };
      dispatch(registerActions.registerThunk(userData));
    },
  });
  
  //  point at first, login field after page is loaded
  useEffect(() => {
    if (loginRef) {
      loginRef.current?.focus();
    };
  }, []);

  const toggleLoginHandler = (): void => {
    toggleLogin(true);
  };

  return (
    <>
      {isRegistered 
        ? <SignUpSuccess toggleLoginHandler={toggleLoginHandler} />
        : <SignUpForm formik={formik} toggleLoginHandler={toggleLoginHandler} error={error} />
      }
      
    </>
  );
};

export default SignUp;