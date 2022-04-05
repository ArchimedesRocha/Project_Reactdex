// Estructure
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//components
import { SlideFooterOne } from "./slides/slide-footer-1";
import { SlideFooterTwo } from "./slides/slide-footer-2";
import { SlideFooterThree } from "./slides/slide-footer-3";

export function Footer() {
  return (
    <footer>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SlideFooterOne />
        </SwiperSlide>
        <SwiperSlide>
          <SlideFooterTwo />
        </SwiperSlide>
        <SwiperSlide>
          <SlideFooterThree />
        </SwiperSlide>
      </Swiper>
    </footer>
  );
}
