import React from 'react';
import PeopleList from '../shared/components/PeopleList/PeopleList';
import './styles.scss';

function Wishlist() {
  return (
    <div className="card">
      <header className="card__header">WishList</header>
      <main>
        <PeopleList />
      </main>
    </div>
  );
}

export default Wishlist;
