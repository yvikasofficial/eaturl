import LinkActionTypes from "./links.types";

export const linksReducer = (
  state = { data: [], authLinksData: [] },
  action
) => {
  switch (action.type) {
    case LinkActionTypes.ADD_LINK: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case LinkActionTypes.UPDATE_LINKS: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case LinkActionTypes.AUTH_LINKS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case LinkActionTypes.AUTH_LINKS_SUCCESS: {
      return {
        ...state,
        loading: false,
        authLinksData: action.payload,
      };
    }
    case LinkActionTypes.AUTH_LINKS_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
