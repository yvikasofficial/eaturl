import Layout from "./components/layout";
import IndexPage from "./pages";

import "./App.scss";
import { initilizeApp } from "./redux/base/base.actions";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  dispatch(initilizeApp());

  return (
    <BrowserRouter>
      <Layout>
        <IndexPage />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
