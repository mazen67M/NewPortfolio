'use client';

import Link from 'next/link';
import './Sections.css';

export default function TestimonialSection() {
  return (
    <section className="testimonial-section" aria-label="Testimonials">
      <div className="container">
        <div className="section-label" data-reveal>
          <span>What Others Say</span>
        </div>

        <div className="testimonial-card" data-reveal data-delay="100">
          <span className="testimonial-quote-mark" aria-hidden="true">&ldquo;</span>
          <blockquote>
            <p className="testimonial-text">
              Mazen is a highly motivated and skilled developer. During our training,
              he demonstrated excellent mastery of ASP.NET Core and SQL Server,
              always producing clean, structured, and production-ready code. His
              understanding of Clean Architecture principles was well above his peers.
            </p>
            <footer className="testimonial-author">
              <div className="testimonial-author-info">
                {/* TODO: Replace with the instructor's real name & LinkedIn link when available */}
                <span className="testimonial-author-name">DEPI Training Instructor</span>
                <span className="testimonial-author-role">Digital Egypt Pioneers Initiative · 2024</span>
              </div>
            </footer>
          </blockquote>
        </div>

        <div className="testimonial-card" style={{ marginTop: '14px' }} data-reveal data-delay="200">
          <span className="testimonial-quote-mark" aria-hidden="true">&ldquo;</span>
          <blockquote>
            <p className="testimonial-text">
              Working with Mazen on CozyCorner was a great experience. His expertise
              in backend architecture, repository patterns, and Redis caching was key
              to our project&apos;s success. He approaches problems methodically and
              communicates clearly throughout.
            </p>
            <footer className="testimonial-author">
              <div className="testimonial-author-info">
                <span className="testimonial-author-name">Arwa Alaa</span>
                <span className="testimonial-author-role">Collaborator · CozyCorner Project · 2024</span>
              </div>
            </footer>
          </blockquote>
        </div>

        <p style={{ marginTop: 'var(--sp-8)', textAlign: 'center' }} data-reveal data-delay="300">
          <a
            href="https://www.linkedin.com/in/mazen-mohsen-560823345"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '2px',
              transition: 'color 150ms ease',
            }}
          >
            View all recommendations on LinkedIn →
          </a>
        </p>
      </div>
    </section>
  );
}
