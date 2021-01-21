import generateId from '../../utils/idGenerator';

import { ADD_PERSON, UPDATE_PERSON_NAME, DELETE_PERSON_CARD } from './actions';

const initialState = [];

function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON: {
      const newPerson = { name: action.payload, id: generateId('person') };
      return [...state, newPerson];
    }
    case UPDATE_PERSON_NAME: {
      const updatedPerson = {
        name: action.payload.name,
        id: action.payload.personId,
      };
      const personToUpdateIndex = state.findIndex(
        (person) => person.id === action.payload.personId,
      );
      const newPersons = [...state];
      newPersons[personToUpdateIndex] = updatedPerson;
      return newPersons;
    }
    case DELETE_PERSON_CARD: {
      const peopleWithoutDeletePerson = state.filter(
        (person) => person.id !== action.payload.personId,
      );
      return peopleWithoutDeletePerson;
    }
    default:
      return state;
  }
}

export default peopleReducer;
