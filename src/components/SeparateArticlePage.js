import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles, addComment } from '../actions/actions';
import { ProgressBar, Alert, Button } from 'react-bootstrap';
import SeparateArticle from './SeparateArticle';
import CommentSection from './CommentSection';
import CommentForm from './CommentForm';

class ArticlePage extends Component {
  constructor (props) {
    super (props);
    this.state = {
      showCommentBox: false,
      showComments: false
    };
    this.onClick = this.onClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount () {
    this.props.fetchArticles();
  }
  onClick (event) {
    event.preventDefault();
    this.setState({showCommentBox: !this.state.showCommentBox});
  }
  handleClick (event) {
    event.preventDefault();
    this.setState({showComments: !this.state.showComments});
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
      <div>
        <div className="">
          <a href="/"><button className="btn btn-primary">Back</button></a>
        </div>
        <div className="ArticleList">
          {this.renderArticles()}
          <span>
            <Button className="btn btn-primary pull-right" onClick={this.onClick} href="#">Add New Comment</Button>
            {this.state.showCommentBox && <CommentForm addComment={this.props.addComment.bind(null, this.props.params.article_id)} / >}
          </span>
          <span>
            <Button className="btn btn-primary" onClick={this.handleClick} href="#">Show Comments</Button>
            {this.state.showComments && <CommentSection articleId={this.props.params.article_id}/>}
          </span>
        </div>
      </div>
    );
  }
  renderArticles () {
    return this.props.articles.map((article, key) => {
      if (article._id === this.props.params.article_id) {
        return <SeparateArticle key={key} article_id={article._id} title={article.title} text={article.body} votes={article.votes} topic={article.belongs_to} author={article.created_by} comments={article.comment_count}/>;
      }
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
    addComment: (id, comment) => {
      dispatch(addComment(id, comment));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
