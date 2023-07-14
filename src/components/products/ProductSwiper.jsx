import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import imageUrl1 from "../../assets/images/mug1.jpg";
import imageUrl2 from "../../assets/images/mug2.jpg";
import imageUrl3 from "../../assets/images/mug3.jpg";
import imageUrl4 from "../../assets/images/mug4.jpg";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// export swiper css
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


export default function ProductSwiper({ isThumbSwiper = false }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = [
    { url: imageUrl1, caption: "Mug 1 Image" },
    { url: imageUrl2, caption: "Mug 2 Image" },
    { url: imageUrl3, caption: "Mug 3 Image" },
    { url: imageUrl4, caption: "Mug 4 Image" },
  ];
  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        loop={true}
        lazy={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        style={{
          "--swiper-navigation-size": "12px",
          "--swiper-theme-color": "#000",
          height: "auto",
        }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.url}
              alt={item.caption}
              className="product_detail_image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {isThumbSwiper && (
        <Swiper
          className="thumb-swiper"
          onSwiper={setThumbsSwiper}
          spaceBetween={6}
          slidesPerView={15}
          //   freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.url} alt={item.caption} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
