import React from 'react';

const ArticleComments = function (props) {
  return (
    <div className="well">
      <p className="pull-right"><b>Votes:</b> {props.votes}</p>
      <p><b>{props.author}:</b></p>
      <p>{props.text}</p>
    </div>
  );
};

export default ArticleComments;
