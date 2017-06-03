/*
 *
 * ApidemoPage actions
 *
 */

import {
  GET_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  CREATE_POST,
  CREATED_POST,
  UPDATE_POST,
  UPDATED_POST,
  DELETE_POST,
  DELETED_POST,
  CLEAR_MESSAGE,
} from './constants';

export function createPost(post) {
  return {
    type: CREATE_POST,
    post,
  };
}

export function createdPost(post) {
  return {
    type: CREATED_POST,
    post,
  };
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    post,
  };
}

export function updatedPost(post) {
  return {
    type: UPDATED_POST,
    post,
  };
}

export function deletePost(post) {
  return {
    type: DELETE_POST,
    post,
  };
}

export function deletedPost(postId) {
  return {
    type: DELETED_POST,
    postId,
  };
}

export function getPosts() {
  return {
    type: GET_POSTS,
  };
}

export function postsLoaded(posts) {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts,
  };
}

export function postsLoadingError(error) {
  return {
    type: LOAD_POSTS_ERROR,
    error,
  };
}

export function clearMessage() {
  return {
    type: CLEAR_MESSAGE,
  };
}
