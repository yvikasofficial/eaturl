import React from "react";
import Layout from "../components/layout";
import Overview from "../components/overview";

const MainPage = () => {
  return (
    <Layout>
      <main className="main-page">
        <Overview />
      </main>
    </Layout>
  );
};

export default MainPage;
