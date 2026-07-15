'use client';

import Link from 'next/link';
import './Sections.css';

const capabilities = [
  {
    number: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="3" width="20" height="18" rx="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Backend Engineering',
    description:
      'Scalable APIs and data-intensive systems built on ASP.NET Core with Clean Architecture. I write code that survives real production traffic.',
    tags: ['ASP.NET Core', 'C#', 'Entity Framework', 'SQL Server', 'Redis', 'Clean Arch'],
  },
  {
    number: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M9 9l6 6M15 9l-6 6" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Product Interfaces',
    description:
      'Frontend experiences built in React and Flutter that feel expensive. Performance-obsessed, mobile-first, animated with intention.',
    tags: ['React', 'Next.js', 'Flutter', 'CSS Motion', 'Framer Motion'],
  },
  {
    number: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'AI & Integrations',
    description:
      'Connecting products to OpenAI, computer vision, real-time pipelines, and third-party APIs — from prototype to production.',
    tags: ['OpenAI API', 'YOLO v8', 'SignalR', 'REST Design', 'WebSockets'],
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="capabilities-section" id="capabilities" aria-label="Capabilities">
      <div className="container">
        <div className="section-label" data-reveal>
          <span>What I Build</span>
        </div>
        <h2 className="section-title" data-reveal data-delay="100">
          Three disciplines.<br />One engineer.
        </h2>

        <div className="capabilities-grid" data-reveal data-delay="200">
          {capabilities.map((cap) => (
            <div className="capability-card" key={cap.number}>
              <span className="capability-number">{cap.number}</span>
              <div className="capability-icon">{cap.icon}</div>
              <h3 className="capability-title">{cap.title}</h3>
              <p className="capability-description">{cap.description}</p>
              <div className="capability-tags">
                <div className="capability-tag-row">
                  {cap.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
