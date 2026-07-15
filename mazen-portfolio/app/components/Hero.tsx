'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Hero.css';

const metrics = [
  { value: '5',      label: 'Curated Projects' },
  { value: 'AI+',   label: 'Tech Integration' },
  { value: '2024',  label: 'DEPI Certified'   },
];

const techStack = [
  {
    label: 'ASP.NET',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'C#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9 9h6M9 15h6M12 6v12" strokeLinecap="round"/>
        <rect x="3" y="3" width="18" height="18" rx="3"/>
      </svg>
    ),
  },
  {
    label: 'React',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="2"/>
        <ellipse cx="12" cy="12" rx="10" ry="4"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    label: 'Next.js',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
        <path d="M9 8l6 8M9 16V8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Flutter',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M14 2L4 12l4 4 6-6 6 6-4 4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'OpenAI',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2a7 7 0 0 1 7 7c0 3.5-2.5 6.5-6 7.4V22h-2v-5.6C7.5 15.5 5 12.5 5 9a7 7 0 0 1 7-7z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 9h6" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const orbitingBadges = [
  { label: 'C#',         delay: '0s',    angle: 'top-right'    },
  { label: 'React',      delay: '0.4s',  angle: 'right'        },
  { label: 'Flutter',    delay: '0.8s',  angle: 'bottom-right' },
  { label: '.NET',       delay: '1.2s',  angle: 'top-left'     },
  { label: 'OpenAI',     delay: '1.6s',  angle: 'bottom-left'  },
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Word-by-word reveal animation
    if (!headlineRef.current) return;
    const words = headlineRef.current.querySelectorAll<HTMLElement>('.word-reveal');
    words.forEach((word, i) => {
      word.style.transitionDelay = `${i * 90}ms`;
      setTimeout(() => word.classList.add('word-revealed'), 100 + i * 90);
    });
  }, []);

  return (
    <section className="hero" id="hero" aria-label="Hero section">
      {/* Animated background */}
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-container">
        {/* ── LEFT COLUMN ── */}
        <div className="hero-content">
          {/* Availability badge */}
          <div className="hero-badge" data-reveal>
            <span className="pulse-dot" aria-hidden="true" />
            Available for freelance &amp; full-time
          </div>

          {/* Main headline */}
          <h1 className="hero-headline" ref={headlineRef}>
            <span className="word-reveal">I</span>{' '}
            <span className="word-reveal">Build</span>{' '}
            <span className="word-reveal">Products</span>{' '}
            <br />
            <span className="word-reveal">That</span>{' '}
            <span className="word-reveal accent-word">Feel</span>{' '}
            <span className="word-reveal accent-word">Expensive.</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-sub" data-reveal data-delay="200">
            <strong>Backend Engineer &amp; Product Developer</strong> based in Cairo.
            I build scalable web applications, AI-powered systems, and cross-platform
            products using <strong>ASP.NET Core, React, Flutter,</strong> and{' '}
            <strong>OpenAI integrations</strong> — for startups and agencies globally.
          </p>

          {/* CTA Group */}
          <div className="hero-cta-group" data-reveal data-delay="300">
            <Link href="/contact" className="btn btn--primary">
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/work" className="btn btn--ghost">
              View My Work
            </Link>
            <a
              href="/mazen-cv.pdf"
              download
              className="btn btn--ghost"
              aria-label="Download CV"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M8 2v9M4 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 14h12" strokeLinecap="round"/>
              </svg>
              Download CV
            </a>
          </div>

          {/* Tech stack strip */}
          <div className="hero-tech-strip" data-reveal data-delay="380">
            <span className="hero-tech-strip-label">Built with</span>
            <div className="hero-tech-pills">
              {techStack.map(({ label, icon }) => (
                <span className="hero-tech-pill" key={label}>
                  <span className="hero-tech-pill-icon">{icon}</span>
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="hero-social" data-reveal data-delay="420">
            <a
              href="https://github.com/mazen-mohsen"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mazen-mohsen-560823345"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="9" width="4" height="12" rx="1"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:mazen@example.com"
              className="hero-social-link"
              aria-label="Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Email
            </a>
          </div>

          {/* Metrics strip */}
          <div className="hero-metrics" data-reveal data-delay="460">
            {metrics.map(({ value, label }) => (
              <div className="hero-metric" key={label}>
                <span className="hero-metric-value">{value}</span>
                <span className="hero-metric-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN — VISUAL ── */}
        <div className="hero-visual" data-reveal data-delay="200">
          {/* Ambient glow blob */}
          <div className="hero-visual-glow" aria-hidden="true" />

          {/* Orbiting tech badges */}
          {orbitingBadges.map(({ label, delay, angle }) => (
            <div
              key={label}
              className={`hero-orbit-badge hero-orbit-badge--${angle}`}
              style={{ animationDelay: delay }}
              aria-hidden="true"
            >
              {label}
            </div>
          ))}

          {/* Photo card */}
          <div className="hero-photo-card">
            <div className="hero-photo-card-inner">
              <Image
                src="/images/built-by-mazzin.jpg"
                alt="Built-By-Mazzin — Backend Engineer & Product Developer"
                fill
                sizes="(max-width: 768px) 280px, 380px"
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                priority
              />
              {/* Subtle overlay gradient */}
              <div className="hero-photo-overlay" aria-hidden="true" />
            </div>
          </div>

          {/* Status card */}
          <div className="hero-status-card" aria-hidden="true">
            <span className="pulse-dot" />
            <div className="hero-status-card-text">
              <span className="hero-status-card-title">Open to Work</span>
              <span className="hero-status-card-sub">Cairo · Remote friendly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Scroll
      </div>
    </section>
  );
}
