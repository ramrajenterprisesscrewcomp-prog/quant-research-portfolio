"""Generate src/data/research.js from the real source artifacts in "port source".

Every figure emitted here is computed from a file on disk -- nothing is hand-typed.
Re-run with:  python scripts/gen_data.py
"""
import csv
import json
import statistics as st
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "port source"
OUT = ROOT / "src" / "data"


def rd(p):
    with open(p, newline="", encoding="utf-8", errors="replace") as fh:
        return list(csv.DictReader(fh))


F = lambda r, k: float(r[k])

# ---------------------------------------------------------------- sweep grid
sweep = rd(SRC / "momentum traging/scratch/sweep_5yr_results.csv")

PARAM_LABEL = {
    "score_key": "Momentum score formula",
    "sma_period": "Trend filter (SMA)",
    "tsl_pct": "Trailing stop width",
    "port_size": "Portfolio size",
    "weighting_mode": "Position weighting",
    "rebal_interval": "Rebalance interval",
    "exit_buffer_mult": "Exit buffer multiple",
    "hedged": "Index hedge",
}


def marginal(key):
    g = {}
    for r in sweep:
        g.setdefault(r[key], []).append(r)
    out = []
    for v, rows in g.items():
        out.append(
            {
                "value": v,
                "sharpe": round(st.median(F(r, "sharpe") for r in rows), 2),
                "cagr": round(st.median(F(r, "cagr") for r in rows), 1),
                "maxDd": round(st.median(F(r, "max_dd") for r in rows), 1),
                "n": len(rows),
            }
        )
    return sorted(out, key=lambda d: -d["sharpe"])


best = max(sweep, key=lambda r: F(r, "sharpe"))

sweep_block = {
    "combos": len(sweep),
    "axes": [
        {"key": k, "label": PARAM_LABEL[k], "levels": sorted({r[k] for r in sweep})}
        for k in PARAM_LABEL
    ],
    "sharpeRange": [
        round(min(F(r, "sharpe") for r in sweep), 2),
        round(st.median(F(r, "sharpe") for r in sweep), 2),
        round(max(F(r, "sharpe") for r in sweep), 2),
    ],
    "cagrRange": [
        round(min(F(r, "cagr") for r in sweep), 1),
        round(st.median(F(r, "cagr") for r in sweep), 1),
        round(max(F(r, "cagr") for r in sweep), 1),
    ],
    "ddRange": [
        round(min(F(r, "max_dd") for r in sweep), 1),
        round(st.median(F(r, "max_dd") for r in sweep), 1),
        round(max(F(r, "max_dd") for r in sweep), 1),
    ],
    "marginals": {k: marginal(k) for k in PARAM_LABEL},
    "top": [
        {
            "score": r["score_key"],
            "sma": r["sma_period"],
            "tsl": r["tsl_pct"],
            "port": r["port_size"],
            "weighting": r["weighting_mode"],
            "rebal": r["rebal_interval"],
            "hedged": r["hedged"] == "True",
            "cagr": round(F(r, "cagr"), 2),
            "maxDd": round(F(r, "max_dd"), 2),
            "sharpe": round(F(r, "sharpe"), 2),
            "sortino": round(F(r, "sortino"), 2),
            "calmar": round(F(r, "calmar"), 2),
            "trades": int(r["trades"]),
            "winRate": round(F(r, "win_rate"), 1),
        }
        for r in sorted(sweep, key=lambda r: -F(r, "sharpe"))[:8]
    ],
    "best": {
        "sharpe": round(F(best, "sharpe"), 2),
        "cagr": round(F(best, "cagr"), 2),
        "maxDd": round(F(best, "max_dd"), 2),
        "trades": int(best["trades"]),
    },
}

# ------------------------------------------------- Nifty 500 strategy sweep
strat_rows = []
for f in ("rre_performance_summary.csv", "strategy_performance_summary.csv"):
    strat_rows += rd(SRC / "indian stock analysis/results" / f)

