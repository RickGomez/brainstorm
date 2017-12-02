import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { thunkEditComment, hideEditCommentDetail } from '../actions/actionsCreators';

import { Button, FormGroup, Form, Col, FormControl, ControlLabel } from 'react-bootstrap';

class EditCommentDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit(e, props) {
    e.preventDefault();
    
    this.props.thunkEditComment(this.props.currentNode.key, e.target.title.value, e.target.text.value);
    this.props.hideEditCommentDetail();
  }

  render() {
    return (
      <div className="new-comment-modal-content">
        <h4 className="node-title">Edit this comment:</h4>
        <div className="buffer"></div>
        <Form horizontal onSubmit={this.onSubmit.bind(this)}>
          <FormGroup controlId="commentTitle" >
            <Col sm={10}>
              <FormControl className="node-detail-form" autoFocus="autofocus" type="title" name="title" defaultValue={this.props.currentNode.title} maxLength="15"/>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword">
            <Col sm={10}>
              <FormControl className="node-detail-form edit-node-form" componentClass="textarea" type="details" name="text" defaultValue={this.props.currentNode.text} rows="8"/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={10}>
              <Button className="submit-btn" type="submit">Save</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentNode: state.currentNode,
    user: state.user,
    session: state.session
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ thunkEditComment, hideEditCommentDetail }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCommentDetail);
