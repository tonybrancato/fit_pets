/*eslint-disable*/

import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import bwdog from './imgs/bwdog.jpg';
import RegistrationForm from './registration-form';
import { Helmet } from 'react-helmet';
import './landing-page.css';
import './registration-form.css';

export function RegistrationPage(props) {
// If we are logged in (which happens automatically when registration
// is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/addpet" />;
  }
  return (
    <div className="home">
      <div className="Typist">
        <span className="typist-header">Welcome to 
        <span className='typist-logo'> Fit Pets</span></span>
        <br />
        <div className="typist-body">
          <p>Add your pets. Update their info. Monitor their health.</p>
          <p>Give Love.</p>
        </div>  
      </div>
      <Helmet>
        <title>Fit Pets - Register</title>
        <style type="text/css">
          {` body { 
              min-height: 100vh;
              background-image: url(${bwdog}); 
              background-repeat: no-repeat;
              background-size: cover;
              overflow: hidden;   
              }
              @media only screen and (max-width: 767px) {
                body {
                  background-size: cover;
                  background-position: center;
                  overflow: visible;        
                  margin-bottom: 100px;  
                }
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
