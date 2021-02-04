import axios from "axios";
import BASE_URL from "../../utils/constats";
import { fetchLinks, fetchLinksWithAuth } from "../links/links.actions";
import ShortUrlActionTypes from "./shortUrl.constants";
import { store } from "react-notifications-component";
import { showErrorToast, showSuccessToast } from "../../utils/notifications";

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

export const shortUrlWithAuth = (url) => async (dispatch, getState) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getState().userLogin.userInfo.token,
      },
    };

    dispatch({ type: ShortUrlActionTypes.SHORT_URL_REQUEST });
    const res = await axios.post(
      BASE_URL + "/api/shortUrl/p",
      { fullUrl: url },
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
    dispatch(fetchLinksWithAuth());
  } catch (error) {
    console.log(error);
    dispatch({
      type: ShortUrlActionTypes.SHORT_URL_FAIL,
      payload: error.message,
    });
  }
};

export const shortUrlDelete = (url) => async (dispatch, getState) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getState().userLogin.userInfo.token,
      },
    };

    await axios.delete(BASE_URL + "/api/shortUrl/p/" + url, config);

    showSuccessToast("Url Has been deleted!");
    dispatch(fetchLinksWithAuth());
  } catch (error) {
    showErrorToast(error.message);
  }
};
