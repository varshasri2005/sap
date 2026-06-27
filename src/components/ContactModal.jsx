import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.message.trim()) newErrors.message = 'Message details are required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-panel animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close form">
          <X size={20} />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-header">
              <h2>Connect with SAP India</h2>
              <p>Fill out the form below and an enterprise architect will contact you within one business day.</p>
            </div>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'input-error' : ''}
                placeholder="E.g. Priya Sharma"
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Work Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
                placeholder="priya.sharma@company.com"
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={errors.company ? 'input-error' : ''}
                placeholder="Enterprise or Organization"
              />
              {errors.company && <span className="error-text">{errors.company}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">How can we help your business?</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={errors.message ? 'input-error' : ''}
                placeholder="Let us know your core interest (ERP transformation, AI co-pilots, supply chain)..."
              />
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <button type="submit" className="btn-primary submit-btn" disabled={loading}>
              {loading ? (
                <span className="spinner"></span>
              ) : (
                <>
                  Submit Request
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="success-view animate-fade-in">
            <CheckCircle2 size={64} className="color-green success-icon" />
            <h2>Thank You!</h2>
            <p>Your request has been registered. An SAP India business solutions consultant will be in touch with you shortly at your work email.</p>
            <button 
              className="btn-primary" 
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
            >
              Close Window
            </button>
          </div>
        )}
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(18, 20, 30, 0.4);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .modal-content {
          width: 100%;
          max-width: 500px;
          border-radius: 16px;
          padding: 40px;
          position: relative;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn:hover {
          background: rgba(0, 0, 0, 0.05);
          color: var(--text-dark);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-header h2 {
          font-family: var(--font-heading);
          color: var(--sap-dark-blue);
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .form-header p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-dark);
        }

        .form-group input, .form-group textarea {
          padding: 12px 16px;
          border-radius: 6px;
          border: 1px solid rgba(0, 0, 0, 0.15);
          font-family: var(--font-body);
          font-size: 0.95rem;
          transition: var(--transition-fast);
          background: rgba(255, 255, 255, 0.8);
        }

        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--sap-blue);
          box-shadow: 0 0 0 3px rgba(0, 112, 242, 0.15);
          background: white;
        }

        .form-group .input-error {
          border-color: #ef4444;
        }

        .error-text {
          font-size: 0.8rem;
          color: #ef4444;
          font-weight: 500;
        }

        .submit-btn {
          width: 100%;
          justify-content: center;
          padding: 14px;
          margin-top: 10px;
        }

        .success-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
        }

        .success-icon {
          animation: float 4s ease-in-out infinite;
        }

        .success-view h2 {
          font-family: var(--font-heading);
          color: var(--sap-dark-blue);
          font-size: 2rem;
          font-weight: 800;
        }

        .success-view p {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        /* Spinner for loading state */
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ContactModal;
