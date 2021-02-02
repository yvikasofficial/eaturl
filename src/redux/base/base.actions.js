import axios from "axios";
import BASE_URL from "../../utils/constats";
import BaseActionType from "./base.constants";

export const showSpinner = () => (dispatch) => {
  dispatch({ type: BaseActionType.SHOW_SPINNER });
};

export const hideSpinner = () => (dispatch) => {
  dispatch({ type: BaseActionType.HIDE_SPINNER });
};

export const initilizeApp = () => async (dispatch, getState) => {
  dispatch({ type: BaseActionType.APP_INITILIZED });
  const res = await axios.get(BASE_URL + "/api/shortUrl", {
    headers: { browserUid: getState().base.browserUid },
  });
  console.log(res);
};
