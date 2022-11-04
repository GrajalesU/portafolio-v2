import React from "react";
import TechList from "../TechList/TechList";
import wave from "../../assets/background/wave-tech.png";
import waveD from "../../assets/background/wave-tech-desktop.png";
export default function Technologies() {
  return (
    <div className="w-full min-h-screen relative md:flex md:flex-row-reverse md:items-center">
      <div className="md:mr-24 lg:mr-40">
        <h2 className="w-full text-right pt-4 pr-6 text-xl mb-10 md:pr-10 md:-translate-y-48 md:text-2xl">
          TECNOLOGÍAS
        </h2>
        <p className="w-4/5 mx-auto tracking-wide text-lg font-bold mb-14 md:text-right md:text-xl md:max-w-lg">
          Estas son algunas de las tecnologías y herramientas con las que he
          trabajado.
        </p>
      </div>
      <TechList />
      <picture>
        <source srcSet={waveD} media="(min-width:768px)" />
        <img src={wave} className="absolute bottom-0 w-full -z-10" />
      </picture>
    </div>
  );
}
