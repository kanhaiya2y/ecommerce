'use client'
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-90"
            >
                <SwiperSlide>
                    <img
                        className="object-cover w-full h-full"
                        src="/banner-1.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-cover w-full h-full bg-red-400"
                        src="banner-2.jpg"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-cover w-full h-full bg-red-400"
                        src="/banner-3.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}