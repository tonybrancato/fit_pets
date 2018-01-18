import React from 'react';
import {shallow} from 'enzyme';

import LandingPage from './landing-page'; 
import { store } from '../store';

describe('<LandingPage />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingPage store={store}/>);
    });
});
