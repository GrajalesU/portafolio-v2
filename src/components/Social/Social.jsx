import React from "react";
import github from "../../assets/icons/GitHub.png";
import linkedIn from "../../assets/icons/LinkedIn 3.png";
import resume from "../../assets/icons/Resume.png";
import line from "../../assets/background/line.png";
import { motion } from "framer-motion";

export default function Social() {
  return (
    <div
      className="flex w-full justify-around absolute bottom-5 z-20
    md:flex-col md:fixed md:left-[calc(98%-64px)] md:bottom-[12%] md:gap-4"
    >
      <img src={line} alt="line" className="hidden w-px ml-8 md:block " />
      <a
        href="https://grajalesu.github.io/portfolio/cv_JuanManuelGrajales.pdf"
        target="_blank"
      >
        <motion.img
          src={resume}
          alt="resume"
          className="hover:cursor-pointer"
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/juan-manuel-grajales-urquijo/"
        target="_blank"
      >
        <motion.img
          src={linkedIn}
          alt="linkedIn"
          className="hover:cursor-pointer"
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        />
      </a>
      <a href="https://github.com/grajalesu" target="_blank">
        <motion.img
          src={github}
          alt="github"
          className="hover:cursor-pointer"
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        />
      </a>
      <img
        src={line}
        alt="line"
        className="hidden h-1/4 absolute -bottom-[26%] w-px ml-8 md:block"
      />
    </div>
  );
}
