import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchAllUsers} from '../actions/actions';
import {ProgressBar, Alert} from 'react-bootstrap';
import UserCard from './UserCard';

class SeparateUserPage extends Component {
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
      <div>
        <div className="">
          <h1>Users:</h1>
        </div>
        <div id="ArticleList">
          {this.renderUsers()}
        </div>
      </div>
    );
  }
  renderUsers () {
    return this.props.users.map((user, key) => {
      if (user.username === this.props.params.username) {
        return <UserCard key={key} user_id={user.id} username={user.username} name={user.name} avatar_url={user.avatar_url}/>;
      }
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


export default connect(mapStateToProps, mapDispatchToProps)(SeparateUserPage);
