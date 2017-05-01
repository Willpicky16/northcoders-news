import React from 'react';
import { Media } from 'react-bootstrap';

const UserCard = function (props) {
  return (
    <div className="well">
      <Media.Left>
        <img width={64} height={64} src={props.avatar_url} alt="Image"/>
      </Media.Left>
      <Media.Body>
        <Media.Heading><a href={`/users/${props.username}`}>{props.name}</a></Media.Heading>
        <p>{`Username: ${props.username}`}</p>
      </Media.Body>
    </div>
  );
};

export default UserCard;
