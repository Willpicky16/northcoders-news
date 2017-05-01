import { combineReducers } from 'redux';

import articles from './articles.reducer.js';
import comments from './comments.reducer.js';

export default combineReducers ({
  articles,
  comments
});
