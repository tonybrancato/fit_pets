/*eslint-disable*/

import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_PET_SUCCESS = 'FETCH_PET_SUCCESS';
export const fetchPetSuccess = data => ({
  type: FETCH_PET_SUCCESS,
  data,
});

export const FETCH_PET_ERROR = 'FETCH_PET_ERROR';
export const fetchPetError = error => ({
  type: FETCH_PET_ERROR,
  error,
});

export const ADD_PET_SUCCESS = 'ADD_PET_SUCCESS';
export const addPetSuccess = data => ({
  type: ADD_PET_SUCCESS,
  data,
});

export const ADD_PET_ERROR = 'ADD_PET_ERROR';
export const addPetError = error => ({
  type: ADD_PET_ERROR,
  error,
});


export const getPets = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const USER = getState().auth.currentUser.id;
  console.log(USER);
  return fetch(`${API_BASE_URL}/pets/${USER}`, {
    method: 'GET',
    headers: {
			'content-type': 'application/json',
			authorization: `Bearer ${authToken}`,
    },
	})
	.then(res => normalizeResponseErrors(res))
	.then(res => res.json())
  .then(({ pets }) => dispatch(fetchPetSuccess(pets)))
  .catch((err) => {
    const { reason, message, location } = err;
    if (reason === 'ValidationError') {
      // Convert ValidationErrors into SubmissionErrors for Redux Form
      return Promise.reject(
        new SubmissionError({
          [location]: message,
        }),
      );
    }
  });
};

export const addPet = (data, history) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/pets`, {
    method: 'POST',
    headers: {
    'content-type': 'application/json',
    authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(data),
    })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then((data) => dispatch(addPetSuccess(data)))
  .then(history.push('/'))
  .catch((err) => {
    const { reason, message, location } = err;
    if (reason === 'ValidationError') {
    // Convert ValidationErrors into SubmissionErrors for Redux Form
    return Promise.reject(
      new SubmissionError({
        [location]: message,
        }),
    );
    }
    });
  };

export const addWeight = (weight, petId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log(weight, petId, authToken);
  return fetch(`${API_BASE_URL}/pets/weight/${petId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(weight)
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  // .then(dispatch(getPets()))
  .catch((err) => {
    const { reason, message, location } = err;
    if (reason === 'ValidationError') {
    // Convert ValidationErrors into SubmissionErrors for Redux Form
      return Promise.reject(
        new SubmissionError({
          [location]: message,
        }),
      );
    }
  });  
}

