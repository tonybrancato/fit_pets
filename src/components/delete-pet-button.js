import React from 'react';
import { deletePet } from '../actions/pets';
import { Field, reduxForm, focus, change } from 'redux-form';
import { withRouter } from 'react-router-dom';
import './delete-pet-button.css';


export class DeletePet extends React.Component {
  onSubmit(index, petId) {
    return this.props
    .dispatch(deletePet(this.props.id, index, this.props.history)) 
    .then(() => this.props.dispatch)
  }
  
  render() {
    const petId = this.props.id;
    const petIndex = this.props.petIndex;

    return (
      <form
        key={this.props.id}
        id={this.props.id}
        className="delete-pet-form"
        onSubmit={
          this.props.handleSubmit((petId, index) => this.onSubmit((this.props.id, this.props.petIndex)))}>
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
  // onSubmitFail: (errors, dispatch) =>
  //   dispatch(focus(this.props.form, Object.keys(errors)[0])),
  })(withRouter(DeletePet));