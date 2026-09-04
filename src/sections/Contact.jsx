import React, { useState } from 'react';
import { PROFILE } from '../data/content';
import { Section, Reveal } from '../components/ui';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard can be blocked; the address is on screen either way.
      setCopied(false);
    }
  };

  return (
    <Section
      id="contact"
      num="13 — Contact"
      title="Open to quantitative research and trading systems work"
      lede="If you want to interrogate any number on this page, I still have the notebooks, the CSVs and the failed runs. That conversation is the one I want to have."
    >
      <Reveal className="contact-grid">
        <div className="contact-cell">
          <div className="contact-k">Email</div>
          <div className="contact-v">
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          </div>
          <button className="copybtn" onClick={copy}>
            {copied ? 'Copied' : 'Copy address'}
          </button>
        </div>

        <div className="contact-cell">
          <div className="contact-k">LinkedIn</div>
          <div className="contact-v">
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              {PROFILE.linkedinLabel}
            </a>
          </div>
        </div>

        <div className="contact-cell">
          <div className="contact-k">Currently</div>
          <div className="contact-v" style={{ fontSize: '0.92rem', color: 'var(--text-2)' }}>
            {PROFILE.role}
            <br />
            {PROFILE.org}
            <br />
            {PROFILE.seeking}
          </div>
        </div>

        <div className="contact-cell">
          <div className="contact-k">Work mode</div>
          <div className="contact-v" style={{ fontSize: '0.92rem', color: 'var(--text-2)' }}>
            {PROFILE.workMode}
            <br />
            {PROFILE.timezone}
          </div>
        </div>
      </Reveal>

      <footer className="foot">
        <span>
          {PROFILE.name} · {PROFILE.role}
        </span>
        <span>
          All figures computed from source data · past performance does not predict future results
        </span>
      </footer>
    </Section>
  );
}
