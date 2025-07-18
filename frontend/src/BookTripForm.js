import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import styles from './BookTrip.module.css';

const placeOptions = ['Ooty', 'Goa', 'Pahalgam'];

const BookTripForm = () => {
  const location = useLocation();
  const queryPlace = new URLSearchParams(location.search).get('place') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    place: queryPlace && placeOptions.includes(queryPlace) ? queryPlace : '',
    photo: null,
    message: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (queryPlace && placeOptions.includes(queryPlace)) {
      setFormData((prev) => ({ ...prev, place: queryPlace }));
    }
  }, [queryPlace]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'photo' ? files[0] : value,
    }));
  };

  // Generate PDF using jsPDF and autotable
  const generatePdf = () => {
    const doc = new jsPDF();

    doc.text('Booking Details', 14, 15);

    const data = [
      ['Name', formData.name],
      ['Phone', formData.phone],
      ['Email', formData.email],
      ['Place', formData.place],
      ['Message', formData.message || '-'],
    ];

    autoTable(doc, {
      startY: 20,
      head: [['Field', 'Value']],
      body: data,
    });

    return doc.output('blob'); // Return PDF as Blob
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('You must be logged in to book a trip.');
        setLoading(false);
        return;
      }

      const pdfBlob = generatePdf();

      const formPayload = new FormData();
      formPayload.append('name', formData.name);
      formPayload.append('phone', formData.phone);
      formPayload.append('email', formData.email);
      formPayload.append('place', formData.place);
      formPayload.append('message', formData.message);
      if (formData.photo) formPayload.append('photo', formData.photo);
      formPayload.append('pdf', new File([pdfBlob], 'booking-details.pdf', { type: 'application/pdf' }));

      const res = await axios.post('http://localhost:5000/api/bookings/book', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      alert(res.data.message || 'Booking successful!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        place: '',
        photo: null,
        message: '',
      });
    } catch (error) {
      console.error('Booking failed:', error);
      const errMsg = error.response?.data?.error || error.message || 'Something went wrong.';
      alert('Error: ' + errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Book Your Trip</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name:
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Phone Number:
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Email:
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Select Destination:
          <select
            name="place"
            value={formData.place}
            onChange={handleChange}
            required
            className={styles.select}
          >
            <option value="">-- Choose a place --</option>
            {placeOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.label}>
          Upload Photo:
          <input
            name="photo"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
          />
        </label>

        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default BookTripForm;
