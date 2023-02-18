import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import waveD from "../../assets/background/wave-projects-desktop.png";
import wave from "../../assets/background/wave-projects.png";
import projects from "../../utils/projects.json";
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { motion } from "framer-motion";

export default function Projects() {
  const { t } = useTranslation();
  const { language } = i18next;
  return (
    <div className="w-full min-h-screen relative pb-20 dark:bg-slate-800 dark:text-white transition-colors duration-700">
      <picture>
        <source srcSet={waveD} media="(min-width:768px)" />
        <img
          src={wave}
          className="absolute top-0 w-full -z-10 dark:z-0 dark:invert-[20%]"
        />
      </picture>

      <div className=" md:pl-8">
        <motion.h2
          key={language + "projects"}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="pt-5 uppercase mb-8 ml-4 text-xl md:text-2xl font-bold dark:z-10 dark:relative "
        >
          {t("projects")}
        </motion.h2>
        <motion.p
          key={language + "projectsDescription"}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="w-4/5 mx-auto mb-8 text-lg  tracking-wide
          md:w-full md:pl-4 md:mb-16 md:text-xl md:max-w-lg md:ml-0
          dark:z-10 dark:relative"
        >
          {t("projectsDescription")}
        </motion.p>
        <div className="mb-8 w-4/5 mx-auto pr-4">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={false}
            centeredSlides={true}
            centeredSlidesBounds={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                centeredSlides: true,
                centeredSlidesBounds: true,
                effect: "cards",
              },
              1000: {
                slidesPerView: 3,
                centeredSlides: true,
                centeredSlidesBounds: true,
                effect: "cards",
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <Card
                  {...project}
                  name={project[language].name}
                  description={project[language].description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
