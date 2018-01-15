/*eslint-disable*/

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AddPetForm from './add-pet-form';
import NavBar from './navbar';

export function AddPetPage(props) {
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
          background-image: url("https://images.pexels.com/photos/9079/night-animal-cats-clean.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"); 
          background-repeat: no-repeat;
          background-size: cover;
          overflow: hidden;  
        }
        @media only screen and (max-width: 767px) {
          body {
            background-image: url("https://cdn.pixabay.com/photo/2014/04/03/00/42/footprints-309158_1280.png"); 
            background-repeat: space;
            background-color: #000;
            overflow: visible;          
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
