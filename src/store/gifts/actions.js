export const ADD_GIFT = 'ADD_GIFT';
export const EDIT_GIFT = 'EDIT_GIFT';
export const DELETE_GIFT = 'DELETE_GIFT';
export const DELETE_PERSON_GIFTS = 'DELETE_PERSON_GIFTS';

export const addGift = (personId) => ({
  type: ADD_GIFT,
  payload: { personId },
});

export const editGift = (giftId, giftName, personId) => ({
  type: EDIT_GIFT,
  payload: { giftId, giftName, personId },
});

export const deleteGift = (giftId, personId) => ({
  type: DELETE_GIFT,
  payload: { giftId, personId },
});

export const deletePersonGifts = (personId) => ({
  type: DELETE_PERSON_GIFTS,
  payload: { personId },
});
