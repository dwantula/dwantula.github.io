import generateId from '../../utils/idGenerator';

import { DELETE_GIFT, EDIT_GIFT, ADD_GIFT } from './actions';

const initialState = [];

function giftsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_GIFT: {
      const newGift = { giftName: action.payload, giftId: generateId('gift') };
      return [...state, newGift];
    }
    case EDIT_GIFT: {
      return true;
    }
    case DELETE_GIFT: {
      return true;
    }
    default:
      return state;
  }
}

export default giftsReducer;
