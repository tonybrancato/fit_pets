import React from 'react';
import { Field, reduxForm, focus} from 'redux-form';
import renderDatePicker from './datepicker';
import { addPet } from '../actions/pets';
import Input from './input';
import { withRouter } from 'react-router-dom';
import { required, nonEmpty, isTrimmed, length } from '../validators';
import './add-pet-form.css';

export class AddPetForm extends React.Component {
  onSubmit(values) {
  const {
    species, sex, name, birthday, weight
    } = values;
  const pet = {
    species, sex, name, birthday, weight
    };
  return this.props
    .dispatch(addPet(pet, this.props.history))
  }

  render() {
    return (
      <div className="add-pet-form-parent">
        <h1 className='form-header'>Add a Pet</h1>
        <form
          className="add-pet-form"
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values))}>
          <div className=" radio-section">
            <div className='radio-input left'> 
              <Field
                id='dog'
                label='Dog'
                className="radio"
                component={Input}
                type="radio"
                name="species"
                value="Dog"
              />
            </div>
            <div className='radio-input right'> 
              <Field
                id='cat'
                label='Cat'
                className="radio"
                component={Input}
                type="radio"
                name="species"
                value="Cat"
              />
            </div>
          </div>
            <div className="radio-section">
            <div className='radio-input left'> 
                <Field
                  component={Input}
                  label="Male"
                  id="male"
                  type="radio"
                  name="sex"
                  value="Male"
                />
              </div>
              <div className='radio-input right'> 
                <Field
                  component={Input}
                  label="Female"
                  id="female"
                  type="radio"
                  name="sex"
                  value="Female"
                />
              </div>
            </div>

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
  })(withRouter(AddPetForm));
