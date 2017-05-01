import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../actions/actions';
import {Alert, ProgressBar} from 'react-bootstrap';

import ArticleComments from './ArticleComments';

class CommentSection extends Component {
  componentDidMount () {
    this.props.fetchComments(this.props.articleId);
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
      <div className="ArticleList">
        {this.renderComments()}
      </div>
    );
  }
  renderComments () {
    return this.props.comments.map((comment, key) => {
      if (comment.belongs_to === this.props.articleId) {
        return <ArticleComments key={key} text={comment.body} author={comment.created_by} votes={comment.votes} />
      }
    });
  }
}

function mapStateToProps (state) {
  return {
    comments: state.comments.comments,
    error: state.comments.error
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchComments: (id) => {
      dispatch(fetchComments(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);
