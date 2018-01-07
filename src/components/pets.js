/*eslint-disable*/

import React from 'react';
import { connect } from 'react-redux';
import { Accordion } from 'react-sanfona';
import Pet from './pet';

import { getPets } from '../actions/pets';

export class Pets extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(getPets());
  }

  render() {
    const pets = (this.props.pets).map((pet) => {
      return (
        <Pet pet={pet}/>
      );
    });
    return (
      <div>
        <Accordion 
          // key={this.props.id}
          allowMultiple={true} 
          className="pet-parent">         
          {pets}
        </Accordion>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    pets: state.pets.data
});

export default connect(mapStateToProps)(Pets);