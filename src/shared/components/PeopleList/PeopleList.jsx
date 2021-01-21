import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPerson } from '../../../store/people/actions';
import './styles.scss';

import PersonCard from '../PersonCard/PersonCard';
import Button from '../Button/Button';

function PeopleList() {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people);

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
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {people.map(({ id, name }) => (
          <PersonCard key={id} id={id} name={name} />
        ))}
      </div>
    </div>
  );
}

export default PeopleList;
