import React, { useState } from 'react';
import { Cpu, Leaf, BarChart3, ShieldCheck, Zap, Globe } from 'lucide-react';

const InteractiveHub = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const tabs = [
    { id: 'ai', label: 'Business AI', icon: <Cpu size={18} /> },
    { id: 'sustain', label: 'Sustainability', icon: <Leaf size={18} /> },
    { id: 'ops', label: 'Cloud Operations', icon: <BarChart3 size={18} /> }
  ];

  return (
    <section className="interactive-hub-section">
      <div className="section-header">
        <h2 className="section-title">Experience the Intelligent Platform</h2>
        <p className="section-subtitle">
          Toggle between our key innovation streams to see how SAP transforms data into actionable autonomous business results.
        </p>
      </div>

      <div className="hub-container glass-panel">
        {/* Left Side: Navigation Tabs */}
        <div className="hub-sidebar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`hub-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Right Side: Interactive Content Canvas */}
        <div className="hub-canvas">
          {activeTab === 'ai' && (
            <div className="canvas-content animate-fade-in">
              <div className="canvas-header">
                <h3>Autonomous AI Agents in ERP</h3>
                <p>SAP Joule co-pilot coordinates multiple autonomous agents to resolve vendor issues and optimize invoices.</p>
              </div>
              <div className="mock-dashboard">
                <div className="mock-card glass-panel">
                  <div className="mock-card-top">
                    <span className="card-lbl">AGENT IN ACTION</span>
                    <span className="pulse-dot green"></span>
                  </div>
                  <h4>Supplier Invoice Auditor</h4>
                  <p className="subtext">Analyzing 1,420 pending invoice forms...</p>
                  <div className="progress-bar-container">
                    <div className="progress-bar fill-85"></div>
                  </div>
                  <div className="metrics-row">
                    <div className="metric">
                      <span className="m-val">99.8%</span>
                      <span className="m-lbl">Auditing Accuracy</span>
                    </div>
                    <div className="metric">
                      <span className="m-val">+35%</span>
                      <span className="m-lbl">Speedup Factor</span>
                    </div>
                  </div>
                </div>

                <div className="mock-card glass-panel alert-card">
                  <div className="mock-card-top">
                    <span className="card-lbl label-purple">AUTO RESOLVED</span>
                    <ShieldCheck size={16} className="color-purple" />
                  </div>
                  <h4>Price Discrepancy Found</h4>
                  <p className="subtext">Supplier #809 billed $14,200 instead of contract price $12,900.</p>
                  <div className="audit-action">
                    <span>Re-routed for credit note approval</span>
                    <Zap size={14} className="color-purple" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sustain' && (
            <div className="canvas-content animate-fade-in">
              <div className="canvas-header">
                <h3>Sustainability Ledger</h3>
                <p>Track scope 1, 2, and 3 emissions across your global supply chain with real transactional carbon accounts.</p>
              </div>
              <div className="mock-dashboard">
                <div className="mock-card glass-panel">
                  <div className="mock-card-top">
                    <span className="card-lbl">CARBON EMISSIONS</span>
                    <Globe size={16} className="color-green" />
                  </div>
                  <h4>Scope 3 Compliance</h4>
                  <p className="subtext">Year-to-date carbon reduction progress</p>
                  <div className="circular-progress-demo">
                    <div className="circular-outer">
                      <div className="circular-inner">
                        <span className="circular-val">-24.3%</span>
                      </div>
                    </div>
                  </div>
                  <p className="center-text">Ahead of EU and India corporate statutory goals</p>
                </div>

                <div className="mock-card glass-panel">
                  <div className="mock-card-top">
                    <span className="card-lbl label-green">ENERGY SHARE</span>
                    <Leaf size={16} className="color-green" />
                  </div>
                  <h4>Renewable Power Usage</h4>
                  <div className="stat-bars">
                    <div className="bar-item">
                      <div className="bar-label"><span>Solar</span><span>62%</span></div>
                      <div className="progress-bar-container"><div className="progress-bar bg-green w-62"></div></div>
                    </div>
                    <div className="bar-item">
                      <div className="bar-label"><span>Wind</span><span>28%</span></div>
                      <div className="progress-bar-container"><div className="progress-bar bg-green w-28"></div></div>
                    </div>
                    <div className="bar-item">
                      <div className="bar-label"><span>Grid Power</span><span>10%</span></div>
                      <div className="progress-bar-container"><div className="progress-bar bg-grey w-10"></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ops' && (
            <div className="canvas-content animate-fade-in">
              <div className="canvas-header">
                <h3>Global Cloud ERP Infrastructure</h3>
                <p>Real-time telemetry and health of your distributed core cloud ERP instance across major hyperscalers.</p>
              </div>
              <div className="mock-dashboard">
                <div className="mock-card glass-panel full-width-card">
                  <div className="mock-card-top">
                    <span className="card-lbl">LIVE PERFORMANCE</span>
                    <span className="pulse-dot blue"></span>
                  </div>
                  <div className="performance-grid">
                    <div className="perf-item">
                      <span className="p-val">99.997%</span>
                      <span className="p-lbl">System Uptime</span>
                    </div>
                    <div className="perf-item">
                      <span className="p-val">12 ms</span>
                      <span className="p-lbl">API Latency</span>
                    </div>
                    <div className="perf-item">
                      <span className="p-val">1.2M</span>
                      <span className="p-lbl">Txn / Second</span>
                    </div>
                  </div>
                  <div className="telemetry-chart">
                    <div className="chart-bar h-40"></div>
                    <div className="chart-bar h-50"></div>
                    <div className="chart-bar h-30"></div>
                    <div className="chart-bar h-70"></div>
                    <div className="chart-bar h-60"></div>
                    <div className="chart-bar h-85 animate-bar"></div>
                    <div className="chart-bar h-75"></div>
                    <div className="chart-bar h-90"></div>
                    <div className="chart-bar h-95"></div>
                  </div>
                  <p className="subtext text-center" style={{ marginTop: '10px' }}>Active cloud regions: AWS, Azure, GCP (Mumbai, Bengaluru)</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .interactive-hub-section {
          padding: 80px 6%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .hub-container {
          display: grid;
          grid-template-columns: 300px 1fr;
          border-radius: 16px;
          overflow: hidden;
          min-height: 480px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
        }

        .hub-sidebar {
          background: rgba(255, 255, 255, 0.4);
          border-right: 1px solid rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          padding: 30px;
          gap: 12px;
        }

        .hub-tab-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          background: transparent;
          border: none;
          border-left: 3px solid transparent;
          padding: 14px 20px;
          border-radius: 0;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-muted);
          text-align: left;
          transition: var(--transition-fast);
        }

        .hub-tab-btn:hover {
          color: var(--sap-blue);
          border-left-color: rgba(10, 110, 209, 0.3);
          background: rgba(10, 110, 209, 0.02);
        }

        .hub-tab-btn.active {
          color: var(--sap-blue);
          border-left-color: var(--sap-blue);
          background: rgba(10, 110, 209, 0.05);
        }

        .hub-canvas {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
        }

        .canvas-header {
          margin-bottom: 30px;
        }

        .canvas-header h3 {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          color: var(--sap-dark-blue);
          margin-bottom: 8px;
        }

        .canvas-header p {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.5;
        }

        .mock-dashboard {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .mock-card {
          padding: 24px;
          border-radius: 8px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
          display: flex;
          flex-direction: column;
        }

        .full-width-card {
          grid-column: span 2;
        }

        .mock-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .card-lbl {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: var(--sap-blue);
        }

        .label-purple { color: #8257e5; }
        .label-green { color: #10b981; }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
          position: relative;
        }

        .pulse-dot.green { background: #10b981; }
        .pulse-dot.blue { background: var(--sap-blue); }

        .pulse-dot::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: inherit;
          animation: float 2s infinite ease-in-out;
          opacity: 0.6;
          transform: scale(2.5);
        }

        .subtext {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 12px;
        }

        .text-center { text-align: center; }

        .progress-bar-container {
          height: 6px;
          background: rgba(0, 0, 0, 0.06);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .progress-bar {
          height: 100%;
          background: var(--sap-blue);
          border-radius: 10px;
        }

        .progress-bar.fill-85 { width: 85%; }
        .progress-bar.bg-green { background: #10b981; }
        .progress-bar.bg-grey { background: #cbd5e1; }
        .w-62 { width: 62%; }
        .w-28 { width: 28%; }
        .w-10 { width: 10%; }

        .metrics-row {
          display: flex;
          justify-content: space-between;
          margin-top: auto;
        }

        .metric {
          display: flex;
          flex-direction: column;
        }

        .m-val {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--sap-dark-blue);
        }

        .m-lbl {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .alert-card {
          border-left: 4px solid #8257e5;
        }

        .color-purple { color: #8257e5; }
        .color-green { color: #10b981; }

        .audit-action {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(130, 87, 229, 0.06);
          padding: 10px 14px;
          border-radius: 6px;
          font-size: 0.85rem;
          color: #8257e5;
          font-weight: 600;
        }

        /* Circular progress styling */
        .circular-progress-demo {
          display: flex;
          justify-content: center;
          margin: 20px 0;
        }

        .circular-outer {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: conic-gradient(#10b981 75%, rgba(0,0,0,0.05) 0);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .circular-inner {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .circular-val {
          font-size: 1.3rem;
          font-weight: 700;
          color: #10b981;
        }

        .center-text {
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .stat-bars {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .bar-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .bar-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* Performance grid */
        .performance-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 24px;
          text-align: center;
        }

        .perf-item {
          display: flex;
          flex-direction: column;
        }

        .p-val {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--sap-blue);
        }

        .p-lbl {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .telemetry-chart {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 100px;
          gap: 6px;
          background: rgba(0, 0, 0, 0.02);
          padding: 10px;
          border-radius: 8px;
        }

        .chart-bar {
          flex-grow: 1;
          background: linear-gradient(180deg, var(--sap-blue) 0%, rgba(0, 112, 242, 0.2) 100%);
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          transition: height 0.4s ease;
        }

        .h-30 { height: 30%; }
        .h-40 { height: 40%; }
        .h-50 { height: 50%; }
        .h-60 { height: 60%; }
        .h-70 { height: 70%; }
        .h-75 { height: 75%; }
        .h-85 { height: 85%; }
        .h-90 { height: 90%; }
        .h-95 { height: 95%; }

        @keyframes pulse-height {
          0%, 100% { height: 85%; }
          50% { height: 55%; }
        }

        .animate-bar {
          animation: pulse-height 2.5s infinite ease-in-out;
        }

        @media (max-width: 900px) {
          .hub-container {
            grid-template-columns: 1fr;
          }
          .hub-sidebar {
            flex-direction: row;
            overflow-x: auto;
            border-right: none;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
            padding: 16px;
          }
          .hub-tab-btn {
            white-space: nowrap;
            padding: 10px 16px;
          }
          .mock-dashboard {
            grid-template-columns: 1fr;
          }
          .full-width-card {
            grid-column: span 1;
          }
          .hub-canvas {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default InteractiveHub;
