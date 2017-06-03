/*
 *
 * ApidemoPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CREATED_POST,
  UPDATED_POST,
  DELETED_POST,
  GET_POSTS,
  LOAD_POSTS_SUCCESS,
  CLEAR_MESSAGE,
} from './constants';

const initialState = fromJS({
  loading: false,
  posts: [],
  message: '',
});

function apidemoPageReducer(state = initialState, action) {
  switch (action.type) {
    case CREATED_POST: {
      const posts = Object.assign([], state.get('posts'));
      let message = 'Post created successfully';

      // This is weird, the fake service always returns id = 101 for new posts
      // Remove the true condition logic for real service and just leave posts.push(action.post);
      const post101Exists = posts.filter((post) => post.id === 101);

      if (post101Exists.length > 0) {
        message = 'Sorry, no more new posts are allow to be created.';
      } else {
        posts.push(action.post);
      }

      return state.set('posts', posts)
            .set('message', message);
    }
    case UPDATED_POST: {
      const posts = Object.assign([], state.get('posts'));
      const postToUpdate = posts.filter((post) => post.id === action.post.id)[0];
      posts[posts.indexOf(postToUpdate)] = action.post;

      return state.set('posts', posts)
            .set('message', 'Post updated successfully');
    }
    case DELETED_POST: {
      const posts = Object.assign([], state.get('posts'));
      const postToDelete = posts.filter((post) => post.id === action.postId)[0];

      posts.splice(posts.indexOf(postToDelete), 1);

      return state.set('posts', posts)
            .set('message', 'Post deleted successfully');
    }
    case GET_POSTS:
      return state.set('loading', true);
    case LOAD_POSTS_SUCCESS:
      return state.set('loading', false)
        .set('posts', action.posts);
    case CLEAR_MESSAGE:
      return state.set('message', '');
    default:
      return state;
  }
}

export default apidemoPageReducer;
