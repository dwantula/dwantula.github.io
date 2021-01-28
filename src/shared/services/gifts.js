import {
  getItemFromLocalStorage,
  saveItemInLocalStorage,
} from 'utils/localStorage';

const GIFTS_KEY = 'gifts';

export const getGiftsFromLocalStorage = () => {
  const gifts = getItemFromLocalStorage(GIFTS_KEY) || {};
  return gifts;
};

export const setGiftsInLocalStorage = (newGifts) => {
  const gifts = saveItemInLocalStorage(GIFTS_KEY, newGifts);
  return gifts;
};
