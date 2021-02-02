import Layout from "./components/layout";
import IndexPage from "./pages";

import "./App.scss";
import { initilizeApp } from "./redux/base/base.actions";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "animate.css";
import "react-notifications-component/dist/theme.css";
import ReactNotification from "react-notifications-component";

function App() {
  const dispatch = useDispatch();
  dispatch(initilizeApp());

  return (
    <BrowserRouter>
      <ReactNotification />
      <Layout>
        <IndexPage />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
