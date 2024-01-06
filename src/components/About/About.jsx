import React from "react";
import head from "../../assets/about/about-mobile.png";
import waveD from "../../assets/background/wave-about-desktop.png";
import wave from "../../assets/background/wave-about.png";
import Social from "../Social/Social";
import { useTranslation } from "react-i18next";
import Configuration from "../Configuration/Configuration";
import i18next from "i18next";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useTranslation();
  const { language } = i18next;
  return (
    <div className="w-full h-svh relative dark:bg-slate-800 dark:text-white transition-colors duration-700 overflow-hidden">
      <div className="container mx-auto lg:px-8 px-2">
        <Configuration />
        <div className="md:max-w-lg md:pt-[15%]">
          <motion.h2
            key={language + "about"}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className=" pt-5 mb-8 text-xl md:text-2xl md:mb-32 font-bold uppercase"
          >
            {t("about")}
          </motion.h2>
          <div className="tracking-wide mx-auto mb-8 text-lg md:text-xl relative z-20">
            <motion.span
              key={language + "hi"}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              {t("hi")}
            </motion.span>
            <motion.p
              key={language + "d1"}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="mb-8"
            >
              {t("im")} <b>Juan Manuel Grajales</b> {t("living")}
            </motion.p>
            <motion.p
              key={language + "d2"}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              {t("aboutDescription")}
            </motion.p>
          </div>
          <img
            src={head}
            alt="Waiter seen the description"
            className="float-right mr-5 md:absolute md:top-20 md:right-[15%] md:w-72 md:-rotate-45 z-10 dark:z-30 dark:invert contrast-[3]"
          />
          <Social />
        </div>
      </div>
      <picture>
        <source srcSet={waveD} media="(min-width:768px)" />
        <img
          src={wave}
          className="absolute bottom-0 w-full max-h-[50%] -z-10 dark:z-10 dark:invert-[20%]"
        />
      </picture>
    </div>
  );
}
