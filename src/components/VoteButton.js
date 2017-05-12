import React from 'react';

function VoteButtons (props) {
  return (
    <div className="pull-right votes">
      <button className="btn btn-success" onClick={props.handleClick.bind(null, 'up')}><i className="fa fa-thumbs-o-up"></i></button>
      <span><b> {props.votes} </b></span>
      <button className="btn btn-danger" onClick={props.handleClick.bind(null, 'down')}><i className="fa fa-thumbs-o-down"></i></button>
    </div>
  );
}

VoteButtons.propTypes = {
    handleClick: React.PropTypes.func,
    votes: React.PropTypes.number
};

export default VoteButtons;
