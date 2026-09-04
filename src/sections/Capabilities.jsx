import React from 'react';
import { CAPABILITIES } from '../data/content';
import { RESEARCH } from '../data/research';
import { Section, Reveal, num } from '../components/ui';

const { positioning, method, availability, competencies, stack, developing } = CAPABILITIES;
const { sweep, nifty, gold, fo, ndx, build } = RESEARCH;

const foLosing = fo.methods.filter((m) => m.pf < 1).length;

/* One row per research programme. Every figure is read from the generated data, so the
   scoreboard cannot drift from the sections that expand it. The last column is the point:
   each result is published next to the thing that limits it. */
const RECORD = [
  {
    programme: 'Momentum parameter sweep',
    href: '#sweep',
    market: 'Nifty 500 · India cash equity',
    sample: `${num(sweep.combos)} configurations`,
    result: `Median Sharpe ${sweep.sharpeRange[1].toFixed(2)}`,
    detail: `best ${sweep.sharpeRange[2].toFixed(2)}, worst ${sweep.sharpeRange[0].toFixed(2)}`,
    limit: 'The top row of a grid is selection, not evidence — so I quote the median across all runs.',
  },
  {
    programme: 'Signal-engine comparison',
    href: '#engines',
    market: `Nifty 500 · ${nifty.universe} symbols`,
    sample: `${num(nifty.totalTrades)} trades`,
    result: `${nifty.engines} engines, one universe`,
    detail: 'identical exits, entry is the only variable',
    limit: 'Ranked on per-symbol medians, because a handful of runaway winners will flatter any mean.',
  },
  {
    programme: 'Nasdaq 100 rotation (Setup F)',
    href: '#nasdaq',
    market: 'US large cap · 2015–2024',
    sample: `${ndx.trades.n} trades, ${ndx.ladder.length} setups`,
    result: `${ndx.headline.CAGR.toFixed(2)}% CAGR`,
    detail: `${ndx.headline.Max_DD.toFixed(2)}% max DD · Calmar ${ndx.headline.Calmar.toFixed(2)}`,
    limit: "Universe is today's index members applied backwards; survivorship inflates it by an unmeasured amount.",
  },
  {
    programme: 'XAU/USD advisor library',
    href: '#gold',
    market: `Spot gold · ${gold.weeks} weeks`,
    sample: `${gold.runs} runs, ${num(gold.totalTrades)} trades`,
    result: `${gold.profitable} of ${gold.runs} runs profitable`,
    detail: `${gold.strategies} strategies across ${gold.timeframes.length} timeframes`,
    limit: 'The test window is a gold bull run, so the absolute figures are optimistic and I say so.',
  },
  {
    programme: 'F&O opening-range study',
    href: '#fno',
    market: 'Indian F&O · 7 months',
    sample: `${fo.methods.length} exits, one trade set`,
    result: `${foLosing} of the ${fo.methods.length} lose money`,
    detail: 'incl. a 63%-win-rate method with negative expectancy',
    limit: 'Published because the failures are the finding — hit rate is not edge.',
  },
  {
    programme: 'Production trading system',
    href: '#system',
    market: 'Live · daily schedule',
    sample: `${num(build.botLoc)} LOC · ${build.botServices} services`,
    result: `${build.eodReports} reports auto-published`,
    detail: `${build.botEndpoints} endpoints, async throughout`,
    limit: 'Runs unattended on a VPS; research that never ships is research nobody can use.',
  },
];

export default function Capabilities() {
  return (
    <Section
      id="capabilities"
      num="01 — Track record"
      title="Six research programmes, and what limits each one"
      lede={
        <>
          {positioning} Everything below expands into its own section with the full tables, the
          equity curves and the source documents — this is the summary a desk can read in a minute.
        </>
      }
    >
      <Reveal>
        <div className="tablewrap">
          <table className="record">
            <thead>
              <tr>
                <th>Research programme</th>
                <th>Market &amp; sample</th>
                <th>Headline result</th>
                <th>What limits it</th>
              </tr>
            </thead>
            <tbody>
              {RECORD.map((r) => (
                <tr key={r.programme}>
                  <td>
                    <a className="record-link" href={r.href}>
                      {r.programme}
                    </a>
                  </td>
                  <td className="dim record-scope">
                    <span>{r.market}</span>
                    <span>{r.sample}</span>
                  </td>
                  <td>
                    <span className="record-v">{r.result}</span>
                    <span className="record-d">{r.detail}</span>
                  </td>
                  <td className="record-limit">{r.limit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="source" style={{ borderTop: 0, marginTop: '0.9rem' }}>
          The final column is the one worth reading. Any backtest can be made to print a large
          number; the part of this job that transfers is knowing which number is a lie, and every
          row here names its own weakness before an interviewer has to find it.
        </p>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">What I can be held to, and what proves it</h3>
        <div className="grid two">
          {competencies.map((c) => (
            <div className="card" key={c.area}>
              <h4>{c.area}</h4>
              <p>{c.body}</p>
              <div className="tags">
                <span className="tag brass evi">{c.evidence}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">Technical stack</h3>
        <div className="tablewrap" style={{ padding: '0.3rem 1.4rem 1.2rem' }}>
          {stack.map((g) => (
            <div className="stackrow" key={g.group}>
              <div className="stackrow-k">{g.group}</div>
              <div className="tags" style={{ marginTop: 0 }}>
                {g.items.map((i) => (
                  <span className="tag" key={i}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <div className="grid two">
          <div className="card">
            <div className="card-kicker">How I build</div>
            <h4>{method.headline}</h4>
            <p>{method.body}</p>
            <ul className="ticks" style={{ margin: '0.9rem 0 1rem' }}>
              {method.proof.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <p>{method.close}</p>
          </div>

          <div className="card">
            <div className="card-kicker">Work Arrangement</div>
            <dl className="factlist">
              {availability.rows.map(([k, v]) => (
                <React.Fragment key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </React.Fragment>
              ))}
            </dl>
          </div>

          <div className="card">
            <div className="card-kicker">Stated up front</div>
            <h4>{developing.headline}</h4>
            <ul className="ticks" style={{ margin: '0.9rem 0 1rem' }}>
              {developing.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <p>{developing.note}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
