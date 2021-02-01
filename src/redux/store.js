import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { baseReducer } from "./base/base.reducer";
import { linksReducer } from "./links/links.reducer";
import { shortUrlReducer } from "./shortUrl/shortUrl.reducer";

const reducers = combineReducers({
  shortUrl: shortUrlReducer,
  base: baseReducer,
  links: linksReducer,
});

//funcs
const linksFromLocalStorage = localStorage.getItem("links")
  ? JSON.parse(localStorage.getItem("links"))
  : [];

const initialState = {
  links: {
    data: linksFromLocalStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
