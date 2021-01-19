import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePersonName } from '../../../store/people/actions';
// import PropTypes from 'prop-types';
import Input from '../Input/Input';
import './styles.scss';

import Button from '../Button/Button';

function PersonCard() {
  const dispatch = useDispatch();
  const [namePerson, setNamePerson] = useState('');
  const textInput = useRef();

  useEffect(() => {
    textInput.current.focus();
  }, []);

  function handlePersonNameChange(event) {
    setNamePerson(event.target.value);
  }

  function addName() {
    dispatch(updatePersonName(`${namePerson}`));
  }

  return (
    <div className="person-card">
      <div className="person-card__name">
        <Input
          inputRef={textInput}
          onChange={handlePersonNameChange}
          value={namePerson}
          placeholder="Write name"
          type="input"
          className="person-card__input"
        />
        <Button
          onClick={addName}
          className="button person-card__button-delete-person"
          type="button"
          text="X"
        />
        <Button
          onClick={() => {}}
          className="button person-card__button-edit-person"
          type="button"
          text="edit"
        />
      </div>

      <Button
        onClick={() => {}}
        type="button"
        text="+"
        className="person-card_button-add-gitf"
      />
    </div>
  );
}

// PersonCard.propTypes = {
//   namePerson: PropTypes.string.isRequired,
// };

export default PersonCard;
