// Qualitative content. Figures here are transcribed from the source documents
// named in `source` on each block, so every claim stays traceable.

export const PROFILE = {
  name: 'Anand P',
  role: 'Quantitative Trader & Systems Developer',
  org: 'Independent quantitative research',
  seeking: 'Open to quantitative trader and systematic researcher seats',
  workMode: '100% remote / work from home (Tamil Nadu, India)',
  timezone: 'IST (UTC+5:30) — adaptable to all major market sessions (US / London / Asia)',
  email: 'stocksanand35@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anand-p-622aa8178',
  linkedinLabel: 'linkedin.com/in/anand-p-622aa8178',
  location: 'Tamil Nadu, India · IST (UTC+5:30)',
  statement:
    'I build the whole chain myself: pull the data, write the backtest, sweep the parameters until I know which ones actually matter, then ship the survivors as software that runs unattended. Four markets, three asset classes, and every figure below regenerated from a file on disk rather than typed in. The losing configurations are here too, because a strategy you only see at its best is a strategy you cannot size.',
};

// Capabilities, written against the language quantitative trading roles actually use.
// Rule for this block: every line names the artifact that proves it. Nothing aspirational
// sits in `competencies` — anything not yet evidenced belongs in `developing`.
export const CAPABILITIES = {
  positioning:
    'Systematic trading and quantitative research roles built on Python — strategy development, backtesting infrastructure, risk and performance measurement, and the production systems that keep them running.',

  // Said plainly rather than left to be inferred. The claim is not "I wrote every line
  // unaided" — it is that the reasoning, the experiment design and the verdict are mine.
  method: {
    headline: 'AI-assisted build, human-owned logic',
    body:
      'I build with AI coding tools and I am direct about it. What they do not supply is the part that matters: which hypothesis is worth testing, what would falsify it, which result to distrust, and when a number is too good to be real. The market logic, the experiment design and the decision to publish a losing model are mine.',
    proof: [
      'Controlled design — ten engines over one identical universe with identical exits, so the entry signal is the only variable',
      'Ranked on per-symbol medians rather than means, so a few runaway winners cannot describe a strategy',
      'Reported as medians across 8,640 runs instead of the best row, because the best row is selection',
      'Published the four F&O exits that lose money, and the 63%-win-rate method with negative expectancy',
      'Cut a previous version of this page whose Forex and US figures had no source in my data',
    ],
    close:
      'Anyone can generate a backtest that prints a large number. Knowing which of those numbers is a lie is the skill, and every section here is arranged to show that judgement being applied.',
  },

  availability: {
    headline: 'Work Arrangement',
    rows: [
      ['Work mode', '100% remote / work from home (Tamil Nadu, India)'],
      ['Timezone & flexibility', 'IST (UTC+5:30) — adaptable to all major market sessions (US / London / Asia)'],
    ],
  },

  competencies: [
    {
      area: 'Systematic strategy development',
      body:
        'Ten distinct entry engines specified, implemented and measured against one controlled universe — identical symbols, identical exits, so the signal is the only variable.',
      evidence: '10 engines · 484 symbols · 192,482 trades',
    },
    {
      area: 'Backtesting infrastructure',
      body:
        'Backtest and portfolio-simulation engines written from scratch in Python, driving grid studies large enough to separate a real effect from a lucky run.',
      evidence: '8,640-configuration sweep · 16-year daily history',
    },
    {
      area: 'Risk management & position sizing',
      body:
        'Drawdown, trailing-stop width, portfolio concentration and index hedging measured as design parameters rather than assumed — each one tested for its marginal effect on risk-adjusted return.',
      evidence: 'Sharpe · Sortino · Calmar · max drawdown · profit factor',
    },
    {
      area: 'Performance optimisation',
      body:
        'Parameter sensitivity analysis across eight design axes, reported as medians over thousands of runs so that a chosen setting reflects a robust effect and not an overfit peak.',
      evidence: 'Median-of-1,080-runs marginal effects per level',
    },
    {
      area: 'Time-series analysis',
      body:
        'Daily and intraday OHLCV pipelines across multiple timeframes and markets — moving-average structure, momentum and rate-of-change scoring, realised volatility normalisation, relative strength against a benchmark.',
      evidence: '4,101 sessions · M10/M15/M20 intraday · 2010–2026',
    },
    {
      area: 'Post-trade analysis & attribution',
      body:
        'Win/loss decomposition, average win against average loss, profit factor, monthly performance breakdown, and comparison of exit rules over one fixed entry signal.',
      evidence: '7 exit methods on a common trade set',
    },
    {
      area: 'Production systems & API integration',
      body:
        'A FastAPI service covering Indian and US markets: the Angel One broker API with TOTP authentication, NSE exchange data, US universe screening across S&P 500 and Nasdaq 100, a message-delivery API and a Postgres-backed store — async throughout, deployed and running on a schedule without supervision.',
      evidence: '15,264 LOC · 33 services · 39 endpoints · 75 reports',
    },
    {
      area: 'Multi-asset coverage',
      body:
        'Indian cash equities and F&O, spot gold as a commodity, and US large-cap universes — the same signal logic carried across markets without re-tuning, as a generalisation test.',
      evidence: 'Nifty 500 · XAU/USD · S&P 500 / Nasdaq 100',
    },
  ],

  // Grouped for scanning. Every entry appears in the work described on this page.
  stack: [
    {
      group: 'Languages & core',
      items: ['Python 3.11', 'pandas', 'NumPy', 'asyncio', 'SQL', 'Pine Script v5/v6', 'MQL5', 'JavaScript', 'TypeScript'],
    },
    {
      group: 'Quantitative methods',
      items: [
        'Backtesting', 'Parameter optimisation', 'Sensitivity analysis', 'Time-series analysis',
        'Probability & statistics', 'Risk-adjusted return', 'Sharpe / Sortino / Calmar',
        'Maximum drawdown', 'Profit factor', 'Position sizing', 'Momentum', 'Mean reversion',
        'Trend following', 'Breakout systems', 'Volatility normalisation', 'Relative strength',
      ],
    },
    {
      group: 'Markets & instruments',
      items: ['Equities', 'Futures & options (F&O)', 'Commodities (spot gold)', 'FX', 'Index derivatives', 'Open-interest & order-flow analysis'],
    },
    {
      group: 'Systems & tooling',
      items: ['FastAPI', 'REST APIs', 'Broker API integration', 'Supabase / Postgres', 'Docker-free VPS deploy', 'Matplotlib', 'ReportLab', 'Git', 'MetaTrader 5', 'TradingView', 'AI-assisted development', 'Agentic AI tooling'],
    },
  ],

  // Stated plainly rather than left for an interviewer to discover.
  developing: {
    headline: 'Not yet in my production work',
    items: [
      'Machine learning for signal research — scikit-learn and gradient boosting',
      'Bayesian inference and probabilistic programming',
      'C++ and low-latency execution paths',
      'WebSocket streaming and FIX-protocol connectivity',
    ],
    note:
      'These are absent from my codebase today, so I am not going to imply otherwise. The infrastructure they would plug into — data pipelines, a backtest harness, live execution and post-trade measurement — is already built and running.',
  },
};

