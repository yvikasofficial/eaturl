import BaseActionType from "./base.constants";
import { v4 as uuidv4 } from "uuid";

export const baseReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case BaseActionType.SHOW_SPINNER: {
      return {
        ...state,
        loading: true,
      };
    }

    case BaseActionType.HIDE_SPINNER: {
      return {
        ...state,
        loading: false,
      };
    }

    case BaseActionType.APP_INITILIZED: {
      let uid = localStorage.getItem("browserUid");
      if (!uid) {
        uid = uuidv4();
        localStorage.setItem("browserUid", uid);
      }
      return {
        ...state,
        browserUid: uid,
      };
    }

    default:
      return state;
  }
};
