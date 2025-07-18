import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // import useNavigate
import Contacted from './contacted';
import Booked from './Booked';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [editingField, setEditingField] = useState(null);
  const [fieldValue, setFieldValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate(); // initialize navigation


  useEffect(() => {
  const token = localStorage.getItem('token');
  if (!token) {
    setError('User not logged in.');
    navigate('/login');
    return;
  }
}, [navigate]);



  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('User not logged in.');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/auth/userprofile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);
      } catch (err) {
        setError(err.response?.data?.message || 'Error fetching profile');
      }
    };

    fetchUserProfile();
  }, []);

  const startEditing = (field) => {
    setError('');
    setSuccessMsg('');
    setEditingField(field);
    setFieldValue(user[field] || '');
  };

  const cancelEditing = () => {
    setError('');
    setSuccessMsg('');
    setEditingField(null);
    setFieldValue('');
  };

  const handleChange = (e) => {
    setFieldValue(e.target.value);
  };

  const saveField = async () => {
    setLoading(true);
    setError('');
    setSuccessMsg('');

    const token = localStorage.getItem('token');
    if (!token) {
      setError('User not logged in.');
      setLoading(false);
      return;
    }

    const updateData = { [editingField]: fieldValue };

    try {
      const response = await axios.put(
        'http://localhost:5000/api/auth/userprofile',
        updateData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUser(response.data.user);
      setSuccessMsg(`${editingField.charAt(0).toUpperCase() + editingField.slice(1)} updated successfully!`);
      setEditingField(null);
      setFieldValue('');
    } catch (err) {
      setError(err.response?.data?.message || 'Error updating profile');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (error) {
    return <div className="container mt-5 text-danger">{error}</div>;
  }

  if (!user) {
    return <div className="container mt-5">Loading profile...</div>;
  }

  return (
    <>
      <div className="container mt-5">
        <h2>User Profile</h2>
        <hr />

        <p><strong>User Id:</strong> {user._id}</p>

        <div className="mb-3">
          <strong>Name:</strong>{' '}
          {editingField === 'name' ? (
            <>
              <input
                type="text"
                value={fieldValue}
                onChange={handleChange}
                className="form-control d-inline-block w-auto me-2"
              />
              <button className="btn btn-success btn-sm me-2" onClick={saveField} disabled={loading}>
                Save
              </button>
              <button className="btn btn-secondary btn-sm" onClick={cancelEditing} disabled={loading}>
                Cancel
              </button>
            </>
          ) : (
            <>
              {user.name}{' '}
              <button className="btn btn-outline-primary btn-sm mx-4" onClick={() => startEditing('name')}>
                Edit
              </button>
            </>
          )}
        </div>

        <div className="mb-3">
          <strong>Email:</strong>{' '}
          {editingField === 'email' ? (
            <>
              <input
                type="email"
                value={fieldValue}
                onChange={handleChange}
                className="form-control d-inline-block w-auto me-2"
              />
              <button className="btn btn-success btn-sm me-2" onClick={saveField} disabled={loading}>
                Save
              </button>
              <button className="btn btn-secondary btn-sm" onClick={cancelEditing} disabled={loading}>
                Cancel
              </button>
            </>
          ) : (
            <>
              {user.email}{' '}
              <button className="btn btn-outline-primary btn-sm mx-4" onClick={() => startEditing('email')}>
                Edit
              </button>
            </>
          )}
        </div>

        <div className="mb-3">
          <strong>Phone:</strong>{' '}
          {editingField === 'phone' ? (
            <>
              <input
                type="text"
                value={fieldValue}
                onChange={handleChange}
                className="form-control d-inline-block w-auto me-2"
              />
              <button className="btn btn-success btn-sm me-2" onClick={saveField} disabled={loading}>
                Save
              </button>
              <button className="btn btn-secondary btn-sm" onClick={cancelEditing} disabled={loading}>
                Cancel
              </button>
            </>
          ) : (
            <>
              {user.phone}{' '}
              <button className="btn btn-outline-primary btn-sm mx-4" onClick={() => startEditing('phone')}>
                Edit
              </button>
            </>
          )}
        </div>

        {successMsg && <div className="alert alert-success mt-3">{successMsg}</div>}
        {error && <div className="alert alert-danger mt-3">{error}</div>}

        <div className="mt-4">
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <Booked/>

      <Contacted />
    </>
  );
}

export default UserProfile;
