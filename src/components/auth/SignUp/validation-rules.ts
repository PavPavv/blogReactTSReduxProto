import * as Yup from 'yup';

// form validation
export const validationRules = Yup.object({
  name: Yup
    .string()
    .min(2, 'Login or password must be at least 6 characters long')
    .required('Please, enter your name'),
  email: Yup
    .string()
    .email()
    .required('Please, enter your email'),
  login: Yup
    .string()
    .min(6, 'Login or password must be at least 6 characters long')
    .required('Please, create login'),
  password: Yup
    .string()
    .min(6, 'Login or password must be at least 6 characters long')
    .required('Please, create password'),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please, confirm password'),  
});