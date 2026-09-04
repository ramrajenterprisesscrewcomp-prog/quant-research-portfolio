import React, { useState } from 'react';
import { RESEARCH } from '../data/research';
import { Section, Reveal, Stat, BarCell, num } from '../components/ui';
import EquityChart from '../components/EquityChart';
import Doc from '../components/Doc';
import { DOCS } from '../data/content';

const { ndx } = RESEARCH;
const { meta, headline, benchmarks, ladder, annual, trades, exits, contributors, detractors, curve, ledger } =
  ndx;

const RULES = [
  ['Universe', 'Nasdaq 100 constituents only, minimum price $5. No penny names, no illiquid biotech.'],
  [
    'Ranking',
    'Composite score = (0.40 × 3M + 0.40 × 6M + 0.20 × 12M return) ÷ 3-month volatility. Intermediate velocity weighted heaviest; choppy price action penalised.',
  ],
  ['Trend gate', 'A name is only eligible above its own 50-day SMA. Below it, disqualified regardless of score.'],
  ['Concentration', 'Exactly the top 3 ranked names, equal weight at 33.3% each.'],
  ['Rebalance', 'Every 10 trading sessions — roughly bi-weekly, 252 rebalance dates across the decade.'],
  ['Leverage', '1.25× buying power in bull regimes. Well inside the 2.00× Reg-T ceiling, so no margin-call path.'],
  ['Macro shield', 'QQQ above its 200-day SMA: deploy. Below it: liquidate to 100% cash.'],
  ['Exits', 'Sold when the name drops below its 50-day SMA, falls out of the top 3, or the shield goes to cash.'],
];

const qqq = benchmarks.find((b) => b.name.startsWith('QQQ'));
const y2022 = annual.find((a) => a.year === 2022);
const y2019 = annual.find((a) => a.year === 2019);

const maxAnnual = Math.max(...annual.map((a) => Math.abs(a.strat)));
const maxLadder = Math.max(...ladder.map((l) => l.cagr));
const maxPnl = Math.max(...contributors.map((c) => c.pnl));
const cashPct = (meta.bear_sessions / meta.sessions) * 100;
const behindQqq = annual.filter((a) => a.alpha < 0).length;
const downYears = annual.filter((a) => a.strat < 0).length;
const bestYear = annual.reduce((a, b) => (b.strat > a.strat ? b : a));

const byPnl = [...ledger].sort((a, b) => b.p - a.p);
const LEDGER_VIEWS = {
  all: { label: `All ${ledger.length} transactions`, rows: ledger },
  wins: { label: '15 largest winners', rows: byPnl.slice(0, 15) },
  losses: { label: '15 largest losers', rows: byPnl.slice(-15).reverse() },
};
const realised = ledger.reduce((t, r) => t + r.p, 0);

