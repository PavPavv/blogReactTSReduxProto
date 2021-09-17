import { SimpleAction } from "../storeTypes";
import { mergeTwoObjects } from "../../utils/funcs/mergeTwoObjects";
import { BLOG_TYPES } from "./types";
import { Article } from "./actions";
import { SuccessBlogAction, FailBlogAction } from "./actions";

export interface BlogState {
  loading: boolean;
  data: Article[] | [];
  error: any | null;
};

type BlogAction = SimpleAction & SuccessBlogAction & FailBlogAction;

const initialState: BlogState = {
  loading: false,
  data: [],
  error: null,
};

// reducers helpers functions
const blogStart = (state: BlogState, action: SimpleAction): BlogState => {
  return mergeTwoObjects(state, {
    loading: true,
    error: null,
  });
};

const blogSuccess= (state: BlogState, action: SuccessBlogAction): BlogState => {
  return mergeTwoObjects(state, {
    loading: false,
    data: action.payload,
    error: null,
  });
};

const blogFail = (state: BlogState, action: FailBlogAction): BlogState => {
  return mergeTwoObjects(state, {
    loading: false,
    error: action.payload,
  });
};

const blogReducer = (state: BlogState = initialState, action: BlogAction) => {
  switch (action.type) {
    case BLOG_TYPES.BLOG_START: return blogStart(state, action);
    case BLOG_TYPES.BLOG_SUCCESS: return blogSuccess(state, action);
    case BLOG_TYPES.BLOG_FAIL: return blogFail(state, action);
    default: return state;
  }
};

export default blogReducer;