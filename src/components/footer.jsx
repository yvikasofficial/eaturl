import React from "react";
import { ReactComponent as Fb } from "../assets/social/fb.svg";
import { ReactComponent as Instagram } from "../assets/social/instagram.svg";
import { ReactComponent as Linkedin } from "../assets/social/linkedin.svg";
import { ReactComponent as Twitter } from "../assets/social/twitter.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="row">
            <div className="item1">
              <div className="footer__logo">
                <span>EatUrl</span>
                <p>
                  Cuttly | Free Custom URL Shortener, Branded URLs, Link
                  Management, API
                </p>
                <div className="links">
                  <Fb />
                  <Instagram />
                  <Linkedin />
                  <Twitter />
                </div>
              </div>
            </div>
            <div className="item2">
              <div className="block">
                <h5>URL Shortener</h5>
                <a href="/"> URL Shortener</a>
                <a href="/">Available features</a>
              </div>
              <div className="block">
                <h5>Link Management</h5>
                <a href="/">API</a>
                <a href="/">Check url</a>
                <a href="/">CUTT URL button</a>
                <a href="/">Preview mode</a>
                <a href="/">Unsubscribe newsletter</a>
              </div>
              <div className="block">
                <h5>Eaturl</h5>
                <a href="/">Terms of service</a>
                <a href="/">Privacy</a>
                <a href="/">Abuse report</a>
                <a href="/">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer__bottom">
        <p>
          <span>© 2021</span> eaturl.tk | <span>Made by</span> yvikasofficial
        </p>
      </div>
    </>
  );
};

export default Footer;
