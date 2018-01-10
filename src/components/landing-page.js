/*eslint-disable*/

import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './login-form';
import { Helmet } from 'react-helmet';
export function LandingPage(props) {

// If we are logged in redirect straight to the user's dashboard
if (props.loggedIn) {
  return <Redirect to="/dashboard" />;
}

return (
  <div className="home">
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
    {/* <h3>Track, Update, and View Information About Your Pets</h3> */}
    <LoginForm />
  </div>
);
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(LandingPage);
