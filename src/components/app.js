/*eslint-disable*/

import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import NavBar from './navbar';
import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';
import { refreshAuthToken } from '../actions/auth';
import AddPetPage from './add-pet-page';
// import { navBar } from './navbar';

export class App extends React.Component {

  componentDidMount() {
    if (this.props.hasAuthToken) {
      // Try to get a fresh auth token if we had an existing one in
      // localStorage
      this.props.dispatch(refreshAuthToken());
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
    // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000, // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
    return;
  }

  clearInterval(this.refreshInterval);

  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/addpet" component={AddPetPage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
});

export default withRouter(connect(mapStateToProps)(App));
