import React, { useState } from 'react';
import { Mail, CheckCircle2, Globe, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsError, setNewsError] = useState('');
  const [newsSuccess, setNewsSuccess] = useState(false);
  const [showCountrySelect, setShowCountrySelect] = useState(false);

  const handleNewsSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      setNewsError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(newsletterEmail)) {
      setNewsError('Please enter a valid email');
      return;
    }

    setNewsError('');
    setNewsSuccess(true);
    setNewsletterEmail('');
    setTimeout(() => {
      setNewsSuccess(false);
    }, 4000);
  };

  const footerLinks = [
    {
      title: 'Quick Links',
      items: ['Sustainability', 'Business AI', 'Cloud ERP', 'Careers', 'SAP Store']
    },
    {
      title: 'About SAP',
      items: ['Company Info', 'Worldwide Offices', 'Investor Relations', 'News and Press', 'Events']
    },
    {
      title: 'Site Information',
      items: ['Privacy Policy', 'Terms of Use', 'Legal Disclosure', 'Copyright', 'Cookie Preferences']
    },
    {
      title: 'Contact Us',
      items: ['Call: 1800 266 2200', 'Find an SAP Office', 'Chat Live', 'Support Portal']
    }
  ];

  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* Links Grid */}
        <div className="footer-grid">
          {footerLinks.map((col, idx) => (
            <div key={idx} className="footer-col">
              <h4>{col.title}</h4>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter & Socials */}
        <div className="footer-side-panel">
          <div className="newsletter-panel glass-panel">
            <h4>Get SAP Insights</h4>
            <p>Subscribe to our newsletter for the latest digital transformation insights and event invitations in India.</p>
            {!newsSuccess ? (
              <form onSubmit={handleNewsSubmit} className="news-form">
                <div className="news-input-group">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      setNewsError('');
                    }}
                    placeholder="Enter work email"
                    className={newsError ? 'error' : ''}
                  />
                  <button type="submit" aria-label="Subscribe">
                    <Mail size={16} />
                  </button>
                </div>
                {newsError && <span className="news-error-text">{newsError}</span>}
              </form>
            ) : (
              <div className="news-success animate-fade-in">
                <CheckCircle2 size={16} className="color-green" />
                <span>Thank you for subscribing!</span>
              </div>
            )}
          </div>

          <div className="social-links-container">
            <h4>Connect with us</h4>
            <div className="social-icons">
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="copyright-text">
            © {new Date().getFullYear()} SAP SE or an SAP affiliate company. All rights reserved.
          </p>

          <div className="footer-bottom-right">
            <ul className="legal-list">
              <li><a href="#">Privacy Statement</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Legal Disclosure</a></li>
              <li><a href="#">Trademark Information</a></li>
              <li><a href="#">Cookie Preferences</a></li>
            </ul>

            <div className="country-selector-wrapper">
              <button 
                className="country-selector-btn"
                onClick={() => setShowCountrySelect(!showCountrySelect)}
              >
                <Globe size={14} />
                <span>India (English)</span>
              </button>
              
              {showCountrySelect && (
                <div className="country-dropdown glass-panel">
                  <ul>
                    <li><a href="#" onClick={() => setShowCountrySelect(false)}>Global (English)</a></li>
                    <li><a href="#" onClick={() => setShowCountrySelect(false)}>United States (English)</a></li>
                    <li><a href="#" onClick={() => setShowCountrySelect(false)}>Germany (Deutsch)</a></li>
                    <li><a href="#" onClick={() => setShowCountrySelect(false)}>Japan (日本語)</a></li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-container {
          background: #0d121d;
          color: #e2e8f0;
          padding: 80px 6% 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          max-width: 1400px;
          margin: 0 auto 60px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .footer-col h4 {
          color: #ffffff;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-col ul a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }

        .footer-col ul a:hover {
          color: var(--sap-blue);
          padding-left: 4px;
        }

        .footer-side-panel {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .newsletter-panel {
          padding: 24px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(255, 255, 255, 0.05);
        }

        .newsletter-panel h4 {
          color: #ffffff;
          margin-bottom: 12px;
          font-size: 1.1rem;
        }

        .newsletter-panel p {
          color: #94a3b8;
          font-size: 0.85rem;
          line-height: 1.5;
          margin-bottom: 18px;
        }

        .news-form {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .news-input-group {
          display: flex;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.2);
        }

        .news-input-group input {
          flex-grow: 1;
          background: transparent;
          border: none;
          color: white;
          padding: 10px 14px;
          font-family: var(--font-body);
          font-size: 0.85rem;
        }

        .news-input-group input:focus {
          outline: none;
        }

        .news-input-group button {
          background: var(--sap-blue);
          border: none;
          color: white;
          padding: 0 16px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .news-input-group button:hover {
          background: var(--sap-blue-hover);
        }

        .news-error-text {
          color: #ef4444;
          font-size: 0.75rem;
        }

        .news-success {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: #10b981;
          font-weight: 600;
        }

        .social-links-container h4 {
          color: #ffffff;
          font-size: 1.05rem;
          margin-bottom: 16px;
        }

        .social-icons {
          display: flex;
          gap: 16px;
        }

        .social-icons a {
          color: #94a3b8;
          transition: var(--transition-fast);
        }

        .social-icons a:hover {
          color: var(--sap-blue);
          transform: translateY(-2px);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 30px;
          margin-top: 40px;
        }

        .footer-bottom-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .copyright-text {
          font-size: 0.8rem;
          color: #64748b;
        }

        .footer-bottom-right {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .legal-list {
          list-style: none;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .legal-list a {
          color: #64748b;
          text-decoration: none;
          font-size: 0.8rem;
          transition: var(--transition-fast);
        }

        .legal-list a:hover {
          color: #94a3b8;
        }

        .country-selector-wrapper {
          position: relative;
        }

        .country-selector-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
          padding: 8px 14px;
          border-radius: 4px;
          font-size: 0.8rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition-fast);
        }

        .country-selector-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .country-dropdown {
          position: absolute;
          bottom: 110%;
          right: 0;
          min-width: 180px;
          padding: 8px;
          border-radius: 6px;
          border-color: rgba(255, 255, 255, 0.1);
          z-index: 10;
        }

        .country-dropdown ul {
          list-style: none;
        }

        .country-dropdown ul a {
          display: block;
          padding: 8px 12px;
          color: #cbd5e1;
          text-decoration: none;
          font-size: 0.8rem;
          border-radius: 4px;
          transition: var(--transition-fast);
        }

        .country-dropdown ul a:hover {
          background: rgba(255, 255, 255, 0.08);
          color: white;
        }

        @media (max-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
