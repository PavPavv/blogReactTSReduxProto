import { SimpleAction } from "../storeTypes";
import { mergeTwoObjects } from "../../utils/funcs/mergeTwoObjects";
import { AUTH_TYPES } from "./types";

export interface AuthState {
  loading: boolean;
  isAuth: boolean;
  error: boolean;
  initialized: boolean;
};

const initialState: AuthState = {
  loading: false,
  isAuth: false,
  error: false,
  initialized: false,
};

// reducers helpers functions
const authStart = (state: AuthState, action: SimpleAction): AuthState => {
  return mergeTwoObjects(state, {
    loading: true,
    error: false,
    initialized: false,
  });
};

const authSuccess= (state: AuthState, action: SimpleAction): AuthState => {
  return mergeTwoObjects(state, {
    loading: false,
    error: false,
    isAuth: true,
    initialized: true,
  });
};

const authFail = (state: AuthState, action: SimpleAction): AuthState => {
  return mergeTwoObjects(state, {
    loading: false,
    error: true,
    initialized: false,
  });
};

const authLogout = (state: AuthState, action: SimpleAction): AuthState => {
  return mergeTwoObjects(state, {
    loading: false,
    error: false,
    isAuth: false,
    initialized: false,
  });
};

const authInitialized = (state: AuthState, action: SimpleAction): AuthState => {
  return mergeTwoObjects(state, {
    initialized: false,
  });
};

const authReducer = (state: AuthState = initialState, action: SimpleAction) => {
  switch (action.type) {
    case AUTH_TYPES.AUTH_START: return authStart(state, action);
    case AUTH_TYPES.AUTH_SUCCESS: return authSuccess(state, action);
    case AUTH_TYPES.AUTH_INITIAL: return authInitialized(state, action);
    case AUTH_TYPES.AUTH_FAIL: return authFail(state, action);
    case AUTH_TYPES.AUTH_LOGOUT: return authLogout(state, action);
    default: return state;
  };
};

export default authReducer;