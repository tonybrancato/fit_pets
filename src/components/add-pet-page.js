import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AddPetForm from './add-pet-form';
import NavBar from './navbar';
import bwcat from './imgs/bwcat.jpg';
import paw from './imgs/paw.svg';

export function AddPetPage(props) {
  // if a user is not logged in they will be brought to the landing page
  if (!props.loggedIn) {
    return <Redirect to="/" />;
  }

return (
  <div className="home">
    <NavBar />
    <Helmet>
      <title>Fit Pets - Add a Pet</title>     
      <style type="text/css">
      {`body { 
          background-image: url(${bwcat}); 
          background-repeat: no-repeat;
          background-size: cover;
          overflow: auto;  
          min-height: 100vh;
        }
        @media only screen and (max-width: 767px) {
          body {
            background-image: url(${paw}); 
            background-position: center;
            background-repeat: no-repeat;
            background-size: 350px;
            background-color: rgba(0, 0, 0, .83);
          }
        }`}
      </style>     
    </Helmet>
    <AddPetForm />
  </div>
);
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(AddPetPage);
