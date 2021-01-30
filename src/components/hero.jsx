import React, { useEffect, useState, useRef } from "react";
import DOTS from "vanta/dist/vanta.rings.min";
import { COLOR_PRIMARY } from "../utils/constats";

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
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

  return <section className="hero" ref={myRef}></section>;
};

export default Hero;
