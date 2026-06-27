import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import InteractiveHub from './components/InteractiveHub';
import ContactModal from './components/ContactModal';
import DetailDrawer from './components/DetailDrawer';
import Footer from './components/Footer';
import { MessageSquare, Search, ArrowRight, X } from 'lucide-react';

const productDetails = {
  // Applications
  'Financial management': {
    title: 'Financial Management',
    category: 'Applications',
    desc: 'Unify financial planning, accounting, treasury, and tax operations in a single, real-time ledger.',
    metrics: '38% reduction in financial closing cycles.',
    features: ['Automated intercompany reconciliation', 'AI-powered cash flow forecasting', 'Real-time financial consolidation', 'Global compliance engine'],
    cta: 'Download Finance E-Book'
  },
  'Spend management': {
    title: 'Spend Management',
    category: 'Applications',
    desc: 'Control all business expenditures, streamline procurement, and build resilient supplier relationships.',
    metrics: 'Save up to 12% in indirect spend categories.',
    features: ['Strategic sourcing automation', 'Intelligent travel and expense auditing', 'Supplier risk monitoring', 'Contract lifecycle management'],
    cta: 'Request Spend Audit Demo'
  },
  'Supply chain management': {
    title: 'Digital Supply Chain',
    category: 'Applications',
    desc: 'Adopt resilient manufacturing, logistics, and planning tools powered by real-time demand signals.',
    metrics: '99% shipping accuracy with predictive tracking.',
    features: ['Integrated business planning (IBP)', 'Warehouse automation telemetry', 'Dynamic freight routing', 'Predictive machine maintenance'],
    cta: 'Explore Supply Chain Solutions'
  },
  'Human capital management': {
    title: 'Human Capital Management (SuccessFactors)',
    category: 'Applications',
    desc: 'Empower your global talent with modern learning, recruiting, payroll, and performance management modules.',
    metrics: 'Boost employee engagement index by 24%.',
    features: ['Global cloud payroll (100+ countries)', 'Skill gap analysis co-pilot', 'AI-assisted recruiting pipelines', 'Continuous feed performance reviews'],
    cta: 'See SuccessFactors in Action'
  },
  'Customer experience': {
    title: 'Customer Experience (CX & CRM)',
    category: 'Applications',
    desc: 'Unify sales, marketing, service, and commerce data around a single secure profile to deliver trust-building journeys.',
    metrics: 'Increase customer lifetime value (LTV) by 18%.',
    features: ['Real-time customer data platform (CDP)', 'AI-guided sales path recommendation', 'Omnichannel commerce builder', 'Connected service desk ticket resolution'],
    cta: 'Read CX Success Stories'
  },
  'Enterprise resource planning': {
    title: 'Cloud ERP (SAP S/4HANA Cloud)',
    category: 'Applications',
    desc: 'Deploy the industry-defining modular ERP that coordinates your entire business operations from inventory to billing.',
    metrics: 'Run on 87% of total global transaction value.',
    features: ['Preconfigured industry-best practices', 'Embedded AI analytics dashboards', 'Zero-downtime ledger migration', 'Hyper-scalable cloud infrastructure'],
    cta: 'Discover GROW with SAP'
  },
  // AI Platform
  'Develop': {
    title: 'Application Development (SAP Build)',
    category: 'AI Platform - Build',
    desc: 'Accelerate custom apps and workflows using drag-and-drop low-code components combined with professional IDE options.',
    metrics: 'Build custom apps 5x faster with pre-made templates.',
    features: ['Low-code app designer', 'Process automation trigger-flows', 'Enterprise visual theme builder', 'Direct SAP cloud database hooks'],
    cta: 'Try SAP Build Free Tier'
  },
  'Integrate': {
    title: 'Integration Suite (SAP BTP)',
    category: 'AI Platform - Build',
    desc: 'Connect applications, databases, and APIs across cloud, on-premises, and third-party vendor platforms.',
    metrics: 'Over 2,500 prebuilt integration flows available.',
    features: ['Visual API design studio', 'Event-driven message routing', 'Real-time telemetry and error alerts', 'Hyperscaler connector catalog'],
    cta: 'Request Integration Guide'
  },
  'Data and analytics': {
    title: 'Data & Analytics (Datasphere & Analytics Cloud)',
    category: 'AI Platform - Contextualize & Reason',
    desc: 'Consolidate multiple databases, files, and ERP sources into a single business-data fabric with native analytics dashboards.',
    metrics: 'Generate predictive forecasts with 94% precision.',
    features: ['Semantic business data fabric', 'Natural language data queries', 'Automatic database modeling', 'Vibrant executive dashboard designer'],
    cta: 'Start Analytics Free Trial'
  },
  'AI models': {
    title: 'Enterprise AI Models',
    category: 'AI Platform - Contextualize & Reason',
    desc: 'Run specialized machine learning and generative LLM models tuned to secure, compliant, corporate databases.',
    metrics: 'Deploy secure generative AI in under 3 weeks.',
    features: ['Private vector embeddings databases', 'Compliance filtering safeguards', 'LLM orchestration pipelines', 'SAP transactional context injection'],
    cta: 'Explore AI Models Directory'
  },
  'AI agent governance': {
    title: 'AI Agent Governance & Auditing',
    category: 'AI Platform - Govern',
    desc: 'Establish safety protocols, system logs, and permission layers for autonomous AI agents negotiating supply contracts.',
    metrics: '100% auditable autonomous decision chain.',
    features: ['Agent run telemetry logs', 'Ethical alignment guardrails', 'Manual approval overrides', 'Systemic action rollback capability'],
    cta: 'Read AI Governance Framework'
  },
  'Transformation management': {
    title: 'Transformation Management (Signavio)',
    category: 'AI Platform - Govern',
    desc: 'Analyze, model, and continuously optimize organization-wide business workflows and task pipelines.',
    metrics: 'Identify process bottlenecks in under 48 hours.',
    features: ['Live process mining triggers', 'Collaborative workflow mapping', 'Benchmark comparison libraries', 'Simulated change impact analysis'],
    cta: 'Download Process Report'
  },
  // Artificial intelligence
  'AI agents and assistants': {
    title: 'Joule Conversational Copilot',
    category: 'Artificial Intelligence',
    desc: 'Ask, query, and command your entire SAP ecosystem through natural language text interactions.',
    metrics: 'Resolve 60% of database queries instantly.',
    features: ['Context-aware system help', 'Natural language text queries', 'Automatic email/response drafts', 'Voice command recognition'],
    cta: 'Watch Joule Demo Video'
  },
  'AI workspaces': {
    title: 'Data Science Workspaces',
    category: 'Artificial Intelligence',
    desc: 'Provide data engineers with standard environments to code, evaluate, test, and host custom machine learning algorithms.',
    metrics: 'Support secure code execution environments.',
    features: ['Integrated Jupyter environment', 'Preinstalled TensorFlow/PyTorch libraries', 'Direct SAP Datasphere imports', 'One-click model deployment hosting'],
    cta: 'Sign Up for Sandbox'
  },
  // More SAP offerings
  'RISE with SAP': {
    title: 'RISE with SAP',
    category: 'Special Program',
    desc: 'A complete custom migration solution including software, infrastructure hosting, and consulting to transform legacy ERP databases.',
    metrics: 'Reduce total cost of ownership (TCO) by 20%.',
    features: ['Structured cloud ledger migration', 'Hyperscaler resource credits', 'Ongoing business process auditing', 'Unified support SLA structure'],
    cta: 'Learn About RISE with SAP'
  },
  'Midsize business solutions': {
    title: 'Midsize Business Solutions (GROW with SAP)',
    category: 'Special Program',
    desc: 'Get fast deployment of core Cloud ERP templates customized for rapidly growing mid-market enterprises.',
    metrics: 'Go live with a clean cloud ledger in 4 weeks.',
    features: ['Fixed-price deployment options', 'Predictable monthly subscription', 'Preconfigured finance & accounting modules', 'Scale-ready platform architecture'],
    cta: 'Explore GROW with SAP Program'
  },
  'Sustainability management': {
    title: 'Sustainability Ledger & ESG Compliance',
    category: 'Special Program',
    desc: 'Incorporate real carbon footprints and waste values directly into your transactional logs alongside financial metrics.',
    metrics: 'Audited carbon records for Scope 1, 2, and 3.',
    features: ['Transaction-level carbon accounting', 'EU taxonomy compliance export', 'Supplier ESG metrics benchmarking', 'Social performance impact metrics'],
    cta: 'Request ESG Ledger Demo'
  },
  'Business network': {
    title: 'SAP Business Network',
    category: 'Special Program',
    desc: 'Connect directly with millions of business buyers, shipping partners, and suppliers in a single collaborative trading community.',
    metrics: 'Over $4.9T in annual network commerce volume.',
    features: ['Instant procurement connections', 'Collaborative invoicing and billing', 'Digital logistics dispatching', 'Dynamic supplier catalogs lookup'],
    cta: 'Join SAP Business Network'
  },
  'All products A-Z': {
    title: 'Comprehensive SAP Catalog A-Z',
    category: 'Special Program',
    desc: 'Browse, search, and filter the complete index directory of SAP services, databases, applications, and extensions.',
    metrics: 'Search across 500+ ERP solutions and utilities.',
    features: ['Keyword catalog search indexing', 'Pricing details breakdown', 'Documentation help integration', 'Third-party extension library'],
    cta: 'Open Product Catalog Directory'
  },
  // Industry AI
  'Autonomous Adaptive Production': {
    title: 'Autonomous Adaptive Production',
    category: 'Industry AI',
    desc: 'Empower manufacturing assembly systems to self-optimize and adapt in real-time to resource limits and machine failures.',
    metrics: 'Up to 22% increase in asset throughput efficiency.',
    features: ['Self-tuning controller algorithms', 'Real-time production rescheduling', 'Automated anomaly containment', 'Edge-based quality auditing'],
    cta: 'Request Production AI Demo'
  },
  'Autonomous Asset Management': {
    title: 'Autonomous Asset Management',
    category: 'Industry AI',
    desc: 'Automate fleet and factory maintenance runs using sensor signals, predictive analytics, and self-dispatched repairs.',
    metrics: '35% reduction in unplanned equipment downtime.',
    features: ['IoT vibration and heat mapping', 'Automated spare parts dispatching', 'Dynamic technician scheduling', 'Lifecycle carbon asset modeling'],
    cta: 'Explore Autonomous Maintenance'
  },
  'Autonomous Commodity Management': {
    title: 'Autonomous Commodity Management',
    category: 'Industry AI',
    desc: 'Protect margins and automate commodity trading using digital contracts, market feeds, and automated hedge managers.',
    metrics: 'Reduce contract hedge latency by 90%.',
    features: ['Automated purchase contract routing', 'Real-time commodity price alerts', 'Cross-border cargo tracing', 'Algorithmic currency hedging'],
    cta: 'Request Commodity AI Trial'
  },
  'Autonomous Project Delivery': {
    title: 'Autonomous Project Delivery',
    category: 'Industry AI',
    desc: 'Drive complex engineering projects to completion on budget with AI forecasting and self-adjusting project files.',
    metrics: 'Improve on-time project completion by 15%.',
    features: ['Predictive risk modeling templates', 'Autonomous subcontractor invoicing', 'Real-time resource re-allocation', 'Automated project variance reviews'],
    cta: 'Get Project AI Whitepaper'
  },
  'Autonomous Regulated Manufacturing': {
    title: 'Autonomous Regulated Manufacturing',
    category: 'Industry AI',
    desc: 'Enforce regulatory compliance automatically in batch processing lines for pharmaceuticals and foods.',
    metrics: 'Zero-deviation compliance audits record.',
    features: ['Self-documenting quality reports', 'Real-time batch deviation alerts', 'Automated sterile room logs', 'Traceability ledger checks'],
    cta: 'Speak with a Compliance Architect'
  },
  'Autonomous Revenue Growth Management': {
    title: 'Autonomous Revenue Growth Management',
    category: 'Industry AI',
    desc: 'Auto-optimize discount allocations, wholesale trade agreements, and regional pricing targets to drive profitable growth.',
    metrics: 'Boost operating margins by average 4.2%.',
    features: ['Algorithmic local price optimizer', 'Automated distributor rebate auditing', 'Demand price elasticity scanner', 'Integrated trade spend model'],
    cta: 'Read Revenue Growth Report'
  },
  'Autonomous Unified Commerce': {
    title: 'Autonomous Unified Commerce',
    category: 'Industry AI',
    desc: 'Synchronize inventory, shipping, and sales across consumer touchpoints with self-adjusting order fulfillment.',
    metrics: 'Reduce cart delivery delays by 28%.',
    features: ['Real-time stock reservation ledger', 'Multi-channel fulfillment routing', 'Predictive local stock levels', 'AI-assisted retail POS connection'],
    cta: 'Demo Unified Commerce Engine'
  },
  // Consumer Industries
  'Agribusiness': {
    title: 'Agribusiness Solutions',
    category: 'Consumer Industries',
    desc: 'Unify farm data, crop yield telemetry, contract farming agreements, and food safety trace files.',
    metrics: 'Track over 300 million acres of agricultural data.',
    features: ['Farming contract billing metrics', 'IoT soil and weather telemetry', 'Farm-to-fork batch traceability', 'Commodity purchase settlements ledger'],
    cta: 'See Agribusiness Solutions'
  },
  'Consumer products': {
    title: 'Consumer Products Solutions',
    category: 'Consumer Industries',
    desc: 'Empower global consumer goods brands to manage packaging runs, trade spend deals, and supply logs.',
    metrics: 'Used by 92 of the top 100 global consumer brands.',
    features: ['Trade promotion lifecycle control', 'Dynamic shelf-life stock routing', 'Circular packaging material audits', 'Direct-to-consumer inventory hooks'],
    cta: 'Download Consumer Products Guide'
  },
  'Life sciences and healthcare': {
    title: 'Life Sciences & Healthcare',
    category: 'Consumer Industries',
    desc: 'Unify clinical trials, patient safety records, medical supplies ledger, and cold chain distribution logs.',
    metrics: '100% trace compliance for vaccine distribution.',
    features: ['Batch tracking serial registers', 'Cold chain telemetry alert hooks', 'Clinical trials budgeting ledger', 'Statutory healthcare billing compliance'],
    cta: 'Explore Life Sciences Hub'
  },
  'Retail': {
    title: 'Intelligent Retail Solutions',
    category: 'Consumer Industries',
    desc: 'Coordinate fashion assortments, multi-channel shopping carts, smart self-checkouts, and local store restocking.',
    metrics: 'Support over 50,000 retail storefronts worldwide.',
    features: ['Omnichannel customer order routing', 'Predictive fashion demand layouts', 'Automated local inventory restock', 'Real-time store sales dashboards'],
    cta: 'Request Retail Demo'
  },
  'Wholesale distribution': {
    title: 'Wholesale Distribution',
    category: 'Consumer Industries',
    desc: 'Optimize warehouse space, high-volume logistics, delivery routes, and digital vendor chargebacks.',
    metrics: 'Average 15% reduction in total inventory costs.',
    features: ['Automated pick-and-pack scheduling', 'Vendor chargeback audit flows', 'Real-time inventory visibility logs', 'Dynamic cargo route optimization'],
    cta: 'Consult a Distribution Expert'
  },
  // Manufacturing
  'Aerospace and defense': {
    title: 'Aerospace & Defense',
    category: 'Manufacturing',
    desc: 'Secure defense project budgets, trace certified aircraft parts, and optimize complex design-to-flight assembly runs.',
    metrics: 'Meets strict global government audit requirements.',
    features: ['Detailed components serialization index', 'Government contract cost auditing', 'Fleet repair and MRO telemetry', 'Coordinated engineering changes list'],
    cta: 'Explore Aerospace Solutions'
  },
  'Automotive': {
    title: 'Automotive Digital Solutions',
    category: 'Manufacturing',
    desc: 'Connect car components supply chains, manage dealership warranty claims, and coordinate smart EV factory runs.',
    metrics: 'Supports 85% of global automotive supply volume.',
    features: ['Just-In-Time parts delivery log', 'Automated warranty claim processing', 'Connected car usage telemetry', 'Carbon-neutral vehicle manufacturing data'],
    cta: 'Watch Automotive Demo'
  },
  'High tech': {
    title: 'High Tech manufacturing',
    category: 'Manufacturing',
    desc: 'Coordinate semiconductor production, manage software subscription license sales, and accelerate hardware designs.',
    metrics: '94% of top global hardware brands run SAP.',
    features: ['Hardware bill-of-materials scaling', 'Software entitlement license logs', 'Supplier capacity reservation schedules', 'Automated product recall index'],
    cta: 'Download High Tech E-Book'
  },
  'Industrial manufacturing': {
    title: 'Industrial Manufacturing',
    category: 'Manufacturing',
    desc: 'Unify engineering designs, machinery configurations, sheet metal orders, and plant energy consumption metrics.',
    metrics: 'Boost plant asset utility rate by 18%.',
    features: ['Configure-to-order assembly pipelines', 'Factory energy and emissions tracking', 'Dynamic supplier raw steel booking', 'Predictive factory maintenance runs'],
    cta: 'Request Factory Demo'
  },
  'Mill products': {
    title: 'Mill Products Solutions',
    category: 'Manufacturing',
    desc: 'Track dimension variations, bulk material runs, and delivery logistics for metals, wood, paper, and cement plants.',
    metrics: 'Support multi-characteristic raw goods inventory.',
    features: ['Dimensional cut-to-length pricing schedules', 'Chemical compound recipe registers', 'Heavy cargo freight booking', 'Furnace energy safety indicators'],
    cta: 'Read Mill Industry Report'
  },
  // Energy and Natural Resources
  'Chemicals': {
    title: 'Chemical Industry Solutions',
    category: 'Energy & Natural Resources',
    desc: 'Manage hazardous raw materials safely, optimize chemical reactions batch files, and automate safety log sheets.',
    metrics: 'Used by 96% of global chemical corporations.',
    features: ['Hazardous shipping safety forms', 'Dynamic chemical batch recipe adjusters', 'Regulatory chemical registries audits', 'Raw oil/gas input feed logs'],
    cta: 'See Chemical Software Guides'
  },
  'Mining': {
    title: 'Mining & Excavation Solutions',
    category: 'Energy & Natural Resources',
    desc: 'Track earth excavation volumes, monitor heavy mining truck paths, and maintain site safety checklists.',
    metrics: 'Tracked safety hours audit compliance.',
    features: ['Excavated ore tonnage ledger', 'Heavy truck fuel efficiency metrics', 'Geological drilling log databases', 'Site safety sensor indicators'],
    cta: 'Consult a Mining Advisor'
  },
  'Oil, gas, and energy': {
    title: 'Oil, Gas, & Energy Solutions',
    category: 'Energy & Natural Resources',
    desc: 'Unify hydrocarbon transactions, trace offshore platform supplies, and automate refinery scheduling logs.',
    metrics: 'Over 80 million barrels/day processed on SAP.',
    features: ['Hydrocarbon production accounting ledger', 'Joint venture accounting registers', 'Pipeline leak detection alert triggers', 'Refinery product yield analytics'],
    cta: 'See Energy Solutions catalog'
  },
  'Utilities': {
    title: 'Intelligent Utilities Solutions',
    category: 'Energy & Natural Resources',
    desc: 'Powers smart electricity grid billing, consumer water account files, and field repair crew dispatch logs.',
    metrics: 'Manage over 100 million public utility accounts.',
    features: ['Smart grid electricity meter logging', 'Dynamic consumer utility pricing', 'Field repair team dispatch templates', 'Water network leak metrics dashboard'],
    cta: 'Explore Utilities Software'
  },
  // Services Industries
  'Construction and real estate': {
    title: 'Construction & Real Estate',
    category: 'Services Industries',
    desc: 'Optimize builder bid evaluations, monitor real estate lease agreements, and track construction budgets.',
    metrics: 'Manage over 12 million real estate assets.',
    features: ['Subcontractor bidding comparison sheet', 'Commercial lease payment trackers', 'Project milestone delivery audits', 'Facilities energy usage logs'],
    cta: 'Request Builder Software Demo'
  },
  'Media, sports, and entertainment': {
    title: 'Media & Entertainment Solutions',
    category: 'Services Industries',
    desc: 'Secure digital rights agreements, distribute advertising sales revenues, and coordinate ticket sales databases.',
    metrics: 'Used by major global streaming platforms.',
    features: ['Copyright royalty payout calculators', 'Ad campaign revenue split templates', 'Stadium seat reservation logs', 'Dynamic event staffing planners'],
    cta: 'Read Entertainment Case Studies'
  },
  'Professional services': {
    title: 'Professional Services Solutions',
    category: 'Services Industries',
    desc: 'Track billable consulting hours, client scope variations, resource bookings, and billing agreements.',
    metrics: 'Boost consultant billable utilization by 8%.',
    features: ['Consultant skills allocation scheduler', 'Client project timesheet approvals', 'Coordinated client invoicing metrics', 'Resource utilization benchmarks'],
    cta: 'Explore Services Software'
  },
  'Telecommunications': {
    title: 'Telecommunications Solutions',
    category: 'Services Industries',
    desc: 'Manage mobile subscription accounts, 5G traffic billing databases, and telecom tower equipment parts lists.',
    metrics: 'Support billing for 1 billion subscribers.',
    features: ['Mobile service plan pricing registers', 'Hyperscaler network data traffic logs', 'Telecom tower components MRO', 'Automated customer churn indicators'],
    cta: 'Request Telecom Catalog'
  },
  'Travel and transportation': {
    title: 'Travel & Transportation',
    category: 'Services Industries',
    desc: 'Unify airline booking records, ocean cargo load planners, train route schedules, and hotel room inventories.',
    metrics: 'Optimize over 10 million daily logistics bookings.',
    features: ['Ocean cargo container space planners', 'Airline crew scheduling templates', 'Coordinated train logistics dispatchers', 'Hotel customer loyalty index database'],
    cta: 'Explore Logistics Software'
  },
  // Public Services
  'Defense and security': {
    title: 'Defense, Security & Peacekeeping',
    category: 'Public Services',
    desc: 'Secure military supply chain logistics, keep defense vehicles in combat readiness, and manage secure facilities logs.',
    metrics: '100% secure, isolated cloud deployment ready.',
    features: ['Military warehouse inventory records', 'Fleet vehicle maintenance logs', 'Coordinated personnel assignment indexes', 'Secure facility access telemetry'],
    cta: 'Connect with a Security Expert'
  },
  'Education and research': {
    title: 'Education & Research Solutions',
    category: 'Public Services',
    desc: 'Powers student enrollment registries, research funding allocations, and college course scheduling databases.',
    metrics: 'Trusted by over 3,000 universities.',
    features: ['Student course enrollment registers', 'Research project grant budgets', 'University housing allocation logs', 'Alumni donation campaigns analytics'],
    cta: 'See Education Software'
  },
  'Government': {
    title: 'Intelligent Government Portals',
    category: 'Public Services',
    desc: 'Powers public taxation registries, municipal public works billing, and direct citizen welfare payment records.',
    metrics: 'Secure platforms for federal and state operations.',
    features: ['Citizen tax filing registers', 'Direct welfare payment pipelines', 'Public transport project trackers', 'Municipal procurement bidding portals'],
    cta: 'Explore Public Sector Software'
  },
  // Financial Services
  'Financial Services': {
    title: 'Financial Services & Banking Platform',
    category: 'Financial Services',
    desc: 'Powers retail bank core account ledgers, credit rating templates, stock trading databases, and insurance policy systems.',
    metrics: 'Run core banking operations for 500 million accounts.',
    features: ['Double-entry bank ledger engine', 'Real-time credit score calculators', 'Financial transactions auditing registers', 'Insurance policy underwriting metrics'],
    cta: 'Speak with a Banking Architect'
  },
  'Business Tech Platform': {
    title: 'Business Technology Platform (SAP BTP)',
    category: 'Applications',
    desc: 'Unify data analytics, AI, application development, automation, and integration in one unified cloud environment.',
    metrics: 'Over 23,000 customers run on SAP BTP.',
    features: ['SAP Datasphere semantic business layer', 'SAP Build low-code app creator', 'Embedded Joule generative AI capabilities', 'SAP Integration Suite prebuilt flows'],
    cta: 'Explore SAP BTP'
  }
};

