import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { baseReducer } from "./base/base.reducer";
import { linksReducer } from "./links/links.reducer";
import { shortUrlReducer } from "./shortUrl/shortUrl.reducer";
import { userRegisterReducer, userLoginReducer } from "./user/user.reducer";

const reducers = combineReducers({
  shortUrl: shortUrlReducer,
  base: baseReducer,
  links: linksReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
});

//funcs
const linksFromLocalStorage = localStorage.getItem("links")
  ? JSON.parse(localStorage.getItem("links"))
  : [];

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {};

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
  links: {
    data: linksFromLocalStorage,
    authLinksData: [],
  },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
