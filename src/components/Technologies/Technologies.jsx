import React from "react";
import TechList from "../TechList/TechList";
import wave from "../../assets/background/wave-tech.png";
import waveD from "../../assets/background/wave-tech-desktop.png";
export default function Technologies() {
  return (
    <div className="w-full min-h-screen relative md:flex md:flex-row-reverse md:items-center">
      <div className="md:mr-24 lg:mr-40">
        <h2 className="w-full text-right pt-4 pr-6 text-5xl mb-10 md:pr-10 font-bold md:-translate-y-48 md:text-5xl">
          TECNOLOGÍAS
        </h2>
        <p className="w-4/5 mx-auto tracking-wide text-lg  mb-14 md:text-right md:text-xl md:max-w-lg">
          Estas son algunas de las tecnologías y herramientas con las que he
          trabajado.
        </p>
        <ul className=" md:columns-3 list-disc sm:columns-2 text-center list-inside">
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>Tailwind</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>NodeJS</li>
        </ul>
      </div>
      <TechList />
      <picture>
        <source srcSet={waveD} media="(min-width:768px)" />
        <img src={wave} className="absolute bottom-0 w-full -z-10" />
      </picture>
    </div>
  );
}
