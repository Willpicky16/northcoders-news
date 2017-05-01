import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import '../public/bootstrap/css/bootstrap.css';

import App from './components/App';
import ArticleList from './components/ArticleList';

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={ArticleList}/>
      </Route>
    </Router>,
  document.getElementById('app')
);
