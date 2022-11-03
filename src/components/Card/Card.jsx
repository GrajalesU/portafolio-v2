import React from "react";
import quePrefieres from "./../../assets/projects/que_prefieres.jpg";
export default function Card() {
  return (
    <article className="w-72 h-[580px] shadow-xl bg-white mx-auto">
      <div className="w-full h-64 bg-amber-100 flex mb-9">
        <img
          src={quePrefieres}
          alt="preview del proyecto"
          className="object-contain"
        />
      </div>
      <h3 className="mb-16 text-center font-bold text-2xl">¿Qué prefieres?</h3>
      <p className="w-4/5 mx-auto font-normal text-xl">
        En este sitio puedes crear preguntas y dejar que la comunidad decida qué
        prefiere
      </p>
    </article>
  );
}