// Source: momentum traging/analysis_15yr_20pct_similarities.md
export const STUDY = {
  source: 'analysis_15yr_20pct_similarities.md',
  window: 'January 2010 – August 2026',
  sessions: '4,101 trading days',
  universe: 'Nifty 500',
  setups: 32722,
  horizon: '60 trading days',
  outcomes: [
    { label: 'Reached +20%', n: '9,966', pct: '30.5%', tone: 'good' },
    { label: 'Reached +50%', n: '1,932', pct: '5.9%', tone: 'good' },
    { label: 'Reached +100%', n: '468', pct: '1.4%', tone: 'good' },
    { label: 'Failed (<5% peak)', n: '11,288', pct: '34.5%', tone: 'bad' },
  ],
  // The entry-state table: what separates a winner from a failure at signal time.
  discriminators: [
    { feature: 'Distance from 52-week high (median)', failed: '−12.92%', winner: '−7.44%', big: '−5.82%' },
    { feature: 'Distance above 200-day SMA', failed: '+11.70%', winner: '+18.62%', big: '+24.10%' },
    { feature: 'RSI(14) at entry', failed: '63.69', winner: '64.34', big: '65.80' },
    { feature: '3-month prior momentum', failed: '+10.64%', winner: '+16.39%', big: '+23.40%' },
    { feature: '3-month RS vs Nifty 50', failed: '+6.92%', winner: '+11.89%', big: '+18.30%' },
    { feature: 'Max 60-day downside drawdown', failed: '−18.34%', winner: '−3.39%', big: '−1.95%' },
  ],
  findings: [
    {
      title: 'High ground beats cheap',
      body: 'Winners break out a median 7.44% below their 52-week high. Inside 0–3% of that high the conversion to +20% is 33.3%. There is no trapped supply overhead to sell into the move.',
    },
    {
      title: 'Moving averages must be stacked',
      body: 'Price > 10 EMA > 20 EMA > 50 SMA > 200 SMA appeared in 13,441 setups and converted to +20% at 33.6% — meaningfully above the 30.5% base rate.',
    },
    {
      title: 'Relative strength is the strongest single predictor',
      body: 'A prior 3-month return beating the Nifty 50 by more than 15% produced a 37.4% win rate and a 9.0% multibagger rate. No other lone feature does better.',
    },
    {
      title: 'RSI 60–75, not oversold',
      body: 'Winners enter with RSI(14) averaging 64.34. Sub-45 readings are largely absent — this is a continuation edge, not a bottom-fishing one.',
    },
    {
      title: 'The stop is the signal',
      body: 'A +20% winner gives back only 3.39% on average before it works. Past roughly 5–8% below entry the setup has statistically already failed, which is what makes a tight invalidation affordable.',
    },
  ],
  sectors: [
    { sector: 'Capital Goods / Infra', winners: '1,882', total: '5,084', rate: 37.02 },
    { sector: 'Textiles', winners: '168', total: '475', rate: 35.37 },
    { sector: 'Metals & Mining', winners: '586', total: '1,668', rate: 35.13 },
    { sector: 'Realty', winners: '362', total: '1,057', rate: 34.25 },
    { sector: 'Chemicals', winners: '793', total: '2,482', rate: 31.95 },
    { sector: 'Consumer Durables', winners: '445', total: '1,522', rate: 29.24 },
    { sector: 'Power & Energy', winners: '423', total: '1,452', rate: 29.13 },
    { sector: 'Financial Services', winners: '2,142', total: '7,396', rate: 28.96 },
    { sector: 'Information Technology', winners: '627', total: '2,212', rate: 28.35 },
    { sector: 'Healthcare / Pharma', winners: '1,034', total: '3,776', rate: 27.38 },
  ],
  baseRate: 30.46,
  models: [
    {
      name: 'Hard +20% target',
      note: 'Books the move, recycles capital every ~16 days.',
      capital: '₹2.57 Cr', ret: '+5,031.0%', cagr: '28.74%',
      dd: '−36.60%', trades: '1,762', win: '52.6%', pf: '1.43', hold: '15.9d',
      lead: true,
    },
    {
      name: 'Scale out 50% @ +20%, trail 10 EMA',
      note: 'Best profit factor — half off the table, half riding.',
      capital: '₹1.78 Cr', ret: '+3,460.8%', cagr: '25.76%',
      dd: '−37.79%', trades: '1,215', win: '47.7%', pf: '1.59', hold: '23.7d',
    },
    {
      name: 'Pure trend follow, 15% trailing stop',
      note: 'Lowest win rate, longest holds, fewest decisions.',
      capital: '₹1.26 Cr', ret: '+2,420.3%', cagr: '23.00%',
      dd: '−38.85%', trades: '775', win: '37.4%', pf: '1.53', hold: '33.7d',
    },
    {
      name: 'Nifty 50 buy & hold',
      note: 'The benchmark. Similar drawdown, a third of the CAGR.',
      capital: '₹19.99 L', ret: '+299.8%', cagr: '9.30%',
      dd: '−38.40%', trades: '—', win: '—', pf: '—', hold: '15 years',
      bench: true,
    },
  ],
  modelBasis: '₹5,00,000 across 8 concurrent positions, 2011–2026.',
};

