//TODO refactor))))
import axios from 'axios';
import { Dispatch } from 'redux';
import { IBaseFetchingAction, fetching } from '@actions/base'; 

export const FETCH_VALUES = 'cathegories/setValues';
const setValues = (values: any[]) => {
  return {
    type: FETCH_VALUES,
    payload: values
  }
}

export const fetchAll = () => (dispatch: Dispatch) => {
  axios.get(`${process.env.API_BASE_URL}/api/cathegories`).then((resp) => {
    dispatch(setValues(resp.data))
  }).catch(e => {

  });
}

declare interface IFetchValuesAction {
  type: typeof FETCH_VALUES;
  payload: any[];
}

export type CathegoriesActionTypes = IFetchValuesAction | IBaseFetchingAction;