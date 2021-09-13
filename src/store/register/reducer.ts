import { SimpleAction } from "../storeTypes";
import { REGISTER_TYPES } from "./types";
import * as actionInterfaces from './actions';
import { mergeTwoObjects } from "../../utils/funcs/mergeTwoObjects";
import { RegisterError } from '../../components/auth/SignUp/SignUpForm';

export interface RegisterState {
  loading: boolean;
  registerSuccess: boolean;
  error: null | RegisterError;
};

type RegisterActions = SimpleAction & actionInterfaces.RegisterActionError;

const initialState = {
  loading: false,
  registerSuccess: false,
  error: null,
};

// reducers helpers functions
const registerStart = (state: RegisterState, action: SimpleAction): RegisterState => {
  return mergeTwoObjects(state, {
    loading: true,
    error: null,
  });
};

const registerSuccess = (state: RegisterState, action: SimpleAction): RegisterState => {
  return mergeTwoObjects(state, {
    loading: false,
    error: null,
    registerSuccess: true,
  });
};

const registerFail = (state: RegisterState, action: actionInterfaces.RegisterActionError): RegisterState => {
  return mergeTwoObjects(state, {
    loading: true,
    registerSuccess: false,
    error: action.payload,
  });
};

const registerReducer = (state: RegisterState = initialState, action: RegisterActions) => {
  switch (action.type) {
    case REGISTER_TYPES.REGISTER_START: return registerStart(state, action);
    case REGISTER_TYPES.REGISTER_SUCCESS: return registerSuccess(state, action);
    case REGISTER_TYPES.REGISTER_FAIL: return registerFail(state, action);
    default: return state;
  }
}

export default registerReducer;