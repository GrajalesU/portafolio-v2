import React from "react";
import head from "../../assets/about/about-mobile.png";
import waveD from "../../assets/background/wave-about-desktop.png";
import wave from "../../assets/background/wave-about.png";
import Social from "../Social/Social";
import Theme from "../Theme/Theme";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="w-full min-h-[95vh] relative dark:bg-slate-800 dark:text-white transition-colors duration-700">
      <Theme />
      <div className="md:max-w-lg md:pt-[15%] md:pl-8">
        <h2 className=" pt-5 ml-4 mb-8 text-xl md:text-2xl md:mb-32 font-bold uppercase">
          {t("about")}
        </h2>
        <div className="tracking-wide font-medium w-11/12 mx-auto mb-8 text-lg md:text-xl relative z-20">
          <span>{t("hi")}</span>
          <p className="mb-8">
            {t("im")} <b>Juan Manuel Grajales</b> {t("living")}
          </p>
          <p>{t("aboutDescription")}</p>
        </div>
        <img
          src={head}
          alt="Waiter seen the description"
          className="float-right mr-5 md:absolute md:top-20 md:right-[15%] md:w-72 md:-rotate-45 z-10 dark:z-30 dark:invert dark:contrast-[3]"
        />
        <Social />
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
