import React from 'react';
import VoteButton from './VoteButton';

const ArticleCard = function (props) {
  return (
    <div className="well">
      <VoteButton votes={props.votes} handleClick={props.voteArticle}/>
      <div>
        <h3><a href={`/articles/${props.article_id}`}>{props.title}</a></h3>
        <p>Submitted by <b>{props.author}</b> to <b><a href={`/topics/${props.topic}/articles`}>{props.topic}</a></b></p>
        <p>{`${props.comments} comments`}</p>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  votes: React.PropTypes.number,
  voteArticle: React.PropTypes.func,
  article_id: React.PropTypes.string,
  title: React.PropTypes.string,
  author: React.PropTypes.string,
  topic: React.PropTypes.string,
  comments: React.PropTypes.string
};


export default ArticleCard;
