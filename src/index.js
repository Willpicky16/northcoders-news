import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import '../public/bootstrap/css/bootstrap.css';

import reducer from './reducers/index.reducer';

import App from './components/App';
import ArticleList from './components/ArticleList';
import SeparateArticlePage from './components/SeparateArticlePage';
import TopicPage from './components/TopicPage';
import UserPage from './components/UserPage';

const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={ArticleList}/>
        <Route path='/articles/:article_id' component={SeparateArticlePage}/>
        <Route path='/topics/:topic/articles' component={TopicPage}/>
        <Route path='/users' component={UserPage}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
