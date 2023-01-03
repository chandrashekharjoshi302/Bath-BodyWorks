// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../css/homepage.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
// import { jsxDEV as _jsxDEV } from "react";

import CATEGORY from "../data/homepage.json";
export default function Slider() {
  let SlideData = CATEGORY.SlideData;
  return (
    //     <>
    <div className={styles.boxesofOffer}>
      <h1>TODAY'S TOP OFFERS</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        style={{ width: "85%" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {SlideData.map((el,i) => {
          return (
            <SwiperSlide key={i} className={styles.pro_box}>
              <div>
              <p>{el.head}</p>
              <p className={styles.Pro_title}>{el.text}</p>
              <p className={styles.pro_price}>{el.price}</p>
              </div>
              <button className={styles.Shop_Button}>SHOP</button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
