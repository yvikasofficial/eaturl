import Layout from "./components/layout";
import IndexPage from "./pages";

import "./App.scss";
import { initilizeApp } from "./redux/base/base.actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  dispatch(initilizeApp());

  return (
    <Layout>
      <IndexPage />
    </Layout>
  );
}

export default App;
