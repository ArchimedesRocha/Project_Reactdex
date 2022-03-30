// Estructure
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//components
import { SlideOne } from "./slides/slide-1";
import { SlideTwo } from "./slides/slide-2";
import { SlideThree } from "./slides/slide-3";

export function Slide() {
  return (
    <section className="s-hero">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <SlideTwo />
        </SwiperSlide>
        <SwiperSlide>
          <SlideThree />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
