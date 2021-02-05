import React, { useEffect } from "react";

import { COLOR_BLUE } from "../utils/constats";
import Button from "./button";
import { ReactComponent as Startup } from "../assets/copy/startup.svg";
import { ReactComponent as CopyIcon } from "../assets/shrinker/copy.svg";
import { ReactComponent as DeleteIcon } from "../assets/copy/delete.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showErrorToast, showSuccessToast } from "../utils/notifications";
import { fetchLinksWithAuth } from "../redux/links/links.actions";
import ScaleLoader from "react-spinners/ScaleLoader";
import { shortUrlDelete } from "../redux/shortUrl/shortUrl.actions";

const Copy = ({ auth }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth) dispatch(fetchLinksWithAuth());
  }, [auth, dispatch]);

  let { data, loading, authLinksData } = useSelector((state) => state.links);
  const { name } = useSelector((state) => state.userLogin.userInfo);

  if (auth) {
    data = authLinksData;
  }

  return (
    <section className="copy">
      <div className="copy__wrapper">
        {!loading ? (
          data.map((d) => (
            <LinkCard
              fullUrl={d.fullUrl}
              date={d.createdAt}
              shortUrl={d.shortUrl}
              clicks={d.clicks}
              key={d._id}
            />
          ))
        ) : (
          <div className="copy__loader">
            <ScaleLoader color={COLOR_BLUE} />
            <span>Loading...</span>
          </div>
        )}

        {!name && (
          <div className="copy__auth">
            <div className="row">
              <div className="col">
                <Startup />
              </div>
              <div className="col">
                <h3>Take it to the next level</h3>
                <p>
                  Take advantage of more useful features. All this to manage
                  your links in an intuitive and simple way.
                </p>
              </div>
              <div className="col">
                <Button
                  width="100px"
                  height="50px"
                  borderRadius="1000px"
                  to="/register"
                  backgroundColor={COLOR_BLUE}
                >
                  Sign up
                </Button>
                <Button
                  width="100px"
                  height="50px"
                  borderRadius="1000px"
                  to="/login"
                >
                  Log in
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Copy;

const LinkCard = ({ fullUrl, shortUrl, clicks, date }) => {
  const { name } = useSelector((state) => state.userLogin.userInfo);
  const dispatch = useDispatch();
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText("eaturl.netlify.app/" + shortUrl);
      showSuccessToast("Copying to clipboard was successful!");
    } catch (error) {
      showErrorToast("Unable to copy clipboard");
    }
  };

  const handleDelete = () => {
    dispatch(shortUrlDelete(shortUrl));
  };

  return (
    <div className="link-card">
      <div className="link-card__top">
        <div className="row">
          <div className="col">
            <span>{fullUrl.split(".")[1]}</span>
            <a href="/">{fullUrl}</a>
          </div>
          <div className="col">
            <div className="row">
              {name ? (
                <div className="row__icon-delete">
                  <DeleteIcon onClick={handleDelete} />
                </div>
              ) : null}
              <div className="date">{date.split("T")[0]}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="link-card__bottom">
        <div className="row">
          <div className="col">
            <div className="row">
              <Link to={`/${shortUrl}`}>eaturl.netlify.app/{shortUrl}</Link>
              <div className="row__icon-copy">
                <CopyIcon onClick={copyText} />
              </div>
            </div>
            <Link
              to={name ? `/info/${shortUrl}` : "/register"}
              className="register"
            >
              {name ? "see more infomation" : "register to use other features"}
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
