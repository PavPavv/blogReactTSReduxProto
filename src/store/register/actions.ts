import { Dispatch } from 'redux';

import { SimpleAction } from '../storeTypes';
import { REGISTER_TYPES } from './types';
import { fakeRegisterServer } from '../../fakeServer/fakeServer';
import { RegisterError } from '../../components/auth/SignUp/SignUpForm';

// interfaces
export interface User {
  name: string;
  email: string;
  login: string;
  password: string;
};

export interface RegisterActionError {
  type: string;
  payload: null | RegisterError;
};

// action creaters
export const registerStart = (): SimpleAction => {
  return {
    type: REGISTER_TYPES.REGISTER_START,
  };
};

export const registerSuccess = (): SimpleAction => {
  return {
    type: REGISTER_TYPES.REGISTER_SUCCESS,
  };
};

export const registerFail = (error: RegisterError): RegisterActionError => {
  return {
    type: REGISTER_TYPES.REGISTER_FAIL,
    payload: error,
  };
};

//
export const registerThunk = (userData: User) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(registerStart());

      //  check user's data on a server and return response if it is ok or not
      const response = await fakeRegisterServer(userData);
      const result = response.status;

      if (result === '200') {
        dispatch(registerSuccess());
      } else if (result === '400') {
        dispatch(registerFail(response));
      }
    } catch (err) {
      console.error(err);
    }
  };
};