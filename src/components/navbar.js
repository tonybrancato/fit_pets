

import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser, setAuthToken } from '../actions/auth';
import { purgeState } from '../actions/pets';
import { clearAuthToken } from '../local-storage';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import './navbar.css';

export class NavBar extends React.Component {
  logOut() {
    this.props.dispatch(purgeState()); // prevents browser from storing state upon logout
    this.props.dispatch(setCurrentUser(null));
    this.props.dispatch(setAuthToken(null));
    clearAuthToken();
  }

  render() {
    let logOutNav;
    let addPetNav;
    let dashboardNav;
    if (this.props.loggedIn) {
    logOutNav = (
      <NavItem onClick={() => this.logOut()}>Log out</NavItem>
    );
    addPetNav = <LinkContainer to="/addpet"><NavItem eventKey={2}>Add Pet</NavItem></LinkContainer>;
    dashboardNav = <IndexLinkContainer to="/"><NavItem>Fit Pets</NavItem></IndexLinkContainer>;
    }
    const navbarInstance = (
        <Navbar 
          fixedTop={true}
          collapseOnSelect>
          <Navbar.Header>
            <LinkContainer to='/'>
              <Navbar.Brand>
              {dashboardNav}
              </Navbar.Brand>
            </LinkContainer>
          <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav>
            {addPetNav}
            {logOutNav}
          </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
    return navbarInstance
    }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  });

export default connect(mapStateToProps)(NavBar);