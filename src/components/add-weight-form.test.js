import React from 'react';
import {shallow, mount} from 'enzyme';

import AddWeightForm from './add-weight-form'; 
import { addWeight } from '../actions/pets';
import { store } from '../store';

describe('<AddPetForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddWeightForm />);
    });
});
