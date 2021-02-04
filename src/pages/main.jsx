import React from "react";
import AdvanceShrinker from "../components/advance-shrinker";
import Layout from "../components/layout";
import Overview from "../components/overview";
import Copy from "../components/copy";

const MainPage = () => {
  return (
    <Layout>
      <main className="main-page">
        <Overview />
        <AdvanceShrinker />
        <Copy auth={true} />
      </main>
    </Layout>
  );
};

export default MainPage;
