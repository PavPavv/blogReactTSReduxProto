import { combineReducers } from "redux";

import registerReducer from "./register/reducer";
import { RegisterState } from "./register/reducer";
import authReducer from "./auth/reducer";
import { AuthState } from "./auth/reducer";

export interface StoreState {
  register: RegisterState;
  auth: AuthState;
};

const rootReducer = combineReducers<StoreState>({
  register: registerReducer,
  auth: authReducer,
});

export default rootReducer;