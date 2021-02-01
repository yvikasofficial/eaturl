import LinkActionTypes from "./links.types";

export const linksReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case LinkActionTypes.ADD_LINK: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }

    default:
      return state;
  }
};
