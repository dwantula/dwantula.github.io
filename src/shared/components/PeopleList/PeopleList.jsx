import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPerson } from '../../../store/people/actions';
import './styles.scss';

import PersonCard from '../PersonCard/PersonCard';
import Button from '../Button/Button';

function PeopleList() {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people);
  const gifts = useSelector((state) => state.gifts);

  function addNewPerson() {
    dispatch(addPerson());
  }

  return (
    <div className="people-card">
      <Button
        onClick={addNewPerson}
        className="people-card__button-add-person"
        text="Add Person"
      />
      <div className="people-card__people-list">
        {people.map(({ personName, personId }) => (
          <PersonCard
            personGifts={gifts[personId]}
            key={personId}
            personId={personId}
            personName={personName}
          />
        ))}
      </div>
    </div>
  );
}

export default PeopleList;
