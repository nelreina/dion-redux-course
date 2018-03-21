import { omit, keyBy } from 'lodash';
import { api } from 'nelreina-web-utils';

const { get } = api;
export const deletePost = id => ({ type: 'DELETE_POST', payload: id });
export const addPost = item => ({ type: 'ADD_POST', payload: item });

export const fetchPost = () => async dispatch => {
  let posts = await get('/posts');
  posts = keyBy(posts, 'id');
  dispatch({ type: 'FETCH_POST_SUCCESS', payload: posts });
};

export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, action.payload);
    case 'DELETE_POST':
      return omit(state, action.payload);
    case 'FETCH_POST_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};
