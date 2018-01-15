/*eslint-disable*/

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Pet from './pets';
import { getPets } from '../actions/pets';
import NavBar from './navbar';

import './dashboard.css';

export class Dashboard extends React.Component {

  render() {

  // Only visible to logged in users
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
  // Redirects to add-pet-form if user has no pets
    // if (this.props.pets.length === 0) {
    //   return <Redirect to="/addpet" />;
    // }

    return (
      <div className="dashboard">
        <NavBar />
        <Helmet>
          <title>Fit Pets - My Pets</title>        
        </Helmet>
        <Pet />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentUser } = state.auth;
  return {
    loggedIn: currentUser !== null,
    username: currentUser ? state.auth.currentUser.username : '',
    name: currentUser
      ? `${currentUser.firstName} ${currentUser.lastName}`
      : '',
  };
};

export default connect(mapStateToProps)(Dashboard);
