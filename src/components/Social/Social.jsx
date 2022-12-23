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
      <img src={line} alt="line" className="hidden w-px ml-5 md:block dark:invert" />
      <a href="/Juan-Manuel-Grajales-Hoja-de-vida.pdf" target="_blank">
        <motion.img
          src={resume}
          alt="resume"
          className="hover:cursor-pointer w-10 dark:invert"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
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
          className="hover:cursor-pointer w-10 dark:invert"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
        />
      </a>
      <a href="https://github.com/grajalesu" target="_blank">
        <motion.img
          src={github}
          alt="github"
          className="hover:cursor-pointer w-10 dark:invert"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
        />
      </a>
      <img
        src={line}
        alt="line"
        className="hidden h-1/4 absolute -bottom-[28%] w-px ml-5 md:block dark:invert"
      />
    </div>
  );
}
