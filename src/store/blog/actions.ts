import { Dispatch } from 'redux';

import { SimpleAction } from '../storeTypes';
import { BLOG_TYPES } from './types';

export interface Article {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export interface SuccessBlogAction {
  type: string;
  payload: Article[];
};

export interface FailBlogAction {
  type: string;
  payload: any;
};

// action creaters
export const blogStart = (): SimpleAction => {
  return {
    type: BLOG_TYPES.BLOG_START,
  };
};

export const blogSuccess = (data: Article[]): SuccessBlogAction => {
  return {
    type: BLOG_TYPES.BLOG_SUCCESS,
    payload: data,
  };
};

export const blogFail = (error: any): FailBlogAction => {
  return {
    type: BLOG_TYPES.BLOG_FAIL,
    payload: error,
  };
};

export const blogThunk = (queryParam: number, page: number) => {
  return async (dispatch: Dispatch): Promise<any> => {
    dispatch(blogStart());

    try {
      const request = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${queryParam}&_page=${page}`);
      const response = await request.json();
      
      if (response && Array.isArray(response)) {
        dispatch(blogSuccess(response));
      }

    } catch (err) {
      console.log(err)
      dispatch(blogFail(err));
    }
  };
};