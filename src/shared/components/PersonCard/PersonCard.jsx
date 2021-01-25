import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { updatePersonName, deletePersonCard } from 'store/people/actions';
import { addGift } from 'store/gifts/actions';
import Gift from 'screens/Gift/Gift';
import Input from '../Input/Input';
import './styles.scss';
import Button from '../Button/Button';

function PersonCard({ personId }) {
  const dispatch = useDispatch();
  const gifts = useSelector((state) => state.gifts);

  const [personName, setPersonName] = useState('');

  const textInput = useRef();

  useEffect(() => {
    textInput.current.focus();
  }, []);

  function handlePersonNameChange(event) {
    setPersonName(event.target.value);
  }

  function editPersonName() {
    dispatch(updatePersonName(personName, personId));
  }

  function deletePerson() {
    dispatch(deletePersonCard(personId));
  }
  function addPersonGift() {
    dispatch(addGift(personId));
  }

  return (
    <main className="person-card">
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
      <span className="person-card__gifts-list">
        {gifts.map(({ giftId, personId, giftName }) => (
          <Gift
            key={giftId}
            giftName={giftName}
            giftId={giftId}
            personId={personId}
          />
        ))}
      </span>
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
    </main>
  );
}

PersonCard.propTypes = {
  personId: PropTypes.string.isRequired,
  // giftName: PropTypes.string,
};

// PersonCard.defaultProps = {
//   giftName: PropTypes.string,
// };

export default PersonCard;
