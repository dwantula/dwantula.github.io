import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  updatePersonName,
  deletePersonCard,
} from '../../../store/people/actions';
import { addGift } from '../../../store/gifts/actions';
import Input from '../Input/Input';
import './styles.scss';

import Button from '../Button/Button';
import PersonGift from '../../../screens/Gift/Gift';

function PersonCard({ id }) {
  const dispatch = useDispatch();
  const gifts = useSelector((state) => state.gifts);

  const [personName, setPersonName] = useState('');
  const [giftName, setGiftName] = useState('');
  const textInput = useRef();

  useEffect(() => {
    textInput.current.focus();
  }, []);

  function handlePersonNameChange(event) {
    setPersonName(event.target.value);
  }

  function editPersonName() {
    dispatch(updatePersonName(personName, id));
  }

  function deletePerson() {
    dispatch(deletePersonCard(id));
  }

  function addPersonGift() {
    dispatch(addGift());
  }

  function handleGiftNameChange(event) {
    setGiftName(event.target.value);
  }

  return (
    <div className="person-card">
      <div className="person-card__name">
        <Input
          inputRef={textInput}
          onChange={handlePersonNameChange}
          onBlur={editPersonName}
          value={personName}
          placeholder="Write name"
          type="input"
          className="person-card__input"
        />
      </div>
      <div className="person-card__gifts-list">
        <Input
          value={giftName}
          type="input"
          // onBlur={addGiftName}
          onChange={handleGiftNameChange}
        />
        {gifts.map(({ giftName, giftId }) => (
          <PersonGift key={giftId} giftName={giftName} giftId={giftId} />
        ))}
      </div>
      <div className="person-card__navigation-buttons">
        <Button
          onClick={deletePerson}
          className="person-card__button-delete-person"
          type="button"
          text="Delete list"
        />
        <Button
          onClick={addPersonGift}
          type="button"
          text="Add gift wish"
          className="person-card_button-add-gitf"
        />
      </div>
    </div>
  );
}

PersonCard.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PersonCard;
