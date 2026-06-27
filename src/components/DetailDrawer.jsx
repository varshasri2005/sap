import React, { useEffect } from 'react';
import { X, CheckCircle, ArrowRight, Shield } from 'lucide-react';

const DetailDrawer = ({ isOpen, item, onClose, onContactClick }) => {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer-panel glass-panel" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="drawer-close-btn" onClick={onClose} aria-label="Close details">
          <X size={22} />
        </button>

        {/* Content */}
        <div className="drawer-body">
          <div className="drawer-glow"></div>
          
          <div className="drawer-header">
            <span className="drawer-category">{item.category}</span>
            <h2>{item.title}</h2>
          </div>

          <div className="drawer-section desc-section">
            <p>{item.desc}</p>
          </div>

          {item.metrics && (
            <div className="drawer-section metric-box">
              <div className="metric-icon-wrapper">
                <Shield size={20} className="color-blue" />
              </div>
              <div className="metric-content">
                <span className="metric-label">BUSINESS VALUE / IMPACT</span>
                <p className="metric-text">{item.metrics}</p>
              </div>
            </div>
          )}

          {item.features && item.features.length > 0 && (
            <div className="drawer-section features-section">
              <h3>Key Capabilities</h3>
              <ul className="capabilities-list">
                {item.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle size={16} className="feature-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="drawer-actions">
            <button 
              className="btn-primary w-full justify-center text-center"
              onClick={() => {
                onClose();
                onContactClick();
              }}
            >
              {item.cta || 'Contact an Advisor'}
              <ArrowRight size={18} />
            </button>
            <button className="btn-secondary w-full justify-center text-center" onClick={onClose}>
              Back to Overview
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10, 15, 30, 0.4);
          backdrop-filter: blur(8px);
          z-index: 3000;
          display: flex;
          justify-content: flex-end;
        }

        .drawer-panel {
          width: 100%;
          max-width: 480px;
          height: 100vh;
          border-top: none;
          border-right: none;
          border-bottom: none;
          border-radius: 0;
          box-shadow: -15px 0 45px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          position: relative;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.9);
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .drawer-close-btn {
          position: absolute;
          top: 24px;
          left: 24px;
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
          z-index: 10;
        }

        .drawer-close-btn:hover {
          background: rgba(0, 0, 0, 0.05);
          color: var(--text-dark);
        }

        .drawer-body {
          padding: 90px 40px 40px;
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow-y: auto;
          position: relative;
        }

        .drawer-glow {
          position: absolute;
          top: -20%;
          right: -20%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(0, 112, 242, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .drawer-header {
          margin-bottom: 24px;
        }

        .drawer-category {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--sap-blue);
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-block;
          margin-bottom: 8px;
        }

        .drawer-header h2 {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--sap-dark-blue);
          line-height: 1.1;
          letter-spacing: -0.5px;
        }

        .drawer-section {
          margin-bottom: 30px;
        }

        .desc-section p {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .metric-box {
          background: linear-gradient(135deg, rgba(0, 112, 242, 0.06) 0%, rgba(130, 87, 229, 0.06) 100%);
          border: 1px solid rgba(0, 112, 242, 0.1);
          border-radius: 12px;
          padding: 20px;
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .metric-icon-wrapper {
          background: white;
          padding: 10px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .metric-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .metric-label {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.5px;
          color: var(--text-muted);
        }

        .metric-text {
          font-size: 1rem;
          font-weight: 700;
          color: var(--sap-dark-blue);
        }

        .features-section h3 {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          color: var(--sap-dark-blue);
          margin-bottom: 16px;
          font-weight: 700;
        }

        .capabilities-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .capabilities-list li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          font-size: 0.95rem;
          color: var(--text-dark);
          line-height: 1.4;
        }

        .feature-check {
          color: var(--sap-blue);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .drawer-actions {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        @media (max-width: 480px) {
          .drawer-body {
            padding: 80px 24px 24px;
          }
          .drawer-header h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default DetailDrawer;
