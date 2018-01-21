import React from 'react';
import {shallow} from 'enzyme';

import Pet from './pets'; 
import { store } from '../store';

const mockGetPetsAction= {
    type: 'GET_PETS'
};
jest.mock('../actions/pets', () => Object.assign({},
    require.requireActual('../actions/pets'),
    {
        fetchBoard: jest.fn().mockImplementation(() => {
            return mockGetPetsAction;
        })
    }
));

describe('<Pet />', () => {
    it('Renders without crashing', () => {
        shallow(<Pet store={store}/>);
    });
});
