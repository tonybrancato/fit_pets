import React from 'react';
import {shallow} from 'enzyme';

import AddWeightForm from './add-weight-form'; 

describe('<AddPetForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddWeightForm />);
    });
});
