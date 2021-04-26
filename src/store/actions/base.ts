// TODO move to types folder
export const FETCHING = 'FETCHING';
export const fetching = (fetching: boolean) => {
  return {
    type: FETCHING,
    payload: fetching
  }
}

export interface IBaseFetchingAction  {
  type: typeof FETCHING;
  payload: boolean;
}