STRAT_META = {
    "rre_liquidity_vwma": (
        "RRE Liquidity + VWMA",
        "Swing-liquidity levels confirmed by a VWMA(20) reclaim.",
    ),
    "rre_line_vwma": (
        "RRE Line (TRAMA) + VWMA",
        "Trend-Regularity Adaptive MA(99) crossed with VWMA(20).",
    ),
    "ema_cross": ("EMA Crossover", "Classic fast/slow EMA trend baseline."),
    "breakout_20d": ("20-Day Breakout", "Donchian-style close above the 20-session high."),
    "rsi_ha": ("RSI + Heikin-Ashi 60/40", "Heikin-Ashi trend body gated by RSI(14) 60/40 bands."),
    "rre_volume_vwma": ("RRE Volume + VWMA", "5x relative-volume expansion into a VWMA reclaim."),
    "rre_volume_rsi": ("RRE Volume + RSI", "Volume thrust filtered by RSI(14) momentum."),
    "rre_reversal": ("RRE Trend Reversal", "MACD reversal confirmed by SuperTrend(7, 2.0)."),
    "rre_vwma_crossover": ("RRE VWMA Crossover", "Price/VWMA(20) crossover, the strictest entry gate."),
    "dip_rebound": ("Dip Rebound", "Mean-reversion entry inside an established uptrend."),
}

by = {}
for r in strat_rows:
    by.setdefault(r["strategy"], []).append(r)

strategies = []
for s, v in by.items():
    live = [r for r in v if int(r["total_trades"]) > 0]
    cum = [float(r["cum_return_pct"]) for r in v]
    label, desc = STRAT_META[s]
    strategies.append(
        {
            "key": s,
            "label": label,
            "desc": desc,
            "symbols": len(v),
            "trades": sum(int(r["total_trades"]) for r in v),
            "winRate": round(st.mean(float(r["win_rate"]) for r in live), 2),
            "hit20": round(st.mean(float(r["target_20_hit_rate"]) for r in live), 2),
            "avgPnl": round(st.mean(float(r["avg_trade_pnl"]) for r in live), 2),
            "medCum": round(st.median(cum), 1),
            "meanCum": round(st.mean(cum), 1),
            "profitableSymbols": round(sum(1 for c in cum if c > 0) / len(cum) * 100, 1),
        }
    )
strategies.sort(key=lambda d: -d["medCum"])

nifty_block = {
    "strategies": strategies,
    "universe": max(s["symbols"] for s in strategies),
    "totalTrades": sum(s["trades"] for s in strategies),
    "engines": len(strategies),
}

# --------------------------------------------------------------- XAU/USD EAs
gold = rd(SRC / "yt/MQL5_Strategies/Backtest/results/xauusd_strategy_analysis.csv")
gold_rows = [
    {
        "strategy": r["Strategy"],
        "tf": r["Timeframe"],
        "trades": int(r["Total Trades"]),
        "winRate": float(r["Win Rate %"]),
        "rr": float(r["Realized RR"]),
        "pf": float(r["Profit Factor"]),
        "netPts": round(float(r["Total Net Pts"])),
        "weeklyWin": float(r["Weekly Win Rate %"]),
        "maxDdPts": round(float(r["Max Drawdown (Pts)"])),
    }
    for r in gold
]
# Strategy descriptions come from MASTER_LIST.md so the table names a rule set,
# not just "Strategy22".
import re

_md = (SRC / "yt/MQL5_Strategies/MASTER_LIST.md").read_text(encoding="utf-8", errors="replace")
_desc = {
    m.group(1): m.group(2).strip()
    for m in re.finditer(r"\|\s*(Strategy\d+)\.mq5\s*\|\s*([^|]+?)\s*\|", _md)
}
for r in gold_rows:
    r["desc"] = _desc.get(r["strategy"], "")

# Per-strategy roll-up across the three timeframes it was tested on.
_by_strat = {}
for r in gold_rows:
    _by_strat.setdefault(r["strategy"], []).append(r)

gold_strategies = []
for name, runs in _by_strat.items():
    best = max(runs, key=lambda r: r["pf"])
    gold_strategies.append(
        {
            "strategy": name,
            "desc": _desc.get(name, ""),
            "runs": len(runs),
            "trades": sum(r["trades"] for r in runs),
            "bestPf": best["pf"],
            "bestTf": best["tf"],
            "medPf": round(st.median(r["pf"] for r in runs), 3),
            "winRate": round(st.mean(r["winRate"] for r in runs), 1),
            "rr": round(st.mean(r["rr"] for r in runs), 2),
            "profitableRuns": sum(1 for r in runs if r["pf"] > 1.0),
        }
    )
gold_strategies.sort(key=lambda d: -d["bestPf"])

