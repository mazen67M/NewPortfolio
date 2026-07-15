'use client';

import './Journey.css';

const milestones = [
  {
    year: '2022',
    title: 'First Steps into Code',
    description:
      'Started the programming journey with C# and the fundamentals of software engineering. Fell in love with building things that actually work.',
    tags: ['C#', 'OOP', 'Algorithms'],
  },
  {
    year: '2023',
    title: 'Full-Stack Foundations',
    description:
      'Shipped first real full-stack projects combining ASP.NET Core backends with React frontends. Discovered Clean Architecture and never looked back.',
    tags: ['ASP.NET Core', 'React', 'SQL Server', 'Clean Architecture'],
  },
  {
    year: '2024',
    title: 'DEPI Certified & ITI Trained',
    description:
      'Completed the Digital Egypt Pioneers Initiative program, earned a national certification, and trained at ITI. Built 5 curated production-grade projects including AI-integrated systems.',
    tags: ['DEPI Certified', 'ITI', 'OpenAI API', 'Flutter', 'SignalR'],
  },
  {
    year: '2025',
    title: 'Freelancing & AI Products',
    description:
      'Building AI-powered products and taking on freelance clients globally. Focused on delivering premium, scalable solutions for startups and agencies.',
    tags: ['Freelance', 'AI Integration', 'Product Dev', 'Open to Work'],
  },
];

export default function JourneySection() {
  return (
    <section className="journey-section section" id="journey" aria-label="My Journey">
      <div className="container">
        <div className="section-label" data-reveal>
          <span>My Journey</span>
        </div>
        <h2 className="section-title" data-reveal data-delay="100">
          From zero to{' '}
          <span className="text-gradient">product engineer.</span>
        </h2>
        <p className="journey-subtitle" data-reveal data-delay="150">
          A timeline of milestones that shaped how I build.
        </p>

        {/* Timeline */}
        <div className="journey-timeline" role="list">
          {/* Vertical line */}
          <div className="journey-line" aria-hidden="true" />

          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`journey-item journey-item--${index % 2 === 0 ? 'left' : 'right'}`}
              data-reveal
              data-delay={String(100 + index * 100)}
              role="listitem"
            >
              {/* Year badge on the line */}
              <div className="journey-year-dot" aria-hidden="true">
                <span className="journey-year-label">{milestone.year}</span>
              </div>

              {/* Card */}
              <div className="journey-card card">
                <div className="journey-card-year" aria-label={`Year ${milestone.year}`}>
                  {milestone.year}
                </div>
                <h3 className="journey-card-title">{milestone.title}</h3>
                <p className="journey-card-description">{milestone.description}</p>
                <div className="journey-card-tags">
                  {milestone.tags.map((tag) => (
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
