import {
  getItemFromLocalStorage,
  saveItemInLocalStorage,
} from 'utils/localStorage';

const PEOPLE_KEY = 'people';

export const getPeopleFromLocalStorage = () => {
  const getPeople = getItemFromLocalStorage(PEOPLE_KEY) || [];
  return getPeople;
};

export const setPeopleInLocalStorage = (newPeople) => {
  const savePeople = saveItemInLocalStorage(PEOPLE_KEY, newPeople);
  return savePeople;
};