gold_block = {
    "runs": len(gold_rows),
    "strategies": len(_by_strat),
    "timeframes": sorted({r["tf"] for r in gold_rows}),
    "totalTrades": sum(r["trades"] for r in gold_rows),
    "weeks": 104,
    "profitable": sum(1 for r in gold_rows if r["pf"] > 1.0),
    "top": sorted(gold_rows, key=lambda r: -r["pf"])[:8],
    "all": sorted(gold_rows, key=lambda r: -r["pf"]),
    "byStrategy": gold_strategies,
    # From XAUUSD_Backtest_Methodology_Report.pdf — needed to read the point columns.
    "contract": {
        "symbol": "GOLD.i# (XM, XMGlobal-MT5 7)",
        "lotSize": "100 troy oz per 1.00 standard lot",
        "tested": "0.01 lot — 1 oz, the broker minimum",
        "tick": "$0.01 per point at 0.01 lot",
    },
}

# ------------------------------------------------------------- F&O ORB study
fo = rd(SRC / "india F&O/reports/all_fo_performance_summary.csv")
fo_block = {
    "methods": [
        {
            "name": r["Horizon"],
            "trades": int(r["Total_Trades"]),
            "winRate": round(float(r["Win_Rate_Pct"]), 1),
            "avgWin": round(float(r["Avg_Profit_Pct"]), 2),
            "avgLoss": round(float(r["Avg_Loss_Pct"]), 2),
            "avgRet": round(float(r["Overall_Avg_Return_Pct"]), 3),
            "pf": round(float(r["Profit_Factor"]), 3),
        }
        for r in fo
    ]
}

months = rd(SRC / "india F&O/reports/monthly_performance.csv")
fo_block["monthly"] = [
    {
        "month": r["Month"],
        "trades": int(r["Trades"]),
        "winRate": round(float(r["Win_Rate_Pct"]), 1),
        "totalRet": round(float(r["Total_Return_Pct"]), 1),
    }
    for r in months
]

hz = rd(SRC / "india F&O/reports/performance_summary.csv")
fo_block["horizons"] = [
    {
        "name": r["Horizon"],
        "trades": int(r["Total_Trades"]),
        "winRate": round(float(r["Win_Rate_Pct"]), 1),
        "pf": round(float(r["Profit_Factor"]), 3),
        "cumRet": round(float(r["Cumulative_Return_Pct"]), 1),
        "maxDd": round(float(r["Max_Drawdown_Pct"]), 1),
        "sharpe": round(float(r["Sharpe_Ratio"]), 2),
    }
    for r in hz
    if r["Sharpe_Ratio"]
]

# ------------------------------------------------- Nasdaq 100 momentum (Setup F)
# Written by "port source/us stocks analysis/export_site_evidence.py", which re-runs
# the same simulation that produced Setup_F_Nasdaq100_Top3_Strategy_Report.pdf.
NDX_DIR = SRC / "us stocks analysis/results"

ndx_meta = json.load(open(NDX_DIR / "meta.json", encoding="utf-8"))
ndx_ladder = rd(NDX_DIR / "setup_ladder.csv")
ndx_bench = rd(NDX_DIR / "benchmarks.csv")
ndx_annual = rd(NDX_DIR / "setupF_annual.csv")
ndx_trades = rd(NDX_DIR / "setupF_trades.csv")
ndx_daily = rd(NDX_DIR / "setupF_daily.csv")

FILL = lambda r: (F(r, "Return_Pct"), F(r, "Dollar_Gain"))
wins = [t for t in ndx_trades if F(t, "Dollar_Gain") > 0]
loss = [t for t in ndx_trades if F(t, "Dollar_Gain") <= 0]
gross_win = sum(F(t, "Dollar_Gain") for t in wins)
gross_loss = -sum(F(t, "Dollar_Gain") for t in loss)

# How much of the total P&L rides on the handful of biggest winners.
by_pnl = sorted(ndx_trades, key=lambda t: -F(t, "Dollar_Gain"))
net_pnl = sum(F(t, "Dollar_Gain") for t in ndx_trades)
top10_share = sum(F(t, "Dollar_Gain") for t in by_pnl[:10]) / net_pnl * 100

# Exit-reason breakdown: which rule actually closes positions.
reasons = {}
for t in ndx_trades:
    r = reasons.setdefault(t["Exit_Reason"], {"n": 0, "pnl": 0.0, "wins": 0})
    r["n"] += 1
    r["pnl"] += F(t, "Dollar_Gain")
    r["wins"] += 1 if F(t, "Dollar_Gain") > 0 else 0

