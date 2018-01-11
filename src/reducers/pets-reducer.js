/*eslint-disable*/

import {
    FETCH_PET_SUCCESS,
    FETCH_PET_ERROR,
    ADD_PET_SUCCESS,
    ADD_PET_ERROR
} from '../actions/pets';

const initialState = {
    data: [],
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PET_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data
        });
    } else if (action.type === FETCH_PET_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === ADD_PET_SUCCESS) {
        console.log(action.data)
        return Object.assign({}, state, {
            data: [...state.data,  
                action.data],
                error: null
        });
    } else if (action.type === ADD_PET_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }   
    return state;
}
