import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
} from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";


import { ImageProjet } from "../accueil/AppercuProjets";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export default function Carousel({ images }: { images: ImageProjet[] }) {

  return (
    <Swiper
      autoHeight={true}
      spaceBetween={50}
      slidesPerView={"auto"}
      centeredSlides={true}
      centerInsufficientSlides={true}
      autoplay={{ delay: 5000 }}
      pagination={{ el: ".laPagination", type: "bullets", clickable: true }}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
    >
      {images.map((photo, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <Image
                className="mx-auto object-cover max-w-full h-auto"
                width={photo.width}
                height={photo.height}
                src={photo.url || "/assets/pexels-photo-3727459.jpeg"}
              />
            </div>
          </SwiperSlide>
        );
      })}

      <div className="swiper-button-prev bg-opacity-50 bg-gray-50 rounded-2xl py-7 px-5"></div>
      <div className="swiper-button-next bg-opacity-50 bg-gray-50 rounded-2xl py-7 px-5"></div>

      <div className="laPagination flex justify-center mt-2"></div>
    </Swiper>
  );
}
