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
            <a className="navbar-brand" href="/">Brand</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><a href="/">All Articles</a></li>
              <li><a href="/">Football</a></li>
              <li><a href="/">Coding</a></li>
              <li><a href="/">Cooking</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
