/*eslint-disable*/

import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import RegistrationForm from './registration-form';
import { Helmet } from 'react-helmet';

export function RegistrationPage(props) {
// If we are logged in (which happens automatically when registration
// is successful) redirect to the user's dashboard
if (props.loggedIn) {
return <Redirect to="/dashboard" />;
}
return (
  <div className="home">
    {/* <h2>Register for Pet Fit</h2> */}
    <Helmet>
      <title>Fit Pets - Register</title>
      <style type="text/css">
        {` body { 
            background-image: url("https://cdn.pixabay.com/photo/2015/04/10/00/47/dog-715545_1280.jpg"); 
            background-repeat: no-repeat;
            background-size: cover;
            }`}
      </style>     
    </Helmet>
    <RegistrationForm />
  </div>
);
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  });

export default connect(mapStateToProps)(RegistrationPage);
