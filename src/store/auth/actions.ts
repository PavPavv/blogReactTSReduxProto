import { Dispatch } from 'redux';

import { SimpleAction } from '../storeTypes';
import { AUTH_TYPES } from "./types";
import { fakeTokenServer } from "../../fakeServer/fakeServer";
import { SERVER_PREFIX } from '../../fakeServer/fakeServer';

// interfaces
export interface Auth {
  login: string;
  password: string;
};

// action creaters
export const authStart = (): SimpleAction => {
  return {
    type: AUTH_TYPES.AUTH_START,
  };
};

export const authSuccess = (): SimpleAction => {
  return {
    type: AUTH_TYPES.AUTH_SUCCESS,
  };
};

export const authFail = (): SimpleAction => {
  return {
    type: AUTH_TYPES.AUTH_FAIL,
  };
};

export const logout = (): SimpleAction => {
  localStorage.removeItem(`${SERVER_PREFIX}_token`);
  return {
    type: AUTH_TYPES.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime: number): any => {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};

export const authThunk = (login: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(authStart());
    const authData: Auth = {
      login,
      password,
    };

    try {
      const response = await fakeTokenServer(authData);

      if ('token' in response) {
        dispatch(authSuccess());
        const token = response.token;
        const expirationTime = response.expires_in;
        dispatch(checkAuthTimeout(+expirationTime));
        localStorage.setItem(`${SERVER_PREFIX}_token`, token);
      } else {
        dispatch(authFail());
      }

    } catch (err) {
      console.log(err);
    }
    
  }
};