/*eslint-disable*/

import React from 'react';
import { Field, reduxForm, focus, change } from 'redux-form';
import { addWeight } from '../actions/pets'
import Input from './input';
import { required, nonEmpty, isTrimmed, length } from '../validators';
import './add-weight-form.css'

export class AddWeightForm extends React.Component {
  onSubmit(values) {
    const {weight} = values; 
    const petId = this.props.id;
    const petWeight = weight;    
    return this.props
    .dispatch(addWeight(petWeight, petId)) 
    .then(() => this.props.dispatch)
    .then(this.props.dispatch(change(this.props.form, 'weight', ''))); // resets form value
  }
  
  render() {
    return (
      <form
        key={this.props.id}
        id={this.props.id}
        className="add-weight-form"
        onSubmit={
          this.props.handleSubmit(values => this.onSubmit(values))}>
        <div className='weight-entry'>
          <Field
            component={Input}
            type="number"
            name="weight"
            validate={[required, nonEmpty, isTrimmed, length({ min: 1, max: 3})]}/>
          <button
            className="add-weight-btn"
            type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Add Weight
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  // onSubmitFail: (errors, dispatch) =>
  //   dispatch(focus(this.props.form, Object.keys(errors)[0])),
  })(AddWeightForm);
