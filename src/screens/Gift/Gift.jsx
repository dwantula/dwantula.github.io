import React, { useState, useRef, useEffect } from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Input from 'shared/components/Input/Input';
import Button from 'shared/components/Button/Button';
import { deleteGift, editGift } from 'store/gifts/actions';

function Gift({ personId, giftId, giftName }) {
  const [name, setGiftName] = useState(giftName);

  const dispatch = useDispatch();

  const textInput = useRef();

  useEffect(() => {
    textInput.current.focus();
  }, []);

  function handleGiftNameChange(event) {
    setGiftName(event.target.value);
  }

  function updateGift() {
    dispatch(editGift(giftId, name, personId));
  }

  function removeGift() {
    dispatch(deleteGift(giftId, personId));
  }

  return (
    <div className="gift">
      <Input
        inputRef={textInput}
        value={name}
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
  giftName: PropTypes.string,
};

Gift.defaultProps = {
  personId: '',
  giftName: '',
};

export default Gift;
