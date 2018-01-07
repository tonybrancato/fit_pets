/*eslint-disable*/

import React from 'react';
import { Field, reduxForm /* focus */} from 'redux-form';
import renderDatePicker from './datepicker';
import { addPet } from '../actions/pets';
import Input from './input';
import { required, nonEmpty, isTrimmed, length } from '../validators';
import './add-pet-form.css';

export class AddPetForm extends React.Component {
onSubmit(values) {
const {
  species, sex, name, birthday, weight, commands
  } = values;
const pet = {
  species, sex, name, birthday, weight, commands
  };
return this.props
  .dispatch(addPet(pet))
  .then(() => this.props.dispatch);
}

render() {
return (
  <div className="add-pet-form-parent">
    <h2 className='form-header'>Add a Pet</h2>
    <form
      className="add-pet-form"
      onSubmit={this.props.handleSubmit(values =>
        this.onSubmit(values))}>
      <div className=" radio-section">
      <label className="radio-label" htmlFor="dog">Dog
          <Field
            id='dog'
            className="radio"
            component={Input}
            type="radio"
            name="species"
            value="Dog"
          />
          </label>
          <label className="radio-label" htmlFor="cat">Cat<Field
            id='cat'
            className="radio"
            component={Input}
            type="radio"
            name="species"
            value="Cat"
          />
          </label> 
      </div>
      {/* <div className="form-section"> */}
        <div className="radio-section">
          <label className="radio-label" htmlFor="sex">
            <Field
              component={Input}
              type="radio"
              name="sex"
              value="Male"
            />Male
          </label>
          <label className="radio-label" htmlFor="sex">
            <Field
              component={Input}
              type="radio"
              name="sex"
              value="Female"
            />Female
          </label>
        </div>
      {/* </div> */}

      <div className="form-section">
      <div className='left-label'><label htmlFor="name" className='form-label'>Pet Name</label></div>
        <div>
          <Field
            component={Input}
            type="text"
            name="name"
            validate={[required, nonEmpty, isTrimmed]}
          />
        </div>
      </div>
      <div className="form-section">
      <div className='left-label'><label className='form-label' htmlFor="birthday">Birthday</label></div>
        <div>
          <Field
            type="text"
            component={renderDatePicker}
            name="birthday"
            value="0"
            validate={[required, nonEmpty]}
          />
        </div>
      </div>
      <div className="form-section">
      <div className='left-label'><label className='form-label'>Weight</label></div>
        <div>
          <Field
            type="number"
            component={Input}
            name="weight"
            validate={[required, length({ min: 1, max: 3 })]}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={this.props.pristine || this.props.submitting}
      >ADD PET
      </button>
    </form>
  </div>
);
}
}

export default reduxForm({
  form: 'add-pet',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('add-pet', Object.keys(errors)[0])),
  })(AddPetForm);
