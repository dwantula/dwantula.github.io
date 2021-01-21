import React from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// import Input from '../../shared/components/Input/Input';
import Button from '../../shared/components/Button/Button';
// import { addGift } from '../../store/gifts/actions';

function PersonGift({ giftName }) {
  return (
    <div className="person-card__gift">
      <p className="person-card__gift-name">{giftName}</p>
      <div className="person_card__gitf-buttons">
        <Button
          className="person-card__gift-button-delete"
          onClick={() => {}}
          type="button"
          text="X"
        />
        <Button
          className="person-card__gift-button-edit"
          onClick={() => {}}
          type="button"
          text="edit"
        />
      </div>
    </div>
  );
}

PersonGift.propTypes = {
  giftName: PropTypes.string,
};

PersonGift.defaultProps = {
  giftName: PropTypes.string,
};

export default PersonGift;
