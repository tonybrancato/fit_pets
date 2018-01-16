/*eslint-disable*/

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Accordion, AccordionItem } from 'react-sanfona';
import { Line } from 'react-chartjs-2';
import './pet.css';
import { getPets } from '../actions/pets';
import AddWeightForm from './add-weight-form';
import AddPetForm from './add-pet-form';
import { store } from '../store';
import DeletePet from './delete-pet-button'
import PetsHeader from './pets-header';
export class Pet extends React.Component {
  
  componentDidMount() {
    if (this.props.pets.length === 0) {
      console.log('getting pets');
      this.props.dispatch(getPets());
    }
  }

  render() {
    const accordionItems = (this.props.pets).map((pet, index) => {
      return (
        <AccordionItem
          key={index}
          id={pet.id}
          className="pet-box col-9" 
          expandedClassName	="pet-box-expanded" 
          duration={200}
          title={`${pet.name} the ${pet.species}`} >
            <div className='chart-parent'>
              <h3>{`${pet.name}'s Current Weight: ${pet.weight.slice(-1)[0]} pounds`}</h3>
              <h3>{`Age: ${pet.age}s`}</h3>
              <div className="chart">
                <Line 
                  height={250}
                  options={{
                    maintainAspectRatio: false
                  }}                
                  data={{
                    labels: pet.weightDate,
                    datasets: [
                      {
                        label: `${pet.name}'s Weight History`,
                        fill: true,
                        backgroundColor: 'rgba(192, 95, 255, .5)',
                        borderColor: '#fff',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBorderColor: 'rgba(138, 43, 226, 1)',
                        pointBackgroundColor: 'rgba(138, 43, 226, 1)',
                        pointBorderWidth: 2,
                        pointHoverRadius: 6,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: '#15e5e5',
                        pointHoverBorderWidth: 1,
                        pointRadius: 4,
                        data: pet.weight,
                      }
                    ]
                  }
                } />

              <AddWeightForm 
                form={`add-weight ${pet.id}`} 
                key={index} 
                id={pet.id}/>
              </div>
              <div className='food'>
                <h3>
                  Food is {pet.foodBrand}
                </h3>
              </div>
              <DeletePet
                form={`delete-pet ${pet.id}`}
                petIndex={index} 
                name={pet.name}
                id={pet.id}/>
            </div>
        </AccordionItem>
      );
  })
    return (
      <div className='pet-parent'>
        <PetsHeader />
        <Accordion 
          key={this.props.id}>         
          {accordionItems}
        </Accordion>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    pets: state.pets.data
});

export default connect(mapStateToProps)(Pet);