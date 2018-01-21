import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './login-form';
import { Helmet } from 'react-helmet';
import Typist from 'react-typist';
import bwdog from './imgs/bwdog.jpg';
import './landing-page.css';

export function LandingPage(props) {

// If we are logged in redirect straight to the user's dashboard
if (props.loggedIn) {
  return <Redirect to="/dashboard" />;
}

return (
  <div className="home">
    <Helmet>
      <title>Fit Pets - Log In</title>     
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
        <Typist.Delay ms={250} /> Update their info.  
        <Typist.Delay ms={250} /> Monitor their health. </p>
        <p> Give Belly Rubs (Woof!)<Typist.Backspace count={18} delay={100}/>
           Head Rubs (Meow!)<Typist.Backspace count={17} delay={100}/> 
           Love.</p>
      </div>
    </Typist>
    <LoginForm />
  </div>
);
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(LandingPage);
