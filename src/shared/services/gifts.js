import {
  getItemFromLocalStorage,
  saveItemInLocalStorage,
} from 'utils/localStorage';

const GIFTS_KEY = 'gifts';

export const getGiftsFromLocalStorage = () => {
  const getGifts = getItemFromLocalStorage(GIFTS_KEY) || {};
  return getGifts;
};

export const setGiftsInLocalStorage = (newGifts) => {
  const saveGifts = saveItemInLocalStorage(GIFTS_KEY, newGifts);
  return saveGifts;
};
