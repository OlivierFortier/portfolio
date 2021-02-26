// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";

export default function Carousel() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>
        <img
          className="mx-auto object-cover max-w-full h-auto"
          src="https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto object-cover max-w-full h-auto"
          src="https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto object-cover max-w-full h-auto"
          src="https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto object-cover max-w-full h-auto"
          src="https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
}
