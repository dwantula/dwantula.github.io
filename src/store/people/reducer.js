import generateId from '../../utils/idGenerator';

import { ADD_PERSON } from './actions';

const initialState = [];

function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON: {
      const newPerson = { name: action.payload, id: generateId('person') };
      return [...state, newPerson];
    }
    default:
      return state;
  }
}

export default peopleReducer;
