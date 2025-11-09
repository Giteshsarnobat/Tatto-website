import { IoCall } from "react-icons/io5";

const CallButton=() =>{
  const phoneNumber = '+12345'; // Replace with your number

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button 
      onClick={handleCallClick}
      className="call-btn"
    >
     <IoCall />
    </button>
  );
}

export default CallButton;
