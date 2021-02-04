import LinkActionTypes from "./links.types";
import axios from "axios";
import BASE_URL from "../../utils/constats";
import { showErrorToast } from "../../utils/notifications";

export const addLink = (data) => (dispatch) => {
  dispatch({
    type: LinkActionTypes.ADD_LINK,
    payload: data,
  });
};

export const removeLink = (data) => (dispatch) => {
  dispatch({
    type: LinkActionTypes.REMOVE_LINK,
    payload: data,
  });
};

export const fetchLinks = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(BASE_URL + "/api/shortUrl", {
      headers: { browserUid: getState().base.browserUid },
    });
    dispatch({
      type: LinkActionTypes.UPDATE_LINKS,
      payload: res.data,
    });
    localStorage.setItem("links", JSON.stringify(res.data));
  } catch (error) {}
};

export const fetchLinksWithAuth = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LinkActionTypes.AUTH_LINKS_REQUEST,
    });
    const res = await axios.get(BASE_URL + "/api/shortUrl/p", {
      headers: {
        Authorization: "Bearer " + getState().userLogin.userInfo.token,
      },
    });
    dispatch({
      type: LinkActionTypes.AUTH_LINKS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    showErrorToast(error.message);
    dispatch({
      type: LinkActionTypes.AUTH_LINKS_FAIL,
      payload: error.message,
    });
  }
};
