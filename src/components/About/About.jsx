import React from "react";
import head from "../../assets/about/about-mobile.png";
import Social from "../Social/Social";
import wave from "../../assets/background/wave-about.png";

export default function About() {
  return (
    <div className="w-full min-h-screen">
      <div>
        <h2 className=" pt-5 ml-4 mb-8 text-xl">SOBRE MI</h2>
        <div className="tracking-wide font-medium w-11/12 mx-auto mb-8 text-lg">
          <span>¡Hola!</span>
          <p>
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
          className="float-right mr-5"
        />
        <Social />
      </div>
      <img src={wave} className="absolute bottom-0 w-full -z-10 " />
    </div>
  );
}
