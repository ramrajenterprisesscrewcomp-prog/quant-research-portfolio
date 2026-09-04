import React from 'react';
import { HARNESS, EXECUTION } from '../data/content';
import { RESEARCH } from '../data/research';
import { Section, Reveal, Stat } from '../components/ui';
import FlowDiagram from '../components/FlowDiagram';

const { build, gold } = RESEARCH;

export default function Execution() {
  return (
    <Section
      id="execution"
      num="09 — Execution"
      title="How an advisor gets tested, and how an order actually reaches the broker"
      lede={HARNESS.intro}
      source={`${HARNESS.source} — Run-AllBacktests.ps1, Config.ps1, tester_template.ini, parse_report.py, rank_results.py`}
    >
      <Reveal className="stats">
        <Stat value={String(build.mql5)} label="Advisors in the batch" tone="brass" />
        <Stat value="4" label="Timeframes per advisor" />
        <Stat value={String(gold.runs)} label="Completed runs analysed" tone="pos" />
        <Stat value="0" label="Manual steps per run" />
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">The unattended pipeline</h3>
        <div className="tablewrap" style={{ padding: '0.4rem 1.3rem' }}>
          <div className="timeline">
            {HARNESS.steps.map((s) => (
              <div className="tl-row" key={s.n}>
                <div className="tl-time">{s.n}</div>
                <div>
                  <div className="tl-name">{s.name}</div>
                  <p className="tl-body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">Pinned test conditions</h3>
        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th>Control</th>
                <th style={{ textAlign: 'left' }}>Setting</th>
              </tr>
            </thead>
            <tbody>
              {HARNESS.controls.map(([k, v]) => (
                <tr key={k}>
                  <td>{k}</td>
                  <td style={{ textAlign: 'left', whiteSpace: 'normal', fontFamily: 'var(--sans)' }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">What building it actually taught me</h3>
        <div className="grid three">
          {HARNESS.engineering.map((e) => (
            <div className="card" key={e.title}>
              <h4>{e.title}</h4>
              <p>{e.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal style={{ marginTop: '3rem' }}>
        <h3 className="card-kicker">Two routes to the market</h3>
        <FlowDiagram />
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <div className="grid two">
          {EXECUTION.paths.map((p) => (
            <div className="card" key={p.key}>
              <div
                className="card-kicker"
                style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}
              >
                <span>{p.tag}</span>
                <span style={{ color: p.status === 'built' ? 'var(--pos)' : 'var(--text-3)' }}>
                  {p.status === 'built' ? 'Running' : 'Architecture'}
                </span>
              </div>
              <h4>{p.name}</h4>
              <p>{p.body}</p>

              <div className="prosgrid">
                <div>
                  <div className="prosgrid-k pos-k">Strengths</div>
                  <ul className="ticks">
                    {p.pros.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="prosgrid-k neg-k">Costs</div>
                  <ul className="ticks neg-ticks">
                    {p.cons.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="callout">
        <b>Reconciliation.</b> {EXECUTION.reconciliation}
      </div>

      <p className="source">{EXECUTION.disclosure}</p>
    </Section>
  );
}
