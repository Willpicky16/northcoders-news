import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchAllUsers} from '../actions/actions';
import {ProgressBar, Alert} from 'react-bootstrap';

// import '../css/main.css';

import UserCard from './UserCard';
import Banner from './Banner';

class UserPage extends Component {
  componentDidMount () {
    this.props.fetchUsers();
  }
  render () {
    if (this.props.loading) return <ProgressBar active now={100}/>;
    if (this.props.error) return (
      <Alert bsStyle="danger">
          <h4>Oh snap! You got an error!</h4>
          <p>Sadly you got an error! Please try again later :(</p>
      </Alert>
    );
    return (
      <div className="container">
        <Banner topic="Users"/>
        <div id="ArticleList" className="usersList">
          {this.renderUsers()}
        </div>
      </div>
    );
  }
  renderUsers () {
    return this.props.users.map((user, key) => {
      return <UserCard key={key} user_id={user.id} username={user.username} name={user.name} avatar_url={user.avatar_url}/>;
    });
  }
}

function mapStateToProps (state) {
  return {
    users: state.users.users,
    loading: state.users.loading,
    error: state.users.error
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchUsers: () => {
      dispatch(fetchAllUsers());
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
