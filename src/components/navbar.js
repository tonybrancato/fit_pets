/*eslint-disable*/

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentUser, setAuthToken } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

import './navbar.css';

export class NavBar extends React.Component {
logOut() {
this.props.dispatch(setCurrentUser(null));
this.props.dispatch(setAuthToken(null));
clearAuthToken();
}

render() {
// Only render the log out button if we are logged in
let logOutButton;
if (this.props.loggedIn) {
logOutButton = (
  <button className="nav-btn" onClick={() => this.logOut()}>Log out</button>
);
}
return (
  <div className="nav">
    <nav className="nav">
      <Link className="nav-btn" to="/register"><button>Home</button></Link>
      <Link className="nav-btn" to="/addpet">Add a Pet</Link>
      {logOutButton}
    </nav>
  </div>
);
}
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  });

export default connect(mapStateToProps)(NavBar);
