import Marquee from "react-fast-marquee";
import { IKContext, IKImage } from "imagekitio-react";
import love from "../Assests/love.png";

const urlEndpoint = "https://ik.imagekit.io/zenspace121/";

const Slider = () => {
  return (
    <>
      <IKContext urlEndpoint={urlEndpoint}>
        <div className="slider-div">
          <h1 className="slider-text-heading">
            Place where we create your story
          </h1>
          <Marquee direction="left" speed={80} delay={2} pauseOnHover={true}>
            <div className="image_wrapper">
              <IKImage
                path="Tattoo Gallery/Tattoo1-min.jpeg"
                transformation={[{ height: "500", width: "350", q: 100 }]}
                alt="Tatto image"
                loading="lazy"
                lqip={{ active: true }}
                style={{ width: "350px", height: "500px", objectFit: "cover" }}
              />
            </div>
            <div className="image_wrapper">
              <IKImage
                path="Tattoo Gallery/Tatto2-min.jpeg"
                transformation={[{ height: "500", width: "350", q: 100 }]}
                alt="Tatto image"
                loading="lazy"
                lqip={{ active: true }}
                style={{ width: "350px", height: "500px", objectFit: "cover" }}
              />
            </div>
            <div className="image_wrapper">
              <IKImage
                path="Tattoo Gallery/Tatto3-min.jpeg"
                transformation={[{ height: "500", width: "350", q: 100 }]}
                alt="Tatto image"
                loading="lazy"
                lqip={{ active: true }}
                style={{ width: "350px", height: "500px", objectFit: "cover" }}
              />
            </div>
            <div className="image_wrapper">
              <IKImage
                path="Tattoo Gallery/Tatto4-min.jpeg"
                transformation={[{ height: "500", width: "350", q: 100 }]}
                alt="Tatto image"
                loading="lazy"
                lqip={{ active: true }}
                style={{ width: "350px", height: "500px", objectFit: "cover" }}
              />
            </div>
            <div className="image_wrapper">
              <IKImage
                path="Tattoo Gallery/Tatto5-min.jpeg"
                transformation={[{ height: "500", width: "350", q: 100 }]}
                alt="Tatto image"
                loading="lazy"
                lqip={{ active: true }}
                style={{ width: "350px", height: "500px", objectFit: "cover" }}
              />
            </div>
          </Marquee>
          <div className="slider-text-div container">
            <p className="slider-text-para">
              "More than ink - <br />
              <b>ZENSPACE</b> creates tattoos that reflect your journey,
              <br /> your strength, and your individuality."
            </p>
            <img className="slider-heart-png" src={love}></img>
          </div>
        </div>
      </IKContext>
    </>
  );
};

export default Slider;
