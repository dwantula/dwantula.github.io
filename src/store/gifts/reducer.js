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
      const { personId, giftId, giftName } = action.payload;
      const updatedGift = {
        giftId,
        giftName,
        personId,
      };
      console.log(updatedGift);
      // const personGifts = state.gifts;
      // console.log(state[personId]);
      const giftToUpdateIndex = state[personId].findIndex(
        (gift) => gift.giftId === giftId,
      );
      console.log(giftToUpdateIndex);
      // const newGifts = [...state];
      // newGifts[giftToUpdateIndex] = updatedGift;
      return state;
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
