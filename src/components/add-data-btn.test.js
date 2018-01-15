import React from 'react';
import {shallow} from 'enzyme';

import AddDataBtn from './add-data-btn';

describe('<AddDataBtn />', () => {
    it('Renders without crashing', () => {
        shallow(<AddDataBtn />);
    });
});
