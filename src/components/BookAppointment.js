import React, { useState } from "react";

const BookAppointment = ({ setIsFormOpen}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    // Email validation using regex.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Mobile number should be exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

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
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
              />
              <label htmlFor="name">Your Name*</label>
              {errors.name && <p className="form-error">{errors.name}</p>}
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Your Email *</label>
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder=" "
                value={formData.phone}
                onChange={handleChange}
              />
              <label htmlFor="phone">Your Phone Number *</label>
              {errors.phone && <p className="form-error">{errors.phone}</p>}
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
              />
              <label htmlFor="message">Your Message (optional)</label>
            </div>
            <button type="submit">Confirm Appointment</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
