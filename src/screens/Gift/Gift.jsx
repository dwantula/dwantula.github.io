import React, { useState } from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Input from 'shared/components/Input/Input';
import Button from 'shared/components/Button/Button';
import { deleteGift, editGift } from 'store/gifts/actions';

function Gift({ personId, giftId }) {
  const [giftName, setGiftName] = useState('');

  const dispatch = useDispatch();

  function handleGiftNameChange(event) {
    setGiftName(event.target.value);
  }

  function updateGift() {
    dispatch(editGift(giftId, giftName, personId));
  }

  function removeGift() {
    dispatch(deleteGift(giftId));
  }

  return (
    <div className="gift">
      <Input
        value={giftName}
        type="input"
        onBlur={updateGift}
        onChange={handleGiftNameChange}
        placeholder="Write gift"
        className="gift__input-name"
      />
      <Button
        className="gift__button-delete"
        onClick={removeGift}
        type="button"
        text="X"
      />
    </div>
  );
}

Gift.propTypes = {
  giftId: PropTypes.string.isRequired,
  personId: PropTypes.string,
};

Gift.defaultProps = {
  personId: '',
};

export default Gift;
