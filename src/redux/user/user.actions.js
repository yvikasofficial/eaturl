import UserActionTypes from "./user.types";
import axios from "axios";
import BASE_URL from "../../utils/constats";
import { showErrorToast, showSuccessToast } from "../../utils/notifications";

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: UserActionTypes.USER_REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      BASE_URL + "/api/users/register",
      { email, password, name },
      config
    );
    dispatch({ type: UserActionTypes.USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: UserActionTypes.USER_LOGIN_SUCCESS, payload: data });
    showSuccessToast("User Registered successfully");
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const mess = error.response.data.message;
    dispatch({ type: UserActionTypes.USER_LOGIN_FAIL, payload: mess });
    showErrorToast(mess);
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: UserActionTypes.USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      BASE_URL + "/api/users/login",
      { email, password },
      config
    );
    dispatch({ type: UserActionTypes.USER_LOGIN_SUCCESS, payload: data });
    showSuccessToast("Logged In");
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const mess = error.response ? error.response.data.message : error.message;
    dispatch({ type: UserActionTypes.USER_LOGIN_FAIL, payload: mess });
    showErrorToast(mess);
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: UserActionTypes.USER_LOGOUT });
  showSuccessToast("Logged out");
};
