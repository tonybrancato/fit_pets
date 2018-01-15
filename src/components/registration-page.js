/*eslint-disable*/

import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import RegistrationForm from './registration-form';
import { Helmet } from 'react-helmet';
import './landing-page.css';

export function RegistrationPage(props) {
// If we are logged in (which happens automatically when registration
// is successful) redirect to the user's dashboard
if (props.loggedIn) {
return <Redirect to="/dashboard" />;
}
return (
  <div className="home">
    <div className="Typist">
      <span className="typist-header">Welcome to 
      <span className='typist-logo'> Fit Pets</span></span>
      <br />
      <div className="typist-body">
      <p>Add your pets. Update their info. Monitor their health.</p>
      <p>Give Love</p>
    </div>  
  </div>
    <Helmet>
      <title>Fit Pets - Register</title>
      <style type="text/css">
         {` body { 
            background-image: url("https://cdn.pixabay.com/photo/2015/04/10/00/47/dog-715545_1280.jpg"); 
            background-repeat: no-repeat;
            background-size: cover;
            overflow: 'hidden';
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
