import { combineReducers } from 'redux';
import { cathegoriesReducer } from '@reducers/cathegories';

export const rootReducer =combineReducers({
  cathegories: cathegoriesReducer
});

export type RootState = ReturnType<typeof rootReducer>