"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./styles.css";

const Slider = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center mt-[100px] mb-[40px] md:mb-[60px] md:mt-[150px] lg:mb-[75px] lg:mt-[200px]">
        <div className="flex flex-col md:items-end md:flex-row md:justify-between mb-[40px] md:mb-[60px] lg:mb-[80px]">
          <div className="md:w-[70%] mb-[20px] md:mb-[0px]">
            <h2 className="font-bold text-[18px] md:text-[28px] lg:text-[38px] mb-[10px] lg:mb-[14px]">
              Explore our wide variety of categories
            </h2>
            <span className="text-[12px] md:text-[16px] lg:text-[18px] text-[var(--color-gray-60)]">
              {`Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new`}
            </span>
          </div>
          <button>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
