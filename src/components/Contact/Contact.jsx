import React from "react";
import hired from "../../assets/background/hired.png";
import wave from "../../assets/background/wave-contact.png";
import waveD from "../../assets/background/wave-contact-desktop.png";

export default function Contact() {
  return (
    <div className="w-full min-h-screen relative">
      <picture>
        <source srcSet={waveD} media="(min-width:768px)" />
        <img src={wave} className="absolute w-full -z-10" />
      </picture>
      <div className="max-w-3xl mx-auto relative">
        <img
          src={hired}
          alt="hired employee"
          className="absolute top-[calc(60%-228px)] -z-10 left-[calc(50%-190px)] "
        />
        <div>
          <h2 className="w-full text-center text-xl font-normal pt-16 mb-11 md:text-2xl">
            CONTÁCTAME
          </h2>
          <p className="w-10/12 mb-16 mx-auto font-bold text-lg tracking-wide md:text-xl">
            Envíame un email a{" "}
            <a
              href="mailto: juan.grajalesu@gmail.com"
              className="text-cyan-600 hover:text-cyan-500"
            >
              este correo
            </a>{" "}
            ó llena el siguiente formulario y estaremos en contacto.
          </p>
          <form className="w-4/5 mx-auto text-xl md:text-2xl">
            <div className="flex flex-col gap-3">
              <label htmlFor="nombre" className="font-bold">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="bg-sky-400/[.25] mb-2 p-1"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="correo" className="font-bold ">
                Correo
              </label>
              <input
                type="email"
                id="correo"
                className="bg-sky-400/[.25] mb-2 p-1"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="mensaje" className="font-bold">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                className="bg-sky-400/[.25] min-h-[200px] mb-14"
              />
            </div>
            <button className="bg-sky-200 w-full mx-auto p-2 rounded-lg text-white font-bold tracking-wider">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