// Source: RRE indicators/*.txt
export const INDICATORS = [
  {
    name: 'RRE Liquidity + VWMA',
    version: 'v6',
    file: 'RRE Liquidity + VWMA.txt',
    body: 'Draws swing-pivot liquidity lines confirmed over N bars and pairs them with a VWMA(20) reclaim. Caps live lines to keep the chart readable under the 200-line plot budget.',
    params: ['Confirmation bars 2', 'Max lines 5', 'Extend 40 bars'],
    rank: 1,
  },
  {
    name: 'RRE Zones v2',
    version: 'v6',
    file: 'RRE Zones.txt',
    body: 'Supply/demand zones from impulse legs, with an auto-adjust mode that rescales swing length and impulse threshold to the active timeframe rather than forcing one fixed setting.',
    params: ['Auto-adjust', 'Swing 5', 'Impulse 1.5x'],
  },
  {
    name: 'RRE Line (TRAMA)',
    version: 'v5',
    file: 'RRE line.txt',
    body: 'Trend-Regularity Adaptive Moving Average over 99 bars. Its smoothing constant is the squared rate of new highs/lows, so it flattens hard in chop and accelerates in a real trend.',
    params: ['Length 99'],
    rank: 2,
  },
  {
    name: 'RRE Swing',
    version: 'v6',
    file: 'RRE Swing.txt',
    body: 'SuperTrend tuned faster than stock settings (ATR 7 at 2.5x rather than 10 at 3.0) and combined with Parabolic SAR for swing-side confirmation.',
    params: ['ATR 7', 'Factor 2.5', 'SAR 0.02'],
  },
  {
    name: 'RRE Volume + VWMA',
    version: 'v6',
    file: 'RRE vol + vwam.txt',
    body: 'Flags relative-volume expansion at 5x the 20-period average occurring into a VWMA(20) reclaim — the thrust and the level have to agree.',
    params: ['Vol multiple 5.0', 'Avg 20', 'VWMA 20'],
  },
  {
    name: 'HA RSI 60/40',
    version: 'v5',
    file: 'Rsi ha 6040.txt',
    body: 'Heikin-Ashi trend body with RSI bands moved to 60/40 instead of 70/30, so signals fire on momentum handoff rather than exhaustion. Line offset scales with ATR(10).',
    params: ['RSI 14', 'Buy 60 / Sell 40', 'ATR 10'],
  },
  {
    name: 'Trend Reversal + SuperTrend',
    version: 'v5',
    file: 'TREND reversal.txt',
    body: 'MACD(12/26/9) reversal signal gated by a SuperTrend(7, 2.0) filter, which suppresses the counter-trend half of the MACD crosses.',
    params: ['MACD 12/26/9', 'ST 7 / 2.0'],
  },
];

