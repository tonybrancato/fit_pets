/*eslint-disable*/

import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './login-form';
import { Helmet } from 'react-helmet';
import Typist from 'react-typist';
import './landing-page.css';

export function LandingPage(props) {

// If we are logged in redirect straight to the user's dashboard
if (props.loggedIn) {
  return <Redirect to="/dashboard" />;
}

return (
  <div className="home">
    <Typist
      cursor={{
        show: true,
        hideWhenDone: true
      }}>
      <span className="typist-header">Welcome to 
      <span className='typist-logo'> Fit Pets</span></span>
      <Typist.Delay ms={500} />
      <br />
      <div className="typist-body">
        <p>Add your pets. 
        <Typist.Delay ms={300} /> Update their info.  
        <Typist.Delay ms={300} /> Monitor their health. </p>
        <p> Give Belly Rubs (Woof!)<Typist.Backspace count={18} delay={100}/>
           Head Rubs (Meow!)<Typist.Backspace count={17} delay={300}/> 
           Love.</p>
      </div>
    </Typist>
    <Helmet>
      <title>Fit Pets - Log In</title>     
      <style type="text/css">
        {` body { 
          background-image: url("https://cdn.pixabay.com/photo/2015/04/10/00/47/dog-715545_1280.jpg"); 
          background-repeat: no-repeat;
          background-size: cover;
        }
        html {
          overflow: hidden;
        }    `}
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
