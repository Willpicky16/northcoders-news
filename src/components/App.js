import React, { Component } from 'react';

import NavBar from './NavBar';

export default class App extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <br /><br /><br />
        <div className="col-md-12">
          {this.props.children}
        </div>
      </div>
    );
  }
}
