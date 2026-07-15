'use client';

import { useEffect, useRef, useCallback } from 'react';
import './Cursor.css';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const moveCursor = useCallback((e: MouseEvent) => {
    posRef.current = { x: e.clientX, y: e.clientY };

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
      }
    });
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!cursorRef.current) return;

    if (target.closest('.project-card')) {
      cursorRef.current.classList.add('is-project');
      cursorRef.current.classList.remove('is-link');
    } else if (target.closest('a, button, [role="button"]')) {
      cursorRef.current.classList.add('is-link');
      cursorRef.current.classList.remove('is-project');
    } else {
      cursorRef.current.classList.remove('is-link', 'is-project');
    }
  }, []);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    document.body.style.cursor = 'none';
    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [moveCursor, handleMouseOver]);

  return (
    <div ref={cursorRef} className="cursor" aria-hidden="true">
      <div className="cursor-dot">
        <span className="cursor-label">View</span>
      </div>
    </div>
  );
}
