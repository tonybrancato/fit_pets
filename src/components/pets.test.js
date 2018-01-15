import React from 'react';
import {shallow} from 'enzyme';

import Pet from './pets'; 

describe('<Pet />', () => {
    it('Renders without crashing', () => {
        shallow(<Pet />);
    });
});
