// Estructure
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//components
import { SlideHeroOne } from "./slides/slide-s-hero-1";
import { SlideHeroTwo } from "./slides/slide-s-hero-2";
import { SlideHeroThree } from "./slides/slide-s-hero-3";

export function Shero() {
  return (
    <section className="s-hero">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SlideHeroOne />
        </SwiperSlide>
        <SwiperSlide>
          <SlideHeroTwo />
        </SwiperSlide>
        <SwiperSlide>
          <SlideHeroThree />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
