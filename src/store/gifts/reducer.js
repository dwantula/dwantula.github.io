import generateId from 'utils/idGenerator';

import {
  DELETE_GIFT,
  EDIT_GIFT,
  ADD_GIFT,
  DELETE_PERSON_GIFTS,
} from './actions';

const initialState = {};

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
      return { ...state, [personId]: newPersonGifts };
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
      return state;
    }
    case DELETE_GIFT: {
      const { personId, giftId } = action.payload;
      const newPersonGifts = state[personId].filter(
        (gift) => gift.giftId !== giftId,
      );
      return { ...state, [personId]: newPersonGifts };
    }
    case DELETE_PERSON_GIFTS: {
      const { personId } = action.payload;
      const { [personId]: _, ...newState } = state;
      return newState;
    }
    default:
      return state;
  }
}

export default giftsReducer;
