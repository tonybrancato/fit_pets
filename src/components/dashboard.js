import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Pet from './pets';
import NavBar from './navbar';
import paw from './imgs/paw.svg';
import './dashboard.css';

export class Dashboard extends React.Component {

  render() {

  // Only visible to logged in users
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <NavBar />
        <div className="dashboard">
          <Helmet>
            <title>Fit Pets - My Pets</title> 
            <style type="text/css">
              {` body { 
                  background-image: url(${paw}); 
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: 400px;
                  background-color: rgba(0, 0, 0, .83);
                  min-height: 100vh;
              }
              @media only screen and (max-width: 767px) {
                body {
                  background-size: 350px;
                }`}
            </style>          
          </Helmet>
          <Pet />
        </div>
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
