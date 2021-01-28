import { combineReducers } from 'redux';
import peopleReducer from './people/reducer';
import giftsReducer from './gifts/reducer';

const rootReducer = combineReducers({
  people: peopleReducer,
  gifts: giftsReducer,
});

export default rootReducer;
