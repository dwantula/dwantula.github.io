import {
  getGiftsFromLocalStorage,
  setGiftsInLocalStorage,
} from 'shared/services/gifts';

import generateId from 'utils/idGenerator';

import {
  DELETE_GIFT,
  EDIT_GIFT,
  ADD_GIFT,
  DELETE_PERSON_GIFTS,
} from './actions';

const initialState = getGiftsFromLocalStorage();

function giftsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GIFT: {
      const { personId } = action.payload;
      const newGift = {
        giftId: generateId('gift'),
      };
      const newPersonGifts = state[personId]
        ? [...state[personId], newGift]
        : [newGift];
      const gifts = { ...state, [personId]: newPersonGifts };
      setGiftsInLocalStorage(gifts);
      return gifts;
    }
    case EDIT_GIFT: {
      const { personId, giftId, giftName } = action.payload;
      const updatedGift = {
        giftId,
        giftName,
      };
      const giftToUpdateIndex = state[personId].findIndex(
        (gift) => gift.giftId === giftId,
      );
      const newGifts = state[personId];
      newGifts[giftToUpdateIndex] = updatedGift;
      setGiftsInLocalStorage(state);
      return state;
    }
    case DELETE_GIFT: {
      const { personId, giftId } = action.payload;
      const newPersonGifts = state[personId].filter(
        (gift) => gift.giftId !== giftId,
      );
      const newGifts = { ...state, [personId]: newPersonGifts };
      setGiftsInLocalStorage(newGifts);
      return newGifts;
    }
    case DELETE_PERSON_GIFTS: {
      const { personId } = action.payload;
      const { [personId]: _, ...newState } = state;
      setGiftsInLocalStorage(newState);
      return newState;
    }
    default:
      return state;
  }
}

export default giftsReducer;
