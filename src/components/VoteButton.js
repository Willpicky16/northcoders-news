import React from 'react';

function VoteButtons (props) {
  return (
    <div className="pull-right votes">
      <button className="btn btn-success" onClick={props.handleClick.bind(null, 'up')}><i className="glyphicon glyphicon-chevron-up"></i></button>
      <span><b> {props.votes} </b></span>
      <button className="btn btn-danger" onClick={props.handleClick.bind(null, 'down')}><i className="glyphicon glyphicon-chevron-down"></i></button>
    </div>
  );
}

export default VoteButtons;
