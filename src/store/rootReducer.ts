import { combineReducers } from "redux";

import registerReducer from "./register/reducer";
import { RegisterState } from "./register/reducer";
import authReducer from "./auth/reducer";
import { AuthState } from "./auth/reducer";
import blogReducer from "./blog/reducer";
import { BlogState } from "./blog/reducer";

export interface StoreState {
  register: RegisterState;
  auth: AuthState;
  blog: BlogState;
};

const rootReducer = combineReducers<StoreState>({
  register: registerReducer,
  auth: authReducer,
  blog: blogReducer,
});

export default rootReducer;