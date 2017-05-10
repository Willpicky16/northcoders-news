import React from 'react';
import CommentVote from './CommentVote';
import moment from 'moment';

const ArticleComments = function (props) {
  return (
    <div className="well">
      <p className="pull-right"><b>Votes:</b> {props.votes}</p>
      <p><b>{props.author}:</b></p>
      <div className="pull-right"><CommentVote handleClick={props.voteComment}/></div>
      <p>{props.text}</p>
      <p>{getTime(props.time)}</p>
    </div>
  );
};

function getTime (num) {
  let date = moment(num)
  return date.format('MMMM Do YYYY, h:mm:ss a')
}

export default ArticleComments;
