import Marquee from "react-fast-marquee";
import img1 from "../Assests/Tattoo1-min.jpeg";
import img2 from "../Assests/Tatto2-min.jpeg";
import img3 from "../Assests/Tatto3-min.jpeg";
import img4 from "../Assests/Tatto4-min.jpeg";
import img5 from "../Assests/Tatto5-min.jpeg";
import love from "../Assests/love.png";

const Slider = () => {
  return (
    <>
      <div className="slider-div">
        <h1 className="slider-text-heading">
          #Place where we create your story
        </h1>
        <Marquee direction="left" speed={80} delay={2} pauseOnHover={true}>
          <div className="image_wrapper">
            <img
              src={img1}
              alt="Tatto image"
              loading="lazy"
              style={{ height: "500px" }}
            />
          </div>
          <div className="image_wrapper">
            <img
              src={img2}
              alt="Tatto image"
              loading="lazy"
              style={{ height: "500px" }}
            />
          </div>
          <div className="image_wrapper">
            <img
              src={img3}
              alt="Tatto image"
              loading="lazy"
              style={{ height: "500px" }}
            />
          </div>
          <div className="image_wrapper">
            <img
              src={img4}
              alt="Tatto image"
              loading="lazy"
              style={{ height: "500px" }}
            />
          </div>
          <div className="image_wrapper">
            <img
              src={img5}
              alt="Tatto image"
              loading="lazy"
              style={{ height: "500px" }}
            />
          </div>
        </Marquee>
        <div className="slider-text-div container">
          <p className="slider-text-para">
            "More than ink - <br/><b>ZENSPACE</b> creates tattoos that reflect your
            journey,<br/> your strength, and your individuality."
          </p>
          <img className="slider-heart-png" src={love}></img>
        </div>
      </div>
    </>
  );
};

export default Slider;
