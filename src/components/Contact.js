import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    design: "",
    time: "",
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

    if (!formData.design) {
      newErrors.design = "Please select option.";
    }

    if (!formData.time) {
      newErrors.time = "Please enter time.";
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
  };

  return (
    <section className="contact-section">
      <div className="container contact-container">
        {/* Heading */}
        <motion.h2
          className="contact-heading"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get in Touch With Us
        </motion.h2>

        <motion.p
          className="contact-subtext"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have questions or ready to get inked? We'd love to hear from you!
        </motion.p>

        <div className="contact-content">
          {/* Left Side - Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Visit Our Studio</h3>
            <p>
              Shop No. 101st Floor, Zenspace Art And Tattoo, Akruti Commercial
              Complex, MIDC Central Rd, near Akruti CentreGautam Nagar, Chakala
              Industrial Area (MIDC), Andheri East,
              Mumbai-400093,Maharashtra,India.
            </p>

            <h3>Phone</h3>
            <p>+91 7208388209</p>

            <h3>Email</h3>
            <p>Zenspacetattoo@gmail.com</p>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            {errors.name && <p className="contact-form-error">{errors.name}</p>}

            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="contact-form-error">{errors.email}</p>
            )}

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="contact-form-error">{errors.phone}</p>
            )}

            <select
              name="design"
              value={formData.design}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                Do you have a design in mind?
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.design && (
              <p className="contact-form-error">{errors.design}</p>
            )}

            <input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleChange}
              placeholder="What is good time to connect with you?"
            />
            {errors.time && <p className="contact-form-error">{errors.time}</p>}

            <button type="submit">Book Appointment</button>
          </motion.form>
        </div>
      </div>
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30158.574596100934!2d72.86166918500112!3d19.1154709038005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c811c87303bf%3A0x16a07ca1b90dcc56!2sMarol%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1743944470297!5m2!1sen!2sin"
          allowFullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