// Source: RRE TRADING BOT/ (main.py, services/, requirements.txt, Procfile)
export const BOT = {
  source: 'RRE TRADING BOT/',
  stack: ['FastAPI', 'Python 3.11.9', 'Uvicorn', 'Pandas', 'Supabase', 'httpx'],
  integrations: [
    { name: 'Angel One SmartAPI', use: 'Live LTP, F&O lot sizes and margin, TOTP auth' },
    { name: 'NSE India', use: 'Quotes, option chain, OI build-up, bhavcopy, sector indices' },
    { name: 'Yahoo Finance', use: 'US universes — S&P 500, Nasdaq 100, sub-$10 screener' },
    { name: 'Telegram Bot API', use: 'Push delivery of every scheduled report and alert' },
    { name: 'Supabase', use: 'Portfolio state and alert-log persistence across restarts' },
    { name: 'OpenAI', use: 'Narrative report generation, with per-call cost accounting' },
  ],
  loops: [
    { time: '08:45 IST', name: 'Pre-market', body: 'Global markets, gap map, overnight news, the day\'s watchlist.' },
    { time: '15:11 IST', name: 'PM report', body: 'Intraday positioning update pushed before the close.' },
    { time: '16:10 IST', name: 'EOD report', body: 'Full end-of-day PDF: movers, sector rotation, OI shifts, tomorrow\'s candidates.' },
    { time: 'Continuous', name: 'Pivot scanner', body: 'Watches R1 pivot breaks and fires an alert the moment one triggers.' },
    { time: 'Weekly', name: 'Weekly review', body: 'Rolls the week up into a performance and rotation digest.' },
  ],
  scanners: [
    'VWMA(20) + TRAMA(99) crossover — first close above both',
    'Support retest — pullback into a level that already held twice',
    'Volume breakout — relative-volume expansion with range extension',
    'Order block / fair value gap detection',
    'Sector rotation, multi-timeframe',
    'Resistance retest, exported as PDF',
    'Tomorrow-runner shortlist from the day\'s closes',
    'US mirror of the Indian setups across three universes',
  ],
};

// Source: yt/MQL5_Strategies/MASTER_LIST.md
export const MQL5 = {
  source: 'MQL5_Strategies/MASTER_LIST.md',
  total: 46,
  regular: 38,
  highRisk: 8,
  families: [
    { name: 'Trend pullback (triple EMA, golden zone)', n: 11 },
    { name: 'Gold-specific trend & continuation', n: 8 },
    { name: 'Support / resistance & breakout', n: 6 },
    { name: 'Smart-money liquidity sweep', n: 3 },
    { name: 'RSI systems (divergence, dual-RSI, cross)', n: 4 },
    { name: 'Bollinger squeeze & volatility', n: 3 },
    { name: 'Other single-concept systems', n: 3 },
    { name: 'Martingale / grid — flagged high-risk', n: 8 },
  ],
  disclosure:
    'Eight of these are martingale or grid designs with no per-trade stop. They are implemented, labelled high-risk, and each prints a startup warning — I keep them because knowing exactly how a blow-up profile is constructed is part of being able to refuse to trade one.',
};

// Primary documents shipped alongside the site, in public/assets/reports/.
// Figures are read off the report's own cover page, not restated from elsewhere.
export const DOCS = {
  momentum15yr: {
    href: 'assets/reports/Backtest_15Year_Report.pdf',
    title: 'Nifty 500 Momentum Strategy — 15-Year Backtest Report',
    meta: '01 Aug 2011 – 07 Aug 2026 · TSL 25% · 50-day SMA · 680 KB PDF',
    figures: [
      ['Total return', '+25,113.0%'],
      ['CAGR', '+44.48%'],
      ['Max drawdown', '−45.6%'],
      ['Trades', '2,717'],
      ['Alpha vs Nifty 50', '+34.03%'],
    ],
    note:
      'This is the same momentum family as the sweep above, run over fifteen years at one fixed configuration — 25% trailing stop on a 50-day SMA filter, which is the pair the sweep independently ranks at the top. Read the drawdown first: −45.6% is deeper than anything in the five-year grid, and it is what holding this through 2011–2026 actually cost.',
  },
  nasdaqSetupF: {
    href: 'assets/reports/Setup_F_Nasdaq100_Top3_Strategy_Report.pdf',
    title: 'Setup F — Nasdaq 100 Top 3 Bi-Weekly Momentum Strategy',
    meta: '02 Jan 2015 – 31 Dec 2024 · $100,000 · 1.25x bull leverage · 16 pp · 942 KB PDF',
    figures: [
      ['CAGR', '+41.72%'],
      ['Total return', '+3,163.0%'],
      ['Max drawdown', '−39.09%'],
      ['Calmar', '1.07'],
      ['Trades', '284'],
    ],
    note:
      'The full report: all eight trading rules, the calendar-year breakdown, the execution playbook, and every one of the 284 transactions with entry, exit, size and exit reason. The tables on this page are regenerated from the same simulation that produced it, so the two cannot drift apart.',
  },
  eodSample: {
    href: 'assets/reports/RRE_Sample_EOD_Report.pdf',
    title: 'Sample end-of-day report',
    meta: 'Generated by the bot · unedited · 60 KB PDF',
    note: 'One night of output from the 16:10 IST loop, exactly as it lands in Telegram.',
  },
};

