import { useState } from "react";

const CoverUpForm = ({ setIsCoverUpFormOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    myfile: "",
    budget: "",
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

    if (!formData.budget) {
      newErrors.budget = "Please enter your budget.";
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
    setIsCoverUpFormOpen(false);
  };

  return (
    <>
      <div className="form-overlay">
        <div className="form-container">
          <span className="close-btn" onClick={() => setIsCoverUpFormOpen(false)}>
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
              <label htmlFor="myfile">Upload Current Tattoo pic *</label>
              {errors.myfile && <p className="form-error">{errors.myfile}</p>}
            </div>

            {/* Budget */}
            <div className="form-group">
              <input
                type="text"
                name="budget"
                placeholder=" "
                value={formData.budget}
                onChange={handleChange}
              />
              <label htmlFor="time">Budget *</label>
              {errors.budget && <p className="form-error">{errors.budget}</p>}
            </div>
            <button type="submit">Confirm Appointment</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CoverUpForm;
