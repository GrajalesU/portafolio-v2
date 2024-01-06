import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
export default function Card({ name, description, img, github, site }) {
  const { t } = useTranslation();
  const { language } = i18next;

  return (
    <article className="w-80 h-[420px] shadow-xl bg-white dark:bg-slate-700 mx-auto mb-3 relative">
      <div className="w-full h-56 flex mb-3">
        <img
          src={img}
          alt={`preview del proyecto ${name}`}
          className="object-contain mx-auto"
        />
      </div>
      <motion.h3
        key={language + "cardName"}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="mb-3 text-center font-bold text-2xl"
      >
        {name}
      </motion.h3>
      <motion.p
        key={language + "cardDescription"}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="w-[90%] mx-auto font-normal text-sm mb-6 dark:text-slate-300"
      >
        {description}
      </motion.p>
      <div className="flex flex-row justify-around absolute bottom-2 w-full">
        {github && (
          <button className="py-0.5 px-2 bg-black w-24 text-white rounded hover:bg-black/80">
            <a href={github} target="_blank">
              Github
            </a>
          </button>
        )}
        {site && (
          <motion.button
            key={language + "site"}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="py-0.5 px-2 w-24 border-2 border-black dark:border-white rounded hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <a href={site} target="_blank">
              {t("site")}
            </a>
          </motion.button>
        )}
      </div>
    </article>
  );
}
