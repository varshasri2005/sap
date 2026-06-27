import React from 'react';
import { Cloud, Users, ShoppingBag, Layers, Cpu, ChevronRight } from 'lucide-react';

const Solutions = ({ onItemClick }) => {
  const solutionsData = [
    {
      title: 'Cloud ERP',
      subtitle: 'SAP S/4HANA Cloud',
      description: 'Run your entire business operations securely in the cloud with our industry-leading intelligent ERP system.',
      icon: <Cloud size={24} />,
      linkText: 'Explore Cloud ERP'
    },
    {
      title: 'HR & People Engagement',
      subtitle: 'SAP SuccessFactors',
      description: 'Inspire your workforce and optimize HR processes with our next-generation cloud human capital management (HCM).',
      icon: <Users size={24} />,
      linkText: 'Optimize HR'
    },
    {
      title: 'Supply Chain Management',
      subtitle: 'Digital Supply Chain',
      description: 'Build a resilient supply chain with design, planning, manufacturing, and logistics software built for agility.',
      icon: <Layers size={24} />,
      linkText: 'Enhance Supply Chain'
    },
    {
      title: 'Customer Experience',
      subtitle: 'SAP Customer Experience',
      description: 'Connect commerce, marketing, sales, and service data to deliver personalized experiences to customers.',
      icon: <ShoppingBag size={24} />,
      linkText: 'Exceed Expectations'
    },
    {
      title: 'Business Tech Platform',
      subtitle: 'SAP BTP',
      description: 'Unify data analytics, AI, application development, automation, and integration in one unified environment.',
      icon: <Cpu size={24} />,
      linkText: 'Discover SAP BTP'
    }
  ];

  return (
    <section className="solutions-section">
      <div className="section-header">
        <h2 className="section-title">Solutions engineered for growth</h2>
        <p className="section-subtitle">
          Drive business innovation with cloud ERP, industry-specific solutions, and platforms tailored to your business scale.
        </p>
      </div>

      <div className="solutions-grid">
        {solutionsData.map((sol, index) => (
          <div 
            key={index} 
            className="solution-card glass-panel"
            onClick={() => onItemClick(sol.title)}
          >
            <div className="card-glow"></div>
            <div className="icon-wrapper">{sol.icon}</div>
            <span className="card-sub">{sol.subtitle}</span>
            <h3 className="card-title">{sol.title}</h3>
            <p className="card-desc">{sol.description}</p>
            <button 
              className="card-action-btn"
              onClick={(e) => {
                e.stopPropagation();
                onItemClick(sol.title);
              }}
            >
              {sol.linkText}
              <ChevronRight size={16} />
            </button>
          </div>
        ))}
      </div>

      <style>{`
        .solutions-section {
          padding: 100px 6%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 2.8rem;
          color: var(--sap-dark-blue);
          font-weight: 800;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .solution-card {
          padding: 32px 28px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
          transition: var(--transition-smooth);
          cursor: pointer;
        }

        .solution-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.04), 0 0 0 1px rgba(10, 110, 209, 0.2);
          border-color: rgba(10, 110, 209, 0.25);
        }

        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at top right, rgba(0, 112, 242, 0.08) 0%, transparent 60%);
          opacity: 0;
          transition: var(--transition-smooth);
        }

        .solution-card:hover .card-glow {
          opacity: 1;
        }

        .icon-wrapper {
          background: rgba(0, 112, 242, 0.08);
          color: var(--sap-blue);
          padding: 14px;
          border-radius: 10px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .solution-card:hover .icon-wrapper {
          background: var(--sap-blue);
          color: white;
          transform: scale(1.1);
        }

        .card-sub {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--sap-blue);
          letter-spacing: 1px;
          margin-bottom: 8px;
        }

        .card-title {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          color: var(--sap-dark-blue);
          font-weight: 700;
          margin-bottom: 12px;
        }

        .card-desc {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .card-action-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--sap-blue);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: var(--transition-fast);
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: var(--font-body);
          padding: 0;
        }

        .card-action-btn:hover {
          color: var(--sap-blue-hover);
          padding-left: 4px;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.2rem;
          }
          .solutions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Solutions;
