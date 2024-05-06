import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'
import { productreducer } from './reducers/reducerProduct';
import { usersreducer } from './reducers/UserReducer';
const rootreducer=combineReducers({
  productreducer,
  usersreducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootreducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(thunk)
  ));