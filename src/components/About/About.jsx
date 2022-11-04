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
      <div className="md:max-w-lg md:pt-[15%] md:pl-8">
        <h2 className=" pt-5 ml-4 mb-8 text-xl md:text-2xl md:mb-44">
          SOBRE MI
        </h2>
        <div className="tracking-wide font-medium w-11/12 mx-auto mb-8 text-lg md:text-xl">
          <span>¡Hola!</span>
          <p className="mb-8">
            Soy <b>Juan Manuel Grajales</b> y vivo en Colombia.
          </p>
          <p>
            Soy desarrollador Frontend JR y me encanta crear experiencias web
            increíbles.
          </p>
        </div>
        <img
          src={head}
          alt="Waiter seen the description"
          className="float-right mr-5 md:absolute md:top-8 md:right-[10%] md:w-64 md:-rotate-45"
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
