export const ADD_PERSON = 'ADD_PERSON';
export const UPDATE_PERSON_NAME = 'UPDATE_PERSON_NAME';
export const EDIT_PERSON_NAME = 'EDIT_PERSON_NAME';
export const DELETE_PERSON_CARD = 'DELETE_PERSON_CARD';

export const addPerson = () => ({
  type: ADD_PERSON,
});

export const updatePersonName = (name, personId) => ({
  type: UPDATE_PERSON_NAME,
  payload: { name, personId },
});

export const deletePersonCard = (personId) => ({
  type: DELETE_PERSON_CARD,
  payload: { personId },
});
