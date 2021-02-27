// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation, Pagination, A11y]);

export default function Carousel() {
  return (
    <Swiper
      autoHeight={true}
      spaceBetween={50}
      slidesPerView={"auto"}
      centeredSlides={true}
      cssMode={false}
      autoplay={true}
      pagination={{ el: ".laPagination", type: "bullets", clickable: true }}
      navigation={{prevEl : ".swiper-button-next", nextEl: ".swiper-button-next",}}
    >
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

      <div className="swiper-button-next"></div>
      <div className="swiper-button-next"></div>

      <div className="laPagination flex justify-center mt-2"></div>
    </Swiper>
  );
}
