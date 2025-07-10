import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import AnimatedImage from "./AnimatedImage";

const videos = [
  {
    url: "src/assets/images/carousel/vidCover1.png",
  },
  {
    url: "src/assets/images/carousel/vidCover2.png",
  },
  {
    url: "src/assets/images/carousel/vidCover3.png",
  },
  {
    url: "src/assets/images/hero.png",
  },
  {
    url: "src/assets/images/hero2.jpg",
  },
];

const Carousel = () => {
  return (
    <div className="relative">
      <Swiper
        className="mySwiper h-80 md:h-96"
        modules={[Pagination, EffectCoverflow, Autoplay, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative h-full group">
              <AnimatedImage
                src={video.url}
                alt={`Video cover ${index + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-lg my-5"
                animationType="fadeIn"
                delay={index * 100}
                duration={600}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="swiper-button-prev !text-black !bg-white/50 !bg-opacity-80 hover:!bg-opacity-100
      !w-10 !h-10 !rounded-full !shadow-lg transition-all duration-300 hover:scale-110 after:!text-lg"
      >
        <img src="src/assets/images/icons/arrow left.png" alt="arrow left" />
      </div>

      <div
        className="swiper-button-next !text-black !bg-white/50 !bg-opacity-80 hover:!bg-opacity-100
      !w-10 !h-10 !rounded-full !shadow-lg transition-all duration-300 hover:scale-110 after:!text-lg"
      >
        <img src="src/assets/images/icons/arrow right.png" alt="arrow right" />
      </div>

      <div className="swiper-pagination !bottom-2"></div>
    </div>
  );
};

export default Carousel;
