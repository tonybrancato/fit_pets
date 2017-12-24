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
    <form
      className="add-pet-form"
      onSubmit={this.props.handleSubmit(values =>
				    this.onSubmit(values),
				  )}
    >
      <div className="form-section">
        <div className="radio-section">

          <label className="radio-label" htmlFor="species">
            <Field
              className="radio"
              component={Input}
              type="radio"
              name="species"
              value="Dog"
            />Dog
          </label>
          <label className="radio-label" htmlFor="species">
            <Field
              className="radio"
              component={Input}
              type="radio"
              name="species"
              value="Cat"
            />Cat
          </label>
        </div>
      </div>
      <div className="form-section">
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
      </div>

      <div className="form-section">
        <label htmlFor="name"><h3>Pet Name</h3></label>
        <div>
          <Field
            component={Input}
            placeholder="Pet Name"
            type="text"
            name="name"
            validate={[required, nonEmpty, isTrimmed]}
          />
        </div>
      </div>
      <div className="form-section">
        <label htmlFor="birthday"><h3>Birthday</h3></label>
        <div>
          <Field
            type="text"
            component={renderDatePicker}
            name="birthday"
            value="0"
          />
        </div>
      </div>
      <div className="form-section">
        <label><h3>Weight</h3></label>
        <div>
          <Field
            type="number"
            placeholder="equivalent to pounds"
            component={Input}
            name="weight"
            validate={[required, nonEmpty, isTrimmed, length({ min: 1, max: 3 })]}
          />
        </div>
      </div>
      <div className="form-section checkbox-group">
        <h3>Known Commands</h3>
        <div className="checkbox">
          <Field
            type="checkbox"
            component={Input}
            name="command"
            value="sit"
            // validate={[required, nonEmpty, isTrimmed, length({ min: 1, max: 3 })]}
          />
          <label className="checkbox-label" htmlFor="sit">Sit</label>
        </div>
        <div className="checkbox">
          <Field
            type="checkbox"
            component={Input}
            name="command"
            value="stay"
            // validate={[required, nonEmpty, isTrimmed, length({ min: 1, max: 3 })]}
          />
          <label className="checkbox-label" htmlFor="stay">Stay</label>
        </div>
        <div className="checkbox">
          <Field
            type="checkbox"
            component={Input}
            name="command"
            value="down"
            // validate={[required, nonEmpty, isTrimmed, length({ min: 1, max: 3 })]}
          />
          <label className="checkbox-label" htmlFor="down">Down</label>
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
