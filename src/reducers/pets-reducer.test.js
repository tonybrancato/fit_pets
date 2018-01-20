import reducer from './pets-reducer';
import moment from 'moment';
import {
  FETCH_PET_SUCCESS,
  FETCH_PET_ERROR,
  ADD_PET_SUCCESS,
  ADD_PET_ERROR,
  ADD_WEIGHT_SUCCESS,
  ADD_WEIGHT_ERROR,
  DELETE_PET_SUCCESS,
  PURGE_STATE, 
  addPetSuccess,
  addWeightSuccess,
  deletePetSuccess,
  purgeState, 
} from '../actions/pets';
import { currentId } from 'async_hooks';

describe('reducer', () => {
    // Set up some dummy data
    const pet1 = {
        weight: ['25'],
        weightDate: ['11/22/1963'],
        id: 'foo',
    };
    const pet2 = {
        weight: ['42'],
        weightDate: ['06/23/1990'],
        id: 'bar'
    };
    const weight1 = '66';
    const weight2 = '55';


    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            data: []
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('addPet', () => {
        it('Should add new pets', () => {
            let state;
            state = reducer(state, addPetSuccess(pet1));
            state = reducer(state, addPetSuccess(pet2));
            expect(state).toEqual({
                data: [pet1, pet2],
                error: null
            });
        });
    });


    describe('addWeightSuccess', () => {
        it('Should add new weights to a pet', () => {
            let state = {
                data: [pet1, pet2]
            };
            state = reducer(state, addWeightSuccess(weight1, pet1.id));
            state = reducer(state, addWeightSuccess(weight2, pet2.id));
            expect(state).toEqual({
                data: [{
                    id: pet1.id,
                    weight: ['25', weight1],
                    weightDate: ['11/22/1963', moment.utc().format('L')]
                }, {
                    id: pet2.id,
                    weight: ['42', weight2],
                    weightDate: ['06/23/1990', moment.utc().format('L')]
                }]                
            });
        });
    });

    describe('deletePet', () => {
      it('Should delete the provided pet', () => {
          let state;
          let currentState = {data: [pet1, pet2]};
          state = reducer(currentState, deletePetSuccess(pet2.id, 1))
          expect(state).toEqual({
              data: [pet1],
          });
      });
  });

  describe('purgeState', () => {
    it('Should remove all items from the state', () => {
        let state;
        let currentState = {data: [pet1, pet2]};
        state = reducer(currentState, purgeState())
        expect(state).toEqual({
            data: [],
        });
    });
  });
});