// The research archive, served from public/assets/research/. Headline figures are
// read off each report's own cover page — not restated from anywhere else on this site.
export const ARCHIVE = [
  {
    file: 'Bitcoin_Comprehensive_Quantitative_Analysis_and_Backtesting_Report.pdf',
    title: 'Bitcoin (BTC-USD) — 120-Strategy Quantitative & Multi-Timeframe Study',
    meta: 'BTC-USD · Sep 2014 – Sep 2026 · 4,370 daily bars · $10,000 · 4.0% cash yield · 10 pages · 5.5 MB PDF',
    figures: [
      ['Daily strategies', '120'],
      ['MTF systems', '77'],
      ['Best Sharpe', '2.00'],
      ['CAGR', '83.2%'],
      ['Max DD', '−41.5%'],
    ],
    note:
      'The full BTC-USD study: 120 daily systems across six families, 77 weekly-over-daily confluence pairs, a 1D/3D/1W cross-resolution benchmark, a six-regime stress test from the 2018 winter to the ETF cycle, and the backtest engineering guide with the vectorised Python it was run with. The engine is honest about the two things that usually inflate crypto backtests — every signal is lagged (T-1 daily, W-1 weekly, so a Sunday weekly close cannot trade before Monday) and idle cash compounds at 4.0% rather than sitting free. Read the ranking as in-sample: 120 strategies were scored on one 11-year window and the table reports the winners of that same window, so the 2.00 Sharpe at the top carries selection bias. The defensible claim is not the CAGR — buy-and-hold itself returned 70.26% annualised here — it is the drawdown: −41.5% against buy-and-hold’s −83.4%, and −17.8% on the Elder Triple Screen variant that is in the market 11.5% of the time.',
  },
  {
    file: 'Setup_F_Nasdaq100_Top3_Strategy_Report.pdf',
    title: 'Setup F — Nasdaq 100 Top 3 Bi-Weekly Momentum',
    meta: 'Nasdaq 100 · Jan 2015 – Dec 2024 · $100,000 · 1.25x bull leverage · 16 pages',
    figures: [['CAGR', '41.72%'], ['Max DD', '−39.09%'], ['Calmar', '1.07'], ['Sharpe', '1.11'], ['Trades', '284']],
    note: 'The full report behind section 07 — eight trading rules, the calendar-year table, the execution playbook, and the complete 284-row transaction ledger with entry, exit, size and exit reason for every position.',
  },
  {
    file: 'Momentum_5Year_Best_Setup_Report.pdf',
    title: '5-Year Momentum Strategy — Optimal Setup',
    meta: 'Nifty 500 · Aug 2021 – Aug 2026 · ₹5,00,000 · hedged multi-momentum',
    figures: [['CAGR', '48.7%'], ['Sharpe', '1.87'], ['Max DD', '−26.6%'], ['Profit factor', '1.79'], ['Win rate', '42.2%']],
    note: 'The momentum score is (1M + 6M + 9M return) ÷ 3-month volatility — the same formula the sweep ranks first, reported here as a standalone run.',
  },
  {
    file: 'Backtest_15Year_20Pct_Similarity_Report.pdf',
    title: '15-Year Breakout Similarity Study',
    meta: 'Nifty 500 · 2010 – 2026 · 32,722 breakout events',
    figures: [['Setups', '32,722'], ['+20% winners', '9,966'], ['Multibaggers', '1,932'], ['Doublers', '468']],
    note: 'The full report behind section 02 — predictor tables, sector distribution and the exit-model comparison in their original form.',
  },
  {
    file: 'Momentum_Backtest_Complete_Report.pdf',
    title: 'Momentum Strategy — Complete Backtest',
    meta: 'Nifty 500 · 2009 – 2024 · top-heavy weighting · 136 pages',
    figures: [['TSL 15% + SMA 50', '~49% CAGR'], ['TSL 25% + SMA 50', '~47% CAGR']],
    note: 'Two configurations compared over fifteen years with all transaction costs included and no regime filter applied.',
  },
  {
    file: 'TRAMA_and_VWMA_Support_2026_Backtest_Report.pdf',
    title: 'TRAMA & VWMA Support — 2026 Backtest',
    meta: 'Nifty 500 · 1 Jan – 24 Aug 2026 · pullback-to-support study',
    figures: [['TRAMA', '99-period'], ['VWMA', '20-period']],
    note: 'Evaluates buying pullbacks into dynamic support, using the two indicators that drive the top-ranked engines in section 04.',
  },
  {
    file: 'TSR_Top3_Channel_Patterns_1Year_Swing_Backtest_Report.pdf',
    title: 'Channel Patterns — 1-Year Swing Backtest',
    meta: '1 Aug 2025 – 5 Aug 2026 · 10–15 day holds · 10 position slots',
    figures: [['Hold cap', '2–3 weeks'], ['Capital', '₹5,00,000']],
    note: 'Three channel-pattern screeners tested under strict holding limits with active stop-loss and trailing-stop rules.',
  },
  {
    file: 'Strategy_Inputs_Reference.pdf',
    title: 'Strategy Input Reference — 71 Strategies, Every Parameter',
    meta: 'GOLD.i# (XM Global) · 0.01 lot · $10,000 nominal · 37 pages',
    figures: [
      ['Strategies', '71'],
      ['Input parameters', '905'],
      ['Swept best-found', '27'],
      ['5-year validated', '4'],
      ['Results pooled', '11,673'],
    ],
    note:
      'The full parameter surface of every gold strategy built here — identity, defaults compiled into each .mq5, and best-found settings where a sweep was run. Read its own warning first: only four strategies were validated across a full five-year cycle, and that test showed 98–109% of their profit came from the 2024–2026 bull run. The report says to treat the two-year figures as optimistic, and it is right.',
  },
  {
    file: 'MT5_EA_Strategy_Audit.pdf',
    title: 'MT5 Expert Advisor Source Code Audit',
    meta: '44 advisors read from .mq5 source · not inferred from the videos · 1.7 MB PDF',
    figures: [
      ['Advisors audited', '44'],
      ['Flagged high-risk', '8'],
      ['Videos sourced', '84'],
    ],
    note:
      'Indicators, entry and exit logic, sizing and every tunable default, read out of the source rather than the marketing. Eight designs are flagged as martingale, no-stop-loss grid or asymmetric hedge, and a separate section lists the outright bugs — cooldowns wired to nothing, trailing stops that are empty stubs, inputs whose labels do not match their values.',
  },
  {
    file: 'BoxxoCode_Strategy_Report.pdf',
    title: 'Strategy Specification Catalogue',
    meta: '55 strategies with recovered .mq5 source · 56 pages',
    figures: [['Strategies', '55'], ['Pages', '56']],
    note:
      'The second source catalogue, one page per strategy: indicators used, risk and trade management, and the key input parameters with their real defaults. Near-duplicate entries across this and the audit were merged into single implementations before anything was tested.',
  },
  {
    file: 'XAUUSD_Backtest_Methodology_Report.pdf',
    title: 'XAU/USD Backtest Methodology & P&L Derivation',
    meta: 'XM GOLD contract spec · Aug 2024 – Jul 2026 · 104 weeks · 0.01 lot',
    figures: [
      ['Contract size', '100 oz'],
      ['Weeks tested', '104'],
      ['Profit factor', '2.44–2.53'],
      ['Weekly win rate', '89.4%'],
    ],
    note:
      'The document that makes every point column on this site readable: contract size, tick value, and the exact points-to-dollars conversion at the lot size actually tested. Its own performance section is a two-year window — and it is precisely the 2024–2026 window the input reference above flags as carrying nearly all of the profit. Take the methodology; discount the weekly figures accordingly.',
  },
  {
    file: 'RSI_HA_Jackpot_Strategy_and_Backtest_Report.pdf',
    title: 'RSI + Heikin Ashi Jackpot EA — 2-Year Audit',
    meta: 'XAUUSD M10 · Aug 2024 – Jul 2026 · 105 weeks · 0.01 lot · 8 pages',
    figures: [
      ['Trades', '3,482'],
      ['Win rate', '45.66%'],
      ['Profit factor', '1.49'],
      ['Net (0.01 lot)', '+$9,958'],
      ['Max DD', '$214.57'],
    ],
    note:
      'RSI(14) breakout past 60/40 with Heikin Ashi colour agreement, gated by an H1 EMA-200 regime filter, at a fixed 1:2 stop and target — rules, circuit breakers and the full 24-month ledger. Two things the headline does not say: 98.4% of the net profit lands in 2025–2026, with the first five months contributing 1.6%; and the Monday-morning filter that lifts the weekly win rate from 59.0% to 73.3% was chosen on this same window, so that gain is in-sample. The $214.57 drawdown is 21.5% of the $1,000 starting balance, not the 46x return-to-drawdown ratio the cover leads with.',
  },
];

