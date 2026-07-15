'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.css';

const navLinks = [
  { href: '/work',     label: 'Work'     },
  { href: '/about',    label: 'About'    },
  { href: '/services', label: 'Services' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <div className="navbar-wrapper">
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
            Built-By-Mazzin
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links" role="list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={pathname.startsWith(href) ? 'active' : ''}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link href="/contact" className="nav-cta">
            Get in Touch
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* Mobile Toggle */}
          <button
            className={`nav-mobile-toggle${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </>
  );
}
