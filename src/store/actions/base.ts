import { APP_LOADING } from "../types/base"

export const appLoading = (state: boolean) => {
  return {
    type: APP_LOADING,
    payload: state
  }
}

export interface IBaseAppLoadingAction  {
  type: typeof APP_LOADING;
  payload: boolean;
}