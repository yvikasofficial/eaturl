import React from "react";
import About from "../components/about";
import Copy from "../components/copy";
import Hero from "../components/hero";
import NewsLetter from "../components/news-letter";
import Shrinker from "../components/shrinker";

const IndexPage = () => {
  return (
    <main>
      <Hero />
      <Shrinker />
      <Copy />
      <About />
      <NewsLetter />
    </main>
  );
};

export default IndexPage;
