import React from 'react';
import {shallow} from 'enzyme';

import renderDatePicker from './datepicker'; 

describe('<renderDatePicker />', () => {
    it('Renders without crashing', () => {
        shallow(<renderDatePicker />);
    });
});
