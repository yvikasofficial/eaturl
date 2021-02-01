import axios from "axios";
// import BASE_URL from "../../utils/constats";
import { addLink } from "../links/links.actions";
import ShortUrlActionTypes from "./shortUrl.constants";

export const shortUrl = (url) => async (dispatch, getState) => {
  try {
    const config = {
      "Content-Type": "application/json",
    };

    dispatch({ type: ShortUrlActionTypes.SHORT_URL_REQUEST });
    console.log(getState().base.browserUid);
    const res = await axios.get(
      "/api/shortUrl",
      { fullUrl: url, browserUid: getState().base.browserUid },
      config
    );
    dispatch({
      type: ShortUrlActionTypes.SHORT_URL_SUCCESS,
      payload: res.data.shortUrl,
    });
    dispatch(addLink(res.data));

    localStorage.setItem("links", JSON.stringify(getState().links.data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: ShortUrlActionTypes.SHORT_URL_FAIL,
      payload: error.message,
    });
  }
};
