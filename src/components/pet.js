/*eslint-disable*/

import React from 'react';
import { AccordionItem } from 'react-sanfona';
import { Line } from 'react-chartjs-2';


import './pet.css';
import AddWeightForm from './add-weight-form';

export default class Pet extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const pet = this.props.pet;
    return (
      <AccordionItem
          expanded={true}
          key={pet.id}
          id={pet.id}
          className="pet-box" 
          expandedClassName	="pet-box-expanded" 
          duration={200}
          title={`${pet.name} the ${pet.species}`} >
            <div>
              <h3>{`${pet.name}'s Current Weight: ${pet.lastWeight} pounds`}</h3>
              <h3>{`Age: ${pet.age}s`}</h3>
              <div className="chart">
                <Line 
                  width={375}
                  height={250}
                  options={{
                    maintainAspectRatio: false
                  }}                
                  data={{
                    labels: pet.weightDate,
                    datasets: [
                      {
                        label: `${pet.name}'s Weight History`,
                        fill: false,
                        backgroundColor: '#e1bee7',
                        borderColor: '#ec97f9',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBorderColor: '#863895',
                        pointBackgroundColor: '#e1bee7',
                        pointBorderWidth: 5,
                        pointHoverRadius: 7,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: '#863895',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        data: pet.weight,
                      }
                    ]
                  }
                } />
              <AddWeightForm form={`add-weight ${pet.id}`} id={pet.id}/>
              </div>
              
              <div className="chart">
              </div>
            </div>
        </AccordionItem>
    );
  }
}

// const mapStateToProps = state => ({
//     loggedIn: state.auth.currentUser !== null,
//     pets: state.pets.data
// });

// export default connect(mapStateToProps)(Pet);