# Which tickers carried the strategy.
per_tk = {}
for t in ndx_trades:
    v = per_tk.setdefault(t["Ticker"], {"n": 0, "pnl": 0.0})
    v["n"] += 1
    v["pnl"] += F(t, "Dollar_Gain")

# Equity curve, thinned to ~1 point per 5 sessions for the SVG chart.
curve = [
    {
        "d": r["Date"][:10],
        "e": round(F(r, "Equity")),
        "q": round(F(r, "QQQ")),
        "dd": round(F(r, "Drawdown_Pct"), 2),
        "b": int(r["Bull_Regime"]),
    }
    for r in ndx_daily[::5]
]
if curve[-1]["d"] != ndx_daily[-1]["Date"][:10]:
    r = ndx_daily[-1]
    curve.append(
        {
            "d": r["Date"][:10],
            "e": round(F(r, "Equity")),
            "q": round(F(r, "QQQ")),
            "dd": round(F(r, "Drawdown_Pct"), 2),
            "b": int(r["Bull_Regime"]),
        }
    )

setup_row = lambda name: next(r for r in ndx_ladder if r["Name"].startswith(name))
bench_row = lambda name: next(r for r in ndx_bench if r["Name"].startswith(name))

ndx_block = {
    "meta": ndx_meta,
    "headline": {
        k: round(F(bench_row("Setup F"), k), 2)
        for k in ("CAGR", "Total_Return", "Max_DD", "Calmar", "Sharpe", "Volatility", "Final_Value")
    },
    "benchmarks": [
        {
            "name": r["Name"],
            "cagr": round(F(r, "CAGR"), 2),
            "totalRet": round(F(r, "Total_Return"), 1),
            "maxDd": round(F(r, "Max_DD"), 2),
            "calmar": round(F(r, "Calmar"), 2),
            "sharpe": round(F(r, "Sharpe"), 2),
            "vol": round(F(r, "Volatility"), 2),
            "final": round(F(r, "Final_Value")),
        }
        for r in ndx_bench
    ],
    "ladder": [
        {
            "name": r["Name"].split(":")[0],
            "desc": r["Name"].split(":", 1)[1].strip(),
            "universe": r["Universe"],
            "positions": int(r["Positions"]),
            "leverage": float(r["Leverage"]),
            "rebal": "bi-weekly" if r["Rebalance"] == "biweekly" else "monthly",
            "cagr": round(F(r, "CAGR"), 2),
            "maxDd": round(F(r, "Max_DD"), 2),
            "calmar": round(F(r, "Calmar"), 2),
            "sharpe": round(F(r, "Sharpe"), 2),
            "vol": round(F(r, "Volatility"), 2),
            "final": round(F(r, "Final_Value")),
            "trades": int(r["Trades"]),
        }
        for r in sorted(ndx_ladder, key=lambda r: -F(r, "CAGR"))
    ],
    "annual": [
        {
            "year": int(r["Year"]),
            "strat": round(F(r, "Strategy_Pct"), 2),
            "qqq": round(F(r, "QQQ_Pct"), 2),
            "spy": round(F(r, "SPY_Pct"), 2),
            "alpha": round(F(r, "Strategy_Pct") - F(r, "QQQ_Pct"), 2),
        }
        for r in ndx_annual
    ],
    "trades": {
        "n": len(ndx_trades),
        "wins": len(wins),
        "losses": len(loss),
        "winRate": round(len(wins) / len(ndx_trades) * 100, 1),
        "avgWin": round(st.mean(F(t, "Return_Pct") for t in wins), 2),
        "avgLoss": round(st.mean(F(t, "Return_Pct") for t in loss), 2),
        "medianRet": round(st.median(F(t, "Return_Pct") for t in ndx_trades), 2),
        "best": round(max(F(t, "Return_Pct") for t in ndx_trades), 1),
        "worst": round(min(F(t, "Return_Pct") for t in ndx_trades), 1),
        "profitFactor": round(gross_win / gross_loss, 2),
        "top10Share": round(top10_share, 1),
        "bestTrade": max(ndx_trades, key=lambda t: F(t, "Dollar_Gain"))["Ticker"],
        "holdDays": None,
    },
    "exits": sorted(
        [
            {
                "reason": k,
                "n": v["n"],
                "share": round(v["n"] / len(ndx_trades) * 100, 1),
                "winRate": round(v["wins"] / v["n"] * 100, 1),
                "pnl": round(v["pnl"]),
            }
            for k, v in reasons.items()
        ],
        key=lambda d: -d["n"],
    ),
    "contributors": sorted(
        [{"tk": k, "n": v["n"], "pnl": round(v["pnl"])} for k, v in per_tk.items()],
        key=lambda d: -d["pnl"],
    )[:10],
    "detractors": sorted(
        [{"tk": k, "n": v["n"], "pnl": round(v["pnl"])} for k, v in per_tk.items()],
        key=lambda d: d["pnl"],
    )[:5],
    "curve": curve,
    "symbolsTraded": len(per_tk),
    # The complete transaction ledger, exactly as the simulation logged it. Published
    # in full because aggregate statistics are not evidence -- the rows behind them are.
    "ledger": [
        {
            "tk": t["Ticker"],
            "in": t["Entry_Date"][:10],
            "out": t["Exit_Date"][:10],
            "ep": round(F(t, "Entry_Price"), 2),
            "xp": round(F(t, "Exit_Price"), 2),
            "sh": int(float(t["Shares"])),
            "r": round(F(t, "Return_Pct"), 2),
            "p": round(F(t, "Dollar_Gain")),
            "why": t["Exit_Reason"]
                .replace("Rank Exit (Out of Top 3)", "Rank")
                .replace("Trend < 50-Day SMA", "50-SMA")
                .replace("Macro Bear (QQQ < 200 SMA)", "Shield"),
        }
        for t in ndx_trades
    ],
}

