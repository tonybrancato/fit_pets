import {SET_AUTH_TOKEN, SET_CURRENT_USER} from '../actions/auth';
import reducer from './auth';

const authToken1 = 'helloIAmAnAuthToken';
const currentUser1 = 'John Wayne';

it('Should set the initial state when nothing is passed in', () => {
  const state = reducer(undefined, {type: '__UNKNOWN'});
  expect(state).toEqual({
      authToken: null,
      currentUser: null
  });
});

it('Should return the current state on an unknown action', () => {
  let currentState = {};
  const state = reducer(currentState, {type: '__UNKNOWN'});
  expect(state).toBe(currentState);
});