export default function Nasdaq() {
  const [view, setView] = useState('ladder');
  const [book, setBook] = useState('all');

  return (
    <Section
      id="nasdaq"
      num="07 — US equities"
      title="A Nasdaq 100 momentum rotation, and the six candidates it had to beat"
      lede={
        <>
          Ten years of US large-cap history, {num(meta.sessions)} sessions, {num(meta.universe_size)} Nasdaq 100
          names. The published configuration — <strong>top 3 by composite momentum, rebalanced bi-weekly, 1.25×
          leveraged in bull regimes and fully in cash below the 200-day</strong> — compounds $100,000 into{' '}
          <strong>${num(Math.round(headline.Final_Value))}</strong> at {headline.CAGR.toFixed(2)}% CAGR. It is
          also the sixth of six setups tested, and what follows is the other five, the years it lost, and what
          the number costs in drawdown.
        </>
      }
      source="us stocks analysis/results/ — setup_ladder.csv, setupF_daily.csv, setupF_trades.csv, setupF_annual.csv, benchmarks.csv"
    >
      <Reveal className="stats">
        <Stat
          value={`${headline.CAGR.toFixed(2)}%`}
          label="10-year CAGR"
          note={`QQQ ${qqq.cagr.toFixed(2)}% over the same window`}
          tone="brass"
        />
        <Stat
          value={`+${num(Math.round(headline.Total_Return))}%`}
          label="Total net return"
          note={`$100k → $${num(Math.round(headline.Final_Value))}`}
          tone="pos"
        />
        <Stat
          value={`${headline.Max_DD.toFixed(2)}%`}
          label="Max drawdown"
          note={`QQQ took ${qqq.maxDd.toFixed(2)}% in the same decade`}
        />
        <Stat
          value={headline.Calmar.toFixed(2)}
          label="Calmar ratio"
          note={`Sharpe ${headline.Sharpe.toFixed(2)} at ${headline.Volatility.toFixed(1)}% volatility`}
        />
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">
          Equity curve — {meta.backtest_start} to {meta.backtest_end}
        </h3>
        <EquityChart curve={curve} ddFloor={headline.Max_DD} />
      </Reveal>

      <div className="callout">
        Read the shaded bands before the curve. The macro shield held cash for <b>{num(meta.bear_sessions)} of{' '}
        {num(meta.sessions)} sessions</b> — {cashPct.toFixed(0)}% of the decade — and that one rule is why 2022
        cost {y2022.strat.toFixed(1)}% against QQQ's {y2022.qqq.toFixed(1)}%. It is also why 2019 returned{' '}
        {y2019.strat.toFixed(1)}% while QQQ made +{y2019.qqq.toFixed(1)}%. The shield is not free: it buys the
        crash years by giving up the whipsaw ones.
      </div>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">The rules, in full</h3>
        <div className="tablewrap" style={{ padding: '0.3rem 1.4rem 1.2rem' }}>
          {RULES.map(([k, v]) => (
            <div key={k} className="stackrow">
              <div className="stackrow-k">{k}</div>
              <div>{v}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <div className="toggles">
          <button className={`toggle${view === 'ladder' ? ' on' : ''}`} onClick={() => setView('ladder')}>
            Six candidate setups
          </button>
          <button className={`toggle${view === 'annual' ? ' on' : ''}`} onClick={() => setView('annual')}>
            Year by year
          </button>
          <button className={`toggle${view === 'bench' ? ' on' : ''}`} onClick={() => setView('bench')}>
            Versus buy &amp; hold
          </button>
        </div>

        {view === 'ladder' && (
          <>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>Setup</th>
                    <th>Universe</th>
                    <th>Held</th>
                    <th>Lev</th>
                    <th>Rebal</th>
                    <th>CAGR</th>
                    <th>Max DD</th>
                    <th>Calmar</th>
                    <th>Sharpe</th>
                    <th>Trades</th>
                  </tr>
                </thead>
                <tbody>
                  {ladder.map((l, i) => (
                    <tr key={l.name} className={i === 0 ? 'lead' : ''}>
                      <td>{l.name}</td>
                      <td className="dim">{l.universe}</td>
                      <td>{l.positions}</td>
                      <td className="dim">{l.leverage.toFixed(2)}×</td>
                      <td className="dim">{l.rebal}</td>
                      <td>
                        <BarCell value={l.cagr} max={maxLadder} display={`${l.cagr.toFixed(1)}%`} tone="pos" />
                      </td>
                      <td className="neg">{l.maxDd.toFixed(1)}%</td>
                      <td>{l.calmar.toFixed(2)}</td>
                      <td className="dim">{l.sharpe.toFixed(2)}</td>
                      <td className="dim">{l.trades}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="source" style={{ borderTop: 0, marginTop: '0.9rem' }}>
              The all-cap variants reach for a wider universe and are punished for it — drawdowns of −69.2%,
              −70.0% and −59.7% against Setup F's −39.1%. Setup B is the honest rival: 4.4 CAGR points behind,
              but the shallowest drawdown of the group and the best Sharpe at 1.26. Ranked on risk-adjusted
              return rather than headline CAGR, B wins.
            </p>
          </>
        )}

        {view === 'annual' && (
          <>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Strategy</th>
                    <th>QQQ</th>
                    <th>SPY</th>
                    <th>Alpha vs QQQ</th>
                  </tr>
                </thead>
                <tbody>
                  {annual.map((a) => (
                    <tr key={a.year}>
                      <td>{a.year}</td>
                      <td>
                        <BarCell
                          value={a.strat}
                          max={maxAnnual}
                          display={`${a.strat > 0 ? '+' : ''}${a.strat.toFixed(1)}%`}
                          tone={a.strat > 0 ? 'pos' : 'neg'}
                        />
                      </td>
                      <td className={a.qqq > 0 ? 'pos' : 'neg'}>
                        {a.qqq > 0 ? '+' : ''}
                        {a.qqq.toFixed(1)}%
                      </td>
                      <td className="dim">
                        {a.spy > 0 ? '+' : ''}
                        {a.spy.toFixed(1)}%
                      </td>
                      <td className={a.alpha > 0 ? 'pos' : 'neg'}>
                        {a.alpha > 0 ? '+' : ''}
                        {a.alpha.toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="source" style={{ borderTop: 0, marginTop: '0.9rem' }}>
              {behindQqq} of {annual.length} years underperform QQQ and {downYears} are negative. One year —{' '}
              {bestYear.year}, at +{bestYear.strat.toFixed(1)}% on the NVDA and PLTR runs — compounds more than
              the five weakest years put together. A ten-year CAGR carried by one year has a single point of
              failure, and that is the honest reading of this table.
            </p>
          </>
        )}

        {view === 'bench' && (
          <>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>Series</th>
                    <th>CAGR</th>
                    <th>Total return</th>
                    <th>$100k becomes</th>
                    <th>Max DD</th>
                    <th>Volatility</th>
                    <th>Sharpe</th>
                    <th>Calmar</th>
                  </tr>
                </thead>
                <tbody>
                  {benchmarks.map((b, i) => (
                    <tr key={b.name} className={i === 0 ? 'lead' : ''}>
                      <td>{b.name}</td>
                      <td className="pos">{b.cagr.toFixed(2)}%</td>
                      <td>+{num(Math.round(b.totalRet))}%</td>
                      <td>${num(b.final)}</td>
                      <td className="neg">{b.maxDd.toFixed(2)}%</td>
                      <td className="dim">{b.vol.toFixed(2)}%</td>
                      <td>{b.sharpe.toFixed(2)}</td>
                      <td className="dim">{b.calmar.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="source" style={{ borderTop: 0, marginTop: '0.9rem' }}>
              All three rows use identical definitions on the same daily series — CAGR from first to last
              session, drawdown from the running peak, Sharpe at a 2.0% risk-free rate. The strategy carries{' '}
              {(headline.Volatility / qqq.vol).toFixed(1)}× the volatility of the index it trades. That is the
              price of the CAGR, and it belongs in the same table as the return.
            </p>
          </>
        )}
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">Anatomy of {trades.n} trades</h3>
        <div className="stats">
          <Stat value={`${trades.winRate}%`} label="Win rate" note={`${trades.wins} winners, ${trades.losses} losers`} />
          <Stat
            value={trades.profitFactor.toFixed(2)}
            label="Profit factor"
            note={`avg win +${trades.avgWin}% vs avg loss ${trades.avgLoss}%`}
            tone="pos"
          />
          <Stat
            value={`${trades.holdDays} days`}
            label="Average hold"
            note={`median trade ${trades.medianRet > 0 ? '+' : ''}${trades.medianRet}%`}
          />
          <Stat
            value={`+${trades.best}%`}
            label="Best single trade"
            note={`${trades.bestTrade} · worst was ${trades.worst}%`}
          />
        </div>
      </Reveal>

      <div className="callout">
        The ten largest winners account for <b>{trades.top10Share}% of net realised P&amp;L</b> — more than all of
        it, because the remaining {trades.n - 10} closed trades net out negative. {contributors[0].tk} alone contributed $
        {num(contributors[0].pnl)} across {contributors[0].n} holdings, while {detractors[0].tk} cost $
        {num(Math.abs(detractors[0].pnl))} across {detractors[0].n}. This is what a momentum return distribution
        looks like from the inside: a {trades.winRate}% win rate is nearly irrelevant next to whether the system
        was holding the two or three names that ran.
      </div>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <div className="grid two">
          <div>
            <h3 className="card-kicker">Which rule closes the position</h3>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>Exit trigger</th>
                    <th>Trades</th>
                    <th>Share</th>
                    <th>Win rate</th>
                    <th>Net P&amp;L</th>
                  </tr>
                </thead>
                <tbody>
                  {exits.map((e) => (
                    <tr key={e.reason}>
                      <td>{e.reason}</td>
                      <td className="dim">{e.n}</td>
                      <td className="dim">{e.share}%</td>
                      <td>{e.winRate}%</td>
                      <td className={e.pnl > 0 ? 'pos' : 'neg'}>
                        {e.pnl > 0 ? '+$' : '−$'}
                        {num(Math.abs(e.pnl))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="source" style={{ borderTop: 0, marginTop: '0.9rem' }}>
              Rank exits do the earning. The 50-day trend exit fires on {exits[1].share}% of trades at a{' '}
              {exits[1].winRate}% win rate — it is a loss-cutter, not a profit source, and it is supposed to look
              like this.
            </p>
          </div>

          <div>
            <h3 className="card-kicker">Ten names that carried it</h3>
            <div className="tablewrap">
              <table>
                <thead>
                  <tr>
                    <th>Ticker</th>
                    <th>Holdings</th>
                    <th>Net P&amp;L</th>
                  </tr>
                </thead>
                <tbody>
                  {contributors.map((c) => (
                    <tr key={c.tk}>
                      <td>{c.tk}</td>
                      <td className="dim">{c.n}</td>
                      <td>
                        <BarCell value={c.pnl} max={maxPnl} display={`+$${num(c.pnl)}`} tone="pos" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="source" style={{ borderTop: 0, marginTop: '0.9rem' }}>
              {ndx.symbolsTraded} distinct symbols were held across the decade out of a {meta.universe_size}-name
              universe — the concentration is in the P&amp;L, not the turnover.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">The evidence — every transaction, unabridged</h3>
        <p className="sec-lede" style={{ marginBottom: '1.4rem' }}>
          Aggregate statistics are a summary of evidence, not the evidence itself. Below is the complete
          ledger the simulation wrote: all {ledger.length} closed positions with entry and exit date, fill
          price, share count, realised P&amp;L and the rule that closed them. It is the same table printed on
          pages 6–16 of the report, and any figure on this page can be recomputed from it.
        </p>

        <div className="toggles">
          {Object.entries(LEDGER_VIEWS).map(([k, v]) => (
            <button key={k} className={`toggle${book === k ? ' on' : ''}`} onClick={() => setBook(k)}>
              {v.label}
            </button>
          ))}
        </div>

        <div className="tablewrap ledger">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Ticker</th>
                <th>Entry</th>
                <th>Exit</th>
                <th>Entry $</th>
                <th>Exit $</th>
                <th>Shares</th>
                <th>Return</th>
                <th>P&amp;L</th>
                <th>Closed by</th>
              </tr>
            </thead>
            <tbody>
              {LEDGER_VIEWS[book].rows.map((t, i) => (
                <tr key={`${t.tk}-${t.in}-${t.out}-${i}`}>
                  <td className="dim">{book === 'all' ? i + 1 : ledger.indexOf(t) + 1}</td>
                  <td>{t.tk}</td>
                  <td className="dim">{t.in}</td>
                  <td className="dim">{t.out}</td>
                  <td className="dim">${t.ep.toFixed(2)}</td>
                  <td className="dim">${t.xp.toFixed(2)}</td>
                  <td className="dim">{num(t.sh)}</td>
                  <td className={t.r > 0 ? 'pos' : 'neg'}>
                    {t.r > 0 ? '+' : ''}
                    {t.r.toFixed(2)}%
                  </td>
                  <td className={t.p > 0 ? 'pos' : 'neg'}>
                    {t.p > 0 ? '+$' : '−$'}
                    {num(Math.abs(t.p))}
                  </td>
                  <td className="dim">{t.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="source" style={{ borderTop: 0, marginTop: '0.9rem' }}>
          {book === 'all' ? 'Scroll the table — nothing is filtered out. ' : ''}
          The {ledger.length} closed positions realise ${num(realised)} between them; the remainder of the{' '}
          ${num(Math.round(headline.Final_Value - meta.start_capital))} total gain sits in positions still open
          on the final session and in compounding on capital already realised. Rows are the simulation's own
          output — <b>Rank</b> means the name fell out of the top 3, <b>50-SMA</b> that it lost its trend gate,
          <b> Shield</b> that the 200-day macro filter went to cash.
        </p>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">What would break this number</h3>
        <div className="grid three">
          <div className="card">
            <div className="card-kicker">Survivorship</div>
            <h4>The universe is today's index, not 2015's</h4>
            <p>
              All {meta.universe_size} tickers are current Nasdaq 100 members applied backwards over ten years.
              Names ejected between 2015 and 2024 never enter the ranking, and names that joined late — PLTR
              among the top contributors — are tradeable here from the first session. That inflates the CAGR by
              an amount this dataset cannot measure, and it is the largest single caveat on the figure.
            </p>
          </div>
          <div className="card">
            <div className="card-kicker">Leverage and costs</div>
            <h4>1.25× is a real cost in a real account</h4>
            <p>
              Margin interest on the borrowed 25% and 5 bps per side are the entire cost assumption. A wider
              spread, a gap through the rebalance print, or a broker rate above the assumed level all come
              straight out of the {headline.CAGR.toFixed(0)}%.
            </p>
          </div>
          <div className="card">
            <div className="card-kicker">Path</div>
            <h4>One decade is one sample</h4>
            <p>
              2015–2024 is the strongest US large-cap tech decade on record, and the shield was tested by exactly
              one bear market. A −{Math.abs(headline.Max_DD).toFixed(0)}% drawdown at{' '}
              {headline.Volatility.toFixed(0)}% volatility is what this held historically — not a bound on what
              it can do next.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal style={{ marginTop: '2.5rem' }}>
        <h3 className="card-kicker">Primary document</h3>
        <Doc doc={DOCS.nasdaqSetupF} />
      </Reveal>
    </Section>
  );
}
