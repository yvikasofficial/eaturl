import ShortUrlActionTypes from "./shortUrl.constants";

export const shortUrlReducer = (state = {}, action) => {
  switch (action.type) {
    case ShortUrlActionTypes.SHORT_URL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case ShortUrlActionTypes.SHORT_URL_SUCCESS: {
      return {
        ...state,
        loading: false,
        url: action.payload,
      };
    }

    case ShortUrlActionTypes.SHORT_URL_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
