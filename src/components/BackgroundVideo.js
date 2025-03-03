import videoBg from "../Assests/purple-Smoke.mp4";

const BackgroundVideo = ({ setIsFormOpen }) => {
  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="overlay-text">
          <h1>Ink Your Story</h1>
          <p>Express yourself with stunning tattoos by expert artists.</p>
          <button className="cta-button" onClick={() => setIsFormOpen(true)}>Book an Appointment</button>
        </div>
      </div>
    </>
  );
};

export default BackgroundVideo;
