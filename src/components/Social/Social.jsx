import React from "react";
import github from "../../assets/icons/GitHub.png";
import linkedIn from "../../assets/icons/LinkedIn 3.png";
import resume from "../../assets/icons/Resume.png";

export default function Social() {
  return (
    <div className="flex w-full justify-between absolute bottom-5">
      <div>
        {
          //TODO: Linea larga
        }
      </div>
      <a
        href="https://grajalesu.github.io/portfolio/cv_JuanManuelGrajales.pdf"
        target="_blank"
      >
        <img src={resume} alt="resume" />
      </a>
      <a
        href="https://www.linkedin.com/in/juan-manuel-grajales-urquijo/"
        target="_blank"
      >
        <img src={linkedIn} alt="linkedIn" />
      </a>
      <a href="https://github.com/grajalesu" target="_blank">
        <img src={github} alt="github" />
      </a>
      <div>
        {
          //TODO:Linea corta
        }
      </div>
    </div>
  );
}
