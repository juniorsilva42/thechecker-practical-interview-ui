import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './configureReducers';

const middleware = [thunk];
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())
    || compose,
  ),
);

export default store;