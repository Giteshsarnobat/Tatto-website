import { motion } from "framer-motion";
import pencil from "../Assests/pencil.png";
import creativity from "../Assests/creativity.png";
import liquidglue from "../Assests/liquid-glue.png";
import pen from "../Assests/pen.png";
import { useState } from "react";
import DesignForm from "./DesignForm";
import CoverUpForm from "./CoverUpForm";
import PiercingForm from "./PiercingForm";
import AfterCareForm from "./AfterCareForm";
import { GoArrowRight } from "react-icons/go";

const Services = () => {
  const [isDesignFormOpen, setIsDesignFormOpen] = useState(false);
  const [isCoverUpFormOpen, setIsCoverUpFormOpen] = useState(false);
  const [isPiercingFormOpen, setPiercingFormOpen] = useState(false);
  const [isGuidenceFormOpen, setGuidenceFormOpen] = useState(false);

  const handleDesignForm = () => {
    setIsDesignFormOpen(true);
  };

  const handleCoverUpForm = () => {
    setIsCoverUpFormOpen(true);
  };

  const handlePiercingForm = () => {
    setPiercingFormOpen(true);
  };

  const handleGuidenceForm = () => {
    setGuidenceFormOpen(true);
  };

  return (
    <>
      <div className="services-div container">
        <motion.p
          className="services-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 1 }}
        >
          My Services
        </motion.p>
        <div className="services-card-div">
          <div className="service-card">
            <img className="service-card-img" src={pencil} />
            <p className="service-card-heading">Custom Tattoo Design</p>
            <p className="service-card-info">
              Unique, high-quality tattoos created just for you. At Zenspace,
              every design is tailored to your story, crafted with premium inks
              for lasting art.
            </p>
            <button className="service-card-btn" onClick={handleDesignForm}>
              Link <GoArrowRight />
            </button>
          </div>

          <div className="service-card">
            <img className="service-card-img" src={creativity} />
            <p className="service-card-heading">Cover-Up Tattoos</p>
            <p className="service-card-info">
              Turn old ink into fresh art. Our expert cover-up tattos erase the
              past and give new meaning to your skin.
            </p>
            <button className="service-card-btn" onClick={handleCoverUpForm}>
              Link <GoArrowRight />
            </button>
          </div>

          <div className="service-card">
            <img className="service-card-img" src={liquidglue} />
            <p className="service-card-heading">Piercing Services</p>
            <p className="service-card-info">
              Safe, hygienic, and stylish. ZenSpace offers professional
              piercings with top-grade equipment in a clean, comfortable
              environment.
            </p>
            <button className="service-card-btn" onClick={handlePiercingForm}>
              Link <GoArrowRight />
            </button>
          </div>
          <div className="service-card">
            <img className="service-card-img" src={pen} />
            <p className="service-card-heading">Tattoo Aftercare Guidance</p>
            <p className="service-card-info">
              Your tattoo journey doesn't end at the chair. We guide you with
              step-by-step aftercare so your ink heals perfectly and stays bold
              for years.
            </p>
            <button className="service-card-btn" onClick={handleGuidenceForm}>
              Link <GoArrowRight />
            </button>
          </div>
        </div>
      </div>

      {isDesignFormOpen && (
        <DesignForm setIsDesignFormOpen={setIsDesignFormOpen} />
      )}
      {isCoverUpFormOpen && (
        <CoverUpForm setIsCoverUpFormOpen={setIsCoverUpFormOpen} />
      )}
      {isPiercingFormOpen && (
        <PiercingForm setPiercingFormOpen={setPiercingFormOpen} />
      )}
      {isGuidenceFormOpen && (
        <AfterCareForm setGuidenceFormOpen={setGuidenceFormOpen} />
      )}
    </>
  );
};

export default Services;
