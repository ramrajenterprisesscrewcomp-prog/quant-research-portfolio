import React, { useState } from 'react';
import { RESEARCH } from '../data/research';
import { Section, Reveal, Stat, BarCell, num } from '../components/ui';
import Doc from '../components/Doc';
import { DOCS } from '../data/content';

const { sweep } = RESEARCH;

// Plain-language names for the momentum score variants in the grid.
const SCORE_LABEL = {
  Weighted_3_6_12_Vol3M: 'Weighted 3/6/12m ÷ 3m vol',
  Multi_1_6_12_Vol3M: 'Multi 1/6/12m ÷ 3m vol',
  Multi_1_6_9_Vol3M: 'Multi 1/6/9m ÷ 3m vol',
  Fast_ROC_1M_3M: 'Fast ROC 1m + 3m',
  ROC_6M_Vol3M: 'ROC 6m ÷ 3m vol',
};

const label = (axis, v) => {
  if (axis === 'score_key') return SCORE_LABEL[v] || v;
  if (axis === 'tsl_pct') return `${(parseFloat(v) * 100).toFixed(0)}% trail`;
  if (axis === 'sma_period') return `${v}-day SMA`;
  if (axis === 'port_size') return `${v} positions`;
  if (axis === 'rebal_interval') return `every ${v} sessions`;
  if (axis === 'weighting_mode') return v === 'equal' ? 'Equal weight' : 'Top-heavy';
  if (axis === 'hedged') return v === 'True' ? 'Hedged' : 'Unhedged';
  if (axis === 'exit_buffer_mult') return `${v}× buffer`;
  return v;
};

