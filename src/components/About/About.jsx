import React, { useEffect, useState } from "react";
import head from "../../assets/about/about-mobile.png";
import Social from "../Social/Social";
import wave from "../../assets/background/wave-about.png";
import waveD from "../../assets/background/wave-about-desktop.png";
import useWindowSize from "../../hooks/useWindowSize";

export default function About() {
  // const windowWidth = useWindowSize();
  // const [background, setBackground] = useState(wave);
  // useEffect(() => {
  //   console.log(windowWidth);
  //   if (windowWidth < 768) {
  //     setBackground(wave);
  //   } else {
  //     setBackground(waveD);
  //   }
  // }, [windowWidth]);
  return (
    <div className="w-full min-h-screen relative">
      <div className="md:max-w-xl md:pt-[15%] md:pl-10 ml-10">
        <div className="tracking-wide font-medium w-11/12 mx-auto mb-8 text-lg md:text-xl">
          <small>¡Hola! 👋</small>
          <h1 className="text-5xl mb-8">
            Soy <b>Juan Manuel Grajales</b>
          </h1>
          <i>
            Desarrollador Frontend apasionado por crear experiencias web
            increíbles.
          </i>
        </div>
        <img
          src={head}
          alt="Waiter seen the description"
          className="float-right mr-5 md:absolute md:top-20 md:right-[15%] md:w-72 md:-rotate-45"
        />
        <Social />
      </div>
      <picture>
        <source srcSet={waveD} media="(min-width:768px)" />
        <img
          src={wave}
          className="absolute bottom-0 w-full max-h-[50%] -z-10 "
        />
      </picture>
    </div>
  );
}
