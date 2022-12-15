import React from "react";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import wave from "../../assets/background/wave-projects.png";
import waveD from "../../assets/background/wave-projects-desktop.png";
import projects from "../../utils/projects.json";

export default function Projects() {
  return (
    <div className="w-full min-h-screen relative mt-20 mb-20">
      <picture>
        <source srcSet={waveD} media="(min-width:768px)" />
        <img src={wave} className="absolute top-0 w-full -z-10" />
      </picture>

      <div className=" md:pl-8">
        <h2 className="pt-5 mb-8 ml-4 text-5xl md:text-5xl font-bold">
          PROYECTOS
        </h2>
        <p
          className="w-4/5 mx-auto mb-8 text-lg  tracking-wide
        md:w-full md:pl-4 md:mb-16 md:text-xl md:max-w-lg md:ml-0"
        >
          Aquí tengo algunos de los proyectos que he realizado, ¡espero que te
          gusten!
        </p>
        <div className="mb-8 w-4/5 mx-auto pr-4">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={true}
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
                <Card {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
