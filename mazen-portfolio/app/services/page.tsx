import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web application development, premium websites, and AI integrations for startups and agencies. Engagements start at $2,000.',
};

const services = [
  {
    number: '01',
    title: 'Web Application Development',
    description:
      'End-to-end product engineering for startups and scale-ups. I design the architecture, write the backend, and build the frontend — delivered as a production-ready system.',
    outcomes: [
      'Scalable ASP.NET Core API with Clean Architecture',
      'React or Next.js frontend with premium UX',
      'SQL Server database design and optimization',
      'Authentication, authorization, and security',
      'Deployment on Azure, Vercel, or Docker',
    ],
    projects: ['ARTifactify', 'Restaurant Management System', 'E-Commerce Platform'],
    ideal: 'SaaS founders, startups building their first product',
  },
  {
    number: '02',
    title: 'Premium Websites & Digital Products',
    description:
      'Marketing sites, agency websites, and landing pages built for conversion. SEO-first, Lighthouse 95+, fast, and visually distinctive.',
    outcomes: [
      'Custom design (no templates)',
      'Bilingual support (Arabic / English)',
      'Lighthouse 95+ on all metrics',
      'SEO-optimized with structured data',
      'Vercel deployment with CI/CD',
    ],
    projects: ['BT Advertising Agency'],
    ideal: 'Agencies, local businesses, service businesses going digital',
  },
  {
    number: '03',
    title: 'AI & Backend Integrations',
    description:
      'Connect your existing product to AI services, build real-time systems, or add backend functionality. I handle the engineering complexity so you can focus on the product.',
    outcomes: [
      'OpenAI API integration (chat, vision, embeddings)',
      'Computer vision with YOLO',
      'Real-time systems via SignalR / WebSockets',
      'Third-party API integrations',
      'Performance optimization and caching',
    ],
    projects: ['ARTifactify AI Vision', 'Studio Management System'],
    ideal: 'Product teams adding AI features to existing systems',
  },
];

const faqs = [
  {
    q: 'Do you work with existing teams?',
    a: 'Yes. I\'m comfortable joining ongoing projects as a contractor — reviewing code, leading new features, or building an isolated component that plugs into your existing system.',
  },
  {
    q: 'Do you handle hosting and deployment?',
    a: 'Yes — Vercel, Azure, and Docker-based deployments are part of my standard process. I set up CI/CD pipelines and hand over full documentation.',
  },
  {
    q: 'How long does a project take?',
    a: 'Simple websites: 1-2 weeks. Web applications: 4-12 weeks depending on scope. I provide a detailed estimate after our discovery call.',
  },
  {
    q: 'Do you work with clients outside Egypt?',
    a: 'Yes. I work fully remotely. I\'ve worked with clients across different time zones and am comfortable with async-first communication.',
  },
  {
    q: 'Can I see your code quality?',
    a: 'Yes — my GitHub repositories have full READMEs, architecture diagrams, and clean commit histories. Check out the ARTifactify and E-Commerce repos.',
  },
  {
    q: 'What if I only need backend work?',
    a: 'Absolutely. Backend-only or API-only engagements are a standard offering. I deliver a documented REST API with Swagger and full test coverage.',
  },
];

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: 'var(--sp-32)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: 'var(--sp-20)', maxWidth: '52ch' }}>
          <div className="section-label" data-reveal>
            <span>Services</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: 'var(--text-primary)',
              marginTop: 'var(--sp-4)',
              marginBottom: 'var(--sp-6)',
            }}
            data-reveal
            data-delay="100"
          >
            What I Build
          </h1>
          <p
            style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 1.7 }}
            data-reveal
            data-delay="200"
          >
            Three focused offerings. Each one built around delivering a real business outcome,
            not just shipping code.
          </p>
        </div>

        {/* Services */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border-subtle)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', marginBottom: 'var(--sp-24)' }}>
          {services.map((service, index) => (
            <div
              key={service.number}
              style={{
                background: 'var(--bg-surface)',
                padding: 'var(--sp-10) var(--sp-10)',
              }}
              data-reveal
              data-delay={String(index * 100)}
            >
              <div className="service-card-grid">
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: 'var(--sp-4)' }}>
                    {service.number}
                  </span>
                  <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)', marginBottom: 'var(--sp-4)', lineHeight: 1.2 }}>
                    {service.title}
                  </h2>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--sp-6)' }}>
                    {service.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)' }}>
                    {service.projects.map((p) => (
                      <span key={p} className="tech-tag">{p}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 'var(--sp-4)', fontFamily: 'var(--font-mono)' }}>
                    What you get
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} style={{ display: 'flex', gap: 'var(--sp-3)', alignItems: 'flex-start', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>→</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 'var(--sp-6)', fontStyle: 'italic' }}>
                    Ideal for: {service.ideal}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing note */}
        <div
          style={{
            textAlign: 'center',
            padding: 'var(--sp-10)',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-xl)',
            marginBottom: 'var(--sp-20)',
            position: 'relative',
            overflow: 'hidden',
          }}
          data-reveal
        >
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginBottom: 'var(--sp-3)', fontFamily: 'var(--font-mono)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Investment
          </p>
          <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: 'var(--sp-3)' }}>
            Engagements start at <span style={{ color: 'var(--accent-bright)' }}>$1,500</span>
          </p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--sp-8)' }}>
            Final pricing depends on scope and timeline. Book a free 30-min discovery call to discuss your project.
          </p>
          <Link href="/contact" className="btn btn--primary">
            Book a Discovery Call →
          </Link>
        </div>

        {/* FAQ */}
        <div data-reveal>
          <div className="section-label" style={{ marginBottom: 'var(--sp-8)' }}>
            <span>FAQ</span>
          </div>
          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: 'var(--sp-10)' }}>
            Common questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  padding: 'var(--sp-6) 0',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <p style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--sp-2)', letterSpacing: '-0.01em' }}>
                  {faq.q}
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
