import React, { useEffect } from "react";
import projects from "../../utils/projects.json";
import Card from "../Card/Card";
import i18next from "i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useWindowSize from "../../hooks/useWindowSize";

const swiperParams = {
  slidesPerView: 1,
  loop: false,
  centeredSlides: true,
  pagination: { clickable: true },
  effect: "cards",
  grabCursor: true,
  breakpoints: {
    900: {
      slidesPerView: 2,
    },
    1100: {
      initialSlide: 1,
      slidesPerView: 3,
      grabCursor: false,
    },
  },
};

export default function ProjectList() {
  const { language } = i18next;
  const windowSize = useWindowSize();

  useEffect(() => {
    const left = document.querySelector(".swiper-button-next");
    const right = document.querySelector(".swiper-button-prev");
    const dots = document.querySelector(".swiper-pagination");
    if (left && right && dots)
      if (windowSize < 1000) {
        left.style.display = "none";
        right.style.display = "none";
        dots.style.display = "block";
      } else {
        left.style.display = "block";
        right.style.display = "block";
        dots.style.display = "none";
      }
  }, [windowSize]);

  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        {...swiperParams}
        navigation={true}
        className="md:-translate-x-8"
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
      <style>
        {`
        .swiper{
          margin-inline: auto !important;
        }
        .swiper-wrapper{
          margin-bottom: 60px;
        }

        .swiper-button-next, .swiper-button-prev{
          color: #78c6fa;
        }

        .swiper-button-disabled{
          color: #d1edff
        }
        .swiper-pagination-bullet-active {
          background: #78c6fa;
        }
      `}
      </style>
    </>
  );
}
