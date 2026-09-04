import React, { useEffect, useState } from 'react';
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
        <span>{SECTIONS.find((s) => s.id === active)?.label}</span>
      </div>
    </>
  );
}
