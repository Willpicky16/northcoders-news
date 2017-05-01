import React from 'react';

function CommentVote (props) {
  return (
    <div className="pull-right votes">
      <button className="btn btn-success" onClick={props.handleClick.bind(null, 'up')}><i className="fa fa-thumbs-o-up"></i></button>
      <button className="btn btn-danger" onClick={props.handleClick.bind(null, 'down')}><i className="fa fa-thumbs-o-down"></i></button>
    </div>
  );
}

export default CommentVote;
