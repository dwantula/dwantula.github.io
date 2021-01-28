import React from 'react';

import PeopleList from '../../shared/components/PeopleList/PeopleList';

import './styles.scss';

function Wishlist() {
  return (
    <div className="card">
      <header className="card__header">
        <h1>
          wish
          <span>.</span>
          <span>ly</span>
        </h1>
      </header>
      <main className="card_main">
        <PeopleList />
      </main>
    </div>
  );
}

export default Wishlist;
