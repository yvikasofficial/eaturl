import React from "react";
import { useSelector } from "react-redux";
import Footer from "./footer";
import Header from "./header";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";

const Layout = ({ children }) => {
  const { loading } = useSelector((state) => state.base);

  return (
    <LoadingOverlay active={loading} spinner={<BounceLoader />}>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </LoadingOverlay>
  );
};

export default Layout;
