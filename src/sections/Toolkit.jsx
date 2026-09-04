import React from 'react';
import { INDICATORS, BUILDS } from '../data/content';
import { RESEARCH } from '../data/research';
import { Section, Reveal } from '../components/ui';

const { build } = RESEARCH;

export function Toolkit() {
  return (
    <Section
      id="toolkit"
      num="10 — Instrumentation"
      title="The indicators the strategies are actually made of"
      lede={
        <>
          Seven Pine Script studies, written for TradingView v5 and v6. These are not decoration — the two
          marked below are the entry logic behind the top-ranked engines in section 04, which is the only
          reason they earn a place here.
        </>
      }
      source="RRE indicators/ — 7 Pine Script v5/v6 studies"
    >
      <Reveal className="grid two">
        {INDICATORS.map((ind) => (
          <div className="card" key={ind.name}>
            <div
              className="card-kicker"
              style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}
            >
              <span>Pine Script {ind.version}</span>
              {ind.rank && (
                <span style={{ color: 'var(--pos)' }}>
                  #{ind.rank} engine · §04
                </span>
              )}
            </div>
            <h4>{ind.name}</h4>
            <p>{ind.body}</p>
            <div className="tags">
              {ind.params.map((p) => (
                <span className="tag" key={p}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}

export function Builds() {
  return (
    <Section
      id="builds"
      num="11 — Engineering"
      title="Things I shipped that were not backtests"
      lede="Trading systems are most of the work, but not all of it. These are production applications with real users, built end to end."
      source="port source/ — momentum site, RRE TRADING BOT, RRE SEC, RRE COMP DASH"
    >
      <Reveal className="grid two">
        {BUILDS.map((b) => (
          <div className="card" key={b.name}>
            <div className="card-kicker">{b.kind}</div>
            <h4>{b.name}</h4>
            <p>{b.body}</p>
            {/* Only the older web builds are still live somewhere to link to. */}
            {b.href && (
              <a className="card-link" href={b.href} target="_blank" rel="noreferrer">
                View live →
              </a>
            )}
          </div>
        ))}
      </Reveal>

      <Reveal className="stats" style={{ marginTop: '1.5rem' }}>
        <div className="stat">
          <div className="stat-v">{build.researchPdfs}</div>
          <div className="stat-k">Research reports written</div>
          <div className="stat-note">Backtest and methodology PDFs</div>
        </div>
        <div className="stat">
          <div className="stat-v">{build.mql5}</div>
          <div className="stat-k">MQL5 expert advisors</div>
          <div className="stat-note">38 conventional, 8 risk-flagged</div>
        </div>
        <div className="stat">
          <div className="stat-v">{build.pineScripts}</div>
          <div className="stat-k">Pine Script studies</div>
          <div className="stat-note">TradingView v5 and v6</div>
        </div>
        <div className="stat">
          <div className="stat-v">{build.eodReports}</div>
          <div className="stat-k">Automated publications</div>
          <div className="stat-note">Generated with no manual step</div>
        </div>
      </Reveal>
    </Section>
  );
}
