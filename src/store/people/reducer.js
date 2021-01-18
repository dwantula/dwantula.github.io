import { ADD_PERSON } from './actions';

const initialState = [];

function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default peopleReducer;
