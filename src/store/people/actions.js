export const ADD_PERSON = 'ADD_PERSON';
export const UPDATE_PERSON_NAME = 'UPDATE_PERSON_NAME';

export const addPerson = (person) => ({
  type: ADD_PERSON,
  payload: person,
});

export const updatePersonName = (name, personId) => ({
  type: UPDATE_PERSON_NAME,
  payload: { name, personId },
});