# Average holding period in calendar days, from the trade log's own dates.
from datetime import date as _date

_d = lambda s: _date(*map(int, s[:10].split("-")))
ndx_block["trades"]["holdDays"] = round(
    st.mean((_d(t["Exit_Date"]) - _d(t["Entry_Date"])).days for t in ndx_trades), 1
)

# ------------------------------------------------------- engineering counts
bot_dir = SRC / "RRE TRADING BOT"
own = [bot_dir / "main.py", bot_dir / "config.py"]
own += sorted((bot_dir / "services").glob("*.py"))
own += sorted((bot_dir / "utils").glob("*.py"))
loc = sum(
    sum(1 for _ in open(p, encoding="utf-8", errors="replace"))
    for p in own
    if p.exists()
)
endpoints = sum(
    1
    for line in open(bot_dir / "main.py", encoding="utf-8", errors="replace")
    if line.lstrip().startswith("@app.")
)

build_block = {
    "botLoc": loc,
    "botServices": len([p for p in (bot_dir / "services").glob("*.py") if p.name != "__init__.py"]),
    "botEndpoints": endpoints,
    "eodReports": len(list((SRC / "rreeppoorrtt").glob("*.pdf"))),
    "researchPdfs": len(list((SRC / "momentum traging").glob("*.pdf"))),
    "mql5": len(list((SRC / "yt/MQL5_Strategies").glob("*.mq5"))),
    "pineScripts": len(list((SRC / "RRE indicators").glob("*.txt"))),
}

OUT.mkdir(parents=True, exist_ok=True)
payload = {
    "sweep": sweep_block,
    "nifty": nifty_block,
    "gold": gold_block,
    "fo": fo_block,
    "ndx": ndx_block,
    "build": build_block,
}
with open(OUT / "research.js", "w", encoding="utf-8") as fh:
    fh.write("// AUTO-GENERATED from `port source` by scripts/gen_data.py -- do not hand-edit.\n")
    fh.write("// Every figure below is computed from a CSV or source file on disk.\n\n")
    fh.write("export const RESEARCH = ")
    json.dump(payload, fh, indent=2)
    fh.write(";\n")

print("wrote", OUT / "research.js")
for k, v in build_block.items():
    print(f"  {k:16} {v}")
print(f"  sweep combos     {sweep_block['combos']}")
print(f"  nifty trades     {nifty_block['totalTrades']}")
print(f"  gold trades      {gold_block['totalTrades']}")
print(f"  ndx setups       {len(ndx_block['ladder'])}, trades {ndx_block['trades']['n']}, "
      f"CAGR {ndx_block['headline']['CAGR']}%")