const getDetailItem = (name) => {
  let resolvedName = name;
  if (name === 'Cloud ERP') resolvedName = 'Enterprise resource planning';
  if (name === 'HR & People Engagement') resolvedName = 'Human capital management';
  if (name === 'Supply Chain Management') resolvedName = 'Supply chain management';
  if (name === 'Customer Experience') resolvedName = 'Customer experience';
  
  if (productDetails[resolvedName]) return productDetails[resolvedName];
  if (productDetails[name]) return productDetails[name];
  
  // Generic fallback if not defined in static dictionary
  return {
    title: name,
    category: 'SAP Enterprise Portal',
    desc: `Discover SAP India solutions, resources, and expert consultation tailored to address your questions about ${name}.`,
    metrics: 'Trusted by over 440,000 customers globally.',
    features: [
      'Comprehensive product documentation and case studies',
      'Direct connection with specialized domain experts',
      'Localized statutory and tax compliance guides',
      'Training certification and community forums'
    ],
    cta: 'Contact an Advisor'
  };
};

function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [detailItem, setDetailItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const mockSearchResults = [
    { title: 'Grow with SAP India', category: 'Offerings', desc: 'Secure cloud ERP packages tailor-made for midsize companies.' },
    { title: 'Joule AI Co-pilot', category: 'Innovation', desc: 'Meet SAP’s generic generative AI companion built directly into applications.' },
    { title: 'S/4HANA Cloud Migration', category: 'Services', desc: 'Structured migration blueprints and support services to move on-premise ERP to cloud.' },
  ].filter(res => res.title.toLowerCase().includes(searchQuery.toLowerCase()) || res.desc.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleItemClick = (name) => {
    const itemData = getDetailItem(name);
    setDetailItem(itemData);
  };

  return (
    <div className="app-container">
      {/* Top Header */}
      <Header 
        onSearchOpen={() => setSearchOpen(true)} 
        onContactOpen={() => setContactOpen(true)} 
        onItemClick={handleItemClick}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onContactOpen={() => setContactOpen(true)} />

        {/* Brand Trust Metrics / SAP by the Numbers */}
        <section className="stats-section">
          <div className="stats-inner glass-panel">
            <div className="stat-card">
              <span className="stat-num">99/100</span>
              <p className="stat-text">of the world's 100 largest companies are SAP customers.</p>
            </div>
            <div className="stat-card-divider"></div>
            <div className="stat-card">
              <span className="stat-num">87%</span>
              <p className="stat-text">of total global commerce is generated by SAP customers.</p>
            </div>
            <div className="stat-card-divider"></div>
            <div className="stat-card">
              <span className="stat-num">280M+</span>
              <p className="stat-text">cloud subscribers trust SAP solutions globally.</p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <Solutions onItemClick={handleItemClick} />

        {/* Dynamic Innovation Hub Showcase */}
        <InteractiveHub />

        {/* CTA Banner: Transform Today */}
        <section className="cta-banner-section">
          <div className="cta-banner-inner glass-panel">
            <div className="cta-banner-glow"></div>
            <div className="cta-banner-content">
              <h2>Ready to build your autonomous enterprise?</h2>
              <p>Join thousands of businesses in India and worldwide running smarter with cloud solutions built for the future.</p>
              <div className="cta-banner-actions">
                <button className="btn-primary" onClick={() => setContactOpen(true)}>
                  Speak with an Architect
                  <ArrowRight size={16} />
                </button>
                <a href="#" className="explore-store-link">Visit SAP Store</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Floating Chat/Contact us Trigger Button */}
      <button 
        className="floating-contact-trigger animate-float"
        onClick={() => setContactOpen(true)}
        aria-label="Contact SAP India"
      >
        <MessageSquare size={22} />
        <span className="trigger-lbl">Contact us</span>
      </button>

      {/* Interactive Global Search Modal */}
      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-modal glass-panel animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="search-modal-header">
              <div className="search-bar-input-wrapper">
                <Search size={20} className="search-bar-icon" />
                <input 
                  type="text" 
                  placeholder="What can we help you find?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
              <button className="close-btn" onClick={() => setSearchOpen(false)}>
                <X size={20} />
              </button>
            </div>
            
            <div className="search-modal-body">
              {searchQuery.trim() === '' ? (
                <div className="search-suggestions">
                  <span className="suggest-lbl">POPULAR SEARCHES:</span>
                  <div className="suggest-tags">
                    <button onClick={() => setSearchQuery('ERP')}>Cloud ERP</button>
                    <button onClick={() => setSearchQuery('Joule')}>Joule AI</button>
                    <button onClick={() => setSearchQuery('Migration')}>Migration</button>
                    <button onClick={() => setSearchQuery('GST')}>GST India</button>
                  </div>
                </div>
              ) : (
                <div className="search-results">
                  <span className="results-lbl">Search Results ({mockSearchResults.length})</span>
                  {mockSearchResults.length > 0 ? (
                    <div className="results-list">
                      {mockSearchResults.map((res, i) => (
                        <a href="#" key={i} className="result-item" onClick={() => setSearchOpen(false)}>
                          <span className="res-tag">{res.category}</span>
                          <h4>{res.title}</h4>
                          <p>{res.desc}</p>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="no-results-msg">
                      <p>No results found for "{searchQuery}". Try searching for 'ERP', 'Joule' or 'Migration'.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Connect Inquiry Lead Capture Form */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* Product Detail Drawer */}
      <DetailDrawer 
        isOpen={!!detailItem} 
        item={detailItem} 
        onClose={() => setDetailItem(null)} 
        onContactClick={() => setContactOpen(true)} 
      />

      <style>{`
        .app-container {
          position: relative;
        }

        /* Stats Section */
        .stats-section {
          padding: 0 6%;
          max-width: 1400px;
          margin: -40px auto 40px;
          position: relative;
          z-index: 10;
        }

        .stats-inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 15px 45px rgba(0, 0, 0, 0.05);
        }

        @media (min-width: 768px) {
          .stats-inner {
            grid-template-columns: 1fr 1px 1fr 1px 1fr;
            align-items: center;
          }
        }

        .stat-card-divider {
          height: 1px;
          background: rgba(0, 0, 0, 0.08);
          width: 100%;
        }

        @media (min-width: 768px) {
          .stat-card-divider {
            height: 60px;
            width: 1px;
          }
        }

        .stat-card {
          text-align: center;
          padding: 10px;
        }

        .stat-num {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--sap-blue);
          line-height: 1.1;
          margin-bottom: 12px;
          display: block;
        }

        .stat-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
          max-width: 260px;
          margin: 0 auto;
        }

        /* CTA Banner */
        .cta-banner-section {
          padding: 80px 6%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .cta-banner-inner {
          position: relative;
          border-radius: 16px;
          padding: 60px 40px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 112, 242, 0.05);
        }

        .cta-banner-glow {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(0, 112, 242, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-banner-content {
          max-width: 650px;
          position: relative;
          z-index: 1;
        }

        .cta-banner-content h2 {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--sap-dark-blue);
          margin-bottom: 16px;
        }

        .cta-banner-content p {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .cta-banner-actions {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .explore-store-link {
          color: var(--sap-blue);
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: var(--transition-fast);
        }

        .explore-store-link:hover {
          color: var(--sap-blue-hover);
          text-decoration: underline;
        }

        /* Floating Contact Widget Trigger */
        .floating-contact-trigger {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 999;
          background: var(--sap-blue);
          color: white;
          border: none;
          border-radius: 50px;
          padding: 14px 24px;
          box-shadow: 0 8px 30px rgba(0, 112, 242, 0.3);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 1rem;
          transition: var(--transition-smooth);
        }

        .floating-contact-trigger:hover {
          background: var(--sap-blue-hover);
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 12px 35px rgba(0, 112, 242, 0.4);
        }

        .floating-contact-trigger .trigger-lbl {
          display: inline-block;
        }

        /* Search Overlay & Modal */
        .search-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(18, 20, 30, 0.3);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 80px;
        }

        .search-modal {
          width: 90%;
          max-width: 700px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
        }

        .search-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .search-bar-input-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-grow: 1;
        }

        .search-bar-icon {
          color: var(--text-muted);
        }

        .search-bar-input-wrapper input {
          width: 100%;
          border: none;
          background: transparent;
          font-family: var(--font-body);
          font-size: 1.15rem;
          color: var(--text-dark);
        }

        .search-bar-input-wrapper input:focus {
          outline: none;
        }

        .search-modal-body {
          padding: 24px;
          background: rgba(255, 255, 255, 0.85);
          max-height: 400px;
          overflow-y: auto;
        }

        .suggest-lbl {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.5px;
          display: block;
          margin-bottom: 12px;
        }

        .suggest-tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .suggest-tags button {
          background: rgba(0, 112, 242, 0.06);
          border: 1px solid rgba(0, 112, 242, 0.1);
          color: var(--sap-blue);
          padding: 8px 16px;
          border-radius: 50px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          transition: var(--transition-fast);
        }

        .suggest-tags button:hover {
          background: var(--sap-blue);
          color: white;
        }

        .results-lbl {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
          display: block;
          margin-bottom: 16px;
        }

        .results-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .result-item {
          display: block;
          padding: 16px;
          background: white;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          text-decoration: none;
          color: inherit;
          transition: var(--transition-fast);
        }

        .result-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 112, 242, 0.08);
          border-color: rgba(0, 112, 242, 0.2);
        }

        .res-tag {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--sap-blue);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: inline-block;
          margin-bottom: 4px;
        }

        .result-item h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--sap-dark-blue);
          margin-bottom: 6px;
        }

        .result-item p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .no-results-msg {
          text-align: center;
          color: var(--text-muted);
          padding: 20px;
        }

        @media (max-width: 768px) {
          .floating-contact-trigger {
            padding: 14px;
          }
          .floating-contact-trigger .trigger-lbl {
            display: none;
          }
          .search-overlay {
            padding-top: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
