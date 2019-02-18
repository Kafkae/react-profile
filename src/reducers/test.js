import { Map, List } from 'immutable';

export const initialState = Map({
  name: 'Will',
  pets: List(['cat', 'dog']),
});

function menuReducer(state = initialState) {
  return state;
}

export default menuReducer;
