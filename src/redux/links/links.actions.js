import LinkActionTypes from "./links.types";

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
