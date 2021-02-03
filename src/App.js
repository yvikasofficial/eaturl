import IndexPage from "./pages";

import "./App.scss";
import { initilizeApp } from "./redux/base/base.actions";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "animate.css";
import "react-notifications-component/dist/theme.css";
import ReactNotification from "react-notifications-component";
import RedirectPage from "./pages/redirect";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";

function App() {
  const dispatch = useDispatch();
  dispatch(initilizeApp());

  return (
    <BrowserRouter>
      <ReactNotification />
      <Switch>
        <Route component={IndexPage} path="/" exact />
        <Route component={RegisterPage} path="/register" exact />
        <Route component={LoginPage} path="/login" exact />
        <Route component={RedirectPage} path="/:url" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
