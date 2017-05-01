import React, { Component } from 'react';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';

class CommentForm extends Component {
  render () {
    return (
      <div>
        <Form>
          <FormGroup controlId="formControlsTextarea">
            <FormControl componentClass="textarea" placeholder="Comment" />
            <br></br>
            <Button className="btn btn-success">Add Comment</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default CommentForm;
