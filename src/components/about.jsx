import React from "react";
import { ReactComponent as Svg1 } from "../assets/about/i1.svg";
import { ReactComponent as Svg2 } from "../assets/about/i2.svg";
import { ReactComponent as Svg3 } from "../assets/about/i3.svg";

const About = () => {
  return (
    <section className="about">
      <div className="about__wrapper">
        <div className="about__info">
          <h2>Link analytics, branded urls, URL shortener</h2>
          <p>
            Don't let the links limit you. Make your links support your brand.
            The new standard of shortening links. A new standard for link
            analytics. Discover unique redirects analytics - work with your team
            together building your brand engagment. Manage your links like a
            pro.
          </p>
        </div>

        <div className="about__cards">
          <div className="about-card">
            <Svg1 />
            <h4>URL Shortener</h4>
            <p>
              Free custom URL Shortener with many features that gives you better
              quality for links shortening. Shortened URLs will never expire. We
              do not display ads during direct redirecting to the original url.
            </p>
          </div>
          <div className="about-card">
            <Svg2 />
            <h4>Detailed analytics</h4>
            <p>
              Track each shortened link in real-time and measure its performance
              to understand it. Detailed analytics provides you info about
              clicks, social media clicks, page referrer, devices, browsers,
              systems, geo location.
            </p>
          </div>
          <div className="about-card">
            <Svg3 />
            <h4>Link Management Platform</h4>
            <p>
              Optimize and customize each short URL to take advantage of its
              potential. Set your custom alias (name), use it in affiliate
              programs, get QR code for printing flyers and much more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
