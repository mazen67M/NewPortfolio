'use client';

import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';
import './Work.css';

export default function WorkSection() {
  return (
    <section className="work-section section" id="work" aria-label="Selected work">
      <div className="container">
        {/* Header */}
        <div className="work-header">
          <div className="work-header-text">
            <div className="section-label" data-reveal>
              <span>Selected Work</span>
            </div>
            <h2 className="section-title" data-reveal data-delay="100">
              Products, not projects.
            </h2>
          </div>
          <Link href="/work" className="work-view-all" data-reveal data-delay="200">
            View all work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className={`project-card project-card--${project.bentoSize}`}
              data-reveal
              data-delay={String(index * 80)}
              aria-label={`View ${project.title} case study`}
            >
              {/* Image */}
              <div className="project-card-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className="project-card-overlay">
                  <div className="project-card-view-btn">
                    View Case Study →
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <div className="project-card-meta">
                  <span className="project-card-category">{project.category}</span>
                  <span className="project-card-year">{project.year}</span>
                </div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-hook">{project.hook}</p>
                <div className="project-card-tags">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="tech-tag">+{project.techStack.length - 4}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
