import React, { useState } from 'react';
import { RESEARCH } from '../data/research';
import { Section, Reveal, Stat, BarCell, num } from '../components/ui';

const { nifty } = RESEARCH;

const COLUMNS = [
  { key: 'medCum', label: 'Median return / symbol', fmt: (v) => `${v > 0 ? '+' : ''}${v.toFixed(1)}%`, bar: true },
  { key: 'profitableSymbols', label: 'Symbols profitable', fmt: (v) => `${v.toFixed(1)}%`, bar: true },
  { key: 'winRate', label: 'Trade win rate', fmt: (v) => `${v.toFixed(1)}%`, bar: true },
  { key: 'hit20', label: '+20% target hit', fmt: (v) => `${v.toFixed(1)}%`, bar: true },
  { key: 'avgPnl', label: 'Avg P&L / trade', fmt: (v) => `${v > 0 ? '+' : ''}${v.toFixed(2)}%`, bar: true },
];

export default function Engines() {
  const [sort, setSort] = useState('medCum');
  const rows = [...nifty.strategies].sort((a, b) => b[sort] - a[sort]);
  const max = Math.max(...rows.map((r) => Math.abs(r[sort])));
  const active = COLUMNS.find((c) => c.key === sort);

  return (
    <Section
      id="engines"
      num="04 — Signal comparison"
      title="Ten entry engines, run against the same 484 symbols"
      lede={
        <>
          Every rule set was backtested over the identical Nifty 500 universe with identical exits, so the only
          variable is the entry signal itself. <strong>{num(nifty.totalTrades)} trades</strong> across{' '}
          {nifty.engines} engines. Ranking is per-symbol median, not the mean — a handful of runaway winners
          should not be allowed to describe a strategy.
        </>
      }
      source="indian stock analysis/results/ — rre_performance_summary.csv + strategy_performance_summary.csv (4,812 rows)"
    >
      <Reveal className="stats">
        <Stat value={String(nifty.engines)} label="Engines compared" tone="brass" />
        <Stat value={String(nifty.universe)} label="Symbols per engine" />
        <Stat value={num(nifty.totalTrades)} label="Trades simulated" />
        <Stat value={`${rows[0].profitableSymbols.toFixed(0)}%`} label="Best symbol hit rate" tone="pos" />
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">Rank by</h3>
        <div className="toggles">
          {COLUMNS.map((c) => (
            <button key={c.key} className={`toggle${sort === c.key ? ' on' : ''}`} onClick={() => setSort(c.key)}>
              {c.label}
            </button>
          ))}
        </div>

        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th>Entry engine</th>
                <th>Trades</th>
                <th>Win rate</th>
                <th>+20% hit</th>
                <th>Symbols profitable</th>
                <th>{active.label}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((s, i) => (
                <tr key={s.key} className={i === 0 ? 'lead' : ''}>
                  <td>
                    {s.label}
                    <span className="sub">{s.desc}</span>
                  </td>
                  <td className="dim">{num(s.trades)}</td>
                  <td>{s.winRate.toFixed(1)}%</td>
                  <td>{s.hit20.toFixed(1)}%</td>
                  <td>{s.profitableSymbols.toFixed(1)}%</td>
                  <td>
                    <BarCell
                      value={s[sort]}
                      max={max}
                      display={active.fmt(s[sort])}
                      tone={s[sort] > 0 ? 'pos' : 'neg'}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <div className="callout">
        Win rates sit in a tight <b>35.4–38.0% band</b> across all ten engines, yet median per-symbol return
        spans <b>+11.5% to +117.5%</b> — a tenfold gap. The entry signal barely moves how often you are right;
        it moves how much being right is worth. Dip-rebound makes the case: it posts the{' '}
        <b>best target capture of the group at 31.9%</b> and the second-highest win rate, and still finishes
        last, because it takes only {num(5484)} trades and exits before the move pays for the losers.
      </div>
    </Section>
  );
}