export default function Sweep() {
  const [axis, setAxis] = useState('port_size');
  const rows = sweep.marginals[axis];
  const maxSharpe = Math.max(...rows.map((r) => r.sharpe));
  const axisMeta = sweep.axes.find((a) => a.key === axis);

  const [lo, mid, hi] = sweep.sharpeRange;

  return (
    <Section
      id="sweep"
      num="03 — Robustness"
      title="Eight thousand portfolios, ranked by what actually moved the needle"
      lede={
        <>
          A single backtest tells you almost nothing — the parameters were chosen after seeing the data. So the
          five-year momentum portfolio was run across every combination of eight design choices:{' '}
          <strong>{num(sweep.combos)} full backtests</strong>, each with Sharpe, Sortino, Calmar, drawdown and
          trade count recorded. The useful output is not the winner. It is which knobs change the answer.
        </>
      }
      source="momentum traging/scratch/sweep_5yr_results.csv — 8,640 rows, 17 columns"
    >
      <Reveal className="stats">
        <Stat value={num(sweep.combos)} label="Configurations tested" tone="brass" />
        <Stat value={hi.toFixed(2)} label="Best Sharpe" note={`median ${mid.toFixed(2)}, worst ${lo.toFixed(2)}`} tone="pos" />
        <Stat
          value={`${sweep.cagrRange[2].toFixed(0)}%`}
          label="Best CAGR"
          note={`median ${sweep.cagrRange[1].toFixed(0)}%, worst ${sweep.cagrRange[0].toFixed(0)}%`}
        />
        <Stat
          value={`${sweep.ddRange[0].toFixed(0)}%`}
          label="Worst drawdown in grid"
          note={`median ${sweep.ddRange[1].toFixed(0)}%`}
        />
      </Reveal>

      <div className="callout">
        The spread is the point. The same strategy family produces a <b>2.00 Sharpe</b> and a <b>0.04 Sharpe</b>{' '}
        depending only on how it is configured, and CAGR runs from <b>+64%</b> to <b>−1%</b>. Quoting the top row
        of this grid as "my strategy's performance" would be selection, not evidence — so what follows is the
        median across every run, which is the number that survives out of sample.
      </div>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">Marginal effect — pick a design choice</h3>
        <div className="toggles">
          {sweep.axes.map((a) => (
            <button
              key={a.key}
              className={`toggle${axis === a.key ? ' on' : ''}`}
              onClick={() => setAxis(a.key)}
            >
              {a.label}
            </button>
          ))}
        </div>

        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th>{axisMeta.label}</th>
                <th>Median Sharpe</th>
                <th>Median CAGR</th>
                <th>Median max DD</th>
                <th>Runs</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.value} className={i === 0 ? 'lead' : ''}>
                  <td>{label(axis, r.value)}</td>
                  <td>
                    <BarCell value={r.sharpe} max={maxSharpe} display={r.sharpe.toFixed(2)} tone="pos" />
                  </td>
                  <td>{r.cagr.toFixed(1)}%</td>
                  <td className="neg">{r.maxDd.toFixed(1)}%</td>
                  <td className="dim">{num(r.n)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="source" style={{ borderTop: 0, marginTop: '0.9rem' }}>
          Each row is the median of {num(rows[0].n)} backtests holding this one choice fixed while every other
          parameter varies — so a spread here is an effect, not an artefact of one lucky run.
        </p>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">What the grid actually says</h3>
        <div className="grid three">
          <div className="card">
            <div className="card-kicker">Concentration</div>
            <h4>Fewer names is the expensive mistake</h4>
            <p>
              Cutting from 12 positions to 5 drops median Sharpe from 1.27 to 1.01 and deepens median drawdown
              from −29.8% to −43.9%. Concentration buys a fatter tail, not a better process.
            </p>
          </div>
          <div className="card">
            <div className="card-kicker">Stop width</div>
            <h4>Tight trails cost more than they save</h4>
            <p>
              A 10% trailing stop shows the shallowest median drawdown (−32.2%) but the weakest Sharpe (1.08).
              Widening to 20% lifts Sharpe to 1.24 — it stops cutting winners before they finish.
            </p>
          </div>
          <div className="card">
            <div className="card-kicker">Hedging</div>
            <h4>The index hedge is close to free</h4>
            <p>
              Hedged and unhedged runs land on an identical 1.17 median Sharpe, with the hedge trimming median
              drawdown by 1.9 points. Cheap insurance, not an edge.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">Top 8 by Sharpe — shown for shape, not as a claim</h3>
        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th>Momentum score</th>
                <th>SMA</th>
                <th>Trail</th>
                <th>Size</th>
                <th>Rebal</th>
                <th>Hedge</th>
                <th>CAGR</th>
                <th>Max DD</th>
                <th>Sharpe</th>
                <th>Sortino</th>
                <th>Calmar</th>
                <th>Win</th>
              </tr>
            </thead>
            <tbody>
              {sweep.top.map((r, i) => (
                <tr key={i} className={i === 0 ? 'lead' : ''}>
                  <td>{SCORE_LABEL[r.score] || r.score}</td>
                  <td>{r.sma}</td>
                  <td>{(parseFloat(r.tsl) * 100).toFixed(0)}%</td>
                  <td>{r.port}</td>
                  <td>{r.rebal}d</td>
                  <td className="dim">{r.hedged ? 'yes' : 'no'}</td>
                  <td className="pos">{r.cagr.toFixed(1)}%</td>
                  <td className="neg">{r.maxDd.toFixed(1)}%</td>
                  <td>{r.sharpe.toFixed(2)}</td>
                  <td className="dim">{r.sortino.toFixed(2)}</td>
                  <td className="dim">{r.calmar.toFixed(2)}</td>
                  <td className="dim">{r.winRate.toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="source" style={{ borderTop: 0, marginTop: '0.9rem' }}>
          Note the agreement: seven of eight run 12 positions at equal weight. When the leaderboard converges on
          the same structural choices, that is a signal. When it converges on one exact parameter set, that is
          usually overfitting.
        </p>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">Primary document</h3>
        <Doc doc={DOCS.momentum15yr} />
      </Reveal>
    </Section>
  );
}
