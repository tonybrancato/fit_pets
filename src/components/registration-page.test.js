import React from 'react';
import {shallow} from 'enzyme';

import RegistrationPage from './registration-page'; 
import { store } from '../store';

describe('<RegistrationPage />', () => {
    it('Renders without crashing', () => {
        shallow(<RegistrationPage store={store}/>);
    });
});
