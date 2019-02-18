import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router/immutable';
import rootReducer from '../reducers/rootReducers';

const configureStore = history => createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), createLogger())),
);

export default configureStore;
