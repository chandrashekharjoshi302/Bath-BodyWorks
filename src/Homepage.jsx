import ShopCategory from "../components/Shop_Category";
import Slider from "../components/swiper";
import "../css/slider.css";
import styles from "../css/homepage.module.css";
import { Link } from "react-router-dom";
import CATEGORY from "../data/homepage.json";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
export const Homepage = () => {
  let data = CATEGORY.CATEGORY;
  let Data = CATEGORY.flexData;
  let LastData = CATEGORY.lastData;
  let SLIDERDATA= CATEGORY.SLIDERDATA
  return (
    <div className={styles.homepage}>
      <div className={styles.offerImg}>
        <img
          src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwa151bb00/ffm_IFD_mgh-1%20%282%29.jpg"
          alt=""
        />
      </div>

      <Slider />

      <div className={styles.offerImg}>
        <img
          src="https://www.bathandbodyworks.in/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwfbc5f05a/fbc_purewonder_spr2_hm-2%20%281%29.jpg"
          alt=""
        />
      </div>
      <div className={styles.Shop_Category}>
        <h2>SHOP BY CATEGORY</h2>
        <div className={styles.container}>
          {data.map((el, i) => {
            return <ShopCategory key={i} data={el} />;
          })}
        </div>
      </div>
      <div className={styles.fleximage}>
        {Data.map((el, i) => {
          return (
            <div key={i}>
              <img src={el.imgurl} alt="" />
              <h4>{el.title} </h4>
              <Link to="/">{el.link}</Link>
            </div>
          );
        })}
      </div>
      <div className={styles.offerImg}>
        <img
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8a216658/images/Spring2022/iso-pwp_sp3_hm_lto.jpg?yocs=s_"
          alt=""
        />
      </div>
      <br />
      <div className={styles.offerImg}>
        <img
          src=" https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw724a089f/images/Summer2022/xcat_give-love_su1_hb.jpg?yocs=s_"
          alt=""
        />
      </div>
      <div className={styles.Shop_Category}>
        <h1>MORE GOOD THINGS, THIS WAY</h1>
        <div className={styles.container}>
          {LastData.map((el, i) => {
            return <ShopCategory key={i} data={el} />;
          })}
        </div>
      </div>

      <div>
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
          {SLIDERDATA.map((el, i) => {
            return (
              <SwiperSlide key={i} className={styles.pro_box}>
                <div >
                  <img  src={el} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className={styles.Bath_Body}>
        <h3>Bath & Body Works</h3>
        <p>
          Bath and Body Works is your go-to place for gifts & goodies that
          surprise & delight. From fresh fragrances to soothing skin care, we
          make finding your perfect something special a happy-memory-making
          experience. Searching for new seasonal creations or your favorite
          favourite scents? We’ve got you covered there, too. Oh! And while
          you're browsing, shop our latest & greatest selection of lotions,soaps
          and candles!
        </p>
      </div>
    </div>
  );
};
