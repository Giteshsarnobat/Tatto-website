import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { IKContext, IKImage } from "imagekitio-react";

const urlEndpoint = "https://ik.imagekit.io/gitesh/";

const StudioSlider = () => {
  return (
    <>
      <IKContext urlEndpoint={urlEndpoint}>
        <div className="studio-slider">
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="studio-slider">
              {" "}
              <IKImage
                path="Studio/Studio1.png"
                transformation={[{ height: "300", width: "300", q: 100 }]}
                loading="lazy"
                lqip={{ active: true }}
                alt="Studio image"
              />
            </SwiperSlide>
            <SwiperSlide className="studio-slider">
              {" "}
              <IKImage
                path="Studio/Studio2.png"
                transformation={[{ height: "300", width: "300", q: 100 }]}
                loading="lazy"
                lqip={{ active: true }}
                alt="Studio image"
              />
            </SwiperSlide>
            <SwiperSlide className="studio-slider">
              {" "}
              <IKImage
                path="Studio/Studio3.png"
                transformation={[{ height: "300", width: "300", q: 100 }]}
                loading="lazy"
                lqip={{ active: true }}
                alt="Studio image"
              />
            </SwiperSlide>
            <SwiperSlide className="studio-slider">
              {" "}
              <IKImage
                path="Studio/Studio4.png"
                transformation={[{ height: "300", width: "300", q: 100 }]}
                loading="lazy"
                lqip={{ active: true }}
                alt="Studio image"
              />
            </SwiperSlide>
            <SwiperSlide className="studio-slider">
              {" "}
              <IKImage
                path="Studio/Studio5.png"
                transformation={[{ height: "300", width: "300", q: 100 }]}
                loading="lazy"
                lqip={{ active: true }}
                alt="Studio image"
              />
            </SwiperSlide>
            <SwiperSlide className="studio-slider">
              {" "}
              <IKImage
                path="Studio/Studio6.png"
                transformation={[{ height: "300", width: "300", q: 100 }]}
                loading="lazy"
                lqip={{ active: true }}
                alt="Studio image"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </IKContext>
    </>
  );
};

export default StudioSlider;
