// store.tsx
import {createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './rootReducer';
import productReducer from './reducer';

export const store = createStore(productReducer, applyMiddleware(thunk));
