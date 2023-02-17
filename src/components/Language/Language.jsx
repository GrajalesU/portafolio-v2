import React from "react";
import i18n from "i18next";
import { motion } from "framer-motion";

export default function Language() {
  const { language, changeLanguage } = i18n;
  const handleLanguage = () => {
    language === "es" ? changeLanguage("en") : changeLanguage("es");
  };
  return (
    <motion.button
    whileTap={{
      translateY:-5
    }}
    onClick={handleLanguage} className="flex items-center">
      <span className="font-bold uppercase text-xl w-3.5 text-center">
        E
      </span>
        <motion.span
          key={language}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{duration:1}}
          className="font-bold uppercase text-xl w-3 text-center"
        >
          {language === "es" ? "S" : "N"}
        </motion.span>
    </motion.button>
  );
}
