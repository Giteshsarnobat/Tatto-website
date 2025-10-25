import videoBg from "../Assests/purple-Smoke.mp4";

const BackgroundVideo = ({ setIsFormOpen }) => {
  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="overlay-text">
          <h1>"ZenSpace - Where Your Story Becomes Timeless Art."</h1>
          <p>Custom tattoos crafted with passion, precision, and meaning.</p>
          <button className="cta-button" onClick={() => setIsFormOpen(true)}>Book an Appointment</button>
        </div>
      </div>
    </>
  );
};

export default BackgroundVideo;
