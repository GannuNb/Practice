import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import contactcss from './About.module.css';
import homeimg from './images/nature.jpg';

function Contactus() {
  const location = useLocation();

  // Get query parameter like ?place=Ooty
  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    return {
      place: params.get('place') || '',
    };
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    tour: '',
  });

  const [status, setStatus] = useState(null);

  // Auto-fill "tour" field from query param
  useEffect(() => {
    const { place } = getQueryParams();
    if (place) {
      setFormData((prev) => ({ ...prev, tour: place }));
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      alert('You must be logged in to submit this form.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/contact', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '', tour: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <>
      {/* Banner with image and overlay text */}
      <div className={contactcss.aboutWrapper}>
        <img src={homeimg} alt="Scenic view of nature" className={contactcss.image} />
        <div className={contactcss.textOverlay}>
          <h1>Contact Us</h1>
          <p>Contact us for booking tourist places</p>
        </div>
      </div>

      {/* Contact form */}
      <div className="container my-5" style={{ maxWidth: '600px' }}>
        {status && (
          <div className={`alert ${status.includes('successfully') ? 'alert-success' : 'alert-danger'}`}>
            {status}
          </div>
        )}
        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </>
  );
}

export default Contactus;
