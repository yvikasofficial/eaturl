import React from "react";
import Button from "./button";
import { COLOR_BLUE } from "../utils/constats";

const NewsLetter = () => {
  return (
    <section className="news-letter">
      <div className="news-letter__wrapper">
        <h3>Subscribe to our newsletter</h3>
        <p>
          Subscribe to our newsletter and keep up to date with news and useful
          information on shortening links.
        </p>
        <div className="mail">
          <input type="text" placeholder="Enter your email address" />
          <Button height="50px" width="100px" backgroundColor={COLOR_BLUE}>
            Subscribe
          </Button>
        </div>
        <div className="agree">
          <p>
            I agree to the processing of my personal data (email address) by the
            Service Provider Web Room Studio Patryk Rumiński, Poland, for
            marketing purposes. Consent is voluntary. I have the right to
            withdraw my consent at any time without affecting the legality of
            the processing which was carried out on the basis of consent prior
            to its withdrawal. I have the right to access my data and rectify
            it, delete it, limit processing, and the right to transfer data on
            the principles contained in the privacy policy. Personal data is
            processed in accordance with the privacy policy. We encourage you to
            read the policy before agreeing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
