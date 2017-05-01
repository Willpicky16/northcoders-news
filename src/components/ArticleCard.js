import React from 'react';

const ArticleCard = function (props) {
  return (
    <div className="well">
      <div className="pull-right votes">
        <button className="btn btn-success"><i className="glyphicon glyphicon-chevron-up"></i></button>
        <span><b> {props.votes} </b></span>
        <button className="btn btn-danger"><i className="glyphicon glyphicon-chevron-down"></i></button>
      </div>
      <div>
        <h3><a href={`/articles/${props.article_id}`}>{props.title}</a></h3>
        <p>Submitted by <b>{props.author}</b> to <b><a href={`/topics/${props.topic}/articles`}>{props.topic}</a></b></p>
        <p>{`${props.comments} comments`}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
