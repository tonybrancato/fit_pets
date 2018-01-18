import React from 'react';
import {shallow} from 'enzyme';

import NavBar from './navbar'; 
import { store } from '../store';

describe('<NavBar />', () => {
    it('Renders without crashing', () => {
        shallow(<NavBar store={store}/>);
    });
});
