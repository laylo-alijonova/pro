import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Aloqa xabari:', formData);
    alert('Xabaringiz yuborildi! Tez orada javob beramiz.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
   
        <div className="contact-form">
          <h2>Biz bilan bog'laning</h2>
          <p>Bizga savolingiz yoki taklifingiz bormi? Quyidagi formani to'ldiring.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group half">
                <label htmlFor="name">Ism</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group half">
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
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+998 xx xxx xx xx"
                />
              </div>
              <div className="form-group half">
                <label htmlFor="subject">Mavzu</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Xabar</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Xabar yuborish
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Bizning manzil</h3>
          <div className="info-item">
            <strong>Manzil:</strong>
            <p>Toshkent sh., Chilonzor tumani, 45-uy</p>
          </div>
          <div className="info-item">
            <strong>Telefon:</strong>
            <p>+998 99 123 45 67</p>
          </div>
          <div className="info-item">
            <strong>Email:</strong>
            <p>support@ecommerce.uz</p>
          </div>

          <div className="social-links">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Telegram">Telegram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;