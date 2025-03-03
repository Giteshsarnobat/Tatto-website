import React, { useState } from "react";

const BookAppointment = ({ setIsFormOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Request Submitted!");
    setIsFormOpen(false);
  };
  return (
    <>
      <div className="form-overlay">
        <div className="form-container">
          <span className="close-btn" onClick={() => setIsFormOpen(false)}>
            &times;
          </span>
          <h1 className="form-heading">Book Your Appointment</h1>
          <form className="form-field" onSubmit={handleSubmit}>
            <div className="form-name">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-email">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-phone">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-text">
              <textarea
                name="message"
                placeholder="Your Message (Optional)"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Confirm Appointment</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
