import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export default function Carousel() {
  return (
    <Swiper
      loop={true}
      loopedSlides={4}
      observer={true}
      observeParents={true}
      autoHeight={true}
      spaceBetween={50}
      slidesPerView={"auto"}
      centeredSlides={true}
      cssMode={false}
      autoplay={{ delay: 5000 }}
      pagination={{ el: ".laPagination", type: "bullets", clickable: true }}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
    >
      <SwiperSlide>
        <Image
          className="mx-auto object-cover max-w-full h-auto"
          width={1260}
          height={750}
          src={"/assets/pexels-photo-3727459.jpeg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="mx-auto object-cover max-w-full h-auto"
          width={1260}
          height={750}
          src={"/assets/pexels-photo-3727459.jpeg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="mx-auto object-cover max-w-full h-auto"
          width={1260}
          height={750}
          src={"/assets/pexels-photo-3727459.jpeg"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className="mx-auto object-cover max-w-full h-auto"
          width={1260}
          height={750}
          src={"/assets/pexels-photo-3727459.jpeg"}
        />
      </SwiperSlide>

      <div className="swiper-button-prev bg-opacity-50 bg-gray-50 rounded-2xl py-7 px-5"></div>
      <div className="swiper-button-next bg-opacity-50 bg-gray-50 rounded-2xl py-7 px-5"></div>

      <div className="laPagination flex justify-center mt-2"></div>
    </Swiper>
  );
}
