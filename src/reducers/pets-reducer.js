import {
    FETCH_PET_SUCCESS,
    FETCH_PET_ERROR,
    ADD_PET_SUCCESS,
    ADD_PET_ERROR,
    ADD_WEIGHT_SUCCESS,
    ADD_WEIGHT_ERROR,
    DELETE_PET_SUCCESS,
    PURGE_STATE 
} from '../actions/pets';
import moment from 'moment';

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
        return Object.assign({}, state, {
            data: [...state.data,  
                action.data],
                error: null
        });
    } else if (action.type === ADD_PET_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === ADD_WEIGHT_SUCCESS) {
        let pets = state.data.map((pet) => {
            if (pet.id !== action.petId) {
                return pet;
            }
            return Object.assign({}, pet, {
                weights: [...pet.weights, 
                    {
                        weight: action.weight,
                        weightDate: moment.utc().format('L') 
                    }
                ]
            });
        });
        return Object.assign({}, state, {
            data: pets
        });
    } else if (action.type === ADD_WEIGHT_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
        // use the splice method to remove it from the current state
    } else if (action.type === DELETE_PET_SUCCESS) {
        const newPets = Object.assign([], state); // create copy of state
        newPets.data.splice(action.petIndex, 1);
        return Object.assign({}, state, {
            data: newPets.data
        });
     } else if (action.type === PURGE_STATE) {
        return Object.assign({}, state, {
            data: []
        });
    }
      return state;
}
