import React from 'react';
import { BOT, DOCS } from '../data/content';
import { RESEARCH } from '../data/research';
import { Section, Reveal, Stat, num } from '../components/ui';
import Doc from '../components/Doc';

const { build } = RESEARCH;

export default function System() {
  return (
    <Section
      id="system"
      num="08 — Production"
      title="The system that runs the research without me"
      lede={
        <>
          Research is only worth the pipeline that survives it. This is a FastAPI service —{' '}
          <strong>{num(build.botLoc)} lines across {BOT.stack[0]}, {build.botServices} services and{' '}
          {build.botEndpoints} endpoints</strong> — deployed to a VPS, authenticating against a live broker,
          and publishing to Telegram on a schedule. It has produced <strong>{build.eodReports} reports</strong>{' '}
          without anyone starting it by hand.
        </>
      }
      source="RRE TRADING BOT/ — main.py, services/, requirements.txt, Procfile (Python 3.11.9)"
    >
      <Reveal className="stats">
        <Stat value={num(build.botLoc)} label="Lines of Python" tone="brass" />
        <Stat value={String(build.botServices)} label="Service modules" />
        <Stat value={String(build.botEndpoints)} label="API endpoints" />
        <Stat value={String(build.eodReports)} label="Reports published" tone="pos" />
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">Scheduled loops — every session, unattended</h3>
        <div className="tablewrap" style={{ padding: '0.4rem 1.3rem' }}>
          <div className="timeline">
            {BOT.loops.map((l) => (
              <div className="tl-row" key={l.name}>
                <div className="tl-time">{l.time}</div>
                <div>
                  <div className="tl-name">{l.name}</div>
                  <p className="tl-body">{l.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <div className="grid two">
          <div className="card">
            <div className="card-kicker">Integrations</div>
            <h4>Six external surfaces, each with a failure mode</h4>
            <div style={{ marginTop: '1rem' }}>
              {BOT.integrations.map((it) => (
                <div
                  key={it.name}
                  style={{ padding: '0.6rem 0', borderTop: '1px solid var(--line)', fontSize: '0.85rem' }}
                >
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.76rem', color: 'var(--brass)' }}>
                    {it.name}
                  </div>
                  <div style={{ color: 'var(--text-2)', marginTop: '0.2rem' }}>{it.use}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-kicker">Scanners in production</div>
            <h4>The research, wired to live data</h4>
            <ul className="ticks" style={{ marginTop: '1rem' }}>
              {BOT.scanners.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="tags">
              {BOT.stack.map((s) => (
                <span className="tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">Sample output</h3>
        <Doc doc={DOCS.eodSample} />
      </Reveal>

      <div className="callout">
        The same VWMA(20) + TRAMA(99) + RSI(14) pattern that section 04 ranks across 484 Indian symbols runs
        unchanged against the S&P 500, the Nasdaq 100 and a liquidity-filtered sub-$10 universe. One rule set,
        two markets, no re-tuning — which is the only honest way to find out whether a signal generalises or was
        just fitted to Indian data.
      </div>
    </Section>
  );
}
