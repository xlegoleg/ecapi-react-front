import { applyMiddleware, createStore, compose } from 'redux';
import thunk from  'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';

const composeEnhancers: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as any || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;
