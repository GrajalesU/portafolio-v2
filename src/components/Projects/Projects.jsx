import React from "react";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import wave from "../../assets/background/wave-projects.png";
export default function Projects() {
  return (
    <div className="w-full min-h-screen">
      <img src={wave} className="absolute w-full -z-10" />

      <div>
        <h2 className="pt-5 mb-8 ml-4 text-xl">MIS PROYECTOS</h2>
        <p className="w-4/5 mx-auto mb-8 text-lg font-medium tracking-wide">
          Aquí tengo algunos de los proyectos que he realizado, ¡espero que te
          gusten!
        </p>
        <div className="mb-8">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={true}
            spaceBetween={0}
            centeredSlides={true}
            centeredSlidesBounds={true}
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
