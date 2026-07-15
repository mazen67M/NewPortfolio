import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/lib/projects';
import '../../components/CaseStudy.css';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Mazen Mohsen`,
      description: project.hook,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { caseStudy, gallery } = project;

  return (
    <>
      {/* ── Hero ── */}
      <div className="case-study-hero">
        <div className="container">
          <Link href="/work" className="case-study-back">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M13 8H3M7 4L3 8l4 4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All Work
          </Link>

          <div className="section-label">
            <span>{project.category}</span>
          </div>

          <h1 className="case-study-title">{project.title}</h1>
          <p className="case-study-hook">{project.hook}</p>

          <div className="case-study-meta-bar">
            {[
              { label: 'Role',     value: project.role },
              { label: 'Year',     value: project.year },
              { label: 'Duration', value: project.duration },
              { label: 'Team',     value: project.team },
              {
                label: 'Status',
                value:
                  project.status === 'live'
                    ? '🟢 Live'
                    : project.status === 'in-development'
                    ? '🟡 In Development'
                    : '✓ Completed',
              },
            ].map(({ label, value }) => (
              <div key={label} className="case-study-meta-item">
                <span className="case-study-meta-label">{label}</span>
                <span className="case-study-meta-value">{value}</span>
              </div>
            ))}
            {project.links.demo && (
              <div className="case-study-meta-item case-study-meta-item--highlight">
                <span className="case-study-meta-label" style={{ color: 'var(--accent)' }}>Live Demo</span>
                <span className="case-study-meta-value" style={{ marginTop: '2px' }}>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary btn--sm btn--pill"
                    style={{
                      padding: '4px 12px',
                      fontSize: '11px',
                      height: 'auto',
                    }}
                  >
                    Visit Website ↗
                  </a>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Hero Image ── */}
      {gallery[0] && (
        <div className="container" style={{ marginTop: 'var(--sp-12)' }}>
          <div style={{ position: 'relative', width: '100%', height: 'clamp(280px, 45vw, 540px)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
            <Image
              src={gallery[0].src}
              alt={gallery[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 1160px"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              priority
            />
          </div>
        </div>
      )}

      {/* ── Body ── */}
      <div className="case-study-body case-study-body--page" style={{ maxWidth: '820px', margin: '0 auto' }}>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <>
            <h2>At a Glance</h2>
            <div className="case-study-metrics">
              {project.metrics.map((m) => (
                <div key={m.label} className="case-study-metric-card">
                  <span className="case-study-metric-value">{m.value}</span>
                  <span className="case-study-metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Problem */}
        <h2>The Problem</h2>
        <p>{caseStudy.problem}</p>

        {/* Solution */}
        <h2>The Solution</h2>
        <p>{caseStudy.solution}</p>

        {/* Architecture */}
        {caseStudy.architecture.length > 0 && (
          <>
            <h2>Architecture</h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)', paddingLeft: 0, listStyle: 'none' }}>
              {caseStudy.architecture.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 'var(--sp-3)', alignItems: 'flex-start', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Features */}
        {project.features.length > 0 && (
          <>
            <h2>Key Features</h2>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--sp-3)', paddingLeft: 0, listStyle: 'none' }}>

              {project.features.map((f, i) => (
                <li key={i} style={{ display: 'flex', gap: 'var(--sp-2)', alignItems: 'flex-start', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Gallery */}
        {gallery.length > 1 && (
          <>
            <h2>Screenshots</h2>
            <div className="case-study-gallery">
              {gallery.slice(1).map((img) => (
                <div
                  key={img.src}
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '62%',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-subtle)',
                    background: 'var(--bg-surface)',
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Code Snippet */}
        {caseStudy.codeSnippet && (
          <>
            <h2>Code Highlight</h2>
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
            }}>
              <div style={{
                padding: '10px 16px',
                borderBottom: '1px solid var(--border-subtle)',
                fontSize: 'var(--text-xs)',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>
                {caseStudy.codeSnippet.title}
              </div>
              <pre style={{
                padding: '1.25rem 1.5rem',
                margin: 0,
                overflowX: 'auto',
                fontSize: 'var(--text-xs)',
                fontFamily: 'var(--font-mono)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
              }}>
                <code>{caseStudy.codeSnippet.code}</code>
              </pre>
            </div>
          </>
        )}

        {/* Challenges */}
        {caseStudy.challenges.length > 0 && (
          <>
            <h2>Challenges &amp; Solutions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-6)' }}>
              {caseStudy.challenges.map((c, i) => (
                <div key={i} style={{
                  padding: 'var(--sp-6)',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderLeft: '3px solid var(--accent)',
                  borderRadius: 'var(--radius-lg)',
                }}>
                  <p style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--sp-2)', letterSpacing: '-0.01em' }}>
                    🎯 {c.challenge}
                  </p>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                    {c.solution}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Tech Stack */}
        <h2>Tech Stack</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--sp-2)', marginTop: 'var(--sp-4)' }}>
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-tag" style={{ fontSize: 'var(--text-sm)', padding: '5px 14px' }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Lessons Learned */}
        {caseStudy.lessonsLearned.length > 0 && (
          <>
            <h2>What I Learned</h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)', paddingLeft: 0, listStyle: 'none' }}>
              {caseStudy.lessonsLearned.map((lesson, i) => (
                <li key={i} style={{ display: 'flex', gap: 'var(--sp-3)', alignItems: 'flex-start', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--accent-bright)', flexShrink: 0, marginTop: '2px' }}>💡</span>
                  {lesson}
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Links */}
        {(project.links.demo || project.links.github || project.isPrivate) && (
          <>
            <h2>Links</h2>
            <div className="case-study-links" style={{ justifyContent: 'flex-start' }}>
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--pill">
                  View Live Demo →
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--pill">
                  View on GitHub
                </a>
              )}
              {project.isPrivate && (
                <span className="btn btn--ghost btn--pill" style={{ cursor: 'default', opacity: 0.7 }} title="Private Repository — details available upon request">
                  🔒 Private Repo
                </span>
              )}
            </div>
          </>
        )}

        {/* Bottom CTA */}
        <div className="case-study-cta">
          <h3 className="case-study-cta-title">Interested in a similar solution?</h3>
          <p className="case-study-cta-sub">
            Let&apos;s discuss how I can build something like this for your business.
          </p>
          <div className="case-study-links">
            <Link href="/contact" className="btn btn--primary btn--pill">Get in Touch →</Link>
            <Link href="/work" className="btn btn--ghost btn--pill">View More Work</Link>
          </div>
        </div>
      </div>
    </>
  );
}
