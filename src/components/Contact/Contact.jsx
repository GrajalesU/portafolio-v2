import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import hired from "../../assets/background/hired.png";
import waveD from "../../assets/background/wave-contact-desktop.png";
import wave from "../../assets/background/wave-contact.png";

export default function Contact() {
  const [messageSended, setMessageSended] = useState(false);
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleEmail() {
    emailjs
      .sendForm(
        "service_yrqlvew",
        "template_z9cggzt",
        form.current,
        "user_nLXDuX67AXZpzs2nKdVKZ"
      )
      .then(
        () => {
          setMessageSended(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="w-full min-h-screen relative dark:bg-slate-800 dark:text-white transition-colors duration-700">
      <picture>
        <source srcSet={waveD} media="(min-width:768px)" />
        <img
          src={wave}
          className="absolute w-full -z-10 dark:z-10 dark:invert-[20%]"
        />
      </picture>
      <div className="max-w-3xl mx-auto relative z-20">
        {!messageSended ? (
          <div>
            <img
              src={hired}
              alt="hired employee"
              className="absolute top-[calc(60%-228px)] -z-10 left-[calc(50%-190px)] dark:invert dark:contrast-[3]"
            />
            <h2 className="w-full text-center text-xl font-bold pt-16 mb-11 md:text-2xl">
              CONTÁCTAME
            </h2>
            <p className="w-10/12 mb-16 mx-auto text-lg tracking-wide md:text-xl">
              Envíame un email a{" "}
              <a
                href="mailto: juan.grajalesu@gmail.com"
                className="text-cyan-600 hover:text-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-400"
              >
                este correo
              </a>{" "}
              ó llena el siguiente formulario y estaremos en contacto.
            </p>
            <form
              ref={form}
              className="w-4/5 mx-auto text-xl md:text-2xl"
              onSubmit={handleSubmit(handleEmail)}
            >
              <div className="flex flex-col gap-1 mb-2">
                <label
                  htmlFor="nombre"
                  className="font-bold"
                  placeholder="Introduce tu nombre"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="bg-sky-400/[.25] p-1 dark:bg-sky-700/[.25]"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <small className="text-red-600">
                    Este campo es necesario
                  </small>
                )}
              </div>
              <div className="flex flex-col gap-1 mb-2">
                <label htmlFor="correo" className="font-bold ">
                  Correo
                </label>
                <input
                  type="email"
                  id="correo"
                  className="bg-sky-400/[.25] p-1 dark:bg-sky-700/[.25]"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <small className="text-red-600">
                    Este campo es necesario
                  </small>
                )}
              </div>
              <div className="flex flex-col gap-1 mb-14">
                <label htmlFor="mensaje" className="font-bold">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  className="bg-sky-400/[.25] min-h-[200px] dark:bg-sky-700/[.25] "
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <small className="text-red-600">
                    Este campo es necesario
                  </small>
                )}
              </div>
              <button
                type="submit"
                className="bg-sky-300 dark:bg-sky-800 w-full mx-auto p-2 rounded-lg text-white font-bold tracking-wider mb-5 hover:bg-sky-400"
              >
                Enviar
              </button>
            </form>
          </div>
        ) : (
          <motion.span
            className="text-3xl flex h-screen items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Gracias por contactarme. Lo más pronto posible estaré comunicándome
            contigo, espero que puedan salir buenas oportunidades gracias a
            esto.
          </motion.span>
        )}
      </div>
    </div>
  );
}
