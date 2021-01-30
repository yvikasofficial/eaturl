import React from "react";

import { COLOR_BLUE } from "../utils/constats";
import Button from "./button";
import { ReactComponent as Startup } from "../assets/copy/startup.svg";

const Copy = () => {
  return (
    <section className="copy">
      <div className="copy__wrapper">
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
