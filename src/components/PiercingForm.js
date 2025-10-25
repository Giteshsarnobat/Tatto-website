import { useState } from "react";

const PiercingForm = ({ setPiercingFormOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    myfile: "",
    piercing: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    if (!formData.design) {
      newErrors.myfile = "Upload tattoo picture.";
    }

    if (!formData.piercing) {
      newErrors.piercing = "Please enter your piercing name.";
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

    alert(`Appointment Request Submitted!\nDesign in mind: ${formData.design}`);
    setPiercingFormOpen(false);
  };

  return (
    <>
      <div className="form-overlay">
        <div className="form-container">
          <span
            className="close-btn"
            onClick={() => setPiercingFormOpen(false)}
          >
            &times;
          </span>
          <h1 className="form-heading">Book Your Appointment</h1>
          <form className="form-field" onSubmit={handleSubmit}>
            {/* Name */}
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

            {/* Phone */}
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

            {/* Dropdown - Reference pic or ideas */}
            <div className="form-group">
              <input type="file" name="myfile" value={formData.myfile} />
              <label htmlFor="myfile">Piercing reference pic *</label>
              {errors.myfile && <p className="form-error">{errors.myfile}</p>}
            </div>

            {/* Piercing name */}
            <div className="form-group">
              <input
                type="text"
                name="piercing"
                placeholder=" "
                value={formData.piercing}
                onChange={handleChange}
              />
              <label htmlFor="piercing">Name of Piercing *</label>
              {errors.piercing && <p className="form-error">{errors.piercing}</p>}
            </div>
            <button type="submit">Confirm Appointment</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PiercingForm;
