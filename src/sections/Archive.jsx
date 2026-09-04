import React from 'react';
import { ARCHIVE, ARCHIVE_NOTE } from '../data/content';
import { RESEARCH } from '../data/research';
import { Section, Reveal, Stat } from '../components/ui';

const { build } = RESEARCH;

export default function Archive() {
  return (
    <Section
      id="archive"
      num="12 — Evidence"
      title="The research, as originally written"
      lede={ARCHIVE_NOTE}
      source="port source/momentum traging/ — full reports, served unmodified"
    >
      <Reveal className="stats">
        <Stat value={String(build.researchPdfs)} label="Research reports written" tone="brass" />
        <Stat value={String(ARCHIVE.length)} label="Published here in full" tone="pos" />
        <Stat value={String(build.eodReports)} label="Automated daily reports" />
        <Stat value={String(build.mql5 + build.pineScripts)} label="Strategy & indicator files" />
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <div className="archive">
          {ARCHIVE.map((d) => (
            <a
              key={d.file}
              className="doc"
              href={`assets/research/${d.file}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="doc-top">
                <span className="doc-title">{d.title}</span>
                <span className="doc-get">Open PDF →</span>
              </div>
              <div className="doc-meta">{d.meta}</div>

              <div className="doc-figs">
                {d.figures.map(([k, v]) => (
                  <div key={k}>
                    <div className="doc-fig-v">{v}</div>
                    <div className="doc-fig-k">{k}</div>
                  </div>
                ))}
              </div>

              <p className="doc-note">{d.note}</p>
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
