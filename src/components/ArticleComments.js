import React from 'react';
import CommentVote from './CommentVote';

const ArticleComments = function (props) {
  return (
    <div className="well">
      <p className="pull-right"><b>Votes:</b> {props.votes}</p>
      <p><b>{props.author}:</b></p>
      <div className="pull-right"><CommentVote handleClick={props.voteComment}/></div>
      <p>{props.text}</p>
    </div>
  );
};

export default ArticleComments;
