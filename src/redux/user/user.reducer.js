const UserActionTypes = require("./user.types");

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UserActionTypes.USER_REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    }

    case UserActionTypes.USER_REGISTER_FAIL: {
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

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UserActionTypes.USER_LOGIN_SUCCESS: {
      return {
        loading: false,
        userInfo: action.payload,
      };
    }

    case UserActionTypes.USER_LOGIN_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case UserActionTypes.USER_LOGOUT: {
      return { userInfo: {} };
    }

    default:
      return state;
  }
};
