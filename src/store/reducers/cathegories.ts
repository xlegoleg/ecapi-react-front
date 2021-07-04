//TODO reducers with async actions googlin
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
    case FETCH_VALUES:
      return {
        ...state,
        cathegories: action.payload
      }
    default:
      return state;
  }
}