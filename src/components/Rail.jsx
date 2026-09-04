import React, { useEffect, useRef, useState } from 'react';
import { PROFILE } from '../data/content';

export const SECTIONS = [
  { id: 'top', n: '00', label: 'Overview' },
  { id: 'capabilities', n: '01', label: 'Track Record' },
  { id: 'study', n: '02', label: 'The 15-Year Study' },
  { id: 'sweep', n: '03', label: 'Parameter Sweep' },
  { id: 'engines', n: '04', label: 'Signal Engines' },
  { id: 'gold', n: '05', label: 'XAU/USD Systems' },
  { id: 'fno', n: '06', label: 'F&O Opening Range' },
  { id: 'nasdaq', n: '07', label: 'Nasdaq 100 Rotation' },
  { id: 'system', n: '08', label: 'Production System' },
  { id: 'execution', n: '09', label: 'Execution & MT5' },
  { id: 'toolkit', n: '10', label: 'Indicator Toolkit' },
  { id: 'builds', n: '11', label: 'Other Builds' },
  { id: 'archive', n: '12', label: 'Evidence Archive' },
  { id: 'contact', n: '13', label: 'Contact' },
];

/* Tracks which section is currently in view for the rail highlight. */
function useActiveSection() {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const nodes = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!nodes.length) return;

    const onScroll = () => {
      // The section whose top has most recently passed the upper third.
      const line = window.innerHeight * 0.34;
      let current = nodes[0].id;
      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= line) current = node.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return active;
}

export default function Rail() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  /* Close on Escape, and stop the page scrolling behind the open panel. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  /* The rail breakpoint is 940px. If the viewport grows past it while the
     panel is open, the panel is gone but the scroll lock would remain. */
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 941px)');
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <>
      <nav className="rail">
        <div>
          <h1 className="rail-name">{PROFILE.name}</h1>
          <div className="rail-role">
            {PROFILE.role}
            <br />
            {PROFILE.location.split(' · ')[0]}
          </div>
        </div>

        <div className="rail-nav">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={`rail-link${active === s.id ? ' on' : ''}`}>
              <span className="n">{s.n}</span>
              <span>{s.label}</span>
            </a>
          ))}
        </div>

        <div className="rail-foot">
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          <br />
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <br />
          {PROFILE.location}
        </div>
      </nav>

      <div className="mobile-bar">
        <h1>{PROFILE.name}</h1>
        <span className="mb-active">{SECTIONS.find((s) => s.id === active)?.label}</span>
        <button
          type="button"
          className={`mb-toggle${open ? ' on' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close section menu' : 'Open section menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="mb-bars" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          {open ? 'Close' : 'Sections'}
        </button>
      </div>

      <div
        className={`mobile-scrim${open ? ' on' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="mobile-nav"
        ref={panelRef}
        className={`mobile-nav${open ? ' open' : ''}`}
        aria-label="Sections"
        hidden={!open}
      >
        {SECTIONS.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className={`mobile-link${active === sec.id ? ' on' : ''}`}
            onClick={() => setOpen(false)}
          >
            <span className="n">{sec.n}</span>
            <span>{sec.label}</span>
          </a>
        ))}
        <div className="mobile-foot">
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          <br />
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </nav>
    </>
  );
}
