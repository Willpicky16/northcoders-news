import React, { Component } from 'react';

import '../css/main.css';

import NavBar from './NavBar';

export default class App extends Component {
  render () {
    return (
      <div className="background">
        <NavBar />
        <div className="col-md-12 background">
          {this.props.children}
        </div>
      </div>
    );
  }
}
