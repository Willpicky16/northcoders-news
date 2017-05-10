import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class CommentForm extends Component {
  constructor (props) {
    super (props);
    this.state = {};
    this.handleCommentForm = this.handleCommentForm.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }
  handleCommentForm (event) {
    this.setState({
      comment: event.target.value
    });
  }
  handleForm () {
    this.props.addComment(this.state.comment);
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  }
  render () {
    return (
      <div>
        <Form>
          <FormGroup controlId="formControlsTextarea">
            <FormControl componentClass="textarea" placeholder="Comment" value={this.state.comment} onChange={this.handleCommentForm} />
            <br></br>
            <Button onClick={this.handleForm} className="btn btn-success">Add Comment</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default CommentForm;
