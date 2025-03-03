import png1 from "../Assests/heart.png";
import art1 from "../Assests/tattoArt1.jpg";
import art2 from "../Assests/tattoArt2.jpg";

const Features = () => {
  return (
    <>
      <div className="feature-div container">
        <div className="feature-card">
          <div className="feature-text-div">
            <div className="feature-text">
              <p className="feature-text-heading">WHY CHOOSING US</p>
              <p className="feature-text-para">
                Our experienced artists create unique, high-quality tattoos with
                strict hygiene and safety standards. We use premium inks and
                equipment to ensure long-lasting results. Enjoy a personalized
                design in a friendly and comfortable environment.
              </p>
            </div>
            <div className="feature1-div">
              <img className="heart-png" src={png1} />
              <h3 className="feature-heading">EXPERT IN TATTO DESIGN</h3>
            </div>
            <div className="feature2-div">
              <img className="heart-png" src={png1} />
              <h3 className="feature-heading">SUPERIOR STYLES</h3>
            </div>
          </div>
          <div className="feature-img-div">
            <div className="artImage-div">
              <img className="feature-img1" src={art1} />
              <img className="feature-img2" src={art2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
