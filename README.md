# Anand P — Quantitative Research Portfolio

A research dossier rather than a landing page. Every figure on the site is computed
from a source artifact in `port source/`; nothing is hand-entered.

## Data pipeline

`src/data/research.js` is **generated, not written**. Regenerate it after any change
to the underlying research:

```bash
python scripts/gen_data.py
```

It reads, and derives every number from:

| Source | Feeds |
|---|---|
| `momentum traging/scratch/sweep_5yr_results.csv` | §03 — 8,640-configuration parameter sweep |
| `indian stock analysis/results/*.csv` | §04 — 10 engines × 484 symbols, 192,482 trades |
| `yt/MQL5_Strategies/Backtest/results/xauusd_strategy_analysis.csv` | §05 — 42 XAU/USD runs, 83,917 trades |
| `india F&O/reports/*.csv` | §06 — 7 exit methods, monthly breakdown |
| `us stocks analysis/results/*.csv` + `meta.json` | §07 — Nasdaq 100 Setup F, 6 setups, 284 trades |
| `RRE TRADING BOT/` | §08 — LOC, service and endpoint counts (counted live) |
| `yt/MQL5_Strategies/Backtest/` | §09 — MT5 Strategy Tester harness, execution paths |
| `RRE indicators/`, `yt/MQL5_Strategies/` | §10/§11 — artifact counts |

### Section 07 has an upstream step

The Nasdaq 100 CSVs are not authored by hand either — they are written by
`port source/us stocks analysis/export_site_evidence.py`, which lives beside its own
82 MB of price parquet in `C:\Users\Admin\Desktop\US stocks analysis` and must be run
from there:

```bash
cd "C:/Users/Admin/Desktop/US stocks analysis"
python export_site_evidence.py     # -> port source/us stocks analysis/results/
python "C:/Users/Admin/Desktop/jb/scripts/gen_data.py"
```

That script re-runs the same two functions that produced
`Setup_F_Nasdaq100_Top3_Strategy_Report.pdf` — `run_setup_f_backtest()` for the published
configuration and `evaluate_setup()` for the six-candidate bake-off — so the site's tables
and the PDF cannot drift apart. The price data itself is deliberately not copied into this
repo; only the derived CSVs are.

`src/data/content.js` holds prose and figures transcribed from source *documents*
(chiefly `momentum traging/analysis_15yr_20pct_similarities.md`). Each block carries a
`source` field naming its origin.

## Develop

```bash
npm install
npm run dev      # http://localhost:8080
npm run build
npm run preview
```

## Structure

```
src/
  data/       research.js (generated) · content.js (authored)
  components/ Rail.jsx (nav + scroll spy) · ui.jsx (Section, Stat, BarCell, Reveal)
  sections/   Masthead, Study, Sweep, Engines, Gold, FnO, Nasdaq, System, Toolkit, Contact
  index.css   design system — all tokens under :root
```

## Notes

- Section 06 deliberately publishes losing strategies. That is the point of it.
- Section 07 reports a survivorship-biased universe (today's Nasdaq 100 applied
  backwards) and says so on the page. Do not quietly drop that caveat — it is the
  largest single qualifier on the 41.72% CAGR.
- Section 08 separates what runs (the EA path) from what is designed but not yet built
  (the Flask webhook receiver). Keep that distinction if you edit it.
- Nothing in `port source/` is bundled or served; it is read at build time only.
  Keep it out of any deploy — it contains API keys and a service-account JSON.
