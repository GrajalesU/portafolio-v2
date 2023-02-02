import { motion } from "framer-motion";
import aws from "../../assets/technologies/AWS.png";
import css from "../../assets/technologies/CSS3.png";
import git from "../../assets/technologies/Git.png";
import html from "../../assets/technologies/Html.png";
import node from "../../assets/technologies/Node Js.png";
import react from "../../assets/technologies/React.png";
import sass from "../../assets/technologies/Sass.png";
import tailwind from "../../assets/technologies/Tailwind.png";
import ts from "../../assets/technologies/TypeScript.png";
import center from "../../assets/technologies/center.png";

import React, { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

export default function TechList() {
  const [selected, setSelected] = useState(undefined);
  const windowWidth = useWindowSize();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div className="w-full min-h-[550px] relative z-20">
      <motion.div
        className="relative w-[320px] h-[450px] pt-20 mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <img
          src={center}
          alt="buddy with headphones"
          className="mx-auto w-4/5 dark:invert dark:contrast-[3]"
        />
        <motion.button
          variants={item}
          onClick={() => {
            setSelected(undefined);
            setTimeout(() => {
              setSelected({
                src: node,
                name: "NodeJS",
                top: "0%",
                left: "50%",
              });
            }, 100);
          }}
        >
          <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            src={node}
            alt="NodeJS"
            className="absolute dark:invert top-[3%] left-[calc(50%-32px)] md:top-[0%]"
          />
        </motion.button>
        <motion.button
          variants={item}
          onClick={() => {
            setSelected(undefined);
            setTimeout(() => {
              setSelected({
                src: html,
                name: "HTML5",
                top: "13%",
                left: "90%",
              });
            }, 100);
          }}
        >
          <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            src={html}
            alt="HTML5"
            className="absolute dark:invert top-[13%] left-[calc(83%-32px)] md:left-[calc(90%-32px)]"
          />
        </motion.button>
        <motion.button
          variants={item}
          onClick={() => {
            setSelected(undefined);
            setTimeout(() => {
              setSelected({
                src: sass,
                name: "Sass",
                top: "35%",
                left: "110%",
              });
            }, 100);
          }}
        >
          <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            src={sass}
            alt="sass"
            className="absolute dark:invert top-[35%] left-[calc(97%-32px)] md:left-[calc(110%-32px)]"
          />
        </motion.button>
        <motion.button
          variants={item}
          onClick={() => {
            setSelected(undefined);
            setTimeout(() => {
              setSelected({
                src: ts,
                name: "TypeScript",
                top: "58%",
                left: "95%",
              });
            }, 100);
          }}
        >
          <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            src={ts}
            alt="TypeScript"
            className="absolute dark:invert top-[58%] left-[calc(88%-32px)] md:left-[calc(95%-32px)]"
          />
        </motion.button>
        <motion.button
          variants={item}
          onClick={() => {
            setSelected(undefined);
            setTimeout(() => {
              setSelected({
                src: aws,
                name: "AWS",
                top: "80%",
                left: "76%",
              });
            }, 100);
          }}
        >
          <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            src={aws}
            alt="AWS"
            className="absolute dark:invert top-[75%] left-[calc(75%-32px)] md:left-[calc(76%-32px)] md:top-[80%]"
          />
        </motion.button>
        <motion.button
          variants={item}
          onClick={() => {
            setSelected(undefined);
            setTimeout(() => {
              setSelected({
                src: tailwind,
                name: "Tailwind",
                top: "80%",
                left: "20%",
              });
            }, 100);
          }}
        >
          <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            src={tailwind}
            alt="tailwind"
            className="absolute dark:invert top-[75%] left-[calc(25%-32px)] md:top-[80%] md:left-[calc(20%-32px)]"
          />
        </motion.button>
        <motion.button
          variants={item}
          onClick={() => {
            setSelected(undefined);
            setTimeout(() => {
              setSelected({
                src: git,
                name: "Git",
                top: "58%",
                left: "5%",
              });
            }, 100);
          }}
        >
          <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            src={git}
            alt="Git"
            className="absolute dark:invert top-[58%] left-[calc(12%-32px)] md:left-[calc(5%-32px)]"
          />
        </motion.button>
        <motion.button
          variants={item}
          onClick={() => {
            setSelected(undefined);
            setTimeout(() => {
              setSelected({
                src: react,
                name: "ReactJS",
                top: "35%",
                left: "-5%",
              });
            }, 100);
          }}
        >
          <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            src={react}
            alt="reactJS"
            className="absolute dark:invert top-[35%] left-[calc(5%-32px)] md:left-[calc(-5%-32px)]"
          />
        </motion.button>
        <motion.button
          variants={item}
          onClick={() => {
            setSelected(undefined);
            setTimeout(() => {
              setSelected({
                src: css,
                name: "CSS",
                top: "13%",
                left: "10%",
              });
            }, 100);
          }}
        >
          <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            src={css}
            alt="CSS"
            className="absolute dark:invert top-[13%] left-[calc(18%-32px)] md:left-[calc(10%-32px)]"
          />
        </motion.button>
        {selected && (
          <motion.div
            className=" bg-white p-4 border mt-12 rounded-2xl w-4/5 flex items-center gap-2 shadow-lg absolute -bottom-16 left-[10%] h-24 md:w-3/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={
              windowWidth >= 768 && {
                top: `calc(${selected.top} - 64px)`,
                left: `calc(${selected.left} - 50px)`,
              }
            }
            onClick={() => setSelected(undefined)}
          >
            <img src={selected.src} alt="" />
            <span className="font-bold tracking-wider text-black">
              {selected.name}
            </span>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
