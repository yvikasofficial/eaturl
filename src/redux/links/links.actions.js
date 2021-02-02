import LinkActionTypes from "./links.types";
import axios from "axios";
import BASE_URL from "../../utils/constats";

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
    dispatch({ type: LinkActionTypes.UPDATE_LINKS, payload: res.data });
    localStorage.setItem("links", JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
  }
};