// XAU/USD documents, kept separate because section 05 links them directly.
export const GOLD_DOCS = [
  {
    file: 'XAUUSD_Backtest_Methodology_Report.pdf',
    title: 'XAU/USD Backtest Methodology & P&L Calculation',
    meta: 'XM GOLD contract spec · point-to-USD derivation · 10 KB PDF',
    note: 'The document that makes the point columns readable: contract size, tick value, and how a net-points figure converts to dollars at the lot size actually tested.',
  },
  {
    file: 'MT5_EA_Strategy_Audit.pdf',
    title: 'MT5 Expert Advisor Strategy Audit',
    meta: '44 advisor specifications · entry, exit and parameter audit · 1.7 MB PDF',
    note: 'One of the two source documents the 46-advisor library was written from — rules and default parameters per strategy.',
  },
  {
    file: 'BoxxoCode_Strategy_Report.pdf',
    title: 'Strategy Specification Report',
    meta: '55 catalogued strategy entries · 67 KB PDF',
    note: 'The second source catalogue. Near-duplicate entries across the two documents were merged into single implementations.',
  },
  {
    file: 'Strategy_Inputs_Reference.pdf',
    title: 'Strategy Inputs Reference',
    meta: 'Per-advisor input parameters as implemented · 90 KB PDF',
    note: 'What each advisor actually exposes as a configurable input, which is what the harness overrides to force a common lot size.',
  },
];

