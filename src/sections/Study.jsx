import React from 'react';
import { STUDY } from '../data/content';
import { Section, Reveal, Stat, BarCell, num } from '../components/ui';

const maxSector = Math.max(...STUDY.sectors.map((s) => s.rate));

export default function Study() {
  return (
    <Section
      id="study"
      num="02 — Foundational research"
      title="What a Nifty 500 breakout looks like before it works"
      lede={
        <>
          Sixteen years of daily data, <strong>{num(STUDY.setups)} consolidation breakouts</strong>, each one
          tracked forward {STUDY.horizon} regardless of outcome. The question was narrow on purpose: at the moment
          of the signal, what measurably separates the ones that run from the ones that die?
        </>
      }
      source={`${STUDY.source} · ${STUDY.window} · ${STUDY.sessions} · ${STUDY.universe}`}
    >
      <Reveal className="stats">
        {STUDY.outcomes.map((o) => (
          <Stat
            key={o.label}
            value={o.pct}
            label={o.label}
            note={`${o.n} setups`}
            tone={o.tone === 'good' ? 'pos' : 'neg'}
          />
        ))}
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">Entry state — winners vs failures</h3>
        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th>Measured at the signal bar</th>
                <th>Failed (&lt;5%)</th>
                <th>+20% winner</th>
                <th>+50% runner</th>
              </tr>
            </thead>
            <tbody>
              {STUDY.discriminators.map((d) => (
                <tr key={d.feature}>
                  <td>{d.feature}</td>
                  <td className="dim">{d.failed}</td>
                  <td style={{ color: 'var(--text)' }}>{d.winner}</td>
                  <td className="pos">{d.big}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="callout">
          The last row is the one that pays for the strategy. A setup that works gives back{' '}
          <b>3.39% on average</b> before it moves; one that fails is already <b>18% underwater</b>. That gap is
          what makes a tight invalidation affordable — the stop is not a guess about risk appetite, it is a
          measured property of the setup.
        </div>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">Five findings that survived the full sample</h3>
        <div className="grid two">
          {STUDY.findings.map((f, i) => (
            <div className="card" key={f.title}>
              <div className="finding">
                <div className="finding-n">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">
          Where the winners cluster — base rate {STUDY.baseRate}%
        </h3>
        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th>Sector</th>
                <th>+20% winners</th>
                <th>Breakouts</th>
                <th>Conversion</th>
              </tr>
            </thead>
            <tbody>
              {STUDY.sectors.map((s) => (
                <tr key={s.sector}>
                  <td>{s.sector}</td>
                  <td>{s.winners}</td>
                  <td className="dim">{s.total}</td>
                  <td>
                    <BarCell
                      value={s.rate}
                      max={maxSector}
                      display={`${s.rate.toFixed(2)}%`}
                      tone={s.rate > STUDY.baseRate ? 'pos' : ''}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">Exit rule comparison · {STUDY.modelBasis}</h3>
        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th>Exit model</th>
                <th>Final</th>
                <th>CAGR</th>
                <th>Max DD</th>
                <th>Trades</th>
                <th>Win</th>
                <th>PF</th>
                <th>Hold</th>
              </tr>
            </thead>
            <tbody>
              {STUDY.models.map((m) => (
                <tr key={m.name} className={m.lead ? 'lead' : m.bench ? 'bench' : ''}>
                  <td>
                    {m.name}
                    <span className="sub">{m.note}</span>
                  </td>
                  <td>{m.capital}</td>
                  <td className={m.bench ? 'dim' : 'pos'}>{m.cagr}</td>
                  <td className="neg">{m.dd}</td>
                  <td>{m.trades}</td>
                  <td>{m.win}</td>
                  <td>{m.pf}</td>
                  <td>{m.hold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="callout">
          Every model draws down roughly as hard as the index does — <b>−36% to −39% against the Nifty's −38%</b>.
          The edge is not smoother equity, it is what gets earned per unit of that same pain. Read these as a
          rule comparison on one historical sample, not as a forecast: the drawdown is the part most likely
          to repeat.
        </div>
      </Reveal>
    </Section>
  );
}
