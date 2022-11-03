import React from "react";
import TechList from "../TechList/TechList";
import wave from "../../assets/background/wave-tech.png";
export default function Technologies() {
  return (
    <div className="w-full min-h-screen relative">
      <div>
        <h2 className="w-full text-right pt-4 pr-6 text-2xl mb-10">
          TECNOLOGÍAS
        </h2>
        <p className="w-4/5 mx-auto tracking-wide text-xl font-medium mb-14">
          Estas son algunas de las tecnologías y herramientas con las que he
          trabajado.
        </p>
        <TechList />
      </div>
      <img src={wave} className="absolute bottom-0 w-full -z-10" />
    </div>
  );
}
