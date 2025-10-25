import whatsappLogo from "../Assests/whatsApp.png"; 

const WhatsAppButton = () => {
  const phoneNumber = "917208388209"; // replace with your WhatsApp number
  const message = "Hello! I would like to book a tattoo consultation."; // default message

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); // open in new tab or directly in app
  };

  return (
    <img
      src={whatsappLogo}
      alt="WhatsApp"
      onClick={handleWhatsAppClick}
      className="whatsapp-icon"
    />
  );
};

export default WhatsAppButton;
