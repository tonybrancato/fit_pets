/*eslint-disable*/

import React from 'react';
import { deletePet } from '../actions/pets';
import { Field, reduxForm, focus, change } from 'redux-form';
import { withRouter } from 'react-router-dom';
import './delete-pet-button.css';


export class DeletePet extends React.Component {
  onSubmit(petId) {
    console.log(petId);
    return this.props
    .dispatch(deletePet(petId,  this.props.history)) 
    .then(() => this.props.dispatch)
  }
  
  render() {
    const petId = this.props.id;
    return (
      <form
        key={this.props.id}
        id={this.props.id}
        className="delete-pet-form"
        onSubmit={
          this.props.handleSubmit(petId => this.onSubmit(this.props.id))}>
          <button
            className='delete-btn'
            type="submit">
            Delete {this.props.name}
          </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'delete-pet',
  // onSubmitFail: (errors, dispatch) =>
  //   dispatch(focus(this.props.form, Object.keys(errors)[0])),
  })(withRouter(DeletePet));