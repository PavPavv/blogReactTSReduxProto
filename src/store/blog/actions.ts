import { Dispatch } from 'redux';

import { SERVER_PREFIX } from '../../fakeServer/fakeServer';
import { SimpleAction } from '../storeTypes';
import { BLOG_TYPES } from './types';

//  interfaces
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

export interface SetArticleId {
  type: string;
  payload: number;
};

export interface SetPickedArticle {
  type: string;
  payload: Article;
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

export const setArticleId = (id: number): SetArticleId => {
  localStorage.setItem(`${SERVER_PREFIX}_articleId`, `${id}`);
  let currentArticleId = localStorage.getItem(`${SERVER_PREFIX}_articleId`);

  if (!currentArticleId) currentArticleId = '0';

  return {
    type: BLOG_TYPES.SET_ARTICLE_ID,
    payload: +currentArticleId,
  }
}

export const setPickedArticle = (article: Article): SetPickedArticle => {
  return {
    type: BLOG_TYPES.SET_PICKED_ARTICLE,
    payload: article,
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

export const articleThunk = () => {
  return async (dispatch: Dispatch): Promise<any> => {
    dispatch(blogStart());

    try {
      let currentArticleId = localStorage.getItem(`${SERVER_PREFIX}_articleId`);
      const request = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${currentArticleId}`);
      const response = await request.json();
      
      if (response && Array.isArray(response)) {
        dispatch(setPickedArticle(response[0]));
      }

    } catch (err) {
      console.log(err)
      dispatch(blogFail(err));
    }
  };
};