import React, { useEffect, useState, useRef } from "react";
import DOTS from "vanta/dist/vanta.rings.min";
import { COLOR_PRIMARY } from "../utils/constats";
import Typewriter from "typewriter-effect/dist/core";

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    var app = document.querySelector(".typewriter");
    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
    });

    typewriter
      .pauseFor(2500)
      .typeString("Here You can take full control of you links")
      .pauseFor(300)
      .deleteChars(10)
      .typeString(" <strong>Branded Urls, </strong>")
      .typeString(" <strong>Team Link manager, </strong>")
      .typeString(" <strong>Url Rotator.</strong>")
      .pauseFor(1000)
      .start();
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: COLOR_PRIMARY,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section className="hero" ref={myRef}>
      <div className="typewriter">akdskdb</div>
    </section>
  );
};

export default Hero;
