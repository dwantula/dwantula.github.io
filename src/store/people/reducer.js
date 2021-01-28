import {
  getPeopleFromLocalStorage,
  setPeopleInLocalStorage,
} from 'shared/services/people';
import generateId from '../../utils/idGenerator';

import { ADD_PERSON, UPDATE_PERSON_NAME, DELETE_PERSON_CARD } from './actions';

const initialState = getPeopleFromLocalStorage();

function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON: {
      const newPerson = {
        name: action.payload,
        personId: generateId('person'),
      };
      const newPersons = [...state, newPerson];
      setPeopleInLocalStorage(newPersons);
      return newPersons;
    }
    case UPDATE_PERSON_NAME: {
      const updatedPerson = {
        personName: action.payload.personName,
        personId: action.payload.personId,
      };
      const personToUpdateIndex = state.findIndex(
        (person) => person.personId === action.payload.personId,
      );
      const newPersons = [...state];
      newPersons[personToUpdateIndex] = updatedPerson;
      setPeopleInLocalStorage(newPersons);
      return newPersons;
    }
    case DELETE_PERSON_CARD: {
      const peopleWithoutDeletePerson = state.filter(
        (person) => person.personId !== action.payload.personId,
      );
      setPeopleInLocalStorage(peopleWithoutDeletePerson);
      return peopleWithoutDeletePerson;
    }
    default:
      return state;
  }
}

export default peopleReducer;
