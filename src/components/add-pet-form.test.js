import React from 'react';
import {shallow} from 'enzyme';

import AddPetForm from './add-pet-form'; 

describe('<AddPetForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddPetForm />);
    });
});
