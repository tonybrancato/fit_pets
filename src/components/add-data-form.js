/*eslint-disable*/

import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Input from './input';
import { required, nonEmpty, isTrimmed, length } from '../validators';

export class AddDataForm extends React.Component {
  onSubmit(values) {
    const {weight} = values; 
    const pet = {weight};
    return this.props
    .dispatch(updatePet(pet)) // create action to update the pet
    .then(() => this.props.dispatch);
  }
  
  render() {
    return (
      <form
      className="add-data-form"
      onSubmit={this.props.handleSubmit(values =>
      	    this.onSubmit(values))}
      onSubmit={console.log(this.props)}
      >
        <div>
          <Field
            component={Input}
            type="number"
            name="weight"
            validate={[required, nonEmpty, isTrimmed, length({ min: 1, max: 3})]}
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}          
          >Add Data
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'add-data',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('add-data', Object.keys(errors)[0])),
  })(AddDataForm);
