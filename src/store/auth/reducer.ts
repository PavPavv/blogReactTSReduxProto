import { SimpleAction } from "../storeTypes";
import { mergeTwoObjects } from "../../utils/funcs/mergeTwoObjects";
import { AUTH_TYPES } from "./types";
import *  as actionInterfaces from './actions';

export interface AuthState {
  loading: boolean;
  isAuth: boolean;
  error: boolean;
};

const initialState = {
  loading: false,
  isAuth: false,
  error: false,
};

// reducers helpers functions
const authStart = (state: AuthState, action: SimpleAction): AuthState => {
  return mergeTwoObjects(state, {
    loading: true,
    error: false,
  });
};

const authSuccess= (state: AuthState, action: SimpleAction): AuthState => {
  return mergeTwoObjects(state, {
    loading: false,
    error: false,
    isAuth: true,
  });
};

const authFail = (state: AuthState, action: SimpleAction): AuthState => {
  return mergeTwoObjects(state, {
    loading: false,
    error: true,
  });
};

const authLogout = (state: AuthState, action: SimpleAction): AuthState => {
  return mergeTwoObjects(state, {
    loading: false,
    error: false,
    isAuth: false,
  });
};

const authReducer = (state: AuthState = initialState, action: SimpleAction) => {
  switch (action.type) {
    case AUTH_TYPES.AUTH_START: return authStart(state, action);
    case AUTH_TYPES.AUTH_SUCCESS: return authSuccess(state, action);
    case AUTH_TYPES.AUTH_FAIL: return authFail(state, action);
    case AUTH_TYPES.AUTH_LOGOUT: return authLogout(state, action);
    default: return state;
  };
};

export default authReducer;