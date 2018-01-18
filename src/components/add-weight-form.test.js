import React from 'react';
import {shallow, mount} from 'enzyme';

import AddWeightForm from './add-weight-form'; 
import { addWeight } from '../actions/pets';
import { store } from '../store';

describe('<AddPetForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddWeightForm />);
    });
    // it('Should dispatch addWeight action when submitted', () => {
    //     const dispatch = jest.fn();
    //     const wrapper = shallow(<AddWeightForm store={store} dispatch={dispatch} form='add-weight-form'/>).dive();
    //     const value = '10';
    //     wrapper.dive('input[type="number"]').instance().value = value;
    //     wrapper.simulate('submit');
    //     expect(dispatch).toHaveBeenCalledWith(addWeight(value));
    // })
});
