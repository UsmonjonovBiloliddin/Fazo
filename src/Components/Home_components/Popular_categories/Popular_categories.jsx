import React, { useEffect } from "react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./Popular_catigories_Slide.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Popular_categories = () => {
  return (
    <div className="Popular_catigories_Slide">
      <div className="Popular_catigories_Slide_text ">
        <h3>Популярные категории</h3>
      </div>
      <div className="Swiper ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          autoplay={true}
          navigation={{ nextEl: ".button_right", prevEl: ".button_left" }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            447: {
              slidesPerView: 2,
            },

            769: {
              slidesPerView: 3,
            },

            990: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <div className="text">
              {" "}
              <h3>Телефоны, планшеты</h3>
            </div>
            <div className="img">
              <img src="../imegs/1.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text">
              {" "}
              <h3>Телефоны, планшеты</h3>
            </div>
            <div className="img">
              <img src="../imegs/Rectangle 24 (1).png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text">
              {" "}
              <h3>Телефоны, планшеты</h3>
            </div>
            <div className="img">
              <img src="../imegs/Rectangle 24 (3).png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text">
              {" "}
              <h3>Телефоны, планшеты</h3>
            </div>
            <div className="img">
              <img src="../imegs/Rectangle 24.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text">
              {" "}
              <h3>Телефоны, планшеты</h3>
            </div>
            <div className="img">
              <img src="../imegs/1.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text">
              {" "}
              <h3>Телефоны, планшеты</h3>
            </div>
            <div className="img">
              <img src="../imegs/Rectangle 24 (1).png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="header_swiper_buttons">
          <div className="swiper_buttons_button button_left">
            <FiChevronLeft />
          </div>
          <div className="swiper_buttons_button button_right">
            <FiChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular_categories;
