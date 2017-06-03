/**
 * Gets posts from https://jsonplaceholder.typicode.com/
 */

import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GET_POSTS, CREATE_POST, UPDATE_POST, DELETE_POST } from './constants';
import { postsLoaded, postsLoadingError, createdPost, updatedPost, deletedPost } from './actions';

import request from '../../../utils/request';
const root = 'https://jsonplaceholder.typicode.com';

export function* createPost(action) {
  const requestURL = `${root}/posts`;

  try {
    // Call our request helper (see 'utils/request')
    const result = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.post),
    });

    yield put(createdPost(result));
  } catch (err) {
    yield put(postsLoadingError(err));
  }
}

export function* updatePost(action) {
  const requestURL = `${root}/posts/${action.post.id}`;

  try {
    // Call our request helper (see 'utils/request')
    const result = yield call(request, requestURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.post),
    });
    yield put(updatedPost(result));
  } catch (err) {
    yield put(postsLoadingError(err));
  }
}

export function* deletePost(action) {
  const requestURL = `${root}/posts/${action.post.id}`;

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, requestURL, {
      method: 'DELETE',
    });

    yield put(deletedPost(action.post.id));
  } catch (err) {
    yield put(postsLoadingError(err));
  }
}

export function* getPosts() {
  const requestURL = `${root}/posts`;

  try {
    // Call our request helper (see 'utils/request')
    const posts = yield call(request, requestURL);
    yield put(postsLoaded(posts));
  } catch (err) {
    yield put(postsLoadingError(err));
  }
}

export function* getData() {
  // Watches for GET_POSTS actions and calls getPosts when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(GET_POSTS, getPosts);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* postData() {
  const watcher = yield takeLatest(CREATE_POST, createPost);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* putData() {
  const watcher = yield takeLatest(UPDATE_POST, updatePost);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* deleteData() {
  const watcher = yield takeLatest(DELETE_POST, deletePost);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  getData,
  postData,
  putData,
  deleteData,
];
