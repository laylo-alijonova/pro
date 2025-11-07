import React, { useState } from 'react';
import './SignUpForm.css'; 
import rasm from "../assets/Side Image.png"

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.terms) {
      alert("Shartnoma bilan rozi bo'lishingiz kerak!");
      return;
    }
    console.log('Roʻyxatdan oʻtish maʼlumotlari:', formData);
    // Bu yerda API ga yuborish mumkin
    alert('Muvaffaqiyatli roʻyxatdan oʻtildi!');
  };

  return (
    <div className="signup-container" >

      <img className='rasm' src={rasm} alt="" />

<div>

      <h2>Ro'yxatdan o'ting</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Ism</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Familiya</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Parol</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="6"
          />
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
          />
          <label htmlFor="terms">
            <a href="#" className="terms-link">Shartnoma</a> bilan rozi bo'laman
          </label>
        </div>

        <button type="submit">Ro'yxatdan o'tish</button>
      </form>

      <a href="#" className="google-btn">
        Google orqali kirish
      </a>

      <p className="login-link">
        Allaqachon hisobingiz bormi? <a href="#">Kirish</a>
      </p>
</div>
    </div>
  );
};

export default SignUpForm;

