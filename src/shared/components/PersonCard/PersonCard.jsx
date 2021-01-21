import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  updatePersonName,
  deletePersonCard,
} from '../../../store/people/actions';
import Input from '../Input/Input';
import './styles.scss';

import Button from '../Button/Button';

function PersonCard({ id }) {
  const dispatch = useDispatch();
  const [personName, setPersonName] = useState('');
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
      <div
        style={{
          display: 'flex',
          marginTop: 'auto',
          padding: '20px 10px',
          justifyContent: 'space-between',
        }}
      >
        <Button
          onClick={deletePerson}
          className="person-card__button-delete-person"
          type="button"
          text="Delete list"
        />
        <Button
          onClick={() => {}}
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
