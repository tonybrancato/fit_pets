import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import { Link } from 'react-router-dom';

import './login-form.css';


export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

render() {
  let error;
  if (this.props.error) {
    error = (
      <div className="form-error" aria-live="polite">
        {this.props.error}
      </div>
    );
  }
  return (
    <div className='form-container'>
      <div className="demo">
        <p>Demo Login: scooby</p>
        <p>Demo Password: scoobysnacks</p>
      </div>
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values),
        )}
      >
        {error}
        <Field
          component={Input}
          placeholder="Username"
          type="text"
          name="username"
          id="username"
          validate={[required, nonEmpty]}
        />
        <Field
          component={Input}
          placeholder="Password"
          type="password"
          name="password"
          id="password"
          validate={[required, nonEmpty]}
        />
        <button disabled={this.props.pristine || this.props.submitting}>
                        Log in
        </button>
      </form>
      <div className='no-account'>
        No Account? <Link 
        style={{ textDecoration: 'none' }} 
        to="/register">
        <span>Register</span></Link>.
      </div>
    </div>
  );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username')),
  })(LoginForm);
