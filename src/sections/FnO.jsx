import React from 'react';
import { RESEARCH } from '../data/research';
import { Section, Reveal, BarCell, num } from '../components/ui';

const { fo } = RESEARCH;

const maxAbsRet = Math.max(...fo.monthly.map((m) => Math.abs(m.totalRet)));
const maxPf = Math.max(...fo.methods.map((m) => m.pf));

// Shorten the verbose CSV horizon labels for the table.
const clean = (s) => s.replace(/^Method [A-C]\d?: /, '').replace(/\[.*\]/, '').trim();

export default function FnO() {
  return (
    <Section
      id="fno"
      num="06 — Negative result"
      title="The F&O opening-range study, including the parts that failed"
      lede={
        <>
          Seven ways to hold the same opening-range breakout signal on Indian F&O names, measured on the same
          trades. <strong>Four of the seven lose money.</strong> This section is here because a portfolio that
          only shows what worked is not evidence of a process — and because which exits failed turned out to be
          more instructive than which one won.
        </>
      }
      source="india F&O/reports/ — all_fo_performance_summary.csv, performance_summary.csv, monthly_performance.csv"
    >
      <Reveal>
        <h3 className="card-kicker">Same entry, seven exits</h3>
        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th>Exit method</th>
                <th>Trades</th>
                <th>Win rate</th>
                <th>Avg win</th>
                <th>Avg loss</th>
                <th>Avg return</th>
                <th>Profit factor</th>
              </tr>
            </thead>
            <tbody>
              {[...fo.methods]
                .sort((a, b) => b.pf - a.pf)
                .map((m, i) => (
                  <tr key={m.name} className={i === 0 ? 'lead' : ''}>
                    <td>{clean(m.name)}</td>
                    <td className="dim">{m.trades}</td>
                    <td>{m.winRate.toFixed(1)}%</td>
                    <td className="pos">+{m.avgWin.toFixed(2)}%</td>
                    <td className="neg">{m.avgLoss.toFixed(2)}%</td>
                    <td className={m.avgRet > 0 ? 'pos' : 'neg'}>
                      {m.avgRet > 0 ? '+' : ''}
                      {m.avgRet.toFixed(3)}%
                    </td>
                    <td>
                      <BarCell
                        value={m.pf}
                        max={maxPf}
                        display={m.pf.toFixed(3)}
                        tone={m.pf > 1 ? 'pos' : 'neg'}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <div className="callout">
        The BTST hold — carrying a position overnight to the next open — wins <b>63.2% of the time</b> and still
        loses money, at a <b>0.978 profit factor</b>. Its average winner is +0.80% against an average loser of
        −1.83%, with one gap down of <b>−62.6%</b> in the sample. High win rate, negative expectancy: it is the
        cleanest demonstration I have that hit rate is not edge, and it is why every system I run sizes on the
        loss tail rather than the win count.
      </div>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">Risk-adjusted view — top-ranked selections</h3>
        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th>Horizon</th>
                <th>Trades</th>
                <th>Win rate</th>
                <th>Cumulative</th>
                <th>Max DD</th>
                <th>Profit factor</th>
                <th>Sharpe</th>
              </tr>
            </thead>
            <tbody>
              {fo.horizons.map((h, i) => (
                <tr key={h.name} className={i === 0 ? 'lead' : ''}>
                  <td>{h.name}</td>
                  <td className="dim">{h.trades}</td>
                  <td>{h.winRate.toFixed(1)}%</td>
                  <td className={h.cumRet > 0 ? 'pos' : 'neg'}>
                    {h.cumRet > 0 ? '+' : ''}
                    {h.cumRet.toFixed(1)}%
                  </td>
                  <td className="neg">{h.maxDd.toFixed(1)}%</td>
                  <td className={h.pf > 1 ? 'pos' : 'neg'}>{h.pf.toFixed(2)}</td>
                  <td className={h.sharpe > 1 ? 'pos' : 'dim'}>{h.sharpe.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="source" style={{ borderTop: 0, marginTop: '0.9rem' }}>
          Taking the top 3 ranked candidates instead of the top 5 lifts Sharpe from 2.05 to 2.42 and cuts max
          drawdown from −53.9% to −38.5% on nearly identical cumulative return. Selectivity, not more trades.
        </p>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">Month by month — {fo.monthly.length} months live</h3>
        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Trades</th>
                <th>Win rate</th>
                <th>Total return</th>
              </tr>
            </thead>
            <tbody>
              {fo.monthly.map((m) => (
                <tr key={m.month}>
                  <td>{m.month}</td>
                  <td className="dim">{m.trades}</td>
                  <td>{m.winRate.toFixed(1)}%</td>
                  <td>
                    <BarCell
                      value={m.totalRet}
                      max={maxAbsRet}
                      display={`${m.totalRet > 0 ? '+' : ''}${m.totalRet.toFixed(1)}%`}
                      tone={m.totalRet > 0 ? 'pos' : 'neg'}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="source" style={{ borderTop: 0, marginTop: '0.9rem' }}>
          Three winning months, four losing ones, and the two best months (+126.8% and +42.1%) carry the entire
          sample. Seven months is far too short to conclude anything — which is precisely why the {num(8640)}-run
          sweep in section 03 exists.
        </p>
      </Reveal>
    </Section>
  );
}
