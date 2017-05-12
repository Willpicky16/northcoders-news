import React from 'react';
import { Badge } from 'react-bootstrap';

const SeparateArticle = function (props) {
  return (
    <div className="">
      <h2>{props.title} <Badge>Votes: {props.votes}</Badge></h2>
      <p>{props.text}</p>
      <p>Submitted by <b>{props.author}</b> to <b><a href={`/topics/${props.topic}/articles`}>{props.topic}</a></b></p>
      <p>{`${props.comments} comments`}</p>
    </div>
  );
};

export default SeparateArticle;