// Certificates, read off the certificate images themselves rather than from the
// labels the old portfolio used ("Complete Course", "Complete UDMY" told you
// nothing). Each entry carries the issuer, the date and the verification ID
// printed on the document, so a reader can check it rather than trust it.
// Source: the nine certificate scans in public/assets/certificates/.
export const CERTIFICATES = [
  {
    file: 'guvi-machine-learning-101.png',
    title: 'Machine Learning 101',
    issuer: 'GUVI Geek Networks',
    date: '2 August 2023',
    id: '41u989P6p840s7qE3Q',
    verify: 'https://www.guvi.in/certificate?id=41u989P6p840s7qE3Q',
  },
  {
    file: 'guvi-javascript.png',
    title: 'JavaScript',
    issuer: 'GUVI Geek Networks',
    date: '4 August 2023',
    id: '16W1fj11S69J67A2w3',
    verify: 'https://www.guvi.in/certificate?id=16W1fj11S69J67A2w3',
  },
  {
    file: 'guvi-mysql.png',
    title: 'MySQL',
    issuer: 'GUVI Geek Networks',
    date: '8 August 2023',
    id: '66I1R48e95X1690747',
    verify: 'https://www.guvi.in/certificate?id=66I1R48e95X1690747',
  },
  {
    file: 'guvi-mongodb.png',
    title: 'MongoDB',
    issuer: 'GUVI Geek Networks',
    date: '9 August 2023',
    id: '106d507P1A9w1SJ2Q6',
    verify: 'https://www.guvi.in/certificate?id=106d507P1A9w1SJ2Q6',
  },
  {
    file: 'guvi-aws.png',
    title: 'AWS',
    issuer: 'GUVI Geek Networks',
    date: '10 August 2023',
    id: '4A869RIW11v07C465r',
    verify: 'https://www.guvi.in/certificate?id=4A869RIW11v07C465r',
  },
  {
    file: 'guvi-html-css.png',
    title: 'Modern HTML & CSS',
    issuer: 'GUVI Geek Networks',
    date: '18 August 2023',
    id: '6371RWC65k949224Hm',
    verify: 'https://www.guvi.in/certificate?id=6371RWC65k949224Hm',
  },
  {
    file: 'udemy-web-development-bootcamp.jpg',
    title: 'The Complete 2023 Web Development Bootcamp',
    issuer: 'Udemy \u00b7 Dr. Angela Yu',
    date: '14 June 2023',
    id: 'UC-9119f073-4aa0-4a0e-9472-be086a851cbe',
    verify: 'https://ude.my/UC-9119f073-4aa0-4a0e-9472-be086a851cbe',
    note: '66 hours',
  },
  {
    file: 'teachnook-webdev-internship.jpg',
    title: 'Web Development Internship',
    issuer: 'Immensphere, in association with Teachnook',
    date: '1 Jan \u2013 28 Feb 2023',
    id: 'TNINTC22-1183',
  },
  {
    file: 'teachnook-webdev-course.jpg',
    title: 'Web Development Course',
    issuer: 'Teachnook, with Wissenaire \u00b7 IIT Bhubaneshwar',
    date: '1 Jan \u2013 28 Feb 2023',
    id: 'TNINTC22-2366',
  },
];

// Said plainly so the section cannot be mistaken for more than it is.
export const CERTIFICATES_NOTE =
  'Nine certificates from 2023, before the quantitative work on this site. Six are short GUVI course certificates, two are the Teachnook web-development internship and its course, and one is a 66-hour Udemy bootcamp. They are online course completions, not professional qualifications, and they are here with their issue dates and verification IDs so that is checkable rather than implied. The Machine Learning and MySQL certificates are the two that connect to the research above; the rest are web development, which is what built this page.';

export const ARCHIVE_NOTE =
  'These are the original research documents, unedited. Everything quoted elsewhere on this page was computed from the same underlying data — the reports are here so the figures can be checked rather than taken on trust.';

// Source: yt/MQL5_Strategies/Backtest/ — Run-AllBacktests.ps1, config/Config.ps1,
// config/tester_template.ini, scripts/parse_report.py, scripts/rank_results.py
export const HARNESS = {
  source: 'yt/MQL5_Strategies/Backtest/',
  intro:
    'Forty-six expert advisors is too many to test by hand, and testing them by hand is how inconsistent settings creep in. So the Strategy Tester runs itself: one PowerShell pipeline compiles every advisor, tests each one on every timeframe under identical conditions, parses the resulting reports and ranks them — unattended, start to finish.',
  steps: [
    {
      n: '01',
      name: 'Compile',
      body: 'Each .mq5 is copied into the terminal\'s Experts folder and built with MetaEditor64.exe. Any strategy reporting compile errors is logged and skipped before a test is ever launched.',
    },
    {
      n: '02',
      name: 'Generate tester config',
      body: 'One .ini per strategy and timeframe, written from a template. A [TesterInputs] block overrides the advisor\'s own lot input so every result is measured at the same size.',
    },
    {
      n: '03',
      name: 'Run headless',
      body: 'terminal64.exe launches with /config and ShutdownTerminal=1, so it runs the test and exits on its own. No GUI, no clicking, no visual mode.',
    },
    {
      n: '04',
      name: 'Parse the report',
      body: 'parse_report.py locates the generated .htm report, extracts the metrics into XML and appends one row per run to a combined results CSV.',
    },
    {
      n: '05',
      name: 'Rank',
      body: 'rank_results.py sorts every completed run into a ranked table and a top-10 summary, which is what section 05 reports.',
    },
  ],
  controls: [
    ['Symbol', 'GOLD.i# — the broker\'s actual XAU/USD instrument'],
    ['Timeframes', 'M10 · M15 · M30 · H1, every strategy on each'],
    ['Model', '1-minute OHLC'],
    ['Deposit', '$10,000 at 1:1000 leverage'],
    ['Lot size', 'Forced identical across all strategies'],
    ['Window', 'Rolling one year to the run date'],
  ],
  engineering: [
    {
      title: 'The compiler lies about its exit code',
      body: 'MetaEditor64.exe returns exit code 1 even on a clean build. Trusting it would have silently discarded working strategies, so the pipeline parses the "Result: N errors, M warnings" line out of the compile log instead and treats that as authoritative.',
    },
    {
      title: 'Nothing is allowed to hang',
      body: 'Each Strategy Tester run is capped in wall-clock minutes. On overrun the terminal process is killed, the run is recorded as timed out, and the loop moves on — one bad advisor cannot stall a forty-six-strategy batch.',
    },
    {
      title: 'Identical conditions, or the comparison is meaningless',
      body: 'Symbol, model, dates, deposit, leverage and lot size are pinned in one config file that every run reads. That is what makes the profit factors in section 05 comparable to each other rather than a collection of unrelated tests.',
    },
  ],
};

