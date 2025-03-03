import Marquee from "react-fast-marquee";
import img1 from "../Assests/Tattoo1.jpeg";
import img2 from "../Assests/Tatto2.jpeg";
import img3 from "../Assests/Tatto3.jpeg";
import img4 from "../Assests/Tatto4.jpeg";
import img5 from "../Assests/Tatto5.jpeg";
import love from "../Assests/love.png";

const Slider = () => {
  return (
    <>
      <div className="slider-div">
        <Marquee direction="left" speed={60} delay={2} pauseOnHover={true}>
          <div className="image_wrapper">
            <img src={img1} alt="" style={{ height: "500px" }} />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" style={{ height: "500px" }} />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" style={{ height: "500px" }} />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" style={{ height: "500px" }} />
          </div>
          <div className="image_wrapper">
            <img src={img5} alt="" style={{ height: "500px" }} />
          </div>
        </Marquee>
        <div className="slider-text-div container">
          <p className="slider-text-para">
            Every tattoo is a masterpiece, a reflection of your personality,
            memories, and passion. At our studio, we blend creativity with
            precision to craft unique and meaningful designs. Whether you seek
            bold statements or intricate details, our skilled artists bring your
            vision to life with high-quality ink and expert craftsmanship. Let
            your skin be the canvas for timeless art!
          </p>
          <img className="slider-heart-png" src={love}></img>
        </div>
      </div>
    </>
  );
};

export default Slider;
