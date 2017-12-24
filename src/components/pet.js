/*eslint-disable*/

import React from 'react';
import { connect } from 'react-redux';
import { Accordion, AccordionItem } from 'react-sanfona';
import LineExample from './line-graph';

import './pet.css';
import { getPets } from '../actions/pets';
import AddDataBtn from './add-data-btn';
// import AddDataForm from './add-data-form';
// import  AddPetForm from './add-pet-form';

export class Pet extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(getPets());
  }

  render() {
    const pets = this.props.pets;
    const accordionItems = (pets).map((pet, i) => {
      console.log(pets);
      return (
        <AccordionItem
          key={i} 
          className="pet-box" 
          bodyClassName="pet-box-expanded" 
          duration={400}
          title={`${pet.name}`} 
          expanded={pet === 1}>
            <div>
              <h3>{`${pet.name}'s Current Weight: ${pet.lastWeight} pounds`}</h3>
              <h3>{`Age: ${pet.age}s`}</h3>
              <div className="chart">
                <LineExample data={{
                  labels: pet.weightDate,
                  datasets: [
                    {
                      label: `${pet.name}'s Weight History`,
                      fill: false,
                      lineTension: 0.1,
                      backgroundColor: 'rgba(75,192,192,0.4)',
                      borderColor: 'rgba(75,192,192,1)',
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: 'rgba(75,192,192,1)',
                      pointBackgroundColor: '#fff',
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                      pointHoverBorderColor: 'rgba(220,220,220,1)',
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: pet.weight,
                    }
                  ]
                }} />
              <AddDataBtn />
              </div>
              
              {/* <div className="chart"><LineExample data={{
                labels: pet.weightDate,
                datasets: [
                  {
                    label: pet.name,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: pet.weight,
                  }
                ]
              }} />
              <AddDataBtn />
              </div> */}
            </div>
        </AccordionItem>
      );
  })
    return (
      <Accordion 
        key={this.props.id}
        allowMultiple={true} 
        className="pet-parent">         
        {accordionItems}
      </Accordion>
    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    pets: state.pets.data
});

export default connect(mapStateToProps)(Pet);