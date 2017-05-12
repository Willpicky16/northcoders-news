import React, { Component } from 'react';

// import logo from '../../public/images/coding.png';
import '../css/banner.css';

export default class ArticleList extends Component {
  render () {
    if (this.props.topic === 'Users') return (
      <div className={`banner-${this.props.topic}`}>
        <h1 className="bannerTitle">All {this.props.topic}:</h1>
      </div>
    )
    return (
      <div className={`banner-${this.props.topic}`}>
        <h1 className="bannerTitle">{this.props.topic} Articles</h1>
      </div>
    );
  }
}
