import * as types from './types';
import {ROOT} from '../../config';
import axios from 'axios';

export function fetchArticles () {
  return function (dispatch) {
    dispatch(fetchArticlesRequest());
    axios
      .get(`${ROOT}/articles`)
      .then ((res) => {
        dispatch(fetchArticlesSuccess(res.data.articles));
      })
      .catch((err) => {
        dispatch(fetchArticlesError(err));
      });
  };
}

export function fetchArticlesRequest () {
  return {
    type: types.FETCH_ARTICLES_REQUEST
  };
}

export function fetchArticlesSuccess (articles) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    data: articles
  };
}

export function fetchArticlesError (error) {
  return {
    type: types.FETCH_ARTICLES_ERROR,
    data: error
  };
}

export function fetchComments (article_id) {
  return function (dispatch) {
    dispatch(fetchCommentsRequest());
    axios
      .get(`${ROOT}/articles/${article_id}/comments`)
      .then((res) => {
        dispatch(fetchCommentsSuccess(res.data.comments));
      })
      .catch((err) => {
        dispatch(fetchCommentsError(err));
      });
  };
}

export function fetchCommentsRequest () {
  return {
    type: types.FETCH_COMMENTS_REQUEST
  };
}

export function fetchCommentsSuccess (comments) {
  return {
    type: types.FETCH_COMMENTS_SUCCESS,
    data: comments
  };
}

export function fetchCommentsError (err) {
  return {
    type: types.FETCH_COMMENTS_ERROR,
    data: err
  };
}

export function voteArticle (article_id, vote) {
  return function (dispatch) {
    dispatch(voteArticleRequest());
    axios
      .put(`${ROOT}/articles/${article_id}?vote=${vote}`)
      .then(res => {
        dispatch(voteArticleSuccess(res.data));
      })
      .catch(err => {
        dispatch(voteArticleError(err));
      });
  };
}

export function voteArticleRequest () {
  return {
    type: types.VOTE_ARTICLE_REQUEST
  };
}

export function voteArticleSuccess (votes) {
  return {
    type: types.VOTE_ARTICLE_SUCCESS,
    data: votes
  };
}

export function voteArticleError (error) {
  return {
    type: types.VOTE_ARTICLE_ERROR,
    data: error
  };
}

export function voteComment (comment_id, vote) {
  return function (dispatch) {
    dispatch(voteCommentRequest());
    axios
      .put(`${ROOT}/comments/${comment_id}?vote=${vote}`)
      .then(res => {
        dispatch(voteCommentSuccess(res.data));
      })
      .catch(err => {
        dispatch(voteCommentError(err));
      });
  };
}

export function voteCommentRequest () {
  return {
    type: types.VOTE_COMMENT_REQUEST
  };
}

export function voteCommentSuccess (votes) {
  return {
    type: types.VOTE_COMMENT_SUCCESS,
    data: votes
  };
}

export function voteCommentError (error) {
  return {
    type: types.VOTE_COMMENT_ERROR,
    data: error
  };
}
