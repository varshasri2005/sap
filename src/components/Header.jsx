import React, { useState } from 'react';
import { Search, User, Globe, Menu, X, ChevronDown } from 'lucide-react';

const Header = ({ onSearchOpen, onContactOpen, onItemClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const productsMegaMenu = [
    {
      title: 'Applications',
      hasArrow: true,
      items: ['Financial management', 'Spend management', 'Supply chain management', 'Human capital management', 'Customer experience', 'Enterprise resource planning']
    },
    {
      title: 'AI Platform',
      hasArrow: true,
      subgroups: [
        {
          section: 'BUILD',
          items: ['Develop', 'Integrate']
        },
        {
          section: 'CONTEXTUALIZE AND REASON',
          items: ['Data and analytics', 'AI models']
        },
        {
          section: 'GOVERN',
          items: ['AI agent governance', 'Transformation management']
        }
      ]
    },
    {
      title: 'Artificial intelligence',
      hasArrow: true,
      items: ['AI agents and assistants', 'AI workspaces']
    },
    {
      title: 'More SAP offerings',
      hasArrow: false,
      items: ['RISE with SAP', 'Midsize business solutions', 'Sustainability management', 'Business network', 'All products A-Z']
    }
  ];

  const industriesMegaMenu = [
    {
      title: 'Industry AI',
      hasArrow: true,
      items: [
        'Autonomous Adaptive Production',
        'Autonomous Asset Management',
        'Autonomous Commodity Management',
        'Autonomous Project Delivery',
        'Autonomous Regulated Manufacturing',
        'Autonomous Revenue Growth Management',
        'Autonomous Unified Commerce'
      ]
    },
    {
      title: 'Consumer Industries',
      hasArrow: false,
      items: [
        'Agribusiness',
        'Consumer products',
        'Life sciences and healthcare',
        'Retail',
        'Wholesale distribution'
      ]
    },
    {
      title: 'Manufacturing',
      hasArrow: false,
      items: [
        'Aerospace and defense',
        'Automotive',
        'High tech',
        'Industrial manufacturing',
        'Mill products'
      ]
    },
    {
      title: 'Energy and Natural Resources',
      hasArrow: false,
      items: [
        'Chemicals',
        'Mining',
        'Oil, gas, and energy',
        'Utilities'
      ]
    },
    {
      title: 'Services Industries',
      hasArrow: false,
      items: [
        'Construction and real estate',
        'Media, sports, and entertainment',
        'Professional services',
        'Telecommunications',
        'Travel and transportation'
      ]
    },
    {
      title: 'Public Services',
      hasArrow: false,
      items: [
        'Defense and security',
        'Education and research',
        'Government'
      ]
    },
    {
      title: 'Financial Services',
      hasArrow: false,
      items: [
        'Financial Services'
      ]
    }
  ];

  const navLinks = [
    { 
      name: 'Products', 
      items: [
        'Financial management', 'Spend management', 'Supply chain management', 'Human capital management', 'Customer experience', 'Enterprise resource planning',
        'Develop', 'Integrate', 'Data and analytics', 'AI models', 'AI agent governance', 'Transformation management',
        'AI agents and assistants', 'AI workspaces',
        'RISE with SAP', 'Midsize business solutions', 'Sustainability management', 'Business network', 'All products A-Z'
      ] 
    },
    { 
      name: 'Industries', 
      items: [
        'Autonomous Adaptive Production', 'Autonomous Asset Management', 'Autonomous Commodity Management', 'Autonomous Project Delivery', 'Autonomous Regulated Manufacturing', 'Autonomous Revenue Growth Management', 'Autonomous Unified Commerce',
        'Agribusiness', 'Consumer products', 'Life sciences and healthcare', 'Retail', 'Wholesale distribution',
        'Aerospace and defense', 'Automotive', 'High tech', 'Industrial manufacturing', 'Mill products',
        'Chemicals', 'Mining', 'Oil, gas, and energy', 'Utilities',
        'Construction and real estate', 'Media, sports, and entertainment', 'Professional services', 'Telecommunications', 'Travel and transportation',
        'Defense and security', 'Education and research', 'Government',
        'Financial Services'
      ] 
    },
    { name: 'Transform and Support', items: ['Services & Support', 'SAP Training', 'Digital Transformation', 'Customer Success'] },
    { name: 'Learning', items: ['SAP Learning Hub', 'Developer Tutorials', 'Certifications', 'Free Tier Options'] },
    { name: 'Community', items: ['SAP Blogs', 'Q&A Forums', 'User Groups', 'Developer Community'] },
    { name: 'Partners', items: ['Find a Partner', 'Become a Partner', 'Partner Portal'] },
    { name: 'About', items: ['Company Information', 'Careers', 'Investor Relations', 'News & Press', 'Sustainability'] }
  ];

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <header className="glass-panel header-container">
      <div className="header-inner">
        {/* Left Side: Logo & Main Navigation */}
        <div className="header-left">
          <a href="#" className="sap-logo">
            <span>SAP</span>
          </a>
          
          <nav className="desktop-nav">
            {navLinks.map((link, idx) => (
              <div 
                key={link.name} 
                className="nav-item-wrapper"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="nav-link-btn">
                  {link.name}
                  <ChevronDown size={14} className={`chevron-icon ${activeDropdown === idx ? 'rotated' : ''}`} />
                </button>
                
                {activeDropdown === idx && (
                  (link.name === 'Products' || link.name === 'Industries') ? (
                    /* Products & Industries Mega Dropdown (4 Columns with grid wrapping) */
                    <div className="mega-dropdown glass-panel">
                      <div className="dropdown-glow-effect"></div>
                      <div className="mega-grid">
                        {(link.name === 'Products' ? productsMegaMenu : industriesMegaMenu).map((col, colIdx) => (
                          <div key={colIdx} className="mega-col">
                            <h4 className="mega-col-title">
                              {col.title}
                              {col.hasArrow && <span className="arrow-indicator"> →</span>}
                            </h4>
                            
                            {col.subgroups ? (
                              col.subgroups.map((sub, subIdx) => (
                                <div key={subIdx} className="mega-subgroup">
                                  <span className="subgroup-lbl">{sub.section}</span>
                                  <ul className="mega-list">
                                    {sub.items.map((item) => (
                                      <li key={item}>
                                        <button 
                                          className="mega-link-btn"
                                          onClick={() => {
                                            onItemClick(item);
                                            setActiveDropdown(null);
                                          }}
                                        >
                                          {item}
                                        </button>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))
                            ) : (
                              <ul className="mega-list">
                                {col.items.map((item) => (
                                  <li key={item}>
                                    <button 
                                      className="mega-link-btn"
                                      onClick={() => {
                                        onItemClick(item);
                                        setActiveDropdown(null);
                                      }}
                                    >
                                      {item}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Standard Dropdown */
                    <div className="nav-dropdown glass-panel">
                      <div className="dropdown-glow-effect"></div>
                      <ul className="dropdown-list">
                        {link.items.map((item) => (
                          <li key={item}>
                            <button 
                              className="dropdown-link-btn"
                              onClick={() => {
                                onItemClick(item);
                                setActiveDropdown(null);
                              }}
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right Side: Utility Items */}
        <div className="header-right">
          <button className="explore-sap-btn">Explore SAP</button>
          
          <button className="icon-btn" onClick={onSearchOpen} aria-label="Search">
            <Search size={18} />
          </button>
          
          <button className="icon-btn" aria-label="Profile/Account">
            <User size={18} />
          </button>
          
          <button className="icon-btn" aria-label="Select Country">
            <Globe size={18} />
          </button>

          <button 
            className="mobile-menu-toggle icon-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass-panel animate-fade-in">
          <nav className="mobile-nav">
            {navLinks.map((link, idx) => (
              <div key={link.name} className="mobile-nav-item">
                <button 
                  className="mobile-nav-header"
                  onClick={() => toggleDropdown(idx)}
                >
                  {link.name}
                  <ChevronDown size={16} className={`chevron-icon ${activeDropdown === idx ? 'rotated' : ''}`} />
                </button>
                
                {activeDropdown === idx && (
                  (link.name === 'Products' || link.name === 'Industries') ? (
                    /* Grouped products/industries view on mobile */
                    <div className="mobile-products-grouped">
                      {(link.name === 'Products' ? productsMegaMenu : industriesMegaMenu).map((col, colIdx) => (
                        <div key={colIdx} className="mobile-group-col">
                          <div className="mobile-group-title">{col.title}</div>
                          {col.subgroups ? (
                            col.subgroups.map((sub, subIdx) => (
                              <div key={subIdx} className="mobile-subgroup-wrapper">
                                <div className="mobile-subgroup-label">{sub.section}</div>
                                <ul className="mobile-dropdown-list">
                                  {sub.items.map((item) => (
                                    <li key={item}>
                                      <button 
                                        className="mobile-item-btn"
                                        onClick={() => {
                                          setMobileMenuOpen(false);
                                          onItemClick(item);
                                        }}
                                      >
                                        {item}
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))
                          ) : (
                            <ul className="mobile-dropdown-list">
                              {col.items.map((item) => (
                                <li key={item}>
                                  <button 
                                    className="mobile-item-btn"
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      onItemClick(item);
                                    }}
                                  >
                                    {item}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Simple list for other menus on mobile */
                    <ul className="mobile-dropdown-list">
                      {link.items.map((item) => (
                        <li key={item}>
                          <button 
                            className="mobile-item-btn"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              onItemClick(item);
                            }}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            ))}
            <div className="mobile-nav-actions">
              <button className="explore-sap-btn w-full">Explore SAP</button>
              <button 
                className="btn-primary w-full justify-center"
                style={{ marginTop: '1rem' }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactOpen();
                }}
              >
                Contact us
              </button>
            </div>
          </nav>
        </div>
      )}

      <style>{`
        .header-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: 72px;
          display: flex;
          align-items: center;
          padding: 0 4%;
          border-top: none;
          border-left: none;
          border-right: none;
          border-radius: 0;
        }

        .header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .sap-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--sap-blue);
          color: white;
          text-decoration: none;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.6rem;
          padding: 6px 16px;
          border-radius: 2px;
          letter-spacing: -0.5px;
          transition: var(--transition-fast);
        }

        .sap-logo:hover {
          background-color: var(--sap-blue-hover);
          transform: scale(1.02);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .nav-item-wrapper {
          position: relative;
          padding: 10px 0;
        }

        .nav-link-btn {
          background: transparent;
          border: none;
          color: #2b303b;
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: var(--transition-fast);
          padding: 6px 10px;
          border-radius: 4px;
        }

        .nav-link-btn:hover {
          color: var(--sap-blue);
          background: rgba(0, 112, 242, 0.05);
        }

        .chevron-icon {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .chevron-icon.rotated {
          transform: rotate(180deg);
        }

        .nav-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          min-width: 250px;
          padding: 12px;
          border-radius: 8px;
          margin-top: 8px;
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .dropdown-glow-effect {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(0, 112, 242, 0.06) 0%, transparent 60%);
          pointer-events: none;
        }

        .dropdown-list {
          list-style: none;
          position: relative;
          z-index: 1;
        }

        .dropdown-link-btn {
          display: block;
          width: 100%;
          background: transparent;
          border: none;
          text-align: left;
          padding: 10px 16px;
          color: #333333;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 6px;
          transition: var(--transition-fast);
          cursor: pointer;
        }

        .dropdown-link-btn:hover {
          background: rgba(0, 112, 242, 0.08);
          color: var(--sap-blue);
          padding-left: 20px;
        }

        /* Products Mega Dropdown styling */
        .mega-dropdown {
          position: absolute;
          top: 100%;
          left: -120px;
          width: 90vw;
          max-width: 1100px;
          padding: 32px;
          border-radius: 12px;
          margin-top: 8px;
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .mega-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          position: relative;
          z-index: 1;
        }

        .mega-col {
          display: flex;
          flex-direction: column;
        }

        .mega-col-title {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: var(--sap-dark-blue);
          margin-bottom: 16px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          padding-bottom: 8px;
        }

        .arrow-indicator {
          color: var(--sap-blue);
          font-weight: 800;
        }

        .mega-subgroup {
          margin-bottom: 16px;
        }

        .subgroup-lbl {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--text-muted);
          letter-spacing: 0.8px;
          display: block;
          margin-bottom: 6px;
        }

        .mega-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mega-link-btn {
          display: block;
          width: 100%;
          background: transparent;
          border: none;
          text-align: left;
          padding: 6px 0;
          color: #4b5563;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .mega-link-btn:hover {
          color: var(--sap-blue);
          transform: translateX(4px);
        }

        /* Mobile specific groups */
        .mobile-products-grouped {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 10px 0;
        }

        .mobile-group-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobile-group-title {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 700;
          color: var(--sap-dark-blue);
          border-left: 3px solid var(--sap-blue);
          padding-left: 8px;
        }

        .mobile-subgroup-wrapper {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-left: 12px;
        }

        .mobile-subgroup-label {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--text-muted);
          letter-spacing: 0.5px;
        }

        .mobile-item-btn {
          display: block;
          width: 100%;
          background: transparent;
          border: none;
          text-align: left;
          padding: 8px 12px;
          color: var(--text-muted);
          font-family: var(--font-body);
          font-size: 0.9rem;
          border-radius: 4px;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .mobile-item-btn:hover {
          background: rgba(0, 112, 242, 0.05);
          color: var(--sap-blue);
          padding-left: 16px;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .explore-sap-btn {
          background: transparent;
          border: none;
          color: #333333;
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: var(--transition-fast);
          padding: 6px 12px;
          border-radius: 4px;
        }

        .explore-sap-btn:hover {
          color: var(--sap-blue);
          background: rgba(0, 112, 242, 0.05);
        }

        .icon-btn {
          background: transparent;
          border: none;
          color: #333333;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }

        .icon-btn:hover {
          background: rgba(0, 112, 242, 0.08);
          color: var(--sap-blue);
          transform: scale(1.05);
        }

        .mobile-menu-toggle {
          display: none;
        }

        /* Mobile Menu Drawer */
        .mobile-drawer {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          height: calc(100vh - 72px);
          overflow-y: auto;
          padding: 24px;
          border-radius: 0;
          border-top: none;
          display: flex;
          flex-direction: column;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mobile-nav-item {
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          padding-bottom: 8px;
        }

        .mobile-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background: transparent;
          border: none;
          color: #121212;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 600;
          padding: 10px 0;
          cursor: pointer;
        }

        .mobile-dropdown-list {
          list-style: none;
          padding-left: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 6px;
          animation: slideDown 0.2s ease;
        }

        .mobile-dropdown-link {
          display: block;
          padding: 8px 12px;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.95rem;
          border-radius: 4px;
        }

        .mobile-dropdown-link:hover {
          background: rgba(0, 112, 242, 0.05);
          color: var(--sap-blue);
        }

        .mobile-nav-actions {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .w-full {
          width: 100%;
        }

        .justify-center {
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .desktop-nav, .explore-sap-btn {
            display: none;
          }
          
          .mobile-menu-toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
