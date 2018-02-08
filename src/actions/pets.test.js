import { 
  FETCH_PET_SUCCESS,
  fetchPetSuccess, 
  FETCH_PET_ERROR,
  fetchPetError, 
  ADD_PET_ERROR,
  addPetError, 
  ADD_PET_SUCCESS, 
  addPetSuccess,
  ADD_WEIGHT_SUCCESS,
  addWeightSuccess,
  ADD_WEIGHT_ERROR,
  addWeightError,
  DELETE_PET_SUCCESS,
  deletePetSuccess,
  getPets,
  addPet,
  addWeight,
  deletePet} from './pets'; 
import { API_BASE_URL } from '../config';
import {history} from '../store';
import moment from 'moment';

describe('fetchPetSuccess', () => {
  it('Should return the action', () => {
      const action = fetchPetSuccess();
      expect(action.type).toEqual(FETCH_PET_SUCCESS);
  });
});

describe('fetchPetError', () => {
  it('Should return the action', () => {
      const action = fetchPetError();
      expect(action.type).toEqual(FETCH_PET_ERROR);
  });
});

describe('addPetError', () => {
  it('Should return the action', () => {
      const action = addPetError();
      expect(action.type).toEqual(ADD_PET_ERROR);
      // expect(action.guess).toEqual(guess);
  });
});

describe('addPetSuccess', () => {
  it('Should return the action', () => {
    const action = addPetSuccess();
    expect(action.type).toEqual(ADD_PET_SUCCESS);
  });
});

describe('addWeightSuccess', () => {
  it('Should return the action', () => {
    const action = addWeightSuccess();
    expect(action.type).toEqual(ADD_WEIGHT_SUCCESS);
  });
});

describe('addWeightError', () => {
  it('Should return the action', () => {
    const action = addWeightError();
    expect(action.type).toEqual(ADD_WEIGHT_ERROR);
  });
});

describe('deletePetSuccess', () => {
  it('Should return the action', () => {
    const action = deletePetSuccess();
    expect(action.type).toEqual(DELETE_PET_SUCCESS);
  });
});

describe('getPets', () => {
  it('Should dispatch getPets', () => {
      const data = {
          pets: []
      };


      global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
          ok: true,
          json() {
              return data;
          }
      })
    );

      const dispatch = jest.fn();
      const getState = () => ({
        auth: {
          authToken: "token",
          currentUser: {
            id: "1"
          }
        }
      });

      return getPets()(dispatch, getState).then(() => {
          expect(fetch).toHaveBeenCalledWith(
            `${API_BASE_URL}/pets/1`,
            {
              "headers": {
                "authorization": "Bearer token",
                "content-type": "application/json"
              },
              "method": "GET"
            }
          );
          expect(dispatch).toHaveBeenCalledWith(fetchPetSuccess(data.pets));
      });
  });
});

describe('addWeight', () => {
  it('Should dispatch addWeightSuccess', () => {
      const data = {
          pets: []
      };


      global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
          ok: true,
          json() {
              return data;
          }
      })
    );

      const dispatch = jest.fn();
      const getState = () => ({
        auth: {
          authToken: "token",
          currentUser: {
            id: "1"
          }
        }
      });
      const testWeight = "24";
      const testPetId = "12345";
      return addWeight(testWeight, testPetId)(dispatch, getState).then(() => {
          expect(fetch).toHaveBeenCalledWith(
            `${API_BASE_URL}/pets/weight/${testPetId}`,
            {
              "headers": {
                "authorization": "Bearer token",
                "content-type": "application/json"
              },
              "method": "PUT",
              "body": JSON.stringify({"id": testPetId, "weights": {"weight": testWeight, "weightDate": moment.utc().format('L') }})
            }
          );
          expect(dispatch).toHaveBeenCalledWith(addWeightSuccess(testWeight, testPetId));
      });
  });
});

describe('deletePet', () => {
  it('Should dispatch deletePet', () => {
      const data = {
          pets: []
      };


      global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
          ok: true,
          json() {
              return data;
          }
      })
    );

    global.history = jest.fn().mockImplementation(() =>
    Promise.resolve({
        ok: true,
        json() {
            return data;
        }
    })
  );

      const dispatch = jest.fn();
      const getState = () => ({
        auth: {
          authToken: "token",
          currentUser: {
            id: "1"
          }
        }
      });

      const testIndex = "1";
      const testPetId = "12345";

      return deletePet(testPetId, testIndex, history)(dispatch, getState).then(() => {
          expect(fetch).toHaveBeenCalledWith(
            `${API_BASE_URL}/pets/1/${testPetId}`,
            {
              "headers": {
                "authorization": "Bearer token",
                "content-type": "application/json"
              },
              "method": "delete",
              "body": JSON.stringify(testPetId)
            }
          );
          expect(dispatch).toHaveBeenCalledWith(deletePetSuccess(testIndex, testPetId));
      });
  });
});