import React from 'react';
import './styles.scss';

import PersonCard from '../PersonCard/PersonCard';
import Button from '../Button/Button';

function PeopleList() {
  const names = ['Ala', 'Ola', 'Kasia', 'Wiola', 'Arek'];

  return (
    <div className="people-card">
      {names.map((name) => (
        <PersonCard key={Math.floor(Math.random * 23)} name={name} />
      ))}
      <Button
        onClick={() => {}}
        className="people-card__button-add-person"
        text="Add Person"
      />
    </div>
  );
}

export default PeopleList;
