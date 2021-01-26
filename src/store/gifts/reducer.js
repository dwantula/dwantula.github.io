import generateId from '../../utils/idGenerator';

import { DELETE_GIFT, EDIT_GIFT, ADD_GIFT } from './actions';

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
      const updatedGift = {
        giftId: action.payload.giftId,
        giftName: action.payload.giftName,
        personId: action.payload.personId,
      };
      const giftToUpdateIndex = state.findIndex(
        (gift) => gift.giftId === action.payload.giftId,
      );
      const newGifts = [...state];
      newGifts[giftToUpdateIndex] = updatedGift;
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
