import React from 'react';
import { PROFILE } from '../data/content';
import { RESEARCH } from '../data/research';
import { Reveal, num } from '../components/ui';

const { sweep, nifty, gold, build, ndx } = RESEARCH;

/* Headline figures. Scale first, because scale is what makes the rest measurable —
   every one of these is a count of work that exists on disk and regenerates itself. */
const LEDGER = [
  { v: num(sweep.combos), k: 'Configurations backtested', tone: 'brass' },
  { v: num(nifty.totalTrades + gold.totalTrades + ndx.trades.n), k: 'Trades simulated end to end' },
  { v: '4', k: 'Markets · 3 asset classes' },
  { v: '2010–26', k: 'Daily history tested' },
  { v: num(build.botLoc), k: 'Lines of production Python' },
];

export default function Masthead() {
  return (
    <header className="masthead" id="top">
      <div className="wrap">
        <Reveal>
          <div className="mast-eyebrow">
            {PROFILE.name} · Quantitative research · Systematic trading
          </div>
          <h1 className="mast-title">
            Strategies measured until the <em>numbers stop flattering</em> them.
          </h1>
          <p className="mast-body">{PROFILE.statement}</p>

          <p className="mast-seeking">
            {PROFILE.seeking} — <span>100% remote · {PROFILE.location}</span>
          </p>

          <div className="btnrow">
            <a href="#capabilities" className="btn solid">
              See the track record
            </a>
            <a href="#nasdaq" className="btn">
              Strongest result
            </a>
            <a href="#archive" className="btn">
              Evidence archive
            </a>
            <a href={`mailto:${PROFILE.email}`} className="btn">
              Get in touch
            </a>
          </div>
        </Reveal>

        <Reveal className="ledger">
          {LEDGER.map((l) => (
            <div key={l.k}>
              <div className={`led-v${l.tone ? ` ${l.tone}` : ''}`}>{l.v}</div>
              <div className="led-k">{l.k}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </header>
  );
}
