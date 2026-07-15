import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Backend Engineer & Product Developer based in Cairo. Building scalable ASP.NET Core systems and AI-powered products since 2023.',
};

const timeline = [
  {
    year: '2026',
    title: 'ARTifactify — Graduation Project',
    org: 'Faculty of Computers & AI, Beni Suif University',
    description:
      'Leading the full-stack development of an AI-powered art identification system using YOLO computer vision, ASP.NET Core API, and Flutter mobile.',
  },
  {
    year: '2024',
    title: 'ASP.NET Developer Intern',
    org: 'DEPI — Digital Egypt Pioneers Initiative',
    description:
      'Developed a shipping company system with real-time tracking, Google Maps integration, and dual admin/client dashboards. Completed intensive ASP.NET Core training program.',
  },
  {
    year: '2023',
    title: 'Software Developer Intern',
    org: 'Egyptian Ministry of Communications',
    description:
      'Built practical REST API projects and backend systems using ASP.NET Core and SQL Server during the national summer training program.',
  },
  {
    year: '2023',
    title: 'Freelance Developer',
    org: 'Independent',
    description:
      'Built custom web solutions for clients — e-commerce platforms, agency websites, management systems — using ASP.NET Core MVC and REST APIs.',
  },
  {
    year: '2022',
    title: 'Bachelor of Computer Science',
    org: 'Faculty of Computers & Artificial Intelligence, Beni Suif University',
    description:
      'Studying Software Engineering, Distributed Database Systems, Web Development, and Computer Networks. Graduating 2026.',
  },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: 'var(--sp-32)' }}>
      <div className="container" style={{ maxWidth: '860px' }}>

        {/* Profile + Intro — side by side on desktop, stacked on mobile */}
        <div className="about-hero-grid" data-reveal>
          {/* Photo */}
          <div className="about-photo-wrapper">
            <Image
              src="/images/built-by-mazzin.jpg"
              alt="Built-By-Mazzin — Backend Engineer & Product Developer"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              sizes="(max-width: 768px) 200px, 200px"
              priority
            />
          </div>

          {/* Text */}
          <div>
            <div className="section-label" style={{ marginBottom: 'var(--sp-4)' }}>
              <span>About</span>
            </div>
            <h1
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                marginBottom: 'var(--sp-6)',
              }}
            >
              I build at the intersection of engineering precision and design intuition.
            </h1>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              I&apos;m Mazen Mohsen, a Backend Engineer and Product Developer based in Cairo.
              I specialize in building scalable ASP.NET Core systems, React interfaces, and
              AI-powered integrations for startups and agencies.
            </p>
          </div>
        </div>

        {/* Philosophy para */}
        <p
          style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--sp-20)', maxWidth: '72ch' }}
          data-reveal
        >
          Good software isn&apos;t just code that works — it&apos;s a product that feels right
          the moment you use it. I approach every project with both engineering depth and
          product thinking, because the best tools aren&apos;t noticed. They&apos;re felt.
        </p>



        {/* Philosophy */}
        <blockquote
          style={{
            padding: 'var(--sp-8)',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderLeft: '2px solid var(--accent)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: 'var(--sp-20)',
          }}
          data-reveal
          data-delay="100"
        >
          <p style={{ fontSize: 'var(--text-xl)', fontWeight: 500, letterSpacing: '-0.01em', color: 'var(--text-primary)', lineHeight: 1.6 }}>
            &ldquo;Good software isn&apos;t just code that works. It&apos;s a product that feels right
            the moment you use it.&rdquo;
          </p>
        </blockquote>

        {/* Timeline */}
        <div data-reveal data-delay="100">
          <div className="section-label" style={{ marginBottom: 'var(--sp-8)' }}>
            <span>Experience</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {timeline.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: 'var(--sp-8)',
                  padding: 'var(--sp-6) 0',
                  borderBottom: index < timeline.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                }}
              >
                <span
                  style={{
                    fontSize: 'var(--text-sm)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    paddingTop: '3px',
                  }}
                >
                  {item.year}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: 'var(--sp-1)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--accent)', marginBottom: 'var(--sp-3)', fontWeight: 500 }}>
                    {item.org}
                  </p>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div style={{ marginTop: 'var(--sp-16)' }} data-reveal>
          <div className="section-label" style={{ marginBottom: 'var(--sp-6)' }}>
            <span>Credentials</span>
          </div>
          <div className="about-credentials">
            <div className="about-cert-image">
              <Image
                src="/images/depi-certificate.jpg"
                alt="DEPI Digital Egypt Pioneers Initiative Certificate"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 480px) 100vw, 260px"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)', paddingTop: 'var(--sp-2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
                <div style={{ position: 'relative', width: 28, height: 28, flexShrink: 0 }}>
                  <Image src="/images/depi-logo.png" alt="DEPI Logo" fill style={{ objectFit: 'contain' }} sizes="28px" />
                </div>
                <div>
                  <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                    DEPI — Digital Egypt Pioneers Initiative
                  </p>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>ASP.NET Developer Track · 2024</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
                <div style={{ position: 'relative', width: 28, height: 28, flexShrink: 0 }}>
                  <Image src="/images/iti-logo.png" alt="ITI Logo" fill style={{ objectFit: 'contain' }} sizes="28px" />
                </div>
                <div>
                  <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                    Ministry of Communications — Summer Training
                  </p>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>ASP.NET Core & SQL Server · 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}

        <div
          style={{
            marginTop: 'var(--sp-20)',
            display: 'flex',
            gap: 'var(--sp-4)',
            flexWrap: 'wrap',
          }}
          data-reveal
        >
          <Link href="/contact" className="btn btn--primary">
            Get in Touch →
          </Link>
          <a
            href="/cv-mazen-mohsen.pdf"
            className="btn btn--ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
