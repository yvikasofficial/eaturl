import React from "react";
import Button from "./button";
import { COLOR_BLUE } from "../utils/constats";

const Shrinker = () => {
  return (
    <section className="shrinker">
      <div className="shrinker__wrapper">
        <div className="shrinker__body">
          <input type="text" placeholder="Paste long url and shorten it" />
          <Button height="50px" width="100px" backgroundColor={COLOR_BLUE}>
            Shortner
          </Button>
        </div>
      </div>
      <p>By using our service you accept the Terms of service and Privacy.</p>
    </section>
  );
};

export default Shrinker;