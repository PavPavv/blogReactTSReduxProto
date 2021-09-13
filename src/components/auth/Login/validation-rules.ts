import * as Yup from 'yup';

// form validation
export const validationRules = Yup.object({
  login: Yup
    .string()
    .min(6, 'Login or password must be at least 6 characters long')
    .required('Please, enter login'),
  password: Yup
    .string()
    .min(6, 'Login or password must be at least 6 characters long')
    .required('Please, enter password'),  
});