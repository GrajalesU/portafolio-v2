import { motion } from "framer-motion";
import React from "react";
import line from "../../assets/background/line.png";
import github from "../../assets/icons/GitHub.png";
import linkedIn from "../../assets/icons/LinkedIn 3.png";
import resume from "../../assets/icons/Resume.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
export default function Social() {
  const { t } = useTranslation();
  const { language } = i18next;
  return (
    <div
      className="flex w-full justify-around absolute bottom-5 z-20
    md:flex-col md:fixed md:left-[calc(98%-64px)] md:bottom-[12%] md:gap-4 md:min-h-screen"
    >
      <img
        src={line}
        alt="line"
        className="hidden w-px ml-5 md:block dark:invert"
      />
      <a
        href="/Juan-Manuel-Grajales-Hoja-de-vida.pdf"
        target="_blank"
        className="flex flex-col-reverse md:flex-col items-center md:items-start"
      >
        <motion.span
          key={language + "cv"}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="text-xs font-bold md:ml-3"
        >
          {t("cv")}
        </motion.span>
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
        className="flex flex-col-reverse md:flex-col items-center md:items-start"
      >
        <span className="text-xs font-bold">linkedIn</span>
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
      <a
        href="https://github.com/grajalesu"
        target="_blank"
        className="flex flex-col-reverse md:flex-col items-center md:items-start"
      >
        <span className="text-xs font-bold">github</span>
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
