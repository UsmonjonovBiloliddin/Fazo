import "./Header_Slider.scss";
// swiper
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
// icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home">
      <header>
        <div className="header_swiper">
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              EffectFade,
              Autoplay,
            ]}
            navigation={{ nextEl: ".button_left", prevEl: ".button_right" }}
            pagination={{ clickable: true, el: ".header_swiper_pagination" }}
            spaceBetween={50}
            slidesPerView={1}
            effect={"fade"}
            autoplay={{ delay: "2000" }}
            loop={true}
          >
             <SwiperSlide>
              <div className="header_swiper_image">
              <img src="https://mini-io-api.texnomart.uz/newcontent/slider/95/IaLlaXUQA0nlk4YlGtY2v8Ftemo9FRW6Sh4orA5k.webp" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="header_swiper_image">
              <img src="./imegs/bb.webp" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="header_swiper_image">
              <img src="https://mini-io-api.texnomart.uz/newcontent/slider/95/IaLlaXUQA0nlk4YlGtY2v8Ftemo9FRW6Sh4orA5k.webp" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="header_swiper_image">
              <img src="./imegs/bb.webp" alt="" />
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
        <div className="header_swiper_pagination"></div>
      </header>
     
    </div>
  );
};

export default Home;
