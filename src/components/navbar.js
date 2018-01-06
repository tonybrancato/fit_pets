/*eslint-disable*/

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentUser, setAuthToken } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { Navbar, Nav, NavItem, NavDropdown, NavbarBrand, MenuItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

import './navbar.css';
import {addPet} from '../actions/pets'
import dashboard from './dashboard'

export class NavBar extends React.Component {
logOut() {
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
  dashboardNav = <IndexLinkContainer to="/"><NavItem>Home</NavItem></IndexLinkContainer>;
  }
  const navbarInstance = (
    <Navbar 
      fixedTop={true}
      collapseOnSelect>
      <Navbar.Header>
        <LinkContainer to='/'>
        <Navbar.Brand>
          <span>Fit Pets</span>
        </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
        {/* {dashboardNav} */}
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
