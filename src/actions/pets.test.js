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

// describe('addPetError', () => {
//   it('Should return the action', () => {
//       const guess = Math.round(Math.random() * 100);
//       const action = makeGuess(guess);
//       expect(action.type).toEqual(MAKE_GUESS);
//       expect(action.guess).toEqual(guess);
//   });
// });

// describe('toggleInfoModal', () => {
//   it('Should return the action', () => {
//     const action = toggleInfoModal();
//     expect(action.type).toEqual(TOGGLE_INFO_MODAL);
//   })
// })