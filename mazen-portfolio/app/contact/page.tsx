'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

const subjects = [
  'Web Application Development',
  'Premium Website / Landing Page',
  'AI / Backend Integration',
  'General Inquiry',
  'Full-time Opportunity',
];

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', subject: subjects[0], message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formspree.io/f/xdaqnlvn', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', company: '', subject: subjects[0], message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div style={{ paddingTop: '120px', paddingBottom: 'var(--sp-32)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>

        {/* Header */}
        <div style={{ marginBottom: 'var(--sp-16)' }}>
          <div className="section-label" data-reveal>
            <span>Contact</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: 'var(--text-primary)',
              marginTop: 'var(--sp-4)',
              marginBottom: 'var(--sp-4)',
            }}
            data-reveal data-delay="100"
          >
            Let&apos;s build something together.
          </h1>
          <p
            style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '52ch' }}
            data-reveal data-delay="200"
          >
            Tell me about your project. I read every message and respond within 24 hours.
          </p>
        </div>

        <div className="contact-grid">

          {/* Left — Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-8)' }} data-reveal data-delay="100">

            {/* Availability */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}>
              <span style={{ width: 8, height: 8, background: 'var(--available)', borderRadius: '50%', flexShrink: 0, boxShadow: '0 0 0 3px var(--available-dim)', display: 'inline-block' }} />
              <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', fontWeight: 500 }}>
                Available for new projects
              </span>
            </div>

            {/* Contact Items */}
            {[
              {
                label: 'Email',
                value: 'mazen.mohsen.dev@gmail.com',
                href: 'mailto:mazen.mohsen.dev@gmail.com',
              },
              {
                label: 'Location',
                value: 'Cairo, Egypt · Remote Worldwide',
                href: undefined,
              },
            ].map(({ label, value, href }) => (
              <div key={label}>
                <p style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 'var(--sp-1)' }}>
                  {label}
                </p>
                {href ? (
                  <a href={href} style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 150ms ease' }}>
                    {value}
                  </a>
                ) : (
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{value}</p>
                )}
              </div>
            ))}

            {/* Social */}
            <div>
              <p style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 'var(--sp-4)' }}>
                Connect
              </p>
              <div style={{ display: 'flex', gap: 'var(--sp-3)', flexDirection: 'column' }}>
                {[
                  { label: 'GitHub', href: 'https://github.com/mazen67m' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mazen-mohsen-560823345' },
                  { label: 'WhatsApp', href: 'https://wa.me/201276632422' },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}
                  >
                    → {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div data-reveal data-delay="200">
            {status === 'sent' ? (
              <div
                style={{
                  padding: 'var(--sp-12)',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-xl)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: 'var(--sp-4)' }}>✓</div>
                <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 'var(--sp-3)' }}>
                  Message sent!
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-5)' }}>
                {/* Name + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
                  <FormField label="Your Name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="John Smith" required />
                  <FormField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" required />
                </div>

                <FormField label="Company (optional)" name="company" type="text" value={formData.company} onChange={handleChange} placeholder="Startup Inc." />

                {/* Subject */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                  <label style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    What do you need?
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{
                      padding: '10px 14px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-default)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)',
                      fontSize: 'var(--text-sm)',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s} style={{ background: '#111113' }}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
                  <label style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Tell me about your project — the problem you're solving, the timeline, and any relevant context."
                    style={{
                      padding: '12px 14px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-default)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-primary)',
                      fontSize: 'var(--text-sm)',
                      fontFamily: 'var(--font-sans)',
                      resize: 'vertical',
                      outline: 'none',
                      lineHeight: 1.7,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={status === 'sending'}
                  style={{ alignSelf: 'flex-start' }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>

                {status === 'error' && (
                  <p style={{ fontSize: 'var(--text-sm)', color: '#F87171' }}>
                    Something went wrong. Please email me directly at mazen.mohsen.dev@gmail.com
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        input:focus, textarea:focus, select:focus {
          border-color: var(--border-hover) !important;
        }
        input::placeholder, textarea::placeholder {
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}

function FormField({
  label, name, type, value, onChange, placeholder, required = false,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
      <label
        htmlFor={name}
        style={{
          fontSize: 'var(--text-xs)',
          fontWeight: 600,
          color: 'var(--text-muted)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-mono)',
        }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          padding: '10px 14px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--text-primary)',
          fontSize: 'var(--text-sm)',
          fontFamily: 'var(--font-sans)',
          outline: 'none',
          transition: 'border-color 150ms ease',
        }}
      />
    </div>
  );
}
