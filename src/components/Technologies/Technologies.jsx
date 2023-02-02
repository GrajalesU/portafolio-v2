import React from "react";
import waveD from "../../assets/background/wave-tech-desktop.png";
import wave from "../../assets/background/wave-tech.png";
import TechList from "../TechList/TechList";
export default function Technologies() {
  return (
    <div className="w-full min-h-screen relative md:flex md:flex-row-reverse md:items-center dark:bg-slate-800 dark:text-white transition-colors duration-700">
      <div className="md:mr-24 lg:mr-40">
        <h2 className="w-full text-right pt-4 pr-6 text-xl mb-10 md:pr-10 md:-translate-y-48 md:text-2xl font-bold">
          TECNOLOGÍAS
        </h2>
        <p className="w-4/5 mx-auto tracking-wide text-lg mb-14 md:text-right md:text-xl md:max-w-lg relative z-20">
          Estas son algunas de las tecnologías y herramientas con las que he
          trabajado.
        </p>
      </div>
      <TechList />
      <picture>
        <source srcSet={waveD} media="(min-width:768px)" />
        <img
          src={wave}
          className="absolute bottom-0 w-full -z-10 dark:z-10 dark:invert-[20%]"
        />
      </picture>
    </div>
  );
}
