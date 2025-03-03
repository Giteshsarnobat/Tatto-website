import pencil from "../Assests/pencil.png";
import creativity from "../Assests/creativity.png";
import liquidglue from "../Assests/liquid-glue.png";

const Services = () => {
  return (
    <>
      <div className="services-div container">
        <p className="services-heading">MY SERVICES</p>
        <div className="services-card-div">
          <div className="service-card">
            <img className="service-card-img" src={pencil} />
            <p className="service-card-heading">Design for tattoos</p>
            <p className="service-card-info">
              Vibrant, high-quality color tattoos that bring your design to
              life. Our expert artists use premium inks to ensure long-lasting
              and striking results.
            </p>
          </div>

          <div className="service-card">
            <img className="service-card-img" src={creativity} />
            <p className="service-card-heading">Cover-Up Tattoos</p>
            <p className="service-card-info">
              Erase the past with expert cover-up tattoos that give new meaning
              to your ink.
            </p>
          </div>

          <div className="service-card">
            <img className="service-card-img" src={liquidglue} />
            <p className="service-card-heading">Piercing Services</p>
            <p className="service-card-info">
              Safe and hygienic body piercings by skilled professionals. Would
              you like me to adjust these based on your studio’s specialties?
            </p>
          </div>

          <div className="service-card">
            <img className="service-card-img" src={liquidglue} />
            <p className="service-card-heading">Piercing Services</p>
            <p className="service-card-info">
              Safe and hygienic body piercings by skilled professionals. Would
              you like me to adjust these based on your studio’s specialties?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
