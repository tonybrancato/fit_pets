import React from 'react';
import { connect } from 'react-redux';
import { Accordion, AccordionItem } from 'react-sanfona';
import { Line } from 'react-chartjs-2';
import { getPets } from '../actions/pets';
import AddWeightForm from './add-weight-form';
import DeletePet from './delete-pet-button'
import PetsHeader from './pets-header';
import './pet.css';

export class Pet extends React.Component {
  
  componentDidMount() {
    if (this.props.pets.length === 0) {
      this.props.dispatch(getPets());
    }
  }

  render() {
    const accordionItems = (this.props.pets).map((pet, index) => {
      return (
        // expandable Accordion for each pet
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
                        label: '',
                        fill: true,
                        backgroundColor: 'rgba(192, 95, 255, .5)',
                        borderColor: '#fff',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBorderColor: 'rgba(138, 43, 226, 1)',
                        pointBackgroundColor: 'rgba(138, 43, 226, 1)',
                        pointBorderWidth: 1,
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
              
              <AddWeightForm // Input and button to update graph
                form={`add-weight ${pet.id}`} 
                key={index} 
                id={pet.id}/>
              </div>
              <div className='food'>
              </div>
              <DeletePet // butotn to delete pet
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
        {/* "My Pets" */}
        <PetsHeader /> 
        {/* Higher level component from react-sanfona package
            Houses all of the accordion items created */}
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