import React from "react";
import waveD from "../../assets/background/wave-projects-desktop.png";
import wave from "../../assets/background/wave-projects.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { motion } from "framer-motion";
import ProjectList from "../ProjectList/ProjectList";

export default function Projects() {
  const { t } = useTranslation();
  const { language } = i18next;

  return (
    <div className="w-full h-svh relative pb-20 dark:bg-slate-800 dark:text-white transition-colors duration-700">
      <picture>
        <source srcSet={waveD} media="(min-width:768px)" />
        <img
          src={wave}
          className="absolute top-0 w-full -z-10 dark:z-0 dark:invert-[20%]"
        />
      </picture>
      <div className="container mx-auto lg:px-8 ">
        <motion.h2
          key={language + "projects"}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="pt-5 uppercase mb-8 text-xl md:text-3xl font-bold dark:z-10 dark:relative "
        >
          {t("projects")}
        </motion.h2>
        <motion.p
          key={language + "projectsDescription"}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="mx-auto mb-8 text-lg  tracking-wide
          md:w-full md:mb-16 md:text-xl md:max-w-lg md:ml-0
          dark:z-10 dark:relative text-pretty"
        >
          {t("projectsDescription")}
        </motion.p>
        <div className="mx-auto">
          <ProjectList />
        </div>
      </div>
    </div>
  );
}
