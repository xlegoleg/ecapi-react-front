import { combineReducers } from 'redux';
import { cathegoriesReducer } from './reducers/cathegories'
import { userReducer } from './reducers/userReducer';

export const rootReducer =combineReducers({
  user: userReducer,
  cathegories: cathegoriesReducer
});

export type RootState = ReturnType<typeof rootReducer>