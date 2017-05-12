import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles, voteArticle } from '../actions/actions';
import { ProgressBar, Alert } from 'react-bootstrap';

import '../css/main.css';

import ArticleCard from './ArticleCard';
import Banner from './Banner';

class ArticleList extends Component {
  componentDidMount () {
    this.props.fetchArticles();
  }
  render () {
    if (this.props.loading) return <ProgressBar active now={100}/>;
    if (this.props.error) return (
      <Alert bsStyle="danger">
        <h4>Oh snap! You got an error!</h4>
        <p>Sadly you got an error! Please try again later :(</p>
      </Alert>
    );
    return (
      <div className="container">
        <Banner topic="All"/>
        <div id="ArticleList" className="articleList">
          {this.renderArticles()}
        </div>
      </div>
    );
  }
  renderArticles () {
    return this.props.articles.sort((a, b) => {
      return b.votes - a.votes;
    }).map((article, i) => {
      return <ArticleCard key={i} article_id={article._id} title={article.title} votes={article.votes} topic={article.belongs_to} author={article.created_by} comments={article.comment_count} voteArticle={this.props.voteArticle.bind(null, article._id)}/>;
    });
  }
}

function mapStateToProps (state) {
  return {
    articles: state.articles.articles,
    loading: state.articles.loading,
    error: state.articles.error
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticles: () => {
      dispatch(fetchArticles());
    },
    voteArticle: (id, vote) => {
      dispatch(voteArticle(id, vote));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
