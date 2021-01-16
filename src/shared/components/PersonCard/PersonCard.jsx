import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import Button from '../Button/Button';

function PersonCard({ name }) {
  const gifts = ['ball', 'tv', 'car'];
  return (
    <div className="person-card">
      <div className="person-card__name">
        {name}
        <Button onClick={() => {}} className="btn" type="button" text="edit" />
        <Button
          onClick={() => {}}
          className="btn"
          type="button"
          text="delete"
        />
      </div>
      <div className="person-card__gifts">
        {gifts.length > 0 ? (
          gifts.map((gift) => (
            <li className="gift">
              <p>{gift}</p>
              <Button
                onClick={() => {}}
                className="btn"
                type="button"
                text="edit"
              />
              <Button
                onClick={() => {}}
                className="btn"
                type="button"
                text="delete"
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
        className="person-card_add-button"
      />
    </div>
  );
}

PersonCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PersonCard;