// Deployment architecture for live execution. The EA path is how the advisors in
// section 05 actually run. The webhook path is the design I would deploy for
// TradingView-originated signals — it is documented here as architecture, and the
// receiver is not yet part of the codebase.
export const EXECUTION = {
  paths: [
    {
      key: 'ea',
      tag: 'Path A · self-contained',
      name: 'Expert Advisor on MT5, hosted on a VPS',
      status: 'built',
      body:
        'The compiled advisor is attached to a chart in a MetaTrader 5 terminal running on a VPS. It evaluates its rules on each new bar and calls order_send inside the terminal itself. No network hop between signal and order, and no external service that can fail independently.',
      pros: [
        'Lowest latency — signal and execution share one process',
        'No webhook, no public endpoint, no delivery guarantees to reason about',
        'Survives anything short of the VPS itself going down',
      ],
      cons: [
        'Strategy logic is limited to what MQL5 can express',
        'Cannot consume a Pine Script signal from TradingView',
        'Risk logic has to be reimplemented per advisor',
      ],
    },
    {
      key: 'webhook',
      tag: 'Path B · signal-driven',
      name: 'TradingView → webhook → Flask → MT5 Python API',
      status: 'architecture',
      body:
        'A Pine Script alert fires a webhook to a Flask receiver on the same VPS as the terminal. The receiver authenticates the payload, applies position sizing and risk checks in Python, then places the order through the MetaTrader5 package against the local terminal.',
      pros: [
        'Signals come from Pine Script — the indicators in section 10 become tradeable directly',
        'Sizing, exposure caps and kill-switches live in one Python layer, not duplicated per advisor',
        'The same receiver can route to more than one terminal or account',
      ],
      cons: [
        'Adds network latency and a delivery failure mode between alert and order',
        'A public endpoint has to be authenticated and rate-limited',
        'Alert delivery is best-effort — a missed webhook is a missed trade unless reconciled',
      ],
    },
  ],
  reconciliation:
    'Both paths converge on the same terminal, so position state has to be read back from MT5 rather than assumed from what was sent. Any receiver worth deploying reconciles open positions against its own intent on a timer and refuses to place a second order it cannot account for.',
  disclosure:
    'Path A is how the forty-six advisors in section 05 run and how their backtests were produced. Path B is the deployment design for TradingView-originated signals; the Flask receiver is not yet in my codebase, and I am labelling it as architecture rather than implying it is running.',
};

export const BUILDS = [
  {
    name: 'AK Momentum',
    kind: 'Next.js · TypeScript · Tailwind',
    body: 'Nifty 500 momentum engine as a product — live scanner, portfolio trailing-stop monitor, SIP action-plan generator and an email alert bot. Momentum score is 12-month return divided by 3-month annualised volatility, gated on price above the 50-day SMA. Runs with zero configuration: no keys, no database.',
  },
  {
    name: 'RRE Trading Bot',
    kind: 'FastAPI · Python · Supabase',
    body: 'The production system behind the reports below — 33 services, 39 endpoints, five scheduled loops, deployed to a VPS and pushing to Telegram every session without supervision.',
  },
  {
    name: 'Appointment Secretary',
    kind: 'Node · PWA · multi-user',
    body: 'Multi-user appointment booking with automated email reminders and WhatsApp/SMS behind feature switches. Installable as a phone app over the local network; first account registered becomes admin.',
  },
  {
    name: 'RRE Company Dashboard',
    kind: 'Static · charts',
    body: 'Operations dashboard covering sales and quotation tracking, service and maintenance, spares inventory, and customer intelligence.',
  },

  {
    name: 'TKS Mart',
    kind: 'HTML · CSS · e-commerce',
    body: 'Storefront build from the 2023 web-development work — product grid, cart and checkout flow, hand-written rather than themed.',
    href: 'https://tks-mart.netlify.app/',
  },
  {
    name: 'Movie Linked',
    kind: 'HTML · CSS · JavaScript',
    body: 'Film browsing and download index, built while working through the Teachnook and Udemy web-development courses.',
    href: 'https://movie-linked.netlify.app/index.html',
  },
  {
    name: 'Soccial',
    kind: 'React',
    body: 'Social feed interface in React — the project that moved the 2023 work from static pages to component state.',
    href: 'https://anand3643.github.io/soccial/',
  },
];
