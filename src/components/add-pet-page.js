/*eslint-disable*/

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AddPetForm from './add-pet-form';

export function AddPetPage(props) {
if (!props.loggedIn) {
return <Redirect to="/" />;
}

return (
  <div className="home">
    <h2>Add a Pet</h2>
    <AddPetForm />
  </div>
);
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  });

export default connect(mapStateToProps)(AddPetPage);
