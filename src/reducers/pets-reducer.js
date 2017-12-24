/*eslint-disable*/

import {
    FETCH_PET_SUCCESS,
    FETCH_PET_ERROR
} from '../actions/pets';



const initialState = {
    data: ['pet1', 'pet2'],
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PET_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_PET_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
