import React, { Component } from 'react';

import '../css/main.css';

import NavBar from './NavBar';
import Footer from './Footer';

export default class App extends Component {
  render () {
    return (
      <div className="background">
        <NavBar />
        <div className="col-md-12 background">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object
};
