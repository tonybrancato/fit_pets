import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import { Link } from 'react-router-dom';
import Input from './input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { username, password, firstName, lastName } = values;
    const user = { username, password, firstName, lastName };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <div className='registration-form'>
        <div className='form-container'>
          <form
            className="login-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
          )}>
            <Field 
              component={Input} 
              type="text" 
              name="firstName" 
              placeholder="First Name" />

            <Field 
              component={Input} 
              type="text" 
              name="lastName" 
              placeholder="Last Name"
              />

            <Field
              component={Input}
              placeholder="Username"
              type="text"
              name="username"
              validate={[required, nonEmpty, isTrimmed]}
            />
            <Field
              component={Input}
              placeholder="Password"
              type="password"
              name="password"
              validate={[required, length({ min: 10, max: 72 }), isTrimmed]}
            />
            <Field
              component={Input}
              placeholder="Verify Password"
              type="password"
              name="passwordConfirm"
              validate={[required, nonEmpty, matches('password')]}
            />
            <button
              className="registration-btn"
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
            >
                            Register
            </button>
          </form>
          <div className='no-account'>
              Already Registered? <Link 
              style={{ textDecoration: 'none' }} 
              to="/">
              <span>Login</span></Link> here!
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0])),
  })(RegistrationForm);
