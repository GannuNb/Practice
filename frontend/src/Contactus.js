import React, { useState } from 'react';
import contactcss from './About.module.css';
import homeimg from './images/nature.jpg';

function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    tour: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <>
      {/* Image with overlay */}
      <div className={contactcss.aboutWrapper}>
        <img src={homeimg} alt="Scenic view of nature" className={contactcss.image} />
        <div className={contactcss.textOverlay}>
          <h1>Contact Us</h1>
          <p>Contact us for booking tourist places</p>
        </div>
      </div>

      {/* Form */}
      <div className="container my-5">
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-dark">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-dark">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label text-dark">Phone</label>
            <input
              type="tel"
              id="phone"
              className="form-control"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Select Tour */}
          <div className="mb-3">
            <label htmlFor="tour" className="form-label text-dark">Select Tour</label>
            <select
              id="tour"
              className="form-select"
              value={formData.tour}
              onChange={handleChange}
              required
            >
              <option value="">-- Select a place --</option>
              <option value="Ooty">Ooty</option>
              <option value="Goa">Goa</option>
              <option value="Pahalgam">Pahalgam</option>
              <option value="Pondicherry">Pondicherry</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label text-dark">Message</label>
            <textarea
              id="message"
              className="form-control"
              rows="5"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </>
  );
}

export default Contactus;
