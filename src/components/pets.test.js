import React from 'react';
import {shallow} from 'enzyme';

import Pet from './pets'; 
import { store } from '../store';

describe('<Pet />', () => {
    it('Renders without crashing', () => {
        shallow(<Pet store={store}/>);
    });
});
