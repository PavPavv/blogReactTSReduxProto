import { SimpleAction } from "../storeTypes";
import { mergeTwoObjects } from "../../utils/funcs/mergeTwoObjects";
import { BLOG_TYPES } from "./types";
import { Article } from "./actions";
import { SuccessBlogAction, FailBlogAction } from "./actions";
import { SERVER_PREFIX } from '../../fakeServer/fakeServer';

export interface BlogState {
  loading: boolean;
  data: Article[] | [];
  error: any | null;
  articleId: number;
  article: Article | null;
};

type BlogAction = SimpleAction & SuccessBlogAction & FailBlogAction;

//  get articleId from server 
let currentArticleId = Number(localStorage.getItem(`${SERVER_PREFIX}_articleId`));
if (!currentArticleId) currentArticleId = 0;



const initialState: BlogState = {
  loading: false,
  data: [],
  error: null,
  articleId: currentArticleId,
  article: null,
};

// reducers helpers functions
const blogStart = (state: BlogState, action: SimpleAction): BlogState => {
  return mergeTwoObjects(state, {
    loading: true,
    error: null,
  });
};

const blogSuccess = (state: BlogState, action: SuccessBlogAction): BlogState => {
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

const setArticleId = (state: BlogState, action: SuccessBlogAction): BlogState => {
  return mergeTwoObjects(state, {
    articleId: action.payload,
  });
};

const setPickedArticle = (state: BlogState, action: SuccessBlogAction): BlogState => {
  return mergeTwoObjects(state, {
    article: action.payload,
    loading: false,
    error: null,
  });
};

const blogReducer = (state: BlogState = initialState, action: BlogAction) => {
  switch (action.type) {
    case BLOG_TYPES.BLOG_START: return blogStart(state, action);
    case BLOG_TYPES.BLOG_SUCCESS: return blogSuccess(state, action);
    case BLOG_TYPES.BLOG_FAIL: return blogFail(state, action);
    case BLOG_TYPES.SET_ARTICLE_ID: return setArticleId(state, action);
    case BLOG_TYPES.SET_PICKED_ARTICLE: return setPickedArticle(state, action);
    default: return state;
  }
};

export default blogReducer;