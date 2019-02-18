import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import menuReducer from './test';

const rootReducer = history => combineReducers({
  menu: menuReducer,
  router: connectRouter(history),
});

export default rootReducer;
