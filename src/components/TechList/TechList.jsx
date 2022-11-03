import center from "../../assets/technologies/center.png";
import node from "../../assets/technologies/Node Js.png";
import html from "../../assets/technologies/Html.png";
import css from "../../assets/technologies/CSS3.png";
import sass from "../../assets/technologies/Sass.png";
import react from "../../assets/technologies/React.png";
import ts from "../../assets/technologies/TypeScript.png";
import git from "../../assets/technologies/Git.png";
import tailwind from "../../assets/technologies/Tailwind.png";
import aws from "../../assets/technologies/AWS.png";
import { motion } from "framer-motion";

import React, { useState } from "react";

export default function TechList() {
  const [selected, setSelected] = useState(undefined);

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
    <div className="w-full min-h-[550px] relative">
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
          className="mx-auto w-4/5"
        />
        <motion.button
          variants={item}
          onClick={() => {
            setSelected(undefined);
            setTimeout(() => {
              setSelected({
                src: node,
                name: "NodeJS",
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
            className="absolute top-[3%] left-[calc(50%-32px)]"
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
            className="absolute top-[13%] left-[calc(83%-32px)]"
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
            className="absolute top-[35%] left-[calc(97%-32px)]"
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
            className="absolute top-[58%] left-[calc(88%-32px)]"
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
            className="absolute top-[75%] left-[calc(75%-32px)]"
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
            className="absolute top-[75%] left-[calc(25%-32px)]"
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
            className="absolute top-[58%] left-[calc(12%-32px)]"
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
            className="absolute top-[35%] left-[calc(5%-32px)]"
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
            className="absolute top-[13%] left-[calc(18%-32px)]"
          />
        </motion.button>
      </motion.div>
      {selected && (
        <motion.div
          className=" bg-white p-4 border mt-12 rounded-2xl w-3/5 flex items-center gap-2 shadow-lg absolute bottom-0 left-[20%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <img src={selected.src} alt="" />
          <span className="font-bold tracking-wider">{selected.name}</span>
        </motion.div>
      )}
    </div>
  );
}
