import { combineReducers } from 'redux';
import posts from './reducers/posts';
export default combineReducers({
  posts,
  appTitle: (state = 'Dion Redux App', action) => state
});
