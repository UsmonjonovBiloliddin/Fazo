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

import "./main_slider.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const main_slider = () => {
  return (
    <div className="Main_Slide ">
      <div className="swiper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
          spaceBetween={50}
          autoplay={{
            delay: 4000,
          }}
          loop={true}
          slidesPerView={1}
          navigation={{ nextEl: ".button_next", prevEl: ".button_close" }}
        >
          <SwiperSlide>
            <div className="title">
              <h1>Apple iPhone X 64 ГБ</h1>
              <p>
                Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма,
                который удобно лежит в руке и потрясающие выглядит, — это и есть
                iPhone X.
              </p>
            </div>
            <div className="img">
              <img src="../imegs/Slide2.webp" alt="" />
            </div>
            <div className="price">
              <h1>1 250 900 Сум</h1>
              <p>2 220 900 Сум</p>
              <button>Показать еще</button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="title">
              <h1>Apple iPhone X 64 ГБ</h1>
              <p>
                Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма,
                который удобно лежит в руке и потрясающие выглядит, — это и есть
                iPhone X.
              </p>
            </div>
            <div className="img">
              <img src="../imegs/892 1.png" alt="" />
            </div>
            <div className="price">
              <h1>1 250 900 Сум</h1>
              <p>2 220 900 Сум</p>
              <button>Показать еще</button>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="title">
              <h1>Apple iPhone X 64 ГБ</h1>
              <p>
                Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма,
                который удобно лежит в руке и потрясающие выглядит, — это и есть
                iPhone X.
              </p>
            </div>
            <div className="img">
              <img src="../imegs/Slide.webp" alt="" />
            </div>
            <div className="price">
              <h1>1 250 900 Сум</h1>
              <p>2 220 900 Сум</p>
              <button>Показать еще</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="header_swiper_buttons">
        <div className="swiper_buttons_button button_close">
          <FiChevronLeft />
        </div>
        <div className="swiper_buttons_button button_next">
          <FiChevronRight />
        </div>
      </div>
    </div>
  );
};

export default main_slider;
