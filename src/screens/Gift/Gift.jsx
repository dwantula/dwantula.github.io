import React, { useState, useRef, useEffect } from 'react';
import { deleteGift, editGift } from 'store/gifts/actions';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import Input from 'shared/components/Input/Input';
// import Button from 'shared/components/Button/Button';

import './styles.scss';

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
      <div className="gift__icon">
        <FontAwesomeIcon icon={faTrash} onClick={removeGift} />
      </div>
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
