import {
  getItemFromLocalStorage,
  saveItemInLocalStorage,
} from 'utils/localStorage';

const PEOPLE_KEY = 'people';

export const getPeopleFromLocalStorage = () => {
  const people = getItemFromLocalStorage(PEOPLE_KEY) || [];
  return people;
};

export const setPeopleInLocalStorage = (newPeople) => {
  const people = saveItemInLocalStorage(PEOPLE_KEY, newPeople);
  return people;
};
