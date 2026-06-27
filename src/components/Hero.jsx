import React, { useState } from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';

const Hero = ({ onContactOpen }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="hero-section">
      <div className="hero-grid">
        {/* Left Content */}
        <div className="hero-content animate-fade-in">
          <div className="badge">Innovation Forum 2026</div>
          <h1 className="hero-title">Autonomous Enterprise</h1>
          <p className="hero-subtitle">
            This is the beginning of better—where your business can think, adapt, and act like never before.
          </p>
          <div className="hero-actions">
            <button className="btn-primary btn-large">
              Learn more
              <ArrowRight size={18} />
            </button>
            <button className="btn-secondary btn-large">
              Watch Keynote
            </button>
          </div>
        </div>

        {/* Right Crystalline Prism Graphic */}
        <div className="hero-graphic-container">
          <div className="glow-backdrop animate-pulse-glow"></div>
          <div className="crystal-wrapper animate-float">
            {!imageError ? (
              <img 
                src="/sap_crystal_prism.png" 
                alt="SAP Autonomous Enterprise Crystal Prism" 
                className="crystal-image"
                onError={() => setImageError(true)} 
              />
            ) : (
              /* High-end SVG 3D Crystal Prism Fallback */
              <svg viewBox="0 0 400 400" className="crystal-svg" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="facet1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0070f2" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="facet2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8257e5" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#002a54" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="facet3" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#bf00ff" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#0070f2" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="facet4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0070f2" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#1c0f3a" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="facet5" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#8257e5" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="facet6" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0070f2" stopOpacity="0.1" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                
                {/* 3D Glass Prism Facets */}
                <g filter="url(#glow)">
                  {/* Facet Top-Left */}
                  <polygon points="200,200 200,50 80,130" fill="url(#facet1)" />
                  {/* Facet Top-Right */}
                  <polygon points="200,200 200,50 320,130" fill="url(#facet2)" />
                  {/* Facet Right */}
                  <polygon points="200,200 320,130 320,270" fill="url(#facet3)" />
                  {/* Facet Bottom-Right */}
                  <polygon points="200,200 320,270 200,350" fill="url(#facet4)" />
                  {/* Facet Bottom-Left */}
                  <polygon points="200,200 200,350 80,270" fill="url(#facet5)" />
                  {/* Facet Left */}
                  <polygon points="200,200 80,270 80,130" fill="url(#facet1)" />
                  
                  {/* Glass highlight overlays */}
                  <polygon points="200,200 200,50 140,90" fill="url(#facet6)" style={{ mixBlendMode: 'overlay' }} />
                  <polygon points="200,200 320,130 260,200" fill="url(#facet6)" style={{ mixBlendMode: 'screen' }} />
                </g>
              </svg>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 140px 6% 80px;
          min-height: 90vh;
          display: flex;
          align-items: center;
          background: var(--hero-mesh);
          position: relative;
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 680px;
        }

        .badge {
          background: rgba(0, 112, 242, 0.1);
          color: var(--sap-blue);
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 24px;
          border: 1px solid rgba(0, 112, 242, 0.15);
          letter-spacing: 0.5px;
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: 4.2rem;
          font-weight: 800;
          line-height: 1.1;
          color: var(--sap-dark-blue);
          margin-bottom: 24px;
          letter-spacing: -1.5px;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--text-muted);
          margin-bottom: 40px;
          font-weight: 400;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-large {
          padding: 14px 32px;
          font-size: 1.05rem;
        }

        .hero-graphic-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 480px;
        }

        .glow-backdrop {
          position: absolute;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(130, 87, 229, 0.35) 0%, rgba(0, 240, 255, 0.25) 50%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
        }

        .crystal-wrapper {
          z-index: 1;
          width: 100%;
          max-width: 440px;
          display: flex;
          justify-content: center;
        }

        .crystal-image {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 15px 30px rgba(0, 112, 242, 0.15));
        }

        .crystal-svg {
          width: 100%;
          height: auto;
          max-height: 400px;
          filter: drop-shadow(0 20px 40px rgba(130, 87, 229, 0.2));
          cursor: pointer;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .crystal-svg:hover {
          transform: scale(1.05) rotate(5deg);
        }

        @media (max-width: 1024px) {
          .hero-section {
            padding-top: 120px;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          .hero-content {
            margin: 0 auto;
          }
          .hero-title {
            font-size: 3rem;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-graphic-container {
            height: 360px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
