import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <div className="contact-container">
      <h2>Have Questions About Planetary Science?</h2>
      <p>
        Interested in learning more about space, astronomy, or how planetary
        data is collected and analyzed?<br/> Reach out and we’ll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="form">
        <div className="row">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              placeholder="Please enter a valid phone number."
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              maxLength="100"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <small>{formData.message.length} / 100 characters</small>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit →
        </button>
      </form>
    </div>
  );
};

export default ContactForm;