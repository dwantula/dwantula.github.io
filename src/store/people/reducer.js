import generateId from '../../utils/idGenerator';

import { ADD_PERSON, UPDATE_PERSON_NAME } from './actions';

const initialState = [];

function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON: {
      const newPerson = { name: action.payload, id: generateId('person') };
      return [...state, newPerson];
    }
    case UPDATE_PERSON_NAME: {
      const updatePerson = {
        name: action.payload.name,
        id: action.payload.personId,
      };
      return [...state, updatePerson];
    }
    default:
      return state;
  }
}

export default peopleReducer;
