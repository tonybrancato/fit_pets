/*eslint-disable*/

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AddPetForm from './add-pet-form';

export function AddPetPage(props) {
  if (!props.loggedIn) {
    return <Redirect to="/" />;
  }

return (
  <div className="home">
    <Helmet>
      <title>Fit Pets - My Pets</title>     
      <style type="text/css">
        {` body { 
          background-image: url("https://images.pexels.com/photos/9079/night-animal-cats-clean.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"); 
          background-repeat: no-repeat;
          background-size: cover;
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
