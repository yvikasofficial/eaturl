import axios from "axios";
import BASE_URL from "../../utils/constats";
import { fetchLinks } from "../links/links.actions";
import ShortUrlActionTypes from "./shortUrl.constants";
import { store } from "react-notifications-component";

export const shortUrl = (url) => async (dispatch, getState) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    dispatch({ type: ShortUrlActionTypes.SHORT_URL_REQUEST });
    console.log(getState().base.browserUid);
    const res = await axios.post(
      BASE_URL + "/api/shortUrl",
      { fullUrl: url, browserUid: getState().base.browserUid },
      config
    );
    dispatch({
      type: ShortUrlActionTypes.SHORT_URL_SUCCESS,
      payload: res.data.shortUrl,
    });
    store.addNotification({
      title: "Success",
      message: "Url has been successfully shrinked",
      type: "success",
      container: "top-right",
      insert: "top",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
      },
    });
    dispatch(fetchLinks());
    // localStorage.setItem("links", JSON.stringify(getState().links.data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: ShortUrlActionTypes.SHORT_URL_FAIL,
      payload: error.message,
    });
  }
};
