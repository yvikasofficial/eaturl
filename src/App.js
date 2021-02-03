import IndexPage from "./pages";

import "./App.scss";
import { initilizeApp } from "./redux/base/base.actions";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "animate.css";
import "react-notifications-component/dist/theme.css";
import ReactNotification from "react-notifications-component";
import RedirectPage from "./pages/redirect";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import MainPage from "./pages/main";

function App() {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.userLogin.userInfo);
  dispatch(initilizeApp());

  return (
    <BrowserRouter>
      <ReactNotification />
      <Switch>
        <Route render={name ? MainPage : IndexPage} path="/" exact />
        <Route component={RegisterPage} path="/register" exact />
        <Route component={LoginPage} path="/login" exact />
        <Route component={RedirectPage} path="/:url" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
