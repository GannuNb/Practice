import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Booked = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Convert binary to base64 for images
  function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  // Convert PDF binary to Blob URL
  function arrayBufferToBlobUrl(buffer, contentType) {
    const bytes = new Uint8Array(buffer);
    const blob = new Blob([bytes], { type: contentType });
    return URL.createObjectURL(blob);
  }

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You are not logged in.');
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get('http://localhost:5000/api/bookings/mybookings', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookings(res.data.bookings || []);
      } catch (err) {
        setError(err.response?.data?.error || 'Failed to fetch bookings.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <div className="text-center mt-5">Loading your bookings...</div>;
  if (error) return <div className="alert alert-danger text-center mt-5">{error}</div>;
  if (!bookings.length) return <div className="text-center mt-5">You have no bookings yet.</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Your Bookings</h2>
      {bookings.map((booking) => {
        const pdfUrl = booking.pdf?.data
          ? arrayBufferToBlobUrl(booking.pdf.data.data, booking.pdf.contentType)
          : null;

        return (
          <div key={booking._id} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{booking.name}</h5>
              <p className="card-text"><strong>Phone:</strong> {booking.phone}</p>
              <p className="card-text"><strong>Email:</strong> {booking.email}</p>
              <p className="card-text"><strong>Place:</strong> {booking.place}</p>
              <p className="card-text"><strong>Message:</strong> {booking.message || '-'}</p>
              <p className="card-text">
                <small className="text-muted">Booked On: {new Date(booking.createdAt).toLocaleString()}</small>
              </p>

              {booking.photo && booking.photo.data && (
                <img
                  src={`data:${booking.photo.contentType};base64,${arrayBufferToBase64(booking.photo.data.data)}`}
                  alt="Booking Photo"
                  className="img-fluid rounded mb-3"
                  style={{ maxWidth: '200px' }}
                />
              )}

              {pdfUrl && (
                <div>
                  <h6>Booking PDF</h6>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    See Booking PDF
                  </a>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Booked;
