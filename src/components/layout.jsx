import React from "react";
import { useSelector } from "react-redux";
import Footer from "./footer";
import Header from "./header";
import LoadingOverlay from "react-loading-overlay";
import BounceLoader from "react-spinners/BounceLoader";

const Layout = ({ children }) => {
  const { loading } = useSelector((state) => state.base);

  return (
    <div>
      <LoadingOverlay active={loading} spinner={<BounceLoader />}>
        <Header />
        {children}
        <Footer />
      </LoadingOverlay>
    </div>
  );
};

export default Layout;
