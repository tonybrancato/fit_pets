/*eslint-disable*/

import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth';
import petsReducer from './reducers/pets-reducer';

import { setAuthToken } from './actions/auth';

import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';


const history = createHistory();
const middleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    pets: petsReducer,
    router: routerReducer,
    }),
  composeEnhancers(applyMiddleware(thunk, middleware)),
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
const token = authToken;
store.dispatch(setAuthToken(token));
}

export { store, history };
