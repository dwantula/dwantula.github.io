import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';

function PersonCard({ name }) {
  const gifts = ['ball', 'tv', 'sadsa', 'sadsdsadsdsadsadas asdsadsa'];
  return (
    <div className="person-card">
      <div className="person-card__name">
        {name}
        <Button
          onClick={() => {}}
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
      <div className="person-card__gifts">
        {gifts.length > 0 ? (
          gifts.map((gift) => (
            <li className="person-card__gift">
              <p className="person-card__gift-name">{gift}</p>
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="button person-card__edit-gift"
              />
              <Button
                onClick={() => {}}
                className="button person-card__button-delete-gift"
                type="button"
                text="X"
              />
            </li>
          ))
        ) : (
          <p>I did not get any gift</p>
        )}
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

PersonCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PersonCard;
