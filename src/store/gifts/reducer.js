import generateId from '../../utils/idGenerator';

import { DELETE_GIFT, EDIT_GIFT, ADD_GIFT } from './actions';

const initialState = [];

function giftsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GIFT: {
      const newGift = {
        giftName: action.payload.giftName,
        giftId: generateId('gift'),
        personId: action.payload.personId,
      };
      return [...state, newGift];
    }
    case EDIT_GIFT: {
      const editGift = {
        giftName: action.payload.giftName,
        giftId: action.payload.giftId,
        personId: action.payload.personId,
      };
      const giftToUpdateIndex = state.findIndex(
        (gift) => gift.giftId === action.payload.giftId,
      );
      const newGifts = [...state];
      newGifts[giftToUpdateIndex] = editGift;
      return newGifts;
    }
    case DELETE_GIFT: {
      const giftsWithoutDeleteGift = state.filter(
        (gift) => gift.giftId !== action.payload.giftId,
      );
      return giftsWithoutDeleteGift;
    }
    default:
      return state;
  }
}

export default giftsReducer;
