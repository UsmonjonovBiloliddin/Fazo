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
import "./Brands.scss";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
const Brands = () => {
  return (
    <div className="Brends_Slide">
      <div className="Brends_Slide_text ">
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
            <div className="img">
              <img src="../imegs/logo1.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="../imegs/logo2.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="../imegs/logo3.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="../imegs/logo4.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img">
              <img src="../imegs/logo5.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="header_swiper_buttons">
          <div className="swiper_buttons_buttona button_left">
            <LuMoveLeft />
          </div>
          <div className="swiper_buttons_buttona button_right">
            <LuMoveRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
