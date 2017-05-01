import React, { Component } from 'react';

export default class NavBar extends Component {
  render () {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <a className="navbar-brand" href="/">Northcoders News</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><a href="/">All Articles</a></li>
              <li><a href="/topics/football/articles">Football</a></li>
              <li><a href="/topics/coding/articles">Coding</a></li>
              <li><a href="/topics/cooking/articles">Cooking</a></li>
              <li><a href="/users">Users</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
