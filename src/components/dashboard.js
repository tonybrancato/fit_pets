/*eslint-disable*/

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchProtectedData } from '../actions/protected-data';
import Pet from './pet';

import './dashboard.css';

export class Dashboard extends React.Component {
// componentDidMount() {
// if (!this.props.loggedIn) {
// return;
// }
// this.props.dispatch(fetchProtectedData());
// }

render() {
// Only visible to logged in users
if (!this.props.loggedIn) {
return <Redirect to="/" />;
}

return (
  <div className="dashboard">

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
  // protectedData: state.protectedData.data,
  };
  };

export default connect(mapStateToProps)(Dashboard);
