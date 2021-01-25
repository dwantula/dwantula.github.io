export const ADD_GIFT = 'ADD_GIFT';
export const EDIT_GIFT = 'EDIT_GIFT';
export const DELETE_GIFT = 'DELETE_GIFT';

export const addGift = (personId) => ({
  type: ADD_GIFT,
  payload: { personId },
});

export const editGift = (giftId, giftName) => ({
  type: EDIT_GIFT,
  payload: { giftId, giftName },
});

export const deleteGift = (giftId) => ({
  type: DELETE_GIFT,
  payload: { giftId },
});
