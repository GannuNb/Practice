import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/signup',
        formData
      );
      alert(res.data.message);
      navigate('/login')
    } catch (error) {
      console.error(error);
      alert('Signup failed');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4 text-center">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            required
            style={{ height: '2.75rem' }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
            style={{ height: '2.75rem' }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            onChange={handleChange}
            required
            style={{ height: '2.75rem' }}
          />
        </div>

        <div className="mb-3 position-relative">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            className="form-control pe-5"
            id="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            required
            style={{ height: '2.75rem' }}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              top: '70%',
              right: '15px',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: '#6c757d',
              userSelect: 'none',
              fontSize: '1.2rem',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter') setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="mb-4 position-relative">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type={showConfirm ? 'text' : 'password'}
            className="form-control pe-5"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            onChange={handleChange}
            required
            style={{ height: '2.75rem' }}
          />
          <span
            onClick={() => setShowConfirm(!showConfirm)}
            style={{
              position: 'absolute',
              top: '70%',
              right: '15px',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: '#6c757d',
              userSelect: 'none',
              fontSize: '1.2rem',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
            aria-label={
              showConfirm ? 'Hide confirm password' : 'Show confirm password'
            }
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter') setShowConfirm(!showConfirm);
            }}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
