import React from "react";
import About from "../components/about";
import Copy from "../components/copy";
import Hero from "../components/hero";
import Shrinker from "../components/shrinker";

const IndexPage = () => {
  return (
    <main>
      <Hero />
      <Shrinker />
      <Copy />
      <About />
    </main>
  );
};

export default IndexPage;
