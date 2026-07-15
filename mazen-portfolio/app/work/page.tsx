import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Five curated projects — from AI-powered museum apps to real-time restaurant systems. Every project treated as a product, not a repository.',
};

export default function WorkPage() {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: 'var(--sp-32)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 'var(--sp-16)', maxWidth: '52ch' }}>
          <div className="section-label" data-reveal>
            <span>All Work</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              color: 'var(--text-primary)',
              marginTop: 'var(--sp-4)',
              marginBottom: 'var(--sp-4)',
            }}
            data-reveal
            data-delay="100"
          >
            Selected Projects
          </h1>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
            }}
            data-reveal
            data-delay="200"
          >
            Five products. Each built to solve a real business problem.
            Treated as a product, not a GitHub repository.
          </p>
        </div>

        {/* Project List */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}
        >
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="work-list-item"
              data-reveal
              data-delay={String(index * 80)}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-4)', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontSize: 'var(--text-xs)',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      fontWeight: 600,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2
                    style={{
                      fontSize: 'clamp(var(--text-xl), 3vw, var(--text-3xl))',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {project.title}
                  </h2>
                  {project.isFlagship && (
                    <span
                      style={{
                        padding: '2px 10px',
                        background: 'var(--accent-dim)',
                        border: '1px solid var(--border-accent)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-xs)',
                        color: 'var(--accent)',
                        fontWeight: 600,
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      Flagship
                    </span>
                  )}
                </div>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', maxWidth: '60ch' }}>
                  {project.hook}
                </p>
                <div style={{ display: 'flex', gap: 'var(--sp-2)', flexWrap: 'wrap', marginTop: 'var(--sp-1)' }}>
                  {project.techStack.slice(0, 4).map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="work-list-item-right">
                <span className="work-list-year">
                  {project.year}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: 'var(--text-muted)', flexShrink: 0 }}
                  aria-hidden="true"
                >
                  <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>


    </div>
  );
}
