//TODO reducers with async actions googling
import {
  FETCHING
} from '@actions/base';
import { 
  FETCH_VALUES,
  CathegoriesActionTypes
} from '@actions/cathegories';

const initialState = { 
  cathegories: [],
  fetching: false
}

export const cathegoriesReducer = (state = initialState, action: CathegoriesActionTypes ) => {
  switch(action.type) {
    case FETCHING:
      return {...state, fetching: action.payload}
    case FETCH_VALUES:
      return {
        ...state,
        cathegories: action.payload
      }
    default:
      return state;
  }
}