import { fetchLinks } from "../links/links.actions";
import BaseActionType from "./base.constants";

export const showSpinner = () => (dispatch) => {
  dispatch({ type: BaseActionType.SHOW_SPINNER });
};

export const hideSpinner = () => (dispatch) => {
  dispatch({ type: BaseActionType.HIDE_SPINNER });
};

export const initilizeApp = () => async (dispatch, getState) => {
  dispatch({ type: BaseActionType.APP_INITILIZED });
  dispatch(fetchLinks());
};
