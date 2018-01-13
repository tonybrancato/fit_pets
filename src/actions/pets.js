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

export const ADD_WEIGHT_SUCCESS = 'ADD_WEIGHT_SUCCESS';
export const addWeightSuccess = (weight, petId) => ({
  type: ADD_WEIGHT_SUCCESS,
  weight,
  petId
});

export const ADD_WEIGHT_ERROR = 'ADD_WEIGHT_ERROR';
export const addWeightError = error => ({
  type: ADD_WEIGHT_ERROR,
  error,
});

export const DELETE_PET_SUCCESS = 'DELETE_PET_SUCCESS';
export const deletePetSuccess = (petId, petIndex) => ({
  type: DELETE_PET_SUCCESS,
  petIndex,
  petId
});


export const getPets = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const USER = getState().auth.currentUser.id;
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
  console.log(weight, petId);
  return fetch(`${API_BASE_URL}/pets/weight/${petId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({weight: weight, id: petId})
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(dispatch(addWeightSuccess(weight, petId)))
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

export const deletePet = (petId, petIndex, history) => (dispatch, getState) => {
  console.log(petIndex);
  const USER = getState().auth.currentUser.id;
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/pets/${USER}/${petId}`, {
    method: 'delete',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${authToken}`
    },    
    body: JSON.stringify(petId)    
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(dispatch(deletePetSuccess(petIndex, petId)))
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
}
