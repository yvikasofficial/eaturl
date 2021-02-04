import React from "react";
import { useSelector } from "react-redux";

const Overview = () => {
  const { authLinksData } = useSelector((state) => state.links);

  const clickReducer = () => {
    return authLinksData.reduce((acc, link) => {
      return link.clicks + acc;
    }, 0);
  };

  return (
    <section className="overview">
      <div className="overview__wrapper">
        <p>All Urls Overview</p>
        <div className="boxes">
          <div className="box box1">
            <h3>{authLinksData ? authLinksData.length : "0"}</h3>
            <span>All Urls</span>
          </div>
          <div className="box box2">
            <h3>{authLinksData ? clickReducer() : "0"}</h3>
            <span>Total Clicks</span>
          </div>
          <div className="box box3">
            <h3>{authLinksData ? authLinksData.length : "0"} more</h3>
            <span>Shotrend URLs than in JAN 2021</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
