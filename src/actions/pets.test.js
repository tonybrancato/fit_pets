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
  })
})

describe('addWeightSuccess', () => {
  it('Should return the action', () => {
    const action = addWeightSuccess();
    expect(action.type).toEqual(ADD_WEIGHT_SUCCESS);
  })
})

describe('addWeightError', () => {
  it('Should return the action', () => {
    const action = addWeightError();
    expect(action.type).toEqual(ADD_WEIGHT_ERROR);
  })
})

describe('deletePetSuccess', () => {
  it('Should return the action', () => {
    const action = deletePetSuccess();
    expect(action.type).toEqual(DELETE_PET_SUCCESS);
  })
})