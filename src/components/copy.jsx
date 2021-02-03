import React from "react";

import { COLOR_BLUE } from "../utils/constats";
import Button from "./button";
import { ReactComponent as Startup } from "../assets/copy/startup.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Copy = () => {
  const { data } = useSelector((state) => state.links);
  return (
    <section className="copy">
      <div className="copy__wrapper">
        {data.map((d) => (
          <LinkCard
            fullUrl={d.fullUrl}
            date={d.createdAt}
            shortUrl={d.shortUrl}
            clicks={d.clicks}
            key={d._id}
          />
        ))}
        <div className="copy__auth">
          <div className="row">
            <div className="col">
              <Startup />
            </div>
            <div className="col">
              <h3>Take it to the next level</h3>
              <p>
                Take advantage of more useful features. All this to manage your
                links in an intuitive and simple way.
              </p>
            </div>
            <div className="col">
              <Button
                width="100px"
                height="50px"
                borderRadius="1000px"
                backgroundColor={COLOR_BLUE}
              >
                Sign up
              </Button>
              <Button width="100px" height="50px" borderRadius="1000px">
                Log in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Copy;

const LinkCard = ({ fullUrl, shortUrl, clicks, date }) => {
  return (
    <div className="link-card">
      <div className="link-card__top">
        <div className="row">
          <div className="col">
            <span>{fullUrl.split(".")[1]}</span>
            <a href="/">{fullUrl}</a>
          </div>
          <div className="col">
            <div className="date">{date.split("T")[0]}</div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="link-card__bottom">
        <div className="row">
          <div className="col">
            <Link to={`/${shortUrl}`}>localhost:3000/{shortUrl}</Link>
            <Link to="/signup" className="register">
              {" "}
              register to use other features
            </Link>
          </div>
          <div className="col">
            <div className="clicks">
              Clicks <span>{clicks}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
