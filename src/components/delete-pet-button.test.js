import React from 'react';
import {shallow} from 'enzyme';

import DeletePet from './delete-pet-button'; 

describe('<DeletePet />', () => {
    it('Renders without crashing', () => {
        shallow(<DeletePet />);
    });
});
