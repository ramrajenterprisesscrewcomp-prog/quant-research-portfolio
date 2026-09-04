import React, { useState } from 'react';
import { RESEARCH } from '../data/research';
import { MQL5, GOLD_DOCS } from '../data/content';
import { Section, Reveal, Stat, BarCell, num } from '../components/ui';

const { gold, build } = RESEARCH;

const maxStratPf = Math.max(...gold.byStrategy.map((r) => r.bestPf));
const maxRunPf = Math.max(...gold.all.map((r) => r.pf));

const VIEWS = [
  { key: 'strategy', label: 'By strategy' },
  { key: 'all', label: `All ${gold.runs} runs` },
  { key: 'profitable', label: `Cleared costs (${gold.profitable})` },
  { key: 'failed', label: `Failed (${gold.runs - gold.profitable})` },
];

export default function Gold() {
  const [view, setView] = useState('strategy');

  const runs =
    view === 'all'
      ? gold.all
      : view === 'profitable'
      ? gold.all.filter((r) => r.pf > 1.0)
      : gold.all.filter((r) => r.pf <= 1.0);

  return (
    <Section
      id="gold"
      num="05 — Foreign exchange"
      title="XAU/USD: forty-two runs, twenty that cleared costs"
      lede={
        <>
          {build.mql5} expert advisors written in MQL5, of which {gold.strategies} were put through a{' '}
          {gold.weeks}-week walk across three intraday timeframes —{' '}
          <strong>
            {gold.runs} strategy/timeframe runs and {num(gold.totalTrades)} trades
          </strong>
          . Twenty finished with a profit factor above 1.0. Every run is listed below, including the
          twenty-two that did not.
        </>
      }
      source="yt/MQL5_Strategies/Backtest/results/xauusd_strategy_analysis.csv · MASTER_LIST.md · XAUUSD_Backtest_Methodology_Report.pdf"
    >
      <Reveal className="stats">
        <Stat value={String(gold.runs)} label="Strategy × timeframe runs" tone="brass" />
        <Stat value={num(gold.totalTrades)} label="Trades executed" />
        <Stat value={`${gold.profitable} / ${gold.runs}`} label="Profit factor above 1.0" tone="pos" />
        <Stat value={gold.timeframes.join(' · ')} label="Timeframes tested" />
      </Reveal>

      <Reveal style={{ marginTop: '1.5rem' }}>
        <h3 className="card-kicker">Contract terms the point figures depend on</h3>
        <div className="tablewrap">
          <table>
            <tbody>
              <tr>
                <td>Symbol</td>
                <td style={{ textAlign: 'left' }}>{gold.contract.symbol}</td>
              </tr>
              <tr>
                <td>Standard lot</td>
                <td style={{ textAlign: 'left' }}>{gold.contract.lotSize}</td>
              </tr>
              <tr>
                <td>Size tested</td>
                <td style={{ textAlign: 'left' }}>{gold.contract.tested}</td>
              </tr>
              <tr>
                <td>Point value</td>
                <td style={{ textAlign: 'left' }}>{gold.contract.tick}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Reveal>

      <div className="callout">
        Read the dollar figures with the lot size in mind. Everything here ran at{' '}
        <b>0.01 lots — one troy ounce</b>, deliberately, so that forty-two runs are comparable to one
        another rather than to a P&amp;L target. The best run nets roughly <b>$2,982 on 1,787 trades</b> at
        that size; the point of the number is its sign and its ratio, not its magnitude. Scaling is an
        allocation decision, and it is the one decision a backtest cannot make for you.
      </div>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">Results</h3>
        <div className="toggles">
          {VIEWS.map((v) => (
            <button
              key={v.key}
              className={`toggle${view === v.key ? ' on' : ''}`}
              onClick={() => setView(v.key)}
            >
              {v.label}
            </button>
          ))}
        </div>

        {view === 'strategy' ? (
          <div className="tablewrap">
            <table>
              <thead>
                <tr>
                  <th>Advisor & rule set</th>
                  <th>Trades</th>
                  <th>Avg win rate</th>
                  <th>Avg R:R</th>
                  <th>Median PF</th>
                  <th>Runs cleared</th>
                  <th>Best PF</th>
                </tr>
              </thead>
              <tbody>
                {gold.byStrategy.map((s, i) => (
                  <tr key={s.strategy} className={i === 0 ? 'lead' : ''}>
                    <td>
                      {s.strategy}
                      <span className="sub">{s.desc}</span>
                    </td>
                    <td className="dim">{num(s.trades)}</td>
                    <td>{s.winRate.toFixed(1)}%</td>
                    <td>{s.rr.toFixed(2)}</td>
                    <td className={s.medPf > 1 ? 'pos' : 'neg'}>{s.medPf.toFixed(2)}</td>
                    <td className={s.profitableRuns === s.runs ? 'pos' : 'dim'}>
                      {s.profitableRuns}/{s.runs}
                    </td>
                    <td>
                      <BarCell
                        value={s.bestPf}
                        max={maxStratPf}
                        display={`${s.bestPf.toFixed(2)} ${s.bestTf}`}
                        tone={s.bestPf > 1 ? 'pos' : 'neg'}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="tablewrap">
            <table>
              <thead>
                <tr>
                  <th>Run</th>
                  <th>TF</th>
                  <th>Trades</th>
                  <th>Win rate</th>
                  <th>R:R</th>
                  <th>Weekly win</th>
                  <th>Net pts</th>
                  <th>Max DD (pts)</th>
                  <th>Profit factor</th>
                </tr>
              </thead>
              <tbody>
                {runs.map((r, i) => (
                  <tr key={`${r.strategy}-${r.tf}`} className={view !== 'failed' && i === 0 ? 'lead' : ''}>
                    <td>
                      {r.strategy}
                      <span className="sub">{r.desc}</span>
                    </td>
                    <td className="dim">{r.tf}</td>
                    <td className="dim">{num(r.trades)}</td>
                    <td>{r.winRate.toFixed(1)}%</td>
                    <td>{r.rr.toFixed(2)}</td>
                    <td>{r.weeklyWin.toFixed(1)}%</td>
                    <td className={r.netPts > 0 ? 'pos' : 'neg'}>{num(r.netPts)}</td>
                    <td className="neg">{num(r.maxDdPts)}</td>
                    <td>
                      <BarCell
                        value={r.pf}
                        max={maxRunPf}
                        display={r.pf.toFixed(2)}
                        tone={r.pf > 1 ? 'pos' : 'neg'}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p className="source" style={{ borderTop: 0, marginTop: '0.9rem' }}>
          Win rates run 26–51% with realised R:R near 2.0 — these are trend-continuation profiles: lose small
          often, win larger occasionally. Weekly win rate is the honest stability check, and it sits near
          56–60%, not 90%. <b>Six of the fourteen advisors cleared costs on all three timeframes</b> they were
          tested on, which matters more than any single run: an edge that survives a change of timeframe is
          harder to explain away as a fit to one bar size.
        </p>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">The MQL5 library — {MQL5.total} advisors</h3>
        <div className="grid two">
          <div className="card">
            <h4>By family</h4>
            <div style={{ marginTop: '1rem' }}>
              {MQL5.families.map((f) => {
                const w = (f.n / MQL5.total) * 100;
                return (
                  <div
                    key={f.name}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      gap: '0.7rem',
                      alignItems: 'center',
                      padding: '0.42rem 0',
                      fontSize: '0.84rem',
                    }}
                  >
                    <span style={{ color: 'var(--text-2)' }}>{f.name}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                      <span className="bartrack" style={{ width: 58 }}>
                        <span className="barfill" style={{ width: `${(w / 25) * 100}%` }} />
                      </span>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: '0.76rem' }}>{f.n}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card">
            <div className="card-kicker">Disclosure</div>
            <h4>Eight of these are designed to blow up</h4>
            <p>{MQL5.disclosure}</p>
            <div className="tags">
              <span className="tag">{MQL5.regular} conventional</span>
              <span className="tag brass">{MQL5.highRisk} flagged high-risk</span>
              <span className="tag">Per-file startup warning</span>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">XAU/USD documents</h3>
        <div className="archive">
          {GOLD_DOCS.map((d) => (
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
              <p className="doc-note">{d.note}</p>
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
