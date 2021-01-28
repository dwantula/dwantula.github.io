import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import {
//   getItemFromLocalStorage,
//   saveItemInLocalStorage,
// } from 'utils/localStorage';
// import throttle from 'lodash.throttle';

import rootReducer from './rootReducer';

// const persistedState = getItemFromLocalStorage('store') || [];

const store = createStore(rootReducer, composeWithDevTools());

// store.subscribe(
//   throttle(() => {
//     saveItemInLocalStorage('store', store.getState());
//   }, 1000),
// );

export default store;
