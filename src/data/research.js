// AUTO-GENERATED from `port source` by scripts/gen_data.py -- do not hand-edit.
// Every figure below is computed from a CSV or source file on disk.

export const RESEARCH = {
  "sweep": {
    "combos": 8640,
    "axes": [
      {
        "key": "score_key",
        "label": "Momentum score formula",
        "levels": [
          "Fast_ROC_1M_3M",
          "Multi_1_6_12_Vol3M",
          "Multi_1_6_9_Vol3M",
          "ROC_6M_Vol3M",
          "Weighted_3_6_12_Vol3M"
        ]
      },
      {
        "key": "sma_period",
        "label": "Trend filter (SMA)",
        "levels": [
          "100",
          "200",
          "50"
        ]
      },
      {
        "key": "tsl_pct",
        "label": "Trailing stop width",
        "levels": [
          "0.1",
          "0.15",
          "0.2",
          "0.25"
        ]
      },
      {
        "key": "port_size",
        "label": "Portfolio size",
        "levels": [
          "10",
          "12",
          "5",
          "8"
        ]
      },
      {
        "key": "weighting_mode",
        "label": "Position weighting",
        "levels": [
          "equal",
          "top_heavy"
        ]
      },
      {
        "key": "rebal_interval",
        "label": "Rebalance interval",
        "levels": [
          "10",
          "21",
          "5"
        ]
      },
      {
        "key": "exit_buffer_mult",
        "label": "Exit buffer multiple",
        "levels": [
          "1.0",
          "1.5",
          "2.0"
        ]
      },
      {
        "key": "hedged",
        "label": "Index hedge",
        "levels": [
          "False",
          "True"
        ]
      }
    ],
    "sharpeRange": [
      0.04,
      1.17,
      2.0
    ],
    "cagrRange": [
      -1.1,
      26.9,
      64.3
    ],
    "ddRange": [
      -65.4,
      -35.2,
      -15.0
    ],
    "marginals": {
      "score_key": [
        {
          "value": "Weighted_3_6_12_Vol3M",
          "sharpe": 1.39,
          "cagr": 32.4,
          "maxDd": -35.1,
          "n": 1728
        },
        {
          "value": "Multi_1_6_12_Vol3M",
          "sharpe": 1.27,
          "cagr": 29.4,
          "maxDd": -35.9,
          "n": 1728
        },
        {
          "value": "Multi_1_6_9_Vol3M",
          "sharpe": 1.13,
          "cagr": 25.8,
          "maxDd": -36.7,
          "n": 1728
        },
        {
          "value": "Fast_ROC_1M_3M",
          "sharpe": 1.09,
          "cagr": 26.0,
          "maxDd": -30.3,
          "n": 1728
        },
        {
          "value": "ROC_6M_Vol3M",
          "sharpe": 1.0,
          "cagr": 21.3,
          "maxDd": -37.7,
          "n": 1728
        }
      ],
      "sma_period": [
        {
          "value": "200",
          "sharpe": 1.2,
          "cagr": 28.1,
          "maxDd": -35.7,
          "n": 2880
        },
        {
          "value": "50",
          "sharpe": 1.16,
          "cagr": 26.7,
          "maxDd": -33.8,
          "n": 2880
        },
        {
          "value": "100",
          "sharpe": 1.14,
          "cagr": 25.8,
          "maxDd": -35.9,
          "n": 2880
        }
      ],
      "tsl_pct": [
        {
          "value": "0.2",
          "sharpe": 1.24,
          "cagr": 30.3,
          "maxDd": -36.6,
          "n": 2160
        },
        {
          "value": "0.25",
          "sharpe": 1.23,
          "cagr": 31.5,
          "maxDd": -37.6,
          "n": 2160
        },
        {
          "value": "0.15",
          "sharpe": 1.11,
          "cagr": 24.6,
          "maxDd": -34.1,
          "n": 2160
        },
        {
          "value": "0.1",
          "sharpe": 1.08,
          "cagr": 20.7,
          "maxDd": -32.2,
          "n": 2160
        }
      ],
      "port_size": [
        {
          "value": "12",
          "sharpe": 1.27,
          "cagr": 27.4,
          "maxDd": -29.8,
          "n": 2160
        },
        {
          "value": "10",
          "sharpe": 1.23,
          "cagr": 27.5,
          "maxDd": -32.6,
          "n": 2160
        },
        {
          "value": "8",
          "sharpe": 1.12,
          "cagr": 26.1,
          "maxDd": -36.7,
          "n": 2160
        },
        {
          "value": "5",
          "sharpe": 1.01,
          "cagr": 26.3,
          "maxDd": -43.9,
          "n": 2160
        }
      ],
      "weighting_mode": [
        {
          "value": "equal",
          "sharpe": 1.2,
          "cagr": 26.4,
          "maxDd": -31.6,
          "n": 4320
        },
        {
          "value": "top_heavy",
          "sharpe": 1.13,
          "cagr": 27.5,
          "maxDd": -38.6,
          "n": 4320
        }
      ],
      "rebal_interval": [
        {
          "value": "10",
          "sharpe": 1.21,
          "cagr": 27.9,
          "maxDd": -35.1,
          "n": 2880
        },
        {
          "value": "5",
          "sharpe": 1.17,
          "cagr": 29.4,
          "maxDd": -37.8,
          "n": 2880
        },
        {
          "value": "21",
          "sharpe": 1.11,
          "cagr": 22.1,
          "maxDd": -32.2,
          "n": 2880
        }
      ],
      "exit_buffer_mult": [
        {
          "value": "1.0",
          "sharpe": 1.19,
          "cagr": 27.7,
          "maxDd": -35.0,
          "n": 2880
        },
        {
          "value": "1.5",
          "sharpe": 1.17,
          "cagr": 26.7,
          "maxDd": -35.2,
          "n": 2880
        },
        {
          "value": "2.0",
          "sharpe": 1.14,
          "cagr": 26.4,
          "maxDd": -35.3,
          "n": 2880
        }
      ],
      "hedged": [
        {
          "value": "True",
          "sharpe": 1.17,
          "cagr": 25.9,
          "maxDd": -34.2,
          "n": 4320
        },
        {
          "value": "False",
          "sharpe": 1.17,
          "cagr": 28.1,
          "maxDd": -36.1,
          "n": 4320
        }
      ]
    },
    "top": [
      {
        "score": "Multi_1_6_9_Vol3M",
        "sma": "50",
        "tsl": "0.25",
        "port": "12",
        "weighting": "equal",
        "rebal": "5",
        "hedged": true,
        "cagr": 51.76,
        "maxDd": -29.19,
        "sharpe": 2.0,
        "sortino": 2.91,
        "calmar": 1.77,
        "trades": 732,
        "winRate": 41.9
      },
      {
        "score": "Multi_1_6_9_Vol3M",
        "sma": "50",
        "tsl": "0.25",
        "port": "12",
        "weighting": "equal",
        "rebal": "5",
        "hedged": false,
        "cagr": 55.38,
        "maxDd": -31.02,
        "sharpe": 1.93,
        "sortino": 2.65,
        "calmar": 1.79,
        "trades": 732,
        "winRate": 41.9
      },
      {
        "score": "Multi_1_6_12_Vol3M",
        "sma": "50",
        "tsl": "0.1",
        "port": "12",
        "weighting": "equal",
        "rebal": "10",
        "hedged": true,
        "cagr": 33.41,
        "maxDd": -19.4,
        "sharpe": 1.9,
        "sortino": 2.6,
        "calmar": 1.72,
        "trades": 658,
        "winRate": 43.6
      },
      {
        "score": "Multi_1_6_9_Vol3M",
        "sma": "50",
        "tsl": "0.2",
        "port": "12",
        "weighting": "equal",
        "rebal": "5",
        "hedged": true,
        "cagr": 44.67,
        "maxDd": -28.0,
        "sharpe": 1.83,
        "sortino": 2.64,
        "calmar": 1.6,
        "trades": 742,
        "winRate": 42.3
      },
      {
        "score": "Multi_1_6_12_Vol3M",
        "sma": "50",
        "tsl": "0.1",
        "port": "12",
        "weighting": "equal",
        "rebal": "10",
        "hedged": false,
        "cagr": 35.39,
        "maxDd": -22.77,
        "sharpe": 1.82,
        "sortino": 2.35,
        "calmar": 1.55,
        "trades": 658,
        "winRate": 43.6
      },
      {
        "score": "Multi_1_6_12_Vol3M",
        "sma": "200",
        "tsl": "0.25",
        "port": "12",
        "weighting": "equal",
        "rebal": "21",
        "hedged": true,
        "cagr": 36.82,
        "maxDd": -23.31,
        "sharpe": 1.82,
        "sortino": 2.48,
        "calmar": 1.58,
        "trades": 336,
        "winRate": 51.2
      },
      {
        "score": "Multi_1_6_12_Vol3M",
        "sma": "200",
        "tsl": "0.2",
        "port": "12",
        "weighting": "equal",
        "rebal": "21",
        "hedged": true,
        "cagr": 34.95,
        "maxDd": -21.76,
        "sharpe": 1.81,
        "sortino": 2.46,
        "calmar": 1.61,
        "trades": 353,
        "winRate": 48.7
      },
      {
        "score": "Weighted_3_6_12_Vol3M",
        "sma": "200",
        "tsl": "0.2",
        "port": "12",
        "weighting": "equal",
        "rebal": "21",
        "hedged": true,
        "cagr": 35.03,
        "maxDd": -23.1,
        "sharpe": 1.8,
        "sortino": 2.47,
        "calmar": 1.52,
        "trades": 332,
        "winRate": 46.7
      }
    ],
    "best": {
      "sharpe": 2.0,
      "cagr": 51.76,
      "maxDd": -29.19,
      "trades": 732
    }
  },
  "nifty": {
    "strategies": [
      {
        "key": "rre_liquidity_vwma",
        "label": "RRE Liquidity + VWMA",
        "desc": "Swing-liquidity levels confirmed by a VWMA(20) reclaim.",
        "symbols": 484,
        "trades": 31099,
        "winRate": 38.03,
        "hit20": 27.75,
        "avgPnl": 1.91,
        "medCum": 117.5,
        "meanCum": 302.9,
        "profitableSymbols": 81.2
      },
      {
        "key": "rre_line_vwma",
        "label": "RRE Line (TRAMA) + VWMA",
        "desc": "Trend-Regularity Adaptive MA(99) crossed with VWMA(20).",
        "symbols": 484,
        "trades": 27465,
        "winRate": 36.13,
        "hit20": 26.49,
        "avgPnl": 1.47,
        "medCum": 57.6,
        "meanCum": 158.6,
        "profitableSymbols": 70.9
      },
      {
        "key": "ema_cross",
        "label": "EMA Crossover",
        "desc": "Classic fast/slow EMA trend baseline.",
        "symbols": 484,
        "trades": 21985,
        "winRate": 36.7,
        "hit20": 26.34,
        "avgPnl": 1.57,
        "medCum": 47.0,
        "meanCum": 106.9,
        "profitableSymbols": 74.4
      },
      {
        "key": "breakout_20d",
        "label": "20-Day Breakout",
        "desc": "Donchian-style close above the 20-session high.",
        "symbols": 484,
        "trades": 23945,
        "winRate": 35.43,
        "hit20": 25.94,
        "avgPnl": 1.31,
        "medCum": 42.3,
        "meanCum": 99.2,
        "profitableSymbols": 68.6
      },
      {
        "key": "rsi_ha",
        "label": "RSI + Heikin-Ashi 60/40",
        "desc": "Heikin-Ashi trend body gated by RSI(14) 60/40 bands.",
        "symbols": 484,
        "trades": 21584,
        "winRate": 36.59,
        "hit20": 26.74,
        "avgPnl": 1.57,
        "medCum": 36.4,
        "meanCum": 88.6,
        "profitableSymbols": 69.6
      },
      {
        "key": "rre_volume_vwma",
        "label": "RRE Volume + VWMA",
        "desc": "5x relative-volume expansion into a VWMA reclaim.",
        "symbols": 484,
        "trades": 18476,
        "winRate": 35.63,
        "hit20": 25.88,
        "avgPnl": 1.33,
        "medCum": 32.5,
        "meanCum": 63.3,
        "profitableSymbols": 66.1
      },
      {
        "key": "rre_volume_rsi",
        "label": "RRE Volume + RSI",
        "desc": "Volume thrust filtered by RSI(14) momentum.",
        "symbols": 484,
        "trades": 17569,
        "winRate": 35.93,
        "hit20": 26.12,
        "avgPnl": 1.41,
        "medCum": 31.5,
        "meanCum": 64.6,
        "profitableSymbols": 65.5
      },
      {
        "key": "rre_reversal",
        "label": "RRE Trend Reversal",
        "desc": "MACD reversal confirmed by SuperTrend(7, 2.0).",
        "symbols": 484,
        "trades": 16164,
        "winRate": 35.58,
        "hit20": 25.87,
        "avgPnl": 1.34,
        "medCum": 21.6,
        "meanCum": 49.3,
        "profitableSymbols": 65.5
      },
      {
        "key": "rre_vwma_crossover",
        "label": "RRE VWMA Crossover",
        "desc": "Price/VWMA(20) crossover, the strictest entry gate.",
        "symbols": 484,
        "trades": 8711,
        "winRate": 36.41,
        "hit20": 26.72,
        "avgPnl": 1.57,
        "medCum": 12.3,
        "meanCum": 30.9,
        "profitableSymbols": 60.5
      },
      {
        "key": "dip_rebound",
        "label": "Dip Rebound",
        "desc": "Mean-reversion entry inside an established uptrend.",
        "symbols": 456,
        "trades": 5484,
        "winRate": 37.31,
        "hit20": 31.87,
        "avgPnl": 2.27,
        "medCum": 11.5,
        "meanCum": 24.6,
        "profitableSymbols": 62.9
      }
    ],
    "universe": 484,
    "totalTrades": 192482,
    "engines": 10
  },
  "gold": {
    "runs": 42,
    "strategies": 14,
    "timeframes": [
      "M10",
      "M15",
      "M20"
    ],
    "totalTrades": 83917,
    "weeks": 104,
    "profitable": 20,
    "top": [
      {
        "strategy": "Strategy22",
        "tf": "M20",
        "trades": 1787,
        "winRate": 37.55,
        "rr": 2.02,
        "pf": 1.21,
        "netPts": 298174,
        "weeklyWin": 56.7,
        "maxDdPts": 49532,
        "desc": "Breakout Hybrid (EMA200 trend + 12-bar range breakout + RSI)"
      },
      {
        "strategy": "Strategy1",
        "tf": "M20",
        "trades": 1522,
        "winRate": 33.71,
        "rr": 2.31,
        "pf": 1.17,
        "netPts": 200444,
        "weeklyWin": 55.8,
        "maxDdPts": 66972,
        "desc": "EMA50 + ADX(14) + RSI(14) + ATR(14) Momentum Continuation"
      },
      {
        "strategy": "Strategy12",
        "tf": "M15",
        "trades": 1653,
        "winRate": 35.33,
        "rr": 2.12,
        "pf": 1.16,
        "netPts": 182881,
        "weeklyWin": 52.9,
        "maxDdPts": 71711,
        "desc": "Swing Trend Pullback (EMA25/50 + RSI + ATR + loss cooldown)"
      },
      {
        "strategy": "Strategy22",
        "tf": "M15",
        "trades": 2361,
        "winRate": 36.64,
        "rr": 1.98,
        "pf": 1.14,
        "netPts": 234411,
        "weeklyWin": 59.6,
        "maxDdPts": 63059,
        "desc": "Breakout Hybrid (EMA200 trend + 12-bar range breakout + RSI)"
      },
      {
        "strategy": "Strategy7",
        "tf": "M20",
        "trades": 1040,
        "winRate": 31.44,
        "rr": 2.47,
        "pf": 1.13,
        "netPts": 118862,
        "weeklyWin": 58.7,
        "maxDdPts": 69010,
        "desc": "Triple EMA Trend Pullback (EMA20/50/200, candle patterns, dynamic lot)"
      },
      {
        "strategy": "Strategy22",
        "tf": "M10",
        "trades": 3494,
        "winRate": 36.32,
        "rr": 1.98,
        "pf": 1.13,
        "netPts": 259788,
        "weeklyWin": 57.7,
        "maxDdPts": 80691,
        "desc": "Breakout Hybrid (EMA200 trend + 12-bar range breakout + RSI)"
      },
      {
        "strategy": "Strategy7",
        "tf": "M15",
        "trades": 1361,
        "winRate": 30.86,
        "rr": 2.49,
        "pf": 1.11,
        "netPts": 111198,
        "weeklyWin": 55.8,
        "maxDdPts": 78501,
        "desc": "Triple EMA Trend Pullback (EMA20/50/200, candle patterns, dynamic lot)"
      },
      {
        "strategy": "Strategy6",
        "tf": "M15",
        "trades": 1571,
        "winRate": 34.25,
        "rr": 2.12,
        "pf": 1.11,
        "netPts": 118797,
        "weeklyWin": 53.8,
        "maxDdPts": 53295,
        "desc": "Swing Trading: EMA20/100 Engulfing Pullback + Loss Cooldown"
      }
    ],
    "all": [
      {
        "strategy": "Strategy22",
        "tf": "M20",
        "trades": 1787,
        "winRate": 37.55,
        "rr": 2.02,
        "pf": 1.21,
        "netPts": 298174,
        "weeklyWin": 56.7,
        "maxDdPts": 49532,
        "desc": "Breakout Hybrid (EMA200 trend + 12-bar range breakout + RSI)"
      },
      {
        "strategy": "Strategy1",
        "tf": "M20",
        "trades": 1522,
        "winRate": 33.71,
        "rr": 2.31,
        "pf": 1.17,
        "netPts": 200444,
        "weeklyWin": 55.8,
        "maxDdPts": 66972,
        "desc": "EMA50 + ADX(14) + RSI(14) + ATR(14) Momentum Continuation"
      },
      {
        "strategy": "Strategy12",
        "tf": "M15",
        "trades": 1653,
        "winRate": 35.33,
        "rr": 2.12,
        "pf": 1.16,
        "netPts": 182881,
        "weeklyWin": 52.9,
        "maxDdPts": 71711,
        "desc": "Swing Trend Pullback (EMA25/50 + RSI + ATR + loss cooldown)"
      },
      {
        "strategy": "Strategy22",
        "tf": "M15",
        "trades": 2361,
        "winRate": 36.64,
        "rr": 1.98,
        "pf": 1.14,
        "netPts": 234411,
        "weeklyWin": 59.6,
        "maxDdPts": 63059,
        "desc": "Breakout Hybrid (EMA200 trend + 12-bar range breakout + RSI)"
      },
      {
        "strategy": "Strategy7",
        "tf": "M20",
        "trades": 1040,
        "winRate": 31.44,
        "rr": 2.47,
        "pf": 1.13,
        "netPts": 118862,
        "weeklyWin": 58.7,
        "maxDdPts": 69010,
        "desc": "Triple EMA Trend Pullback (EMA20/50/200, candle patterns, dynamic lot)"
      },
      {
        "strategy": "Strategy22",
        "tf": "M10",
        "trades": 3494,
        "winRate": 36.32,
        "rr": 1.98,
        "pf": 1.13,
        "netPts": 259788,
        "weeklyWin": 57.7,
        "maxDdPts": 80691,
        "desc": "Breakout Hybrid (EMA200 trend + 12-bar range breakout + RSI)"
      },
      {
        "strategy": "Strategy7",
        "tf": "M15",
        "trades": 1361,
        "winRate": 30.86,
        "rr": 2.49,
        "pf": 1.11,
        "netPts": 111198,
        "weeklyWin": 55.8,
        "maxDdPts": 78501,
        "desc": "Triple EMA Trend Pullback (EMA20/50/200, candle patterns, dynamic lot)"
      },
      {
        "strategy": "Strategy6",
        "tf": "M15",
        "trades": 1571,
        "winRate": 34.25,
        "rr": 2.12,
        "pf": 1.11,
        "netPts": 118797,
        "weeklyWin": 53.8,
        "maxDdPts": 53295,
        "desc": "Swing Trading: EMA20/100 Engulfing Pullback + Loss Cooldown"
      },
      {
        "strategy": "Strategy1",
        "tf": "M10",
        "trades": 2877,
        "winRate": 34.45,
        "rr": 2.09,
        "pf": 1.1,
        "netPts": 147824,
        "weeklyWin": 56.7,
        "maxDdPts": 88566,
        "desc": "EMA50 + ADX(14) + RSI(14) + ATR(14) Momentum Continuation"
      },
      {
        "strategy": "Strategy6",
        "tf": "M20",
        "trades": 1137,
        "winRate": 34.48,
        "rr": 2.09,
        "pf": 1.1,
        "netPts": 93890,
        "weeklyWin": 56.7,
        "maxDdPts": 69744,
        "desc": "Swing Trading: EMA20/100 Engulfing Pullback + Loss Cooldown"
      },
      {
        "strategy": "Strategy7",
        "tf": "M10",
        "trades": 1947,
        "winRate": 29.58,
        "rr": 2.61,
        "pf": 1.1,
        "netPts": 115953,
        "weeklyWin": 51.9,
        "maxDdPts": 63491,
        "desc": "Triple EMA Trend Pullback (EMA20/50/200, candle patterns, dynamic lot)"
      },
      {
        "strategy": "Strategy12",
        "tf": "M10",
        "trades": 2446,
        "winRate": 33.73,
        "rr": 2.16,
        "pf": 1.1,
        "netPts": 139328,
        "weeklyWin": 49.0,
        "maxDdPts": 53776,
        "desc": "Swing Trend Pullback (EMA25/50 + RSI + ATR + loss cooldown)"
      },
      {
        "strategy": "Strategy1",
        "tf": "M15",
        "trades": 1991,
        "winRate": 33.0,
        "rr": 2.2,
        "pf": 1.08,
        "netPts": 108701,
        "weeklyWin": 52.9,
        "maxDdPts": 68263,
        "desc": "EMA50 + ADX(14) + RSI(14) + ATR(14) Momentum Continuation"
      },
      {
        "strategy": "Strategy12",
        "tf": "M20",
        "trades": 1223,
        "winRate": 34.91,
        "rr": 2.02,
        "pf": 1.08,
        "netPts": 86317,
        "weeklyWin": 51.9,
        "maxDdPts": 96671,
        "desc": "Swing Trend Pullback (EMA25/50 + RSI + ATR + loss cooldown)"
      },
      {
        "strategy": "Strategy6",
        "tf": "M10",
        "trades": 2229,
        "winRate": 34.37,
        "rr": 2.04,
        "pf": 1.07,
        "netPts": 90375,
        "weeklyWin": 55.8,
        "maxDdPts": 49485,
        "desc": "Swing Trading: EMA20/100 Engulfing Pullback + Loss Cooldown"
      },
      {
        "strategy": "Strategy20",
        "tf": "M15",
        "trades": 3546,
        "winRate": 48.96,
        "rr": 1.08,
        "pf": 1.04,
        "netPts": 79684,
        "weeklyWin": 46.2,
        "maxDdPts": 165548,
        "desc": "Gold Trend Following (EMA8/50/100 + RSI + ATR + trailing + break-even)"
      },
      {
        "strategy": "Strategy20",
        "tf": "M10",
        "trades": 5216,
        "winRate": 49.58,
        "rr": 1.05,
        "pf": 1.03,
        "netPts": 70135,
        "weeklyWin": 56.7,
        "maxDdPts": 131262,
        "desc": "Gold Trend Following (EMA8/50/100 + RSI + ATR + trailing + break-even)"
      },
      {
        "strategy": "Strategy30",
        "tf": "M15",
        "trades": 1836,
        "winRate": 31.37,
        "rr": 2.2,
        "pf": 1.01,
        "netPts": 7238,
        "weeklyWin": 49.0,
        "maxDdPts": 135631,
        "desc": "3 EMA Pullback: H1/H4 Multi-Timeframe + RSI"
      },
      {
        "strategy": "Strategy24",
        "tf": "M20",
        "trades": 993,
        "winRate": 33.84,
        "rr": 1.98,
        "pf": 1.01,
        "netPts": 10532,
        "weeklyWin": 48.1,
        "maxDdPts": 106663,
        "desc": "Triple EMA Momentum: Golden Zone Pullback (variant A)"
      },
      {
        "strategy": "Strategy20",
        "tf": "M20",
        "trades": 2656,
        "winRate": 49.59,
        "rr": 1.02,
        "pf": 1.01,
        "netPts": 11368,
        "weeklyWin": 44.2,
        "maxDdPts": 132257,
        "desc": "Gold Trend Following (EMA8/50/100 + RSI + ATR + trailing + break-even)"
      },
      {
        "strategy": "Strategy24",
        "tf": "M15",
        "trades": 1402,
        "winRate": 32.6,
        "rr": 2.07,
        "pf": 1.0,
        "netPts": 722,
        "weeklyWin": 47.1,
        "maxDdPts": 112146,
        "desc": "Triple EMA Momentum: Golden Zone Pullback (variant A)"
      },
      {
        "strategy": "Strategy30",
        "tf": "M10",
        "trades": 2724,
        "winRate": 30.4,
        "rr": 2.29,
        "pf": 1.0,
        "netPts": -2010,
        "weeklyWin": 46.2,
        "maxDdPts": 108022,
        "desc": "3 EMA Pullback: H1/H4 Multi-Timeframe + RSI"
      },
      {
        "strategy": "Strategy36",
        "tf": "M20",
        "trades": 1383,
        "winRate": 28.34,
        "rr": 2.49,
        "pf": 0.99,
        "netPts": -16494,
        "weeklyWin": 46.2,
        "maxDdPts": 148746,
        "desc": "XAUUSD Swing EMA-RSI Strategy (EMA50 trend / EMA14 pullback + RSI)"
      },
      {
        "strategy": "Strategy30",
        "tf": "M20",
        "trades": 1391,
        "winRate": 31.06,
        "rr": 2.21,
        "pf": 0.99,
        "netPts": -5857,
        "weeklyWin": 45.2,
        "maxDdPts": 123946,
        "desc": "3 EMA Pullback: H1/H4 Multi-Timeframe + RSI"
      },
      {
        "strategy": "Strategy24",
        "tf": "M10",
        "trades": 2047,
        "winRate": 32.19,
        "rr": 2.08,
        "pf": 0.99,
        "netPts": -12480,
        "weeklyWin": 43.3,
        "maxDdPts": 96739,
        "desc": "Triple EMA Momentum: Golden Zone Pullback (variant A)"
      },
      {
        "strategy": "Strategy35",
        "tf": "M15",
        "trades": 1750,
        "winRate": 50.69,
        "rr": 0.92,
        "pf": 0.95,
        "netPts": -45898,
        "weeklyWin": 45.2,
        "maxDdPts": 71713,
        "desc": "9-21 EMA Crossover + ATR Filter + Break-Even"
      },
      {
        "strategy": "Strategy36",
        "tf": "M15",
        "trades": 1854,
        "winRate": 26.27,
        "rr": 2.65,
        "pf": 0.94,
        "netPts": -83138,
        "weeklyWin": 45.2,
        "maxDdPts": 150074,
        "desc": "XAUUSD Swing EMA-RSI Strategy (EMA50 trend / EMA14 pullback + RSI)"
      },
      {
        "strategy": "Strategy36",
        "tf": "M10",
        "trades": 2703,
        "winRate": 26.01,
        "rr": 2.66,
        "pf": 0.94,
        "netPts": -112084,
        "weeklyWin": 39.4,
        "maxDdPts": 125967,
        "desc": "XAUUSD Swing EMA-RSI Strategy (EMA50 trend / EMA14 pullback + RSI)"
      },
      {
        "strategy": "Strategy35",
        "tf": "M20",
        "trades": 1267,
        "winRate": 50.28,
        "rr": 0.92,
        "pf": 0.93,
        "netPts": -51201,
        "weeklyWin": 50.0,
        "maxDdPts": 83408,
        "desc": "9-21 EMA Crossover + ATR Filter + Break-Even"
      },
      {
        "strategy": "Strategy2",
        "tf": "M20",
        "trades": 821,
        "winRate": 30.82,
        "rr": 2.01,
        "pf": 0.89,
        "netPts": -103504,
        "weeklyWin": 50.0,
        "maxDdPts": 145598,
        "desc": "Daily EMA25/EMA200 Pullback + ADX Trend Filter"
      },
      {
        "strategy": "Strategy35",
        "tf": "M10",
        "trades": 2583,
        "winRate": 49.36,
        "rr": 0.92,
        "pf": 0.89,
        "netPts": -118020,
        "weeklyWin": 41.3,
        "maxDdPts": 138524,
        "desc": "9-21 EMA Crossover + ATR Filter + Break-Even"
      },
      {
        "strategy": "Strategy2",
        "tf": "M10",
        "trades": 1664,
        "winRate": 30.71,
        "rr": 1.98,
        "pf": 0.88,
        "netPts": -169554,
        "weeklyWin": 47.1,
        "maxDdPts": 188877,
        "desc": "Daily EMA25/EMA200 Pullback + ADX Trend Filter"
      },
      {
        "strategy": "Strategy2",
        "tf": "M15",
        "trades": 1123,
        "winRate": 31.61,
        "rr": 1.9,
        "pf": 0.88,
        "netPts": -142355,
        "weeklyWin": 47.1,
        "maxDdPts": 171888,
        "desc": "Daily EMA25/EMA200 Pullback + ADX Trend Filter"
      },
      {
        "strategy": "Strategy10",
        "tf": "M10",
        "trades": 1756,
        "winRate": 46.98,
        "rr": 0.93,
        "pf": 0.83,
        "netPts": -133583,
        "weeklyWin": 38.5,
        "maxDdPts": 144020,
        "desc": "Gold Pullback Continuation (EMA50/100 + ATR + session/spread filter + break-even)"
      },
      {
        "strategy": "Strategy14",
        "tf": "M20",
        "trades": 1425,
        "winRate": 38.74,
        "rr": 1.22,
        "pf": 0.77,
        "netPts": -149274,
        "weeklyWin": 29.8,
        "maxDdPts": 153771,
        "desc": "Gold EMA20/SMA9 Trend + ATR Trailing (no fixed TP)"
      },
      {
        "strategy": "Strategy10",
        "tf": "M15",
        "trades": 1167,
        "winRate": 48.41,
        "rr": 0.8,
        "pf": 0.75,
        "netPts": -158764,
        "weeklyWin": 39.4,
        "maxDdPts": 177647,
        "desc": "Gold Pullback Continuation (EMA50/100 + ATR + session/spread filter + break-even)"
      },
      {
        "strategy": "Strategy38",
        "tf": "M10",
        "trades": 3852,
        "winRate": 39.15,
        "rr": 1.17,
        "pf": 0.75,
        "netPts": -294750,
        "weeklyWin": 20.2,
        "maxDdPts": 297664,
        "desc": "Gold EMA200 Trend, ATR-based SL/TP + Break-Even + Trailing"
      },
      {
        "strategy": "Strategy14",
        "tf": "M15",
        "trades": 1896,
        "winRate": 38.4,
        "rr": 1.17,
        "pf": 0.73,
        "netPts": -212720,
        "weeklyWin": 26.9,
        "maxDdPts": 220838,
        "desc": "Gold EMA20/SMA9 Trend + ATR Trailing (no fixed TP)"
      },
      {
        "strategy": "Strategy10",
        "tf": "M20",
        "trades": 846,
        "winRate": 46.34,
        "rr": 0.82,
        "pf": 0.71,
        "netPts": -161510,
        "weeklyWin": 37.5,
        "maxDdPts": 166983,
        "desc": "Gold Pullback Continuation (EMA50/100 + ATR + session/spread filter + break-even)"
      },
      {
        "strategy": "Strategy38",
        "tf": "M15",
        "trades": 2539,
        "winRate": 37.89,
        "rr": 1.17,
        "pf": 0.71,
        "netPts": -277654,
        "weeklyWin": 28.8,
        "maxDdPts": 282515,
        "desc": "Gold EMA200 Trend, ATR-based SL/TP + Break-Even + Trailing"
      },
      {
        "strategy": "Strategy38",
        "tf": "M20",
        "trades": 1904,
        "winRate": 37.66,
        "rr": 1.16,
        "pf": 0.7,
        "netPts": -262036,
        "weeklyWin": 29.8,
        "maxDdPts": 266002,
        "desc": "Gold EMA200 Trend, ATR-based SL/TP + Break-Even + Trailing"
      },
      {
        "strategy": "Strategy14",
        "tf": "M10",
        "trades": 2934,
        "winRate": 35.58,
        "rr": 1.16,
        "pf": 0.64,
        "netPts": -365465,
        "weeklyWin": 19.2,
        "maxDdPts": 371675,
        "desc": "Gold EMA20/SMA9 Trend + ATR Trailing (no fixed TP)"
      }
    ],
    "byStrategy": [
      {
        "strategy": "Strategy22",
        "desc": "Breakout Hybrid (EMA200 trend + 12-bar range breakout + RSI)",
        "runs": 3,
        "trades": 7642,
        "bestPf": 1.21,
        "bestTf": "M20",
        "medPf": 1.14,
        "winRate": 36.8,
        "rr": 1.99,
        "profitableRuns": 3
      },
      {
        "strategy": "Strategy1",
        "desc": "EMA50 + ADX(14) + RSI(14) + ATR(14) Momentum Continuation",
        "runs": 3,
        "trades": 6390,
        "bestPf": 1.17,
        "bestTf": "M20",
        "medPf": 1.1,
        "winRate": 33.7,
        "rr": 2.2,
        "profitableRuns": 3
      },
      {
        "strategy": "Strategy12",
        "desc": "Swing Trend Pullback (EMA25/50 + RSI + ATR + loss cooldown)",
        "runs": 3,
        "trades": 5322,
        "bestPf": 1.16,
        "bestTf": "M15",
        "medPf": 1.1,
        "winRate": 34.7,
        "rr": 2.1,
        "profitableRuns": 3
      },
      {
        "strategy": "Strategy7",
        "desc": "Triple EMA Trend Pullback (EMA20/50/200, candle patterns, dynamic lot)",
        "runs": 3,
        "trades": 4348,
        "bestPf": 1.13,
        "bestTf": "M20",
        "medPf": 1.11,
        "winRate": 30.6,
        "rr": 2.52,
        "profitableRuns": 3
      },
      {
        "strategy": "Strategy6",
        "desc": "Swing Trading: EMA20/100 Engulfing Pullback + Loss Cooldown",
        "runs": 3,
        "trades": 4937,
        "bestPf": 1.11,
        "bestTf": "M15",
        "medPf": 1.1,
        "winRate": 34.4,
        "rr": 2.08,
        "profitableRuns": 3
      },
      {
        "strategy": "Strategy20",
        "desc": "Gold Trend Following (EMA8/50/100 + RSI + ATR + trailing + break-even)",
        "runs": 3,
        "trades": 11418,
        "bestPf": 1.04,
        "bestTf": "M15",
        "medPf": 1.03,
        "winRate": 49.4,
        "rr": 1.05,
        "profitableRuns": 3
      },
      {
        "strategy": "Strategy30",
        "desc": "3 EMA Pullback: H1/H4 Multi-Timeframe + RSI",
        "runs": 3,
        "trades": 5951,
        "bestPf": 1.01,
        "bestTf": "M15",
        "medPf": 1.0,
        "winRate": 30.9,
        "rr": 2.23,
        "profitableRuns": 1
      },
      {
        "strategy": "Strategy24",
        "desc": "Triple EMA Momentum: Golden Zone Pullback (variant A)",
        "runs": 3,
        "trades": 4442,
        "bestPf": 1.01,
        "bestTf": "M20",
        "medPf": 1.0,
        "winRate": 32.9,
        "rr": 2.04,
        "profitableRuns": 1
      },
      {
        "strategy": "Strategy36",
        "desc": "XAUUSD Swing EMA-RSI Strategy (EMA50 trend / EMA14 pullback + RSI)",
        "runs": 3,
        "trades": 5940,
        "bestPf": 0.99,
        "bestTf": "M20",
        "medPf": 0.94,
        "winRate": 26.9,
        "rr": 2.6,
        "profitableRuns": 0
      },
      {
        "strategy": "Strategy35",
        "desc": "9-21 EMA Crossover + ATR Filter + Break-Even",
        "runs": 3,
        "trades": 5600,
        "bestPf": 0.95,
        "bestTf": "M15",
        "medPf": 0.93,
        "winRate": 50.1,
        "rr": 0.92,
        "profitableRuns": 0
      },
      {
        "strategy": "Strategy2",
        "desc": "Daily EMA25/EMA200 Pullback + ADX Trend Filter",
        "runs": 3,
        "trades": 3608,
        "bestPf": 0.89,
        "bestTf": "M20",
        "medPf": 0.88,
        "winRate": 31.0,
        "rr": 1.96,
        "profitableRuns": 0
      },
      {
        "strategy": "Strategy10",
        "desc": "Gold Pullback Continuation (EMA50/100 + ATR + session/spread filter + break-even)",
        "runs": 3,
        "trades": 3769,
        "bestPf": 0.83,
        "bestTf": "M10",
        "medPf": 0.75,
        "winRate": 47.2,
        "rr": 0.85,
        "profitableRuns": 0
      },
      {
        "strategy": "Strategy14",
        "desc": "Gold EMA20/SMA9 Trend + ATR Trailing (no fixed TP)",
        "runs": 3,
        "trades": 6255,
        "bestPf": 0.77,
        "bestTf": "M20",
        "medPf": 0.73,
        "winRate": 37.6,
        "rr": 1.18,
        "profitableRuns": 0
      },
      {
        "strategy": "Strategy38",
        "desc": "Gold EMA200 Trend, ATR-based SL/TP + Break-Even + Trailing",
        "runs": 3,
        "trades": 8295,
        "bestPf": 0.75,
        "bestTf": "M10",
        "medPf": 0.71,
        "winRate": 38.2,
        "rr": 1.17,
        "profitableRuns": 0
      }
    ],
    "contract": {
      "symbol": "GOLD.i# (XM, XMGlobal-MT5 7)",
      "lotSize": "100 troy oz per 1.00 standard lot",
      "tested": "0.01 lot \u2014 1 oz, the broker minimum",
      "tick": "$0.01 per point at 0.01 lot"
    }
  },
  "fo": {
    "methods": [
      {
        "name": "Method A1: Close(T) -> Open(T+1) [BTST]",
        "trades": 223,
        "winRate": 63.2,
        "avgWin": 0.8,
        "avgLoss": -1.83,
        "avgRet": -0.011,
        "pf": 0.978
      },
      {
        "name": "Method A2: Close(T) -> Close(T+1) [1-Day Close]",
        "trades": 223,
        "winRate": 46.2,
        "avgWin": 2.08,
        "avgLoss": -2.12,
        "avgRet": -0.174,
        "pf": 0.847
      },
      {
        "name": "Method A3: Close(T) -> Close(T+5) [5-Day Swing]",
        "trades": 213,
        "winRate": 54.5,
        "avgWin": 4.49,
        "avgLoss": -4.54,
        "avgRet": 0.401,
        "pf": 1.196
      },
      {
        "name": "Method B1: ORB Breakout -> Intraday Close",
        "trades": 173,
        "winRate": 41.6,
        "avgWin": 1.79,
        "avgLoss": -1.49,
        "avgRet": -0.115,
        "pf": 0.866
      },
      {
        "name": "Method B2: ORB Breakout -> 5-Day Swing Hold",
        "trades": 165,
        "winRate": 55.2,
        "avgWin": 4.24,
        "avgLoss": -3.85,
        "avgRet": 0.612,
        "pf": 1.354
      },
      {
        "name": "Method B3: ORB Breakout + SL (Low) + TP (8%)",
        "trades": 167,
        "winRate": 53.9,
        "avgWin": 3.89,
        "avgLoss": -3.59,
        "avgRet": 0.44,
        "pf": 1.266
      },
      {
        "name": "Method C: Next Morning Open -> Close(T+1)",
        "trades": 223,
        "winRate": 43.9,
        "avgWin": 1.76,
        "avgLoss": -1.7,
        "avgRet": -0.179,
        "pf": 0.812
      }
    ],
    "monthly": [
      {
        "month": "2026-02",
        "trades": 34,
        "winRate": 76.5,
        "totalRet": 42.1
      },
      {
        "month": "2026-03",
        "trades": 16,
        "winRate": 31.2,
        "totalRet": -11.9
      },
      {
        "month": "2026-04",
        "trades": 33,
        "winRate": 72.7,
        "totalRet": 126.8
      },
      {
        "month": "2026-05",
        "trades": 34,
        "winRate": 41.2,
        "totalRet": -15.0
      },
      {
        "month": "2026-06",
        "trades": 25,
        "winRate": 44.0,
        "totalRet": -15.9
      },
      {
        "month": "2026-07",
        "trades": 44,
        "winRate": 52.3,
        "totalRet": -18.6
      },
      {
        "month": "2026-08",
        "trades": 12,
        "winRate": 58.3,
        "totalRet": 13.7
      }
    ],
    "horizons": [
      {
        "name": "ORB Breakout -> 5D Swing (Top 3)",
        "trades": 167,
        "winRate": 58.7,
        "pf": 1.518,
        "cumRet": 170.2,
        "maxDd": -38.5,
        "sharpe": 2.42
      },
      {
        "name": "ORB Breakout -> 5D Swing (Top 5)",
        "trades": 198,
        "winRate": 55.6,
        "pf": 1.42,
        "cumRet": 170.1,
        "maxDd": -53.9,
        "sharpe": 2.05
      },
      {
        "name": "ORB Breakout -> Intraday Close (Top 3)",
        "trades": 176,
        "winRate": 47.7,
        "pf": 1.074,
        "cumRet": 6.3,
        "maxDd": -24.7,
        "sharpe": 0.44
      },
      {
        "name": "ORB Breakout -> Intraday Close (Top 5)",
        "trades": 207,
        "winRate": 47.3,
        "pf": 1.053,
        "cumRet": 4.3,
        "maxDd": -25.7,
        "sharpe": 0.32
      },
      {
        "name": "Close(T) -> Open(T+1) [BTST Top 3]",
        "trades": 234,
        "winRate": 62.8,
        "pf": 0.948,
        "cumRet": -35.8,
        "maxDd": -63.9,
        "sharpe": -0.11
      },
      {
        "name": "Close(T) -> Open(T+1) [BTST Top 5]",
        "trades": 276,
        "winRate": 63.4,
        "pf": 1.091,
        "cumRet": -22.3,
        "maxDd": -63.6,
        "sharpe": 0.18
      },
      {
        "name": "Close(T) -> Close(T+5) [5D Swing Top 3]",
        "trades": 222,
        "winRate": 55.9,
        "pf": 1.182,
        "cumRet": 15.5,
        "maxDd": -72.0,
        "sharpe": 0.83
      },
      {
        "name": "Close(T) -> Close(T+5) [5D Swing Top 5]",
        "trades": 264,
        "winRate": 54.5,
        "pf": 1.255,
        "cumRet": 70.9,
        "maxDd": -71.5,
        "sharpe": 1.14
      },
      {
        "name": "Next Morning Open -> Close(T+1)",
        "trades": 276,
        "winRate": 45.7,
        "pf": 0.83,
        "cumRet": -38.1,
        "maxDd": -51.6,
        "sharpe": -1.13
      }
    ]
  },
  "ndx": {
    "meta": {
      "universe_size": 102,
      "price_rows": 2788,
      "price_history_start": "2014-01-02",
      "price_history_end": "2025-01-31",
      "backtest_start": "2015-01-02",
      "backtest_end": "2024-12-31",
      "sessions": 2516,
      "rebalance_dates": 252,
      "start_capital": 100000.0,
      "risk_free_pct": 2.0,
      "cost_model_bps_per_side": 5,
      "constituents_as_of": "current Nasdaq-100 membership at data-pull time",
      "survivorship_bias": true,
      "setups_evaluated": 6,
      "bull_sessions": 2063,
      "bear_sessions": 453
    },
    "headline": {
      "CAGR": 41.72,
      "Total_Return": 3162.96,
      "Max_DD": -39.09,
      "Calmar": 1.07,
      "Sharpe": 1.11,
      "Volatility": 35.81,
      "Final_Value": 3262958.53
    },
    "benchmarks": [
      {
        "name": "Setup F (Nasdaq 100 Top 3 bi-weekly)",
        "cagr": 41.72,
        "totalRet": 3163.0,
        "maxDd": -39.09,
        "calmar": 1.07,
        "sharpe": 1.11,
        "vol": 35.81,
        "final": 3262959
      },
      {
        "name": "QQQ buy & hold",
        "cagr": 18.3,
        "totalRet": 436.6,
        "maxDd": -35.12,
        "calmar": 0.52,
        "sharpe": 0.75,
        "vol": 21.82,
        "final": 536639
      },
      {
        "name": "SPY buy & hold",
        "cagr": 13.01,
        "totalRet": 239.6,
        "maxDd": -33.72,
        "calmar": 0.39,
        "sharpe": 0.62,
        "vol": 17.62,
        "final": 339574
      }
    ],
    "ladder": [
      {
        "name": "Setup F",
        "desc": "Nasdaq 100 Top 3 bi-weekly (1.25x bull lev, 200 SMA shield)",
        "universe": "Nasdaq 100",
        "positions": 3,
        "leverage": 1.25,
        "rebal": "bi-weekly",
        "cagr": 41.72,
        "maxDd": -39.09,
        "calmar": 1.07,
        "sharpe": 1.11,
        "vol": 35.81,
        "final": 3262959,
        "trades": 284
      },
      {
        "name": "Setup B",
        "desc": "Nasdaq 100 Top 5 (1.50x bull lev, dual 50/200 SMA shield)",
        "universe": "Nasdaq 100",
        "positions": 5,
        "leverage": 1.5,
        "rebal": "monthly",
        "cagr": 37.34,
        "maxDd": -38.02,
        "calmar": 0.98,
        "sharpe": 1.26,
        "vol": 28.03,
        "final": 2383831,
        "trades": 250
      },
      {
        "name": "Setup A",
        "desc": "Nasdaq 100 Top 5 (1.45x bull lev, 200 SMA shield, monthly)",
        "universe": "Nasdaq 100",
        "positions": 5,
        "leverage": 1.45,
        "rebal": "monthly",
        "cagr": 37.1,
        "maxDd": -51.33,
        "calmar": 0.72,
        "sharpe": 1.04,
        "vol": 33.8,
        "final": 2343534,
        "trades": 282
      },
      {
        "name": "Setup E",
        "desc": "All-cap Top 10 tiered 15%/5% (1.50x bull lev)",
        "universe": "All-cap (SP500+NDX+R2K)",
        "positions": 10,
        "leverage": 1.5,
        "rebal": "monthly",
        "cagr": 33.18,
        "maxDd": -59.7,
        "calmar": 0.56,
        "sharpe": 0.74,
        "vol": 42.13,
        "final": 1753914,
        "trades": 611
      },
      {
        "name": "Setup D",
        "desc": "All-cap Top 4 ultra-concentrated (1.35x bull lev)",
        "universe": "All-cap (SP500+NDX+R2K)",
        "positions": 4,
        "leverage": 1.35,
        "rebal": "monthly",
        "cagr": 28.85,
        "maxDd": -69.98,
        "calmar": 0.41,
        "sharpe": 0.56,
        "vol": 47.58,
        "final": 1260161,
        "trades": 281
      },
      {
        "name": "Setup C",
        "desc": "All-cap Top 5 (1.40x bull lev, 200 SMA shield, monthly)",
        "universe": "All-cap (SP500+NDX+R2K)",
        "positions": 5,
        "leverage": 1.4,
        "rebal": "monthly",
        "cagr": 24.28,
        "maxDd": -69.15,
        "calmar": 0.35,
        "sharpe": 0.5,
        "vol": 44.24,
        "final": 877995,
        "trades": 340
      }
    ],
    "annual": [
      {
        "year": 2015,
        "strat": 53.47,
        "qqq": 9.77,
        "spy": 1.29,
        "alpha": 43.71
      },
      {
        "year": 2016,
        "strat": 0.08,
        "qqq": 7.1,
        "spy": 12.0,
        "alpha": -7.01
      },
      {
        "year": 2017,
        "strat": 60.18,
        "qqq": 32.66,
        "spy": 21.71,
        "alpha": 27.51
      },
      {
        "year": 2018,
        "strat": 23.11,
        "qqq": -0.13,
        "spy": -4.57,
        "alpha": 23.24
      },
      {
        "year": 2019,
        "strat": -0.1,
        "qqq": 38.96,
        "spy": 31.22,
        "alpha": -39.06
      },
      {
        "year": 2020,
        "strat": 115.87,
        "qqq": 48.41,
        "spy": 18.33,
        "alpha": 67.46
      },
      {
        "year": 2021,
        "strat": 37.54,
        "qqq": 27.42,
        "spy": 28.73,
        "alpha": 10.12
      },
      {
        "year": 2022,
        "strat": -16.04,
        "qqq": -32.58,
        "spy": -18.18,
        "alpha": 16.54
      },
      {
        "year": 2023,
        "strat": 50.88,
        "qqq": 54.86,
        "spy": 26.18,
        "alpha": -3.97
      },
      {
        "year": 2024,
        "strat": 186.71,
        "qqq": 25.58,
        "spy": 24.89,
        "alpha": 161.13
      }
    ],
    "trades": {
      "n": 284,
      "wins": 149,
      "losses": 135,
      "winRate": 52.5,
      "avgWin": 10.9,
      "avgLoss": -5.13,
      "medianRet": 0.4,
      "best": 330.0,
      "worst": -27.1,
      "profitFactor": 1.73,
      "top10Share": 119.4,
      "bestTrade": "TSLA",
      "holdDays": 30.3
    },
    "exits": [
      {
        "reason": "Rank Exit (Out of Top 3)",
        "n": 178,
        "share": 62.7,
        "winRate": 60.1,
        "pnl": 1255995
      },
      {
        "reason": "Trend < 50-Day SMA",
        "n": 67,
        "share": 23.6,
        "winRate": 35.8,
        "pnl": 79241
      },
      {
        "reason": "Macro Bear (QQQ < 200 SMA)",
        "n": 39,
        "share": 13.7,
        "winRate": 46.2,
        "pnl": -11908
      }
    ],
    "contributors": [
      {
        "tk": "NVDA",
        "n": 10,
        "pnl": 252459
      },
      {
        "tk": "META",
        "n": 3,
        "pnl": 223287
      },
      {
        "tk": "TSLA",
        "n": 5,
        "pnl": 219817
      },
      {
        "tk": "PLTR",
        "n": 2,
        "pnl": 168954
      },
      {
        "tk": "FTNT",
        "n": 5,
        "pnl": 133081
      },
      {
        "tk": "CRWD",
        "n": 4,
        "pnl": 117410
      },
      {
        "tk": "CEG",
        "n": 4,
        "pnl": 101786
      },
      {
        "tk": "TMUS",
        "n": 3,
        "pnl": 74018
      },
      {
        "tk": "CTAS",
        "n": 3,
        "pnl": 62568
      },
      {
        "tk": "AXON",
        "n": 7,
        "pnl": 46017
      }
    ],
    "detractors": [
      {
        "tk": "PANW",
        "n": 4,
        "pnl": -156630
      },
      {
        "tk": "TER",
        "n": 4,
        "pnl": -63349
      },
      {
        "tk": "DDOG",
        "n": 2,
        "pnl": -60415
      },
      {
        "tk": "STX",
        "n": 4,
        "pnl": -58372
      },
      {
        "tk": "ISRG",
        "n": 8,
        "pnl": -47778
      }
    ],
    "curve": [
      {
        "d": "2015-01-02",
        "e": 99938,
        "q": 100000,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2015-01-09",
        "e": 102048,
        "q": 99689,
        "dd": -1.92,
        "b": 1
      },
      {
        "d": "2015-01-16",
        "e": 99587,
        "q": 97941,
        "dd": -4.29,
        "b": 1
      },
      {
        "d": "2015-01-26",
        "e": 105463,
        "q": 101166,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2015-02-02",
        "e": 102704,
        "q": 99067,
        "dd": -2.74,
        "b": 1
      },
      {
        "d": "2015-02-09",
        "e": 100808,
        "q": 99864,
        "dd": -4.53,
        "b": 1
      },
      {
        "d": "2015-02-17",
        "e": 102008,
        "q": 103954,
        "dd": -3.4,
        "b": 1
      },
      {
        "d": "2015-02-24",
        "e": 104440,
        "q": 105498,
        "dd": -1.09,
        "b": 1
      },
      {
        "d": "2015-03-03",
        "e": 113693,
        "q": 105761,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2015-03-10",
        "e": 108211,
        "q": 102701,
        "dd": -4.82,
        "b": 1
      },
      {
        "d": "2015-03-17",
        "e": 110184,
        "q": 103818,
        "dd": -3.09,
        "b": 1
      },
      {
        "d": "2015-03-24",
        "e": 109637,
        "q": 105089,
        "dd": -3.57,
        "b": 1
      },
      {
        "d": "2015-03-31",
        "e": 110823,
        "q": 102820,
        "dd": -2.52,
        "b": 1
      },
      {
        "d": "2015-04-08",
        "e": 110394,
        "q": 103833,
        "dd": -2.9,
        "b": 1
      },
      {
        "d": "2015-04-15",
        "e": 109403,
        "q": 105001,
        "dd": -3.77,
        "b": 1
      },
      {
        "d": "2015-04-22",
        "e": 113718,
        "q": 105790,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2015-04-29",
        "e": 109563,
        "q": 106471,
        "dd": -3.65,
        "b": 1
      },
      {
        "d": "2015-05-06",
        "e": 105721,
        "q": 103901,
        "dd": -7.03,
        "b": 1
      },
      {
        "d": "2015-05-13",
        "e": 109084,
        "q": 105157,
        "dd": -4.08,
        "b": 1
      },
      {
        "d": "2015-05-20",
        "e": 112556,
        "q": 107114,
        "dd": -1.12,
        "b": 1
      },
      {
        "d": "2015-05-28",
        "e": 117038,
        "q": 107795,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2015-06-04",
        "e": 117295,
        "q": 106676,
        "dd": -0.92,
        "b": 1
      },
      {
        "d": "2015-06-11",
        "e": 124689,
        "q": 106763,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2015-06-18",
        "e": 126845,
        "q": 107776,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2015-06-25",
        "e": 123920,
        "q": 107350,
        "dd": -2.81,
        "b": 1
      },
      {
        "d": "2015-07-02",
        "e": 123094,
        "q": 105350,
        "dd": -3.46,
        "b": 1
      },
      {
        "d": "2015-07-10",
        "e": 128252,
        "q": 105057,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2015-07-17",
        "e": 142126,
        "q": 110854,
        "dd": -0.1,
        "b": 1
      },
      {
        "d": "2015-07-24",
        "e": 140738,
        "q": 108424,
        "dd": -1.07,
        "b": 1
      },
      {
        "d": "2015-07-31",
        "e": 139282,
        "q": 109254,
        "dd": -2.1,
        "b": 1
      },
      {
        "d": "2015-08-07",
        "e": 140072,
        "q": 107653,
        "dd": -1.54,
        "b": 1
      },
      {
        "d": "2015-08-14",
        "e": 146469,
        "q": 107848,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2015-08-21",
        "e": 139055,
        "q": 99934,
        "dd": -5.5,
        "b": 0
      },
      {
        "d": "2015-08-28",
        "e": 142887,
        "q": 103076,
        "dd": -2.9,
        "b": 0
      },
      {
        "d": "2015-09-04",
        "e": 137631,
        "q": 99699,
        "dd": -6.47,
        "b": 0
      },
      {
        "d": "2015-09-14",
        "e": 145042,
        "q": 102715,
        "dd": -1.43,
        "b": 0
      },
      {
        "d": "2015-09-21",
        "e": 150860,
        "q": 103385,
        "dd": -0.15,
        "b": 0
      },
      {
        "d": "2015-09-28",
        "e": 137132,
        "q": 97819,
        "dd": -9.23,
        "b": 0
      },
      {
        "d": "2015-10-05",
        "e": 142760,
        "q": 103209,
        "dd": -5.51,
        "b": 0
      },
      {
        "d": "2015-10-12",
        "e": 144129,
        "q": 104471,
        "dd": -4.6,
        "b": 1
      },
      {
        "d": "2015-10-19",
        "e": 145854,
        "q": 106379,
        "dd": -3.46,
        "b": 1
      },
      {
        "d": "2015-10-26",
        "e": 152051,
        "q": 110400,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2015-11-02",
        "e": 153219,
        "q": 112122,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2015-11-09",
        "e": 155841,
        "q": 111104,
        "dd": -0.8,
        "b": 1
      },
      {
        "d": "2015-11-16",
        "e": 152728,
        "q": 109001,
        "dd": -3.31,
        "b": 1
      },
      {
        "d": "2015-11-23",
        "e": 158451,
        "q": 111672,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2015-12-01",
        "e": 160092,
        "q": 112660,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2015-12-08",
        "e": 156655,
        "q": 112141,
        "dd": -2.15,
        "b": 1
      },
      {
        "d": "2015-12-15",
        "e": 150343,
        "q": 109871,
        "dd": -6.09,
        "b": 1
      },
      {
        "d": "2015-12-22",
        "e": 151493,
        "q": 109687,
        "dd": -5.37,
        "b": 1
      },
      {
        "d": "2015-12-30",
        "e": 156778,
        "q": 111149,
        "dd": -2.07,
        "b": 1
      },
      {
        "d": "2016-01-07",
        "e": 146615,
        "q": 102906,
        "dd": -8.42,
        "b": 0
      },
      {
        "d": "2016-01-14",
        "e": 146615,
        "q": 102121,
        "dd": -8.42,
        "b": 0
      },
      {
        "d": "2016-01-22",
        "e": 146615,
        "q": 101827,
        "dd": -8.42,
        "b": 0
      },
      {
        "d": "2016-01-29",
        "e": 146615,
        "q": 102180,
        "dd": -8.42,
        "b": 0
      },
      {
        "d": "2016-02-05",
        "e": 146615,
        "q": 96283,
        "dd": -8.42,
        "b": 0
      },
      {
        "d": "2016-02-12",
        "e": 146615,
        "q": 96185,
        "dd": -8.42,
        "b": 0
      },
      {
        "d": "2016-02-22",
        "e": 146615,
        "q": 101346,
        "dd": -8.42,
        "b": 0
      },
      {
        "d": "2016-02-29",
        "e": 146615,
        "q": 100581,
        "dd": -8.42,
        "b": 0
      },
      {
        "d": "2016-03-07",
        "e": 146615,
        "q": 103054,
        "dd": -8.42,
        "b": 0
      },
      {
        "d": "2016-03-14",
        "e": 146615,
        "q": 104673,
        "dd": -8.42,
        "b": 0
      },
      {
        "d": "2016-03-21",
        "e": 146615,
        "q": 106085,
        "dd": -8.42,
        "b": 1
      },
      {
        "d": "2016-03-29",
        "e": 146523,
        "q": 107109,
        "dd": -8.48,
        "b": 1
      },
      {
        "d": "2016-04-05",
        "e": 144909,
        "q": 107158,
        "dd": -9.48,
        "b": 1
      },
      {
        "d": "2016-04-12",
        "e": 145622,
        "q": 107778,
        "dd": -9.04,
        "b": 1
      },
      {
        "d": "2016-04-19",
        "e": 146256,
        "q": 108802,
        "dd": -8.64,
        "b": 1
      },
      {
        "d": "2016-04-26",
        "e": 139360,
        "q": 106735,
        "dd": -12.95,
        "b": 1
      },
      {
        "d": "2016-05-03",
        "e": 140113,
        "q": 104058,
        "dd": -12.48,
        "b": 0
      },
      {
        "d": "2016-05-10",
        "e": 140026,
        "q": 105633,
        "dd": -12.53,
        "b": 1
      },
      {
        "d": "2016-05-17",
        "e": 139938,
        "q": 103812,
        "dd": -12.59,
        "b": 0
      },
      {
        "d": "2016-05-24",
        "e": 139851,
        "q": 106745,
        "dd": -12.64,
        "b": 1
      },
      {
        "d": "2016-06-01",
        "e": 144474,
        "q": 108605,
        "dd": -9.76,
        "b": 1
      },
      {
        "d": "2016-06-08",
        "e": 145589,
        "q": 108625,
        "dd": -9.06,
        "b": 1
      },
      {
        "d": "2016-06-15",
        "e": 144396,
        "q": 106017,
        "dd": -9.8,
        "b": 1
      },
      {
        "d": "2016-06-22",
        "e": 144130,
        "q": 105825,
        "dd": -9.97,
        "b": 1
      },
      {
        "d": "2016-06-29",
        "e": 146078,
        "q": 104908,
        "dd": -8.75,
        "b": 0
      },
      {
        "d": "2016-07-07",
        "e": 145986,
        "q": 107187,
        "dd": -8.81,
        "b": 1
      },
      {
        "d": "2016-07-14",
        "e": 144618,
        "q": 110503,
        "dd": -9.67,
        "b": 1
      },
      {
        "d": "2016-07-21",
        "e": 148075,
        "q": 111687,
        "dd": -7.51,
        "b": 1
      },
      {
        "d": "2016-07-28",
        "e": 146765,
        "q": 113463,
        "dd": -8.32,
        "b": 1
      },
      {
        "d": "2016-08-04",
        "e": 154977,
        "q": 114144,
        "dd": -3.19,
        "b": 1
      },
      {
        "d": "2016-08-11",
        "e": 149580,
        "q": 115575,
        "dd": -6.57,
        "b": 1
      },
      {
        "d": "2016-08-18",
        "e": 155335,
        "q": 115743,
        "dd": -2.97,
        "b": 1
      },
      {
        "d": "2016-08-25",
        "e": 157174,
        "q": 115072,
        "dd": -1.82,
        "b": 1
      },
      {
        "d": "2016-09-01",
        "e": 153520,
        "q": 115200,
        "dd": -4.11,
        "b": 1
      },
      {
        "d": "2016-09-09",
        "e": 136982,
        "q": 112772,
        "dd": -14.44,
        "b": 1
      },
      {
        "d": "2016-09-16",
        "e": 142012,
        "q": 116033,
        "dd": -11.29,
        "b": 1
      },
      {
        "d": "2016-09-23",
        "e": 145954,
        "q": 117062,
        "dd": -8.83,
        "b": 1
      },
      {
        "d": "2016-09-30",
        "e": 149327,
        "q": 117447,
        "dd": -6.72,
        "b": 1
      },
      {
        "d": "2016-10-07",
        "e": 151701,
        "q": 117200,
        "dd": -5.24,
        "b": 1
      },
      {
        "d": "2016-10-14",
        "e": 142543,
        "q": 115884,
        "dd": -10.96,
        "b": 1
      },
      {
        "d": "2016-10-21",
        "e": 141621,
        "q": 116883,
        "dd": -11.54,
        "b": 1
      },
      {
        "d": "2016-10-28",
        "e": 138184,
        "q": 115845,
        "dd": -13.68,
        "b": 1
      },
      {
        "d": "2016-11-04",
        "e": 128661,
        "q": 112432,
        "dd": -19.63,
        "b": 1
      },
      {
        "d": "2016-11-11",
        "e": 128992,
        "q": 114559,
        "dd": -19.43,
        "b": 1
      },
      {
        "d": "2016-11-18",
        "e": 135717,
        "q": 116062,
        "dd": -15.23,
        "b": 1
      },
      {
        "d": "2016-11-28",
        "e": 140363,
        "q": 117259,
        "dd": -12.32,
        "b": 1
      },
      {
        "d": "2016-12-05",
        "e": 138494,
        "q": 115350,
        "dd": -13.49,
        "b": 1
      },
      {
        "d": "2016-12-12",
        "e": 153400,
        "q": 117685,
        "dd": -4.18,
        "b": 1
      },
      {
        "d": "2016-12-19",
        "e": 152910,
        "q": 119154,
        "dd": -4.49,
        "b": 1
      },
      {
        "d": "2016-12-27",
        "e": 160252,
        "q": 119878,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2017-01-04",
        "e": 156338,
        "q": 119253,
        "dd": -2.44,
        "b": 1
      },
      {
        "d": "2017-01-11",
        "e": 157543,
        "q": 121972,
        "dd": -1.69,
        "b": 1
      },
      {
        "d": "2017-01-19",
        "e": 161890,
        "q": 122021,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2017-01-26",
        "e": 173415,
        "q": 124581,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2017-02-02",
        "e": 181795,
        "q": 124343,
        "dd": -0.55,
        "b": 1
      },
      {
        "d": "2017-02-09",
        "e": 191817,
        "q": 125970,
        "dd": -0.58,
        "b": 1
      },
      {
        "d": "2017-02-16",
        "e": 187667,
        "q": 128243,
        "dd": -2.86,
        "b": 1
      },
      {
        "d": "2017-02-24",
        "e": 193337,
        "q": 129245,
        "dd": -0.56,
        "b": 1
      },
      {
        "d": "2017-03-03",
        "e": 185985,
        "q": 129999,
        "dd": -5.65,
        "b": 1
      },
      {
        "d": "2017-03-10",
        "e": 196369,
        "q": 130366,
        "dd": -0.38,
        "b": 1
      },
      {
        "d": "2017-03-17",
        "e": 196764,
        "q": 130935,
        "dd": -1.26,
        "b": 1
      },
      {
        "d": "2017-03-24",
        "e": 200639,
        "q": 129881,
        "dd": -1.8,
        "b": 1
      },
      {
        "d": "2017-03-31",
        "e": 199832,
        "q": 131621,
        "dd": -2.72,
        "b": 1
      },
      {
        "d": "2017-04-07",
        "e": 200968,
        "q": 131214,
        "dd": -2.17,
        "b": 1
      },
      {
        "d": "2017-04-17",
        "e": 193235,
        "q": 130727,
        "dd": -5.93,
        "b": 1
      },
      {
        "d": "2017-04-24",
        "e": 203109,
        "q": 133391,
        "dd": -1.12,
        "b": 1
      },
      {
        "d": "2017-05-01",
        "e": 214363,
        "q": 136414,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2017-05-08",
        "e": 224468,
        "q": 137050,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2017-05-15",
        "e": 236101,
        "q": 138243,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2017-05-22",
        "e": 229220,
        "q": 138203,
        "dd": -3.22,
        "b": 1
      },
      {
        "d": "2017-05-30",
        "e": 232924,
        "q": 140530,
        "dd": -1.65,
        "b": 1
      },
      {
        "d": "2017-06-06",
        "e": 243181,
        "q": 142041,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2017-06-13",
        "e": 221955,
        "q": 139556,
        "dd": -9.83,
        "b": 1
      },
      {
        "d": "2017-06-20",
        "e": 223053,
        "q": 138939,
        "dd": -9.39,
        "b": 1
      },
      {
        "d": "2017-06-27",
        "e": 221702,
        "q": 137613,
        "dd": -9.94,
        "b": 1
      },
      {
        "d": "2017-07-05",
        "e": 216164,
        "q": 137114,
        "dd": -12.19,
        "b": 1
      },
      {
        "d": "2017-07-12",
        "e": 217217,
        "q": 140275,
        "dd": -11.76,
        "b": 1
      },
      {
        "d": "2017-07-19",
        "e": 215970,
        "q": 143545,
        "dd": -12.26,
        "b": 1
      },
      {
        "d": "2017-07-26",
        "e": 213251,
        "q": 144432,
        "dd": -13.37,
        "b": 1
      },
      {
        "d": "2017-08-02",
        "e": 214423,
        "q": 143515,
        "dd": -12.89,
        "b": 1
      },
      {
        "d": "2017-08-09",
        "e": 216566,
        "q": 143684,
        "dd": -12.02,
        "b": 1
      },
      {
        "d": "2017-08-16",
        "e": 216725,
        "q": 143844,
        "dd": -11.96,
        "b": 1
      },
      {
        "d": "2017-08-23",
        "e": 218302,
        "q": 142259,
        "dd": -11.32,
        "b": 1
      },
      {
        "d": "2017-08-30",
        "e": 224119,
        "q": 144213,
        "dd": -8.95,
        "b": 1
      },
      {
        "d": "2017-09-07",
        "e": 226417,
        "q": 145030,
        "dd": -8.02,
        "b": 1
      },
      {
        "d": "2017-09-14",
        "e": 226066,
        "q": 145120,
        "dd": -8.16,
        "b": 1
      },
      {
        "d": "2017-09-21",
        "e": 228496,
        "q": 144339,
        "dd": -7.18,
        "b": 1
      },
      {
        "d": "2017-09-28",
        "e": 225593,
        "q": 144289,
        "dd": -8.36,
        "b": 1
      },
      {
        "d": "2017-10-05",
        "e": 232351,
        "q": 147336,
        "dd": -5.61,
        "b": 1
      },
      {
        "d": "2017-10-12",
        "e": 237224,
        "q": 147646,
        "dd": -3.63,
        "b": 1
      },
      {
        "d": "2017-10-19",
        "e": 235968,
        "q": 148185,
        "dd": -4.14,
        "b": 1
      },
      {
        "d": "2017-10-26",
        "e": 244129,
        "q": 146837,
        "dd": -0.83,
        "b": 1
      },
      {
        "d": "2017-11-02",
        "e": 249949,
        "q": 151682,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2017-11-09",
        "e": 255618,
        "q": 153561,
        "dd": -0.77,
        "b": 1
      },
      {
        "d": "2017-11-16",
        "e": 263174,
        "q": 154410,
        "dd": -0.13,
        "b": 1
      },
      {
        "d": "2017-11-24",
        "e": 267891,
        "q": 156129,
        "dd": -0.02,
        "b": 1
      },
      {
        "d": "2017-12-01",
        "e": 245760,
        "q": 154360,
        "dd": -8.28,
        "b": 1
      },
      {
        "d": "2017-12-08",
        "e": 244284,
        "q": 154570,
        "dd": -8.83,
        "b": 1
      },
      {
        "d": "2017-12-15",
        "e": 245349,
        "q": 157518,
        "dd": -8.43,
        "b": 1
      },
      {
        "d": "2017-12-22",
        "e": 245256,
        "q": 157567,
        "dd": -8.47,
        "b": 1
      },
      {
        "d": "2018-01-02",
        "e": 247855,
        "q": 158688,
        "dd": -7.5,
        "b": 1
      },
      {
        "d": "2018-01-09",
        "e": 258201,
        "q": 162763,
        "dd": -3.63,
        "b": 1
      },
      {
        "d": "2018-01-17",
        "e": 272601,
        "q": 165997,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2018-01-24",
        "e": 277178,
        "q": 168620,
        "dd": -0.48,
        "b": 1
      },
      {
        "d": "2018-01-31",
        "e": 276368,
        "q": 169612,
        "dd": -1.9,
        "b": 1
      },
      {
        "d": "2018-02-07",
        "e": 262838,
        "q": 160410,
        "dd": -6.7,
        "b": 1
      },
      {
        "d": "2018-02-14",
        "e": 267165,
        "q": 162883,
        "dd": -5.17,
        "b": 1
      },
      {
        "d": "2018-02-22",
        "e": 265549,
        "q": 165006,
        "dd": -5.74,
        "b": 1
      },
      {
        "d": "2018-03-01",
        "e": 275769,
        "q": 164686,
        "dd": -2.11,
        "b": 1
      },
      {
        "d": "2018-03-08",
        "e": 297289,
        "q": 170072,
        "dd": -1.01,
        "b": 1
      },
      {
        "d": "2018-03-15",
        "e": 302750,
        "q": 171744,
        "dd": -1.65,
        "b": 1
      },
      {
        "d": "2018-03-22",
        "e": 298766,
        "q": 163268,
        "dd": -2.97,
        "b": 1
      },
      {
        "d": "2018-03-29",
        "e": 287058,
        "q": 160590,
        "dd": -6.78,
        "b": 1
      },
      {
        "d": "2018-04-06",
        "e": 290767,
        "q": 157080,
        "dd": -5.57,
        "b": 1
      },
      {
        "d": "2018-04-13",
        "e": 291878,
        "q": 161834,
        "dd": -5.21,
        "b": 1
      },
      {
        "d": "2018-04-20",
        "e": 300890,
        "q": 162766,
        "dd": -2.28,
        "b": 1
      },
      {
        "d": "2018-04-27",
        "e": 295330,
        "q": 162556,
        "dd": -4.09,
        "b": 1
      },
      {
        "d": "2018-05-04",
        "e": 299973,
        "q": 165344,
        "dd": -2.58,
        "b": 1
      },
      {
        "d": "2018-05-11",
        "e": 310779,
        "q": 169947,
        "dd": -0.06,
        "b": 1
      },
      {
        "d": "2018-05-18",
        "e": 307743,
        "q": 167941,
        "dd": -1.29,
        "b": 1
      },
      {
        "d": "2018-05-25",
        "e": 313995,
        "q": 170208,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2018-06-04",
        "e": 316671,
        "q": 174801,
        "dd": -0.77,
        "b": 1
      },
      {
        "d": "2018-06-11",
        "e": 316998,
        "q": 175413,
        "dd": -1.59,
        "b": 1
      },
      {
        "d": "2018-06-18",
        "e": 324326,
        "q": 177386,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2018-06-25",
        "e": 314034,
        "q": 172230,
        "dd": -7.16,
        "b": 1
      },
      {
        "d": "2018-07-02",
        "e": 325610,
        "q": 173668,
        "dd": -3.73,
        "b": 1
      },
      {
        "d": "2018-07-10",
        "e": 352635,
        "q": 178210,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2018-07-17",
        "e": 364591,
        "q": 181175,
        "dd": -2.5,
        "b": 1
      },
      {
        "d": "2018-07-24",
        "e": 357886,
        "q": 181205,
        "dd": -4.29,
        "b": 1
      },
      {
        "d": "2018-07-31",
        "e": 335038,
        "q": 177336,
        "dd": -10.4,
        "b": 1
      },
      {
        "d": "2018-08-07",
        "e": 345583,
        "q": 182713,
        "dd": -7.58,
        "b": 1
      },
      {
        "d": "2018-08-14",
        "e": 335735,
        "q": 182361,
        "dd": -10.22,
        "b": 1
      },
      {
        "d": "2018-08-21",
        "e": 338299,
        "q": 181265,
        "dd": -9.53,
        "b": 1
      },
      {
        "d": "2018-08-28",
        "e": 342871,
        "q": 185537,
        "dd": -8.31,
        "b": 1
      },
      {
        "d": "2018-09-05",
        "e": 352474,
        "q": 184371,
        "dd": -5.74,
        "b": 1
      },
      {
        "d": "2018-09-12",
        "e": 359469,
        "q": 183497,
        "dd": -3.87,
        "b": 1
      },
      {
        "d": "2018-09-19",
        "e": 325278,
        "q": 183617,
        "dd": -13.01,
        "b": 1
      },
      {
        "d": "2018-09-26",
        "e": 319792,
        "q": 185528,
        "dd": -14.48,
        "b": 1
      },
      {
        "d": "2018-10-03",
        "e": 305047,
        "q": 187220,
        "dd": -18.42,
        "b": 1
      },
      {
        "d": "2018-10-10",
        "e": 295812,
        "q": 172903,
        "dd": -20.89,
        "b": 1
      },
      {
        "d": "2018-10-17",
        "e": 295625,
        "q": 178501,
        "dd": -20.94,
        "b": 1
      },
      {
        "d": "2018-10-24",
        "e": 295625,
        "q": 166469,
        "dd": -20.94,
        "b": 0
      },
      {
        "d": "2018-10-31",
        "e": 295625,
        "q": 170980,
        "dd": -20.94,
        "b": 0
      },
      {
        "d": "2018-11-07",
        "e": 295441,
        "q": 176779,
        "dd": -20.99,
        "b": 1
      },
      {
        "d": "2018-11-14",
        "e": 302889,
        "q": 166328,
        "dd": -19.0,
        "b": 0
      },
      {
        "d": "2018-11-21",
        "e": 302889,
        "q": 161465,
        "dd": -19.0,
        "b": 0
      },
      {
        "d": "2018-11-29",
        "e": 302889,
        "q": 169298,
        "dd": -19.0,
        "b": 0
      },
      {
        "d": "2018-12-07",
        "e": 302889,
        "q": 162482,
        "dd": -19.0,
        "b": 0
      },
      {
        "d": "2018-12-14",
        "e": 302889,
        "q": 162180,
        "dd": -19.0,
        "b": 0
      },
      {
        "d": "2018-12-21",
        "e": 302889,
        "q": 148578,
        "dd": -19.0,
        "b": 0
      },
      {
        "d": "2018-12-31",
        "e": 302889,
        "q": 155758,
        "dd": -19.0,
        "b": 0
      },
      {
        "d": "2019-01-08",
        "e": 302889,
        "q": 161069,
        "dd": -19.0,
        "b": 0
      },
      {
        "d": "2019-01-15",
        "e": 302889,
        "q": 163957,
        "dd": -19.0,
        "b": 0
      },
      {
        "d": "2019-01-23",
        "e": 302889,
        "q": 163724,
        "dd": -19.0,
        "b": 0
      },
      {
        "d": "2019-01-30",
        "e": 302889,
        "q": 167289,
        "dd": -19.0,
        "b": 0
      },
      {
        "d": "2019-02-06",
        "e": 302889,
        "q": 172176,
        "dd": -19.0,
        "b": 0
      },
      {
        "d": "2019-02-13",
        "e": 302889,
        "q": 172670,
        "dd": -19.0,
        "b": 0
      },
      {
        "d": "2019-02-21",
        "e": 302700,
        "q": 173286,
        "dd": -19.05,
        "b": 1
      },
      {
        "d": "2019-02-28",
        "e": 291724,
        "q": 174872,
        "dd": -21.99,
        "b": 1
      },
      {
        "d": "2019-03-07",
        "e": 299689,
        "q": 173095,
        "dd": -19.86,
        "b": 0
      },
      {
        "d": "2019-03-14",
        "e": 299689,
        "q": 178426,
        "dd": -19.86,
        "b": 1
      },
      {
        "d": "2019-03-21",
        "e": 299501,
        "q": 184678,
        "dd": -19.91,
        "b": 1
      },
      {
        "d": "2019-03-28",
        "e": 301333,
        "q": 180369,
        "dd": -19.42,
        "b": 1
      },
      {
        "d": "2019-04-04",
        "e": 300741,
        "q": 185831,
        "dd": -19.58,
        "b": 1
      },
      {
        "d": "2019-04-11",
        "e": 305964,
        "q": 187167,
        "dd": -18.18,
        "b": 1
      },
      {
        "d": "2019-04-18",
        "e": 304084,
        "q": 189554,
        "dd": -18.68,
        "b": 1
      },
      {
        "d": "2019-04-26",
        "e": 314821,
        "q": 192851,
        "dd": -15.81,
        "b": 1
      },
      {
        "d": "2019-05-03",
        "e": 317952,
        "q": 193317,
        "dd": -14.97,
        "b": 1
      },
      {
        "d": "2019-05-10",
        "e": 319110,
        "q": 187136,
        "dd": -14.66,
        "b": 1
      },
      {
        "d": "2019-05-17",
        "e": 326978,
        "q": 185154,
        "dd": -12.56,
        "b": 1
      },
      {
        "d": "2019-05-24",
        "e": 319304,
        "q": 180217,
        "dd": -14.61,
        "b": 1
      },
      {
        "d": "2019-06-03",
        "e": 315267,
        "q": 172084,
        "dd": -15.69,
        "b": 0
      },
      {
        "d": "2019-06-10",
        "e": 315267,
        "q": 185265,
        "dd": -15.69,
        "b": 1
      },
      {
        "d": "2019-06-17",
        "e": 315070,
        "q": 185862,
        "dd": -15.74,
        "b": 1
      },
      {
        "d": "2019-06-24",
        "e": 320847,
        "q": 190754,
        "dd": -14.2,
        "b": 1
      },
      {
        "d": "2019-07-01",
        "e": 314019,
        "q": 191869,
        "dd": -16.03,
        "b": 1
      },
      {
        "d": "2019-07-09",
        "e": 327028,
        "q": 193288,
        "dd": -12.55,
        "b": 1
      },
      {
        "d": "2019-07-16",
        "e": 330369,
        "q": 195812,
        "dd": -11.65,
        "b": 1
      },
      {
        "d": "2019-07-23",
        "e": 328214,
        "q": 196461,
        "dd": -12.23,
        "b": 1
      },
      {
        "d": "2019-07-30",
        "e": 333888,
        "q": 196451,
        "dd": -10.71,
        "b": 1
      },
      {
        "d": "2019-08-06",
        "e": 322375,
        "q": 185786,
        "dd": -13.79,
        "b": 1
      },
      {
        "d": "2019-08-13",
        "e": 329263,
        "q": 190987,
        "dd": -11.95,
        "b": 1
      },
      {
        "d": "2019-08-20",
        "e": 328359,
        "q": 189547,
        "dd": -12.19,
        "b": 1
      },
      {
        "d": "2019-08-27",
        "e": 350188,
        "q": 186972,
        "dd": -6.35,
        "b": 1
      },
      {
        "d": "2019-09-04",
        "e": 345214,
        "q": 190926,
        "dd": -7.68,
        "b": 1
      },
      {
        "d": "2019-09-11",
        "e": 319629,
        "q": 195082,
        "dd": -14.52,
        "b": 1
      },
      {
        "d": "2019-09-18",
        "e": 309588,
        "q": 195174,
        "dd": -17.21,
        "b": 1
      },
      {
        "d": "2019-09-25",
        "e": 293747,
        "q": 193089,
        "dd": -21.45,
        "b": 1
      },
      {
        "d": "2019-10-02",
        "e": 278562,
        "q": 186963,
        "dd": -25.51,
        "b": 1
      },
      {
        "d": "2019-10-09",
        "e": 284138,
        "q": 190193,
        "dd": -24.02,
        "b": 1
      },
      {
        "d": "2019-10-16",
        "e": 286280,
        "q": 196095,
        "dd": -23.44,
        "b": 1
      },
      {
        "d": "2019-10-23",
        "e": 292731,
        "q": 195263,
        "dd": -21.72,
        "b": 1
      },
      {
        "d": "2019-10-30",
        "e": 309656,
        "q": 200108,
        "dd": -17.19,
        "b": 1
      },
      {
        "d": "2019-11-06",
        "e": 315147,
        "q": 202922,
        "dd": -15.72,
        "b": 1
      },
      {
        "d": "2019-11-13",
        "e": 310224,
        "q": 204781,
        "dd": -17.04,
        "b": 1
      },
      {
        "d": "2019-11-20",
        "e": 308575,
        "q": 205350,
        "dd": -17.48,
        "b": 1
      },
      {
        "d": "2019-11-27",
        "e": 299936,
        "q": 209301,
        "dd": -19.79,
        "b": 1
      },
      {
        "d": "2019-12-05",
        "e": 295448,
        "q": 206040,
        "dd": -20.99,
        "b": 1
      },
      {
        "d": "2019-12-12",
        "e": 294593,
        "q": 209779,
        "dd": -21.22,
        "b": 1
      },
      {
        "d": "2019-12-19",
        "e": 297616,
        "q": 214198,
        "dd": -20.41,
        "b": 1
      },
      {
        "d": "2019-12-27",
        "e": 302833,
        "q": 217462,
        "dd": -19.02,
        "b": 1
      },
      {
        "d": "2020-01-06",
        "e": 304854,
        "q": 219447,
        "dd": -18.48,
        "b": 1
      },
      {
        "d": "2020-01-13",
        "e": 311237,
        "q": 224934,
        "dd": -16.77,
        "b": 1
      },
      {
        "d": "2020-01-21",
        "e": 319337,
        "q": 227306,
        "dd": -14.6,
        "b": 1
      },
      {
        "d": "2020-01-28",
        "e": 317706,
        "q": 225443,
        "dd": -15.04,
        "b": 1
      },
      {
        "d": "2020-02-04",
        "e": 300740,
        "q": 231571,
        "dd": -19.58,
        "b": 1
      },
      {
        "d": "2020-02-11",
        "e": 284222,
        "q": 236193,
        "dd": -23.99,
        "b": 1
      },
      {
        "d": "2020-02-19",
        "e": 307188,
        "q": 241253,
        "dd": -17.85,
        "b": 1
      },
      {
        "d": "2020-02-26",
        "e": 253113,
        "q": 220383,
        "dd": -32.31,
        "b": 1
      },
      {
        "d": "2020-03-04",
        "e": 252957,
        "q": 222155,
        "dd": -32.35,
        "b": 1
      },
      {
        "d": "2020-03-11",
        "e": 238582,
        "q": 198740,
        "dd": -36.2,
        "b": 0
      },
      {
        "d": "2020-03-18",
        "e": 238582,
        "q": 179784,
        "dd": -36.2,
        "b": 0
      },
      {
        "d": "2020-03-25",
        "e": 238582,
        "q": 185982,
        "dd": -36.2,
        "b": 0
      },
      {
        "d": "2020-04-01",
        "e": 238582,
        "q": 185993,
        "dd": -36.2,
        "b": 0
      },
      {
        "d": "2020-04-08",
        "e": 238582,
        "q": 204622,
        "dd": -36.2,
        "b": 1
      },
      {
        "d": "2020-04-16",
        "e": 238433,
        "q": 217558,
        "dd": -36.24,
        "b": 1
      },
      {
        "d": "2020-04-23",
        "e": 242962,
        "q": 214773,
        "dd": -35.03,
        "b": 1
      },
      {
        "d": "2020-04-30",
        "e": 250118,
        "q": 223332,
        "dd": -33.11,
        "b": 1
      },
      {
        "d": "2020-05-07",
        "e": 278534,
        "q": 226301,
        "dd": -25.51,
        "b": 1
      },
      {
        "d": "2020-05-14",
        "e": 282841,
        "q": 226311,
        "dd": -24.36,
        "b": 1
      },
      {
        "d": "2020-05-21",
        "e": 287668,
        "q": 233493,
        "dd": -23.07,
        "b": 1
      },
      {
        "d": "2020-05-29",
        "e": 282900,
        "q": 238074,
        "dd": -24.35,
        "b": 1
      },
      {
        "d": "2020-06-05",
        "e": 289978,
        "q": 244532,
        "dd": -22.45,
        "b": 1
      },
      {
        "d": "2020-06-12",
        "e": 301798,
        "q": 240645,
        "dd": -19.29,
        "b": 1
      },
      {
        "d": "2020-06-19",
        "e": 346575,
        "q": 249174,
        "dd": -7.32,
        "b": 1
      },
      {
        "d": "2020-06-26",
        "e": 342956,
        "q": 245499,
        "dd": -8.29,
        "b": 1
      },
      {
        "d": "2020-07-06",
        "e": 420498,
        "q": 264068,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2020-07-13",
        "e": 438699,
        "q": 264221,
        "dd": -3.44,
        "b": 1
      },
      {
        "d": "2020-07-20",
        "e": 457680,
        "q": 272642,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2020-07-27",
        "e": 435162,
        "q": 265836,
        "dd": -4.92,
        "b": 1
      },
      {
        "d": "2020-08-03",
        "e": 472675,
        "q": 275299,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2020-08-10",
        "e": 443142,
        "q": 276250,
        "dd": -7.2,
        "b": 1
      },
      {
        "d": "2020-08-17",
        "e": 521144,
        "q": 281370,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2020-08-24",
        "e": 539778,
        "q": 289862,
        "dd": -3.04,
        "b": 1
      },
      {
        "d": "2020-08-31",
        "e": 610850,
        "q": 301360,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2020-09-08",
        "e": 475562,
        "q": 275882,
        "dd": -22.68,
        "b": 1
      },
      {
        "d": "2020-09-15",
        "e": 580593,
        "q": 285192,
        "dd": -5.6,
        "b": 1
      },
      {
        "d": "2020-09-22",
        "e": 534651,
        "q": 278467,
        "dd": -13.07,
        "b": 1
      },
      {
        "d": "2020-09-29",
        "e": 546946,
        "q": 282014,
        "dd": -11.07,
        "b": 1
      },
      {
        "d": "2020-10-06",
        "e": 557525,
        "q": 281206,
        "dd": -9.35,
        "b": 1
      },
      {
        "d": "2020-10-13",
        "e": 599407,
        "q": 300992,
        "dd": -2.54,
        "b": 1
      },
      {
        "d": "2020-10-20",
        "e": 563721,
        "q": 290660,
        "dd": -8.34,
        "b": 1
      },
      {
        "d": "2020-10-27",
        "e": 543483,
        "q": 288871,
        "dd": -11.63,
        "b": 1
      },
      {
        "d": "2020-11-03",
        "e": 523269,
        "q": 280685,
        "dd": -14.92,
        "b": 1
      },
      {
        "d": "2020-11-10",
        "e": 516317,
        "q": 289648,
        "dd": -16.05,
        "b": 1
      },
      {
        "d": "2020-11-17",
        "e": 539905,
        "q": 298692,
        "dd": -12.22,
        "b": 1
      },
      {
        "d": "2020-11-24",
        "e": 611007,
        "q": 300941,
        "dd": -0.66,
        "b": 1
      },
      {
        "d": "2020-12-02",
        "e": 625390,
        "q": 310527,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2020-12-09",
        "e": 619644,
        "q": 307931,
        "dd": -8.26,
        "b": 1
      },
      {
        "d": "2020-12-16",
        "e": 617164,
        "q": 315770,
        "dd": -8.63,
        "b": 1
      },
      {
        "d": "2020-12-23",
        "e": 615243,
        "q": 315543,
        "dd": -8.91,
        "b": 1
      },
      {
        "d": "2020-12-31",
        "e": 653182,
        "q": 321215,
        "dd": -3.3,
        "b": 1
      },
      {
        "d": "2021-01-08",
        "e": 834613,
        "q": 326631,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2021-01-15",
        "e": 848333,
        "q": 319291,
        "dd": -4.97,
        "b": 1
      },
      {
        "d": "2021-01-25",
        "e": 876232,
        "q": 335928,
        "dd": -1.85,
        "b": 1
      },
      {
        "d": "2021-02-01",
        "e": 825943,
        "q": 330102,
        "dd": -7.48,
        "b": 1
      },
      {
        "d": "2021-02-08",
        "e": 1055948,
        "q": 341528,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2021-02-16",
        "e": 1016738,
        "q": 343535,
        "dd": -13.34,
        "b": 1
      },
      {
        "d": "2021-02-23",
        "e": 891927,
        "q": 329140,
        "dd": -23.98,
        "b": 1
      },
      {
        "d": "2021-03-02",
        "e": 988253,
        "q": 325986,
        "dd": -15.77,
        "b": 1
      },
      {
        "d": "2021-03-09",
        "e": 953738,
        "q": 319198,
        "dd": -18.71,
        "b": 1
      },
      {
        "d": "2021-03-16",
        "e": 1050032,
        "q": 328218,
        "dd": -10.51,
        "b": 1
      },
      {
        "d": "2021-03-23",
        "e": 943726,
        "q": 325188,
        "dd": -19.57,
        "b": 1
      },
      {
        "d": "2021-03-30",
        "e": 750427,
        "q": 322216,
        "dd": -36.04,
        "b": 1
      },
      {
        "d": "2021-04-07",
        "e": 789160,
        "q": 339950,
        "dd": -32.74,
        "b": 1
      },
      {
        "d": "2021-04-14",
        "e": 811330,
        "q": 344963,
        "dd": -30.85,
        "b": 1
      },
      {
        "d": "2021-04-21",
        "e": 797440,
        "q": 347813,
        "dd": -32.03,
        "b": 1
      },
      {
        "d": "2021-04-28",
        "e": 802747,
        "q": 347516,
        "dd": -31.58,
        "b": 1
      },
      {
        "d": "2021-05-05",
        "e": 764296,
        "q": 337295,
        "dd": -34.86,
        "b": 1
      },
      {
        "d": "2021-05-12",
        "e": 731292,
        "q": 324850,
        "dd": -37.67,
        "b": 1
      },
      {
        "d": "2021-05-19",
        "e": 748161,
        "q": 330693,
        "dd": -36.23,
        "b": 1
      },
      {
        "d": "2021-05-26",
        "e": 738158,
        "q": 342523,
        "dd": -37.09,
        "b": 1
      },
      {
        "d": "2021-06-03",
        "e": 735508,
        "q": 338289,
        "dd": -37.31,
        "b": 1
      },
      {
        "d": "2021-06-10",
        "e": 762653,
        "q": 348899,
        "dd": -35.0,
        "b": 1
      },
      {
        "d": "2021-06-17",
        "e": 775162,
        "q": 354015,
        "dd": -33.93,
        "b": 1
      },
      {
        "d": "2021-06-24",
        "e": 780111,
        "q": 359095,
        "dd": -33.51,
        "b": 1
      },
      {
        "d": "2021-07-01",
        "e": 780812,
        "q": 363898,
        "dd": -33.45,
        "b": 1
      },
      {
        "d": "2021-07-09",
        "e": 815054,
        "q": 370508,
        "dd": -30.53,
        "b": 1
      },
      {
        "d": "2021-07-16",
        "e": 823465,
        "q": 367008,
        "dd": -29.82,
        "b": 1
      },
      {
        "d": "2021-07-23",
        "e": 862740,
        "q": 377887,
        "dd": -26.47,
        "b": 1
      },
      {
        "d": "2021-07-30",
        "e": 851555,
        "q": 374161,
        "dd": -27.42,
        "b": 1
      },
      {
        "d": "2021-08-06",
        "e": 908365,
        "q": 377733,
        "dd": -22.58,
        "b": 1
      },
      {
        "d": "2021-08-13",
        "e": 925695,
        "q": 378523,
        "dd": -21.1,
        "b": 1
      },
      {
        "d": "2021-08-20",
        "e": 908127,
        "q": 377405,
        "dd": -22.6,
        "b": 1
      },
      {
        "d": "2021-08-27",
        "e": 961908,
        "q": 385933,
        "dd": -18.02,
        "b": 1
      },
      {
        "d": "2021-09-03",
        "e": 963967,
        "q": 391609,
        "dd": -17.84,
        "b": 1
      },
      {
        "d": "2021-09-13",
        "e": 928508,
        "q": 386231,
        "dd": -20.86,
        "b": 1
      },
      {
        "d": "2021-09-20",
        "e": 926034,
        "q": 375737,
        "dd": -21.07,
        "b": 1
      },
      {
        "d": "2021-09-27",
        "e": 946424,
        "q": 380515,
        "dd": -19.34,
        "b": 1
      },
      {
        "d": "2021-10-04",
        "e": 911634,
        "q": 362298,
        "dd": -22.3,
        "b": 1
      },
      {
        "d": "2021-10-11",
        "e": 946337,
        "q": 368227,
        "dd": -19.34,
        "b": 1
      },
      {
        "d": "2021-10-18",
        "e": 969054,
        "q": 382878,
        "dd": -17.41,
        "b": 1
      },
      {
        "d": "2021-10-25",
        "e": 949140,
        "q": 388303,
        "dd": -19.11,
        "b": 1
      },
      {
        "d": "2021-11-01",
        "e": 960687,
        "q": 398064,
        "dd": -18.12,
        "b": 1
      },
      {
        "d": "2021-11-08",
        "e": 964446,
        "q": 408985,
        "dd": -17.8,
        "b": 1
      },
      {
        "d": "2021-11-15",
        "e": 910136,
        "q": 405441,
        "dd": -22.43,
        "b": 1
      },
      {
        "d": "2021-11-22",
        "e": 910750,
        "q": 410259,
        "dd": -22.38,
        "b": 1
      },
      {
        "d": "2021-11-30",
        "e": 927865,
        "q": 404629,
        "dd": -20.92,
        "b": 1
      },
      {
        "d": "2021-12-07",
        "e": 910074,
        "q": 408749,
        "dd": -22.43,
        "b": 1
      },
      {
        "d": "2021-12-14",
        "e": 868980,
        "q": 398855,
        "dd": -25.94,
        "b": 1
      },
      {
        "d": "2021-12-21",
        "e": 853109,
        "q": 400403,
        "dd": -27.29,
        "b": 1
      },
      {
        "d": "2021-12-29",
        "e": 903096,
        "q": 413098,
        "dd": -23.03,
        "b": 1
      },
      {
        "d": "2022-01-05",
        "e": 864722,
        "q": 395342,
        "dd": -26.3,
        "b": 1
      },
      {
        "d": "2022-01-12",
        "e": 816236,
        "q": 398490,
        "dd": -30.43,
        "b": 1
      },
      {
        "d": "2022-01-20",
        "e": 754266,
        "q": 372123,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-01-27",
        "e": 754266,
        "q": 350910,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-02-03",
        "e": 754266,
        "q": 363718,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-02-10",
        "e": 754266,
        "q": 368738,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-02-17",
        "e": 754266,
        "q": 355385,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-02-25",
        "e": 754266,
        "q": 355714,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-03-04",
        "e": 754266,
        "q": 347000,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-03-11",
        "e": 754266,
        "q": 333729,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-03-18",
        "e": 754266,
        "q": 361598,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-03-25",
        "e": 754266,
        "q": 370142,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-04-01",
        "e": 754266,
        "q": 372717,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-04-08",
        "e": 754266,
        "q": 359635,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-04-18",
        "e": 754266,
        "q": 348861,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-04-25",
        "e": 754266,
        "q": 339478,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-05-02",
        "e": 754266,
        "q": 328044,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-05-09",
        "e": 754266,
        "q": 306074,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-05-16",
        "e": 754266,
        "q": 307402,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-05-23",
        "e": 754266,
        "q": 302293,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-05-31",
        "e": 754266,
        "q": 317538,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-06-07",
        "e": 754266,
        "q": 319176,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-06-14",
        "e": 754266,
        "q": 284196,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-06-22",
        "e": 754266,
        "q": 289654,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-06-29",
        "e": 754266,
        "q": 292885,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-07-07",
        "e": 754266,
        "q": 304423,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-07-14",
        "e": 754266,
        "q": 295846,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-07-21",
        "e": 754266,
        "q": 317220,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-07-28",
        "e": 754266,
        "q": 319727,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-08-04",
        "e": 754266,
        "q": 334784,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-08-11",
        "e": 754266,
        "q": 334454,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-08-18",
        "e": 754266,
        "q": 339820,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-08-25",
        "e": 754266,
        "q": 330842,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-09-01",
        "e": 754266,
        "q": 308984,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-09-09",
        "e": 754266,
        "q": 316920,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-09-16",
        "e": 754266,
        "q": 298581,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-09-23",
        "e": 754266,
        "q": 284840,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-09-30",
        "e": 754266,
        "q": 276311,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-10-07",
        "e": 754266,
        "q": 278213,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-10-14",
        "e": 754266,
        "q": 269570,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-10-21",
        "e": 754266,
        "q": 284747,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-10-28",
        "e": 754266,
        "q": 290744,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-11-04",
        "e": 754266,
        "q": 273643,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-11-11",
        "e": 754266,
        "q": 297712,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-11-18",
        "e": 754266,
        "q": 294466,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-11-28",
        "e": 754266,
        "q": 292284,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-12-05",
        "e": 754266,
        "q": 297381,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-12-12",
        "e": 754266,
        "q": 295251,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-12-19",
        "e": 754266,
        "q": 279553,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2022-12-27",
        "e": 754266,
        "q": 273159,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2023-01-04",
        "e": 754266,
        "q": 275397,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2023-01-11",
        "e": 754266,
        "q": 287636,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2023-01-19",
        "e": 754266,
        "q": 285149,
        "dd": -35.71,
        "b": 0
      },
      {
        "d": "2023-01-26",
        "e": 753795,
        "q": 304000,
        "dd": -35.75,
        "b": 1
      },
      {
        "d": "2023-02-02",
        "e": 749011,
        "q": 323048,
        "dd": -36.16,
        "b": 1
      },
      {
        "d": "2023-02-09",
        "e": 748543,
        "q": 312643,
        "dd": -36.2,
        "b": 1
      },
      {
        "d": "2023-02-16",
        "e": 788025,
        "q": 314322,
        "dd": -32.84,
        "b": 1
      },
      {
        "d": "2023-02-24",
        "e": 736981,
        "q": 302456,
        "dd": -37.19,
        "b": 1
      },
      {
        "d": "2023-03-03",
        "e": 799871,
        "q": 310570,
        "dd": -31.83,
        "b": 1
      },
      {
        "d": "2023-03-10",
        "e": 780561,
        "q": 299036,
        "dd": -33.47,
        "b": 0
      },
      {
        "d": "2023-03-17",
        "e": 780561,
        "q": 316457,
        "dd": -33.47,
        "b": 1
      },
      {
        "d": "2023-03-24",
        "e": 780073,
        "q": 322687,
        "dd": -33.51,
        "b": 1
      },
      {
        "d": "2023-03-31",
        "e": 820055,
        "q": 333108,
        "dd": -30.11,
        "b": 1
      },
      {
        "d": "2023-04-10",
        "e": 806315,
        "q": 329931,
        "dd": -31.28,
        "b": 1
      },
      {
        "d": "2023-04-17",
        "e": 823787,
        "q": 330938,
        "dd": -29.79,
        "b": 1
      },
      {
        "d": "2023-04-24",
        "e": 830189,
        "q": 327939,
        "dd": -29.24,
        "b": 1
      },
      {
        "d": "2023-05-01",
        "e": 830669,
        "q": 334415,
        "dd": -29.2,
        "b": 1
      },
      {
        "d": "2023-05-08",
        "e": 843792,
        "q": 335972,
        "dd": -28.08,
        "b": 1
      },
      {
        "d": "2023-05-15",
        "e": 859634,
        "q": 339190,
        "dd": -26.73,
        "b": 1
      },
      {
        "d": "2023-05-22",
        "e": 917422,
        "q": 350452,
        "dd": -21.81,
        "b": 1
      },
      {
        "d": "2023-05-30",
        "e": 1045964,
        "q": 363260,
        "dd": -10.85,
        "b": 1
      },
      {
        "d": "2023-06-06",
        "e": 1039116,
        "q": 368304,
        "dd": -11.44,
        "b": 1
      },
      {
        "d": "2023-06-13",
        "e": 1059479,
        "q": 377044,
        "dd": -9.7,
        "b": 1
      },
      {
        "d": "2023-06-21",
        "e": 1110184,
        "q": 376148,
        "dd": -5.38,
        "b": 1
      },
      {
        "d": "2023-06-28",
        "e": 1099035,
        "q": 378891,
        "dd": -6.33,
        "b": 1
      },
      {
        "d": "2023-07-06",
        "e": 1124346,
        "q": 381926,
        "dd": -4.17,
        "b": 1
      },
      {
        "d": "2023-07-13",
        "e": 1199107,
        "q": 394077,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2023-07-20",
        "e": 1187117,
        "q": 391593,
        "dd": -3.23,
        "b": 1
      },
      {
        "d": "2023-07-27",
        "e": 1171493,
        "q": 391447,
        "dd": -4.51,
        "b": 1
      },
      {
        "d": "2023-08-03",
        "e": 1143709,
        "q": 388506,
        "dd": -6.77,
        "b": 1
      },
      {
        "d": "2023-08-10",
        "e": 1025676,
        "q": 383101,
        "dd": -16.39,
        "b": 1
      },
      {
        "d": "2023-08-17",
        "e": 1019746,
        "q": 372697,
        "dd": -16.88,
        "b": 1
      },
      {
        "d": "2023-08-24",
        "e": 1049386,
        "q": 375441,
        "dd": -14.46,
        "b": 1
      },
      {
        "d": "2023-08-31",
        "e": 1097624,
        "q": 392871,
        "dd": -10.53,
        "b": 1
      },
      {
        "d": "2023-09-08",
        "e": 1051917,
        "q": 387248,
        "dd": -14.26,
        "b": 1
      },
      {
        "d": "2023-09-15",
        "e": 1051826,
        "q": 385408,
        "dd": -14.26,
        "b": 1
      },
      {
        "d": "2023-09-22",
        "e": 992678,
        "q": 372539,
        "dd": -19.08,
        "b": 1
      },
      {
        "d": "2023-09-29",
        "e": 1023994,
        "q": 372914,
        "dd": -16.53,
        "b": 1
      },
      {
        "d": "2023-10-06",
        "e": 1022689,
        "q": 379606,
        "dd": -16.64,
        "b": 1
      },
      {
        "d": "2023-10-13",
        "e": 1058813,
        "q": 380210,
        "dd": -13.69,
        "b": 1
      },
      {
        "d": "2023-10-20",
        "e": 1004245,
        "q": 369094,
        "dd": -18.14,
        "b": 1
      },
      {
        "d": "2023-10-27",
        "e": 959239,
        "q": 359424,
        "dd": -21.81,
        "b": 1
      },
      {
        "d": "2023-11-03",
        "e": 1003244,
        "q": 382740,
        "dd": -18.22,
        "b": 1
      },
      {
        "d": "2023-11-10",
        "e": 1031634,
        "q": 393856,
        "dd": -15.91,
        "b": 1
      },
      {
        "d": "2023-11-17",
        "e": 1002355,
        "q": 401819,
        "dd": -18.3,
        "b": 1
      },
      {
        "d": "2023-11-27",
        "e": 991370,
        "q": 405077,
        "dd": -19.19,
        "b": 1
      },
      {
        "d": "2023-12-04",
        "e": 1020147,
        "q": 402110,
        "dd": -16.84,
        "b": 1
      },
      {
        "d": "2023-12-11",
        "e": 1023643,
        "q": 411686,
        "dd": -16.56,
        "b": 1
      },
      {
        "d": "2023-12-18",
        "e": 1086161,
        "q": 424565,
        "dd": -11.46,
        "b": 1
      },
      {
        "d": "2023-12-26",
        "e": 1122277,
        "q": 428528,
        "dd": -8.52,
        "b": 1
      },
      {
        "d": "2024-01-03",
        "e": 1105081,
        "q": 415658,
        "dd": -9.92,
        "b": 1
      },
      {
        "d": "2024-01-10",
        "e": 1165846,
        "q": 426270,
        "dd": -4.97,
        "b": 1
      },
      {
        "d": "2024-01-18",
        "e": 1198796,
        "q": 430955,
        "dd": -2.28,
        "b": 1
      },
      {
        "d": "2024-01-25",
        "e": 1276978,
        "q": 444897,
        "dd": -0.47,
        "b": 1
      },
      {
        "d": "2024-02-01",
        "e": 1302138,
        "q": 440232,
        "dd": -0.65,
        "b": 1
      },
      {
        "d": "2024-02-08",
        "e": 1503528,
        "q": 451617,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2024-02-15",
        "e": 1546429,
        "q": 453412,
        "dd": -1.26,
        "b": 1
      },
      {
        "d": "2024-02-23",
        "e": 1392498,
        "q": 455780,
        "dd": -11.09,
        "b": 1
      },
      {
        "d": "2024-03-01",
        "e": 1439557,
        "q": 464994,
        "dd": -8.08,
        "b": 1
      },
      {
        "d": "2024-03-08",
        "e": 1513474,
        "q": 458118,
        "dd": -3.36,
        "b": 1
      },
      {
        "d": "2024-03-15",
        "e": 1697978,
        "q": 452796,
        "dd": -0.11,
        "b": 1
      },
      {
        "d": "2024-03-22",
        "e": 1658649,
        "q": 466414,
        "dd": -2.42,
        "b": 1
      },
      {
        "d": "2024-04-01",
        "e": 1678038,
        "q": 464920,
        "dd": -7.52,
        "b": 1
      },
      {
        "d": "2024-04-08",
        "e": 1559518,
        "q": 460374,
        "dd": -14.05,
        "b": 1
      },
      {
        "d": "2024-04-15",
        "e": 1471910,
        "q": 450406,
        "dd": -18.88,
        "b": 1
      },
      {
        "d": "2024-04-22",
        "e": 1331269,
        "q": 437617,
        "dd": -26.63,
        "b": 1
      },
      {
        "d": "2024-04-29",
        "e": 1376296,
        "q": 452172,
        "dd": -24.15,
        "b": 1
      },
      {
        "d": "2024-05-06",
        "e": 1396174,
        "q": 460009,
        "dd": -23.06,
        "b": 1
      },
      {
        "d": "2024-05-13",
        "e": 1443678,
        "q": 462966,
        "dd": -20.44,
        "b": 1
      },
      {
        "d": "2024-05-20",
        "e": 1450960,
        "q": 475327,
        "dd": -20.04,
        "b": 1
      },
      {
        "d": "2024-05-28",
        "e": 1423309,
        "q": 480311,
        "dd": -21.56,
        "b": 1
      },
      {
        "d": "2024-06-04",
        "e": 1373017,
        "q": 474762,
        "dd": -24.33,
        "b": 1
      },
      {
        "d": "2024-06-11",
        "e": 1407879,
        "q": 489025,
        "dd": -22.41,
        "b": 1
      },
      {
        "d": "2024-06-18",
        "e": 1486477,
        "q": 506987,
        "dd": -18.08,
        "b": 1
      },
      {
        "d": "2024-06-26",
        "e": 1433364,
        "q": 502727,
        "dd": -21.01,
        "b": 1
      },
      {
        "d": "2024-07-03",
        "e": 1494020,
        "q": 513894,
        "dd": -17.66,
        "b": 1
      },
      {
        "d": "2024-07-11",
        "e": 1444536,
        "q": 514825,
        "dd": -20.39,
        "b": 1
      },
      {
        "d": "2024-07-18",
        "e": 1396825,
        "q": 501806,
        "dd": -23.02,
        "b": 1
      },
      {
        "d": "2024-07-25",
        "e": 1335547,
        "q": 479599,
        "dd": -26.4,
        "b": 1
      },
      {
        "d": "2024-08-01",
        "e": 1367371,
        "q": 481053,
        "dd": -24.64,
        "b": 1
      },
      {
        "d": "2024-08-08",
        "e": 1295875,
        "q": 468924,
        "dd": -28.58,
        "b": 1
      },
      {
        "d": "2024-08-15",
        "e": 1315535,
        "q": 496500,
        "dd": -27.5,
        "b": 1
      },
      {
        "d": "2024-08-22",
        "e": 1338365,
        "q": 496950,
        "dd": -26.24,
        "b": 1
      },
      {
        "d": "2024-08-29",
        "e": 1358067,
        "q": 492565,
        "dd": -25.16,
        "b": 1
      },
      {
        "d": "2024-09-06",
        "e": 1324468,
        "q": 469573,
        "dd": -27.01,
        "b": 1
      },
      {
        "d": "2024-09-13",
        "e": 1404300,
        "q": 497463,
        "dd": -22.61,
        "b": 1
      },
      {
        "d": "2024-09-20",
        "e": 1371900,
        "q": 504893,
        "dd": -24.39,
        "b": 1
      },
      {
        "d": "2024-09-27",
        "e": 1376040,
        "q": 510120,
        "dd": -24.17,
        "b": 1
      },
      {
        "d": "2024-10-04",
        "e": 1439031,
        "q": 510717,
        "dd": -20.69,
        "b": 1
      },
      {
        "d": "2024-10-11",
        "e": 1437183,
        "q": 517047,
        "dd": -20.8,
        "b": 1
      },
      {
        "d": "2024-10-18",
        "e": 1467527,
        "q": 518210,
        "dd": -19.12,
        "b": 1
      },
      {
        "d": "2024-10-25",
        "e": 1528846,
        "q": 519101,
        "dd": -15.74,
        "b": 1
      },
      {
        "d": "2024-11-01",
        "e": 1508405,
        "q": 510833,
        "dd": -16.87,
        "b": 1
      },
      {
        "d": "2024-11-08",
        "e": 2353574,
        "q": 538825,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2024-11-15",
        "e": 2832910,
        "q": 520411,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2024-11-22",
        "e": 3175836,
        "q": 530074,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2024-12-02",
        "e": 3126898,
        "q": 540030,
        "dd": -5.41,
        "b": 1
      },
      {
        "d": "2024-12-09",
        "e": 3127208,
        "q": 547461,
        "dd": -8.94,
        "b": 1
      },
      {
        "d": "2024-12-16",
        "e": 3361735,
        "q": 564009,
        "dd": -2.11,
        "b": 1
      },
      {
        "d": "2024-12-23",
        "e": 3443550,
        "q": 548858,
        "dd": 0.0,
        "b": 1
      },
      {
        "d": "2024-12-31",
        "e": 3262959,
        "q": 536639,
        "dd": -10.2,
        "b": 1
      }
    ],
    "symbolsTraded": 80,
    "ledger": [
      {
        "tk": "ORLY",
        "in": "2015-01-02",
        "out": "2015-01-16",
        "ep": 12.81,
        "xp": 12.0,
        "sh": 3251,
        "r": -6.37,
        "p": -2654,
        "why": "50-SMA"
      },
      {
        "tk": "AXON",
        "in": "2015-01-02",
        "out": "2015-02-17",
        "ep": 26.52,
        "xp": 26.96,
        "sh": 1579,
        "r": 1.65,
        "p": 690,
        "why": "Rank"
      },
      {
        "tk": "MNST",
        "in": "2015-01-02",
        "out": "2015-02-17",
        "ep": 18.04,
        "xp": 19.62,
        "sh": 2168,
        "r": 8.8,
        "p": 3442,
        "why": "Rank"
      },
      {
        "tk": "AVGO",
        "in": "2015-02-17",
        "out": "2015-03-03",
        "ep": 8.35,
        "xp": 9.71,
        "sh": 5090,
        "r": 16.31,
        "p": 6931,
        "why": "Rank"
      },
      {
        "tk": "KDP",
        "in": "2015-01-16",
        "out": "2015-03-17",
        "ep": 9.37,
        "xp": 9.52,
        "sh": 4863,
        "r": 1.64,
        "p": 749,
        "why": "50-SMA"
      },
      {
        "tk": "ROST",
        "in": "2015-03-17",
        "out": "2015-04-15",
        "ep": 47.7,
        "xp": 46.52,
        "sh": 992,
        "r": -2.47,
        "p": -1171,
        "why": "Rank"
      },
      {
        "tk": "AVGO",
        "in": "2015-04-15",
        "out": "2015-04-29",
        "ep": 9.51,
        "xp": 8.87,
        "sh": 4765,
        "r": -6.76,
        "p": -3062,
        "why": "50-SMA"
      },
      {
        "tk": "MNST",
        "in": "2015-03-03",
        "out": "2015-04-29",
        "ep": 23.46,
        "xp": 23.46,
        "sh": 1973,
        "r": -0.01,
        "p": -7,
        "why": "Rank"
      },
      {
        "tk": "SBUX",
        "in": "2015-04-29",
        "out": "2015-05-13",
        "ep": 40.06,
        "xp": 39.43,
        "sh": 1144,
        "r": -1.59,
        "p": -730,
        "why": "Rank"
      },
      {
        "tk": "FTNT",
        "in": "2015-05-13",
        "out": "2015-05-28",
        "ep": 7.69,
        "xp": 7.89,
        "sh": 5924,
        "r": 2.52,
        "p": 1150,
        "why": "Rank"
      },
      {
        "tk": "DXCM",
        "in": "2015-04-29",
        "out": "2015-06-11",
        "ep": 16.79,
        "xp": 18.04,
        "sh": 2701,
        "r": 7.45,
        "p": 3381,
        "why": "Rank"
      },
      {
        "tk": "AXON",
        "in": "2015-05-28",
        "out": "2015-06-25",
        "ep": 31.93,
        "xp": 33.78,
        "sh": 1481,
        "r": 5.81,
        "p": 2746,
        "why": "Rank"
      },
      {
        "tk": "NFLX",
        "in": "2015-06-11",
        "out": "2015-07-24",
        "ep": 9.51,
        "xp": 11.01,
        "sh": 5346,
        "r": 15.72,
        "p": 7997,
        "why": "Rank"
      },
      {
        "tk": "PANW",
        "in": "2015-02-17",
        "out": "2015-08-07",
        "ep": 22.83,
        "xp": 29.08,
        "sh": 1803,
        "r": 27.4,
        "p": 11278,
        "why": "50-SMA"
      },
      {
        "tk": "AMZN",
        "in": "2015-07-24",
        "out": "2015-08-07",
        "ep": 26.48,
        "xp": 26.47,
        "sh": 2236,
        "r": -0.04,
        "p": -25,
        "why": "Rank"
      },
      {
        "tk": "SBUX",
        "in": "2015-08-07",
        "out": "2015-08-21",
        "ep": 45.51,
        "xp": 44.39,
        "sh": 1292,
        "r": -2.48,
        "p": -1458,
        "why": "50-SMA"
      },
      {
        "tk": "ORLY",
        "in": "2015-08-07",
        "out": "2015-08-21",
        "ep": 16.31,
        "xp": 16.75,
        "sh": 3609,
        "r": 2.75,
        "p": 1621,
        "why": "50-SMA"
      },
      {
        "tk": "DXCM",
        "in": "2015-06-25",
        "out": "2015-10-05",
        "ep": 19.45,
        "xp": 21.68,
        "sh": 2501,
        "r": 11.45,
        "p": 5572,
        "why": "50-SMA"
      },
      {
        "tk": "ORLY",
        "in": "2015-10-05",
        "out": "2015-10-19",
        "ep": 16.96,
        "xp": 16.94,
        "sh": 3477,
        "r": -0.12,
        "p": -69,
        "why": "Rank"
      },
      {
        "tk": "SBUX",
        "in": "2015-10-19",
        "out": "2015-11-02",
        "ep": 48.51,
        "xp": 49.76,
        "sh": 1250,
        "r": 2.57,
        "p": 1560,
        "why": "Rank"
      },
      {
        "tk": "ORLY",
        "in": "2015-11-02",
        "out": "2015-11-16",
        "ep": 18.27,
        "xp": 17.32,
        "sh": 3490,
        "r": -5.16,
        "p": -3292,
        "why": "Rank"
      },
      {
        "tk": "FER",
        "in": "2015-08-21",
        "out": "2015-12-01",
        "ep": 20.19,
        "xp": 20.08,
        "sh": 3109,
        "r": -0.57,
        "p": -360,
        "why": "50-SMA"
      },
      {
        "tk": "MPWR",
        "in": "2015-11-16",
        "out": "2015-12-15",
        "ep": 58.0,
        "xp": 57.41,
        "sh": 1047,
        "r": -1.03,
        "p": -623,
        "why": "Rank"
      },
      {
        "tk": "KDP",
        "in": "2015-12-15",
        "out": "2015-12-30",
        "ep": 11.71,
        "xp": 11.92,
        "sh": 5353,
        "r": 1.73,
        "p": 1083,
        "why": "Rank"
      },
      {
        "tk": "AMZN",
        "in": "2015-08-21",
        "out": "2016-01-06",
        "ep": 24.74,
        "xp": 31.69,
        "sh": 1904,
        "r": 28.11,
        "p": 13240,
        "why": "Shield"
      },
      {
        "tk": "GOOGL",
        "in": "2015-12-01",
        "out": "2016-01-06",
        "ep": 38.86,
        "xp": 37.74,
        "sh": 1675,
        "r": -2.89,
        "p": -1880,
        "why": "Shield"
      },
      {
        "tk": "GOOG",
        "in": "2015-12-30",
        "out": "2016-01-06",
        "ep": 38.23,
        "xp": 36.8,
        "sh": 1717,
        "r": -3.73,
        "p": -2451,
        "why": "Shield"
      },
      {
        "tk": "XEL",
        "in": "2016-03-29",
        "out": "2016-04-26",
        "ep": 30.41,
        "xp": 28.57,
        "sh": 2015,
        "r": -6.07,
        "p": -3721,
        "why": "50-SMA"
      },
      {
        "tk": "AEP",
        "in": "2016-03-29",
        "out": "2016-04-26",
        "ep": 45.77,
        "xp": 43.51,
        "sh": 1312,
        "r": -4.92,
        "p": -2957,
        "why": "50-SMA"
      },
      {
        "tk": "KLAC",
        "in": "2016-03-29",
        "out": "2016-04-28",
        "ep": 6.09,
        "xp": 6.07,
        "sh": 9596,
        "r": -0.23,
        "p": -134,
        "why": "Shield"
      },
      {
        "tk": "CPRT",
        "in": "2016-04-26",
        "out": "2016-04-28",
        "ep": 5.3,
        "xp": 5.34,
        "sh": 10938,
        "r": 0.78,
        "p": 450,
        "why": "Shield"
      },
      {
        "tk": "ISRG",
        "in": "2016-04-26",
        "out": "2016-04-28",
        "ep": 70.31,
        "xp": 70.33,
        "sh": 824,
        "r": 0.03,
        "p": 18,
        "why": "Shield"
      },
      {
        "tk": "IDXX",
        "in": "2016-05-10",
        "out": "2016-05-11",
        "ep": 87.85,
        "xp": 87.81,
        "sh": 664,
        "r": -0.05,
        "p": -29,
        "why": "Shield"
      },
      {
        "tk": "CPRT",
        "in": "2016-05-10",
        "out": "2016-05-11",
        "ep": 5.46,
        "xp": 5.46,
        "sh": 10684,
        "r": -0.05,
        "p": -29,
        "why": "Shield"
      },
      {
        "tk": "ISRG",
        "in": "2016-05-10",
        "out": "2016-05-11",
        "ep": 69.65,
        "xp": 69.62,
        "sh": 838,
        "r": -0.05,
        "p": -29,
        "why": "Shield"
      },
      {
        "tk": "CDNS",
        "in": "2016-05-24",
        "out": "2016-06-08",
        "ep": 25.22,
        "xp": 24.86,
        "sh": 2311,
        "r": -1.44,
        "p": -838,
        "why": "Rank"
      },
      {
        "tk": "IDXX",
        "in": "2016-05-24",
        "out": "2016-06-17",
        "ep": 90.27,
        "xp": 89.01,
        "sh": 679,
        "r": -1.39,
        "p": -852,
        "why": "Shield"
      },
      {
        "tk": "CPRT",
        "in": "2016-05-24",
        "out": "2016-06-17",
        "ep": 5.51,
        "xp": 6.11,
        "sh": 9727,
        "r": 10.82,
        "p": 5797,
        "why": "Shield"
      },
      {
        "tk": "KLAC",
        "in": "2016-06-08",
        "out": "2016-06-17",
        "ep": 6.2,
        "xp": 6.17,
        "sh": 9745,
        "r": -0.58,
        "p": -352,
        "why": "Shield"
      },
      {
        "tk": "IDXX",
        "in": "2016-06-22",
        "out": "2016-06-24",
        "ep": 90.09,
        "xp": 91.67,
        "sh": 667,
        "r": 1.76,
        "p": 1057,
        "why": "Shield"
      },
      {
        "tk": "XEL",
        "in": "2016-06-22",
        "out": "2016-06-24",
        "ep": 31.4,
        "xp": 31.41,
        "sh": 1913,
        "r": 0.02,
        "p": 12,
        "why": "Shield"
      },
      {
        "tk": "ISRG",
        "in": "2016-06-22",
        "out": "2016-06-24",
        "ep": 72.42,
        "xp": 73.48,
        "sh": 829,
        "r": 1.46,
        "p": 879,
        "why": "Shield"
      },
      {
        "tk": "ISRG",
        "in": "2016-07-07",
        "out": "2016-07-21",
        "ep": 75.07,
        "xp": 78.12,
        "sh": 810,
        "r": 4.06,
        "p": 2467,
        "why": "Rank"
      },
      {
        "tk": "IDXX",
        "in": "2016-07-07",
        "out": "2016-08-04",
        "ep": 93.91,
        "xp": 107.97,
        "sh": 655,
        "r": 14.98,
        "p": 9211,
        "why": "Rank"
      },
      {
        "tk": "XEL",
        "in": "2016-07-07",
        "out": "2016-08-04",
        "ep": 32.62,
        "xp": 31.75,
        "sh": 1914,
        "r": -2.67,
        "p": -1664,
        "why": "Rank"
      },
      {
        "tk": "AEP",
        "in": "2016-07-21",
        "out": "2016-08-04",
        "ep": 48.54,
        "xp": 47.83,
        "sh": 1273,
        "r": -1.46,
        "p": -903,
        "why": "Rank"
      },
      {
        "tk": "KLAC",
        "in": "2016-08-04",
        "out": "2016-08-18",
        "ep": 6.51,
        "xp": 5.95,
        "sh": 9924,
        "r": -8.68,
        "p": -5611,
        "why": "50-SMA"
      },
      {
        "tk": "AXON",
        "in": "2016-08-18",
        "out": "2016-09-01",
        "ep": 29.44,
        "xp": 27.08,
        "sh": 2147,
        "r": -8.03,
        "p": -5077,
        "why": "50-SMA"
      },
      {
        "tk": "AMD",
        "in": "2016-08-04",
        "out": "2016-09-16",
        "ep": 6.47,
        "xp": 6.02,
        "sh": 8719,
        "r": -7.0,
        "p": -3952,
        "why": "50-SMA"
      },
      {
        "tk": "AMAT",
        "in": "2016-09-01",
        "out": "2016-09-30",
        "ep": 27.24,
        "xp": 26.59,
        "sh": 2182,
        "r": -2.39,
        "p": -1422,
        "why": "Rank"
      },
      {
        "tk": "AMD",
        "in": "2016-09-30",
        "out": "2016-10-14",
        "ep": 6.91,
        "xp": 6.49,
        "sh": 8926,
        "r": -6.13,
        "p": -3780,
        "why": "50-SMA"
      },
      {
        "tk": "AMZN",
        "in": "2016-08-04",
        "out": "2016-10-28",
        "ep": 38.06,
        "xp": 40.92,
        "sh": 1451,
        "r": 7.52,
        "p": 4151,
        "why": "50-SMA"
      },
      {
        "tk": "LITE",
        "in": "2016-09-16",
        "out": "2016-10-28",
        "ep": 39.23,
        "xp": 38.9,
        "sh": 1475,
        "r": -0.84,
        "p": -486,
        "why": "50-SMA"
      },
      {
        "tk": "CPRT",
        "in": "2016-10-14",
        "out": "2016-11-11",
        "ep": 6.75,
        "xp": 6.66,
        "sh": 8710,
        "r": -1.38,
        "p": -813,
        "why": "Rank"
      },
      {
        "tk": "AMD",
        "in": "2016-10-28",
        "out": "2016-11-11",
        "ep": 7.2,
        "xp": 6.3,
        "sh": 7945,
        "r": -12.54,
        "p": -7179,
        "why": "Rank"
      },
      {
        "tk": "MRVL",
        "in": "2016-10-28",
        "out": "2016-11-11",
        "ep": 12.24,
        "xp": 11.66,
        "sh": 4677,
        "r": -4.7,
        "p": -2692,
        "why": "Rank"
      },
      {
        "tk": "CSX",
        "in": "2016-11-11",
        "out": "2016-11-28",
        "ep": 10.08,
        "xp": 10.26,
        "sh": 5333,
        "r": 1.71,
        "p": 921,
        "why": "Rank"
      },
      {
        "tk": "MU",
        "in": "2016-11-11",
        "out": "2016-11-28",
        "ep": 17.24,
        "xp": 19.63,
        "sh": 3119,
        "r": 13.86,
        "p": 7455,
        "why": "Rank"
      },
      {
        "tk": "STX",
        "in": "2016-11-11",
        "out": "2016-12-12",
        "ep": 25.02,
        "xp": 26.43,
        "sh": 2206,
        "r": 5.67,
        "p": 3126,
        "why": "Rank"
      },
      {
        "tk": "AMAT",
        "in": "2016-11-28",
        "out": "2016-12-12",
        "ep": 28.72,
        "xp": 29.17,
        "sh": 2030,
        "r": 1.55,
        "p": 904,
        "why": "Rank"
      },
      {
        "tk": "ODFL",
        "in": "2016-12-12",
        "out": "2017-01-26",
        "ep": 28.32,
        "xp": 29.15,
        "sh": 2359,
        "r": 2.91,
        "p": 1947,
        "why": "Rank"
      },
      {
        "tk": "CSX",
        "in": "2016-12-12",
        "out": "2017-01-26",
        "ep": 10.85,
        "xp": 14.0,
        "sh": 5884,
        "r": 29.03,
        "p": 18532,
        "why": "Rank"
      },
      {
        "tk": "TMUS",
        "in": "2017-01-26",
        "out": "2017-02-09",
        "ep": 60.28,
        "xp": 58.85,
        "sh": 1192,
        "r": -2.38,
        "p": -1713,
        "why": "Rank"
      },
      {
        "tk": "MAR",
        "in": "2017-01-26",
        "out": "2017-02-09",
        "ep": 78.88,
        "xp": 79.32,
        "sh": 911,
        "r": 0.56,
        "p": 399,
        "why": "Rank"
      },
      {
        "tk": "WDC",
        "in": "2017-02-09",
        "out": "2017-02-24",
        "ep": 52.64,
        "xp": 50.28,
        "sh": 1526,
        "r": -4.48,
        "p": -3600,
        "why": "Rank"
      },
      {
        "tk": "AMD",
        "in": "2016-11-28",
        "out": "2017-03-24",
        "ep": 8.83,
        "xp": 13.79,
        "sh": 5703,
        "r": 56.09,
        "p": 28262,
        "why": "Rank"
      },
      {
        "tk": "NXPI",
        "in": "2017-02-09",
        "out": "2017-04-07",
        "ep": 89.56,
        "xp": 91.98,
        "sh": 912,
        "r": 2.7,
        "p": 2209,
        "why": "Rank"
      },
      {
        "tk": "SHOP",
        "in": "2017-02-24",
        "out": "2017-04-07",
        "ep": 6.18,
        "xp": 6.85,
        "sh": 11998,
        "r": 10.91,
        "p": 8086,
        "why": "Rank"
      },
      {
        "tk": "MU",
        "in": "2017-04-07",
        "out": "2017-04-24",
        "ep": 27.82,
        "xp": 26.64,
        "sh": 2999,
        "r": -4.26,
        "p": -3551,
        "why": "Rank"
      },
      {
        "tk": "AMAT",
        "in": "2017-03-24",
        "out": "2017-05-08",
        "ep": 35.26,
        "xp": 37.83,
        "sh": 2281,
        "r": 7.29,
        "p": 5859,
        "why": "Rank"
      },
      {
        "tk": "TER",
        "in": "2017-04-07",
        "out": "2017-05-08",
        "ep": 30.53,
        "xp": 33.92,
        "sh": 2654,
        "r": 11.12,
        "p": 9014,
        "why": "Rank"
      },
      {
        "tk": "AAPL",
        "in": "2017-05-08",
        "out": "2017-06-06",
        "ep": 35.34,
        "xp": 35.68,
        "sh": 2649,
        "r": 0.97,
        "p": 904,
        "why": "Rank"
      },
      {
        "tk": "IDXX",
        "in": "2017-05-08",
        "out": "2017-06-20",
        "ep": 161.74,
        "xp": 164.38,
        "sh": 588,
        "r": 1.63,
        "p": 1552,
        "why": "Rank"
      },
      {
        "tk": "LRCX",
        "in": "2017-06-06",
        "out": "2017-06-20",
        "ep": 14.27,
        "xp": 13.38,
        "sh": 7051,
        "r": -6.26,
        "p": -6303,
        "why": "Rank"
      },
      {
        "tk": "SHOP",
        "in": "2017-04-24",
        "out": "2017-07-05",
        "ep": 7.59,
        "xp": 8.6,
        "sh": 10526,
        "r": 13.35,
        "p": 10665,
        "why": "50-SMA"
      },
      {
        "tk": "ISRG",
        "in": "2017-06-20",
        "out": "2017-07-05",
        "ep": 104.54,
        "xp": 102.41,
        "sh": 896,
        "r": -2.04,
        "p": -1908,
        "why": "Rank"
      },
      {
        "tk": "ADBE",
        "in": "2017-06-20",
        "out": "2017-07-05",
        "ep": 140.98,
        "xp": 138.41,
        "sh": 664,
        "r": -1.82,
        "p": -1707,
        "why": "Rank"
      },
      {
        "tk": "CSX",
        "in": "2017-07-05",
        "out": "2017-07-19",
        "ep": 16.27,
        "xp": 16.13,
        "sh": 5540,
        "r": -0.87,
        "p": -781,
        "why": "50-SMA"
      },
      {
        "tk": "ISRG",
        "in": "2017-07-19",
        "out": "2017-08-02",
        "ep": 107.47,
        "xp": 104.55,
        "sh": 833,
        "r": -2.72,
        "p": -2435,
        "why": "Rank"
      },
      {
        "tk": "ROP",
        "in": "2017-07-05",
        "out": "2017-08-16",
        "ep": 222.93,
        "xp": 220.98,
        "sh": 400,
        "r": -0.87,
        "p": -779,
        "why": "Rank"
      },
      {
        "tk": "PYPL",
        "in": "2017-08-02",
        "out": "2017-09-14",
        "ep": 58.64,
        "xp": 61.51,
        "sh": 1503,
        "r": 4.89,
        "p": 4307,
        "why": "Rank"
      },
      {
        "tk": "SHOP",
        "in": "2017-09-14",
        "out": "2017-09-28",
        "ep": 12.03,
        "xp": 11.74,
        "sh": 7820,
        "r": -2.38,
        "p": -2237,
        "why": "Rank"
      },
      {
        "tk": "NXPI",
        "in": "2017-07-05",
        "out": "2017-10-12",
        "ep": 96.26,
        "xp": 101.73,
        "sh": 941,
        "r": 5.68,
        "p": 5145,
        "why": "Rank"
      },
      {
        "tk": "TTWO",
        "in": "2017-08-16",
        "out": "2017-10-26",
        "ep": 92.07,
        "xp": 104.87,
        "sh": 949,
        "r": 13.91,
        "p": 12151,
        "why": "Rank"
      },
      {
        "tk": "PYPL",
        "in": "2017-09-28",
        "out": "2017-11-09",
        "ep": 63.41,
        "xp": 74.13,
        "sh": 1428,
        "r": 16.9,
        "p": 15301,
        "why": "Rank"
      },
      {
        "tk": "NVDA",
        "in": "2017-11-09",
        "out": "2017-11-24",
        "ep": 5.07,
        "xp": 5.31,
        "sh": 21169,
        "r": 4.7,
        "p": 5044,
        "why": "Rank"
      },
      {
        "tk": "ISRG",
        "in": "2017-10-26",
        "out": "2017-12-08",
        "ep": 124.18,
        "xp": 127.93,
        "sh": 834,
        "r": 3.02,
        "p": 3123,
        "why": "Rank"
      },
      {
        "tk": "MU",
        "in": "2017-11-24",
        "out": "2017-12-08",
        "ep": 48.47,
        "xp": 42.13,
        "sh": 2287,
        "r": -13.09,
        "p": -14507,
        "why": "Rank"
      },
      {
        "tk": "CDNS",
        "in": "2017-10-12",
        "out": "2017-12-22",
        "ep": 41.84,
        "xp": 42.48,
        "sh": 2336,
        "r": 1.53,
        "p": 1493,
        "why": "50-SMA"
      },
      {
        "tk": "HON",
        "in": "2017-12-08",
        "out": "2017-12-22",
        "ep": 121.78,
        "xp": 121.77,
        "sh": 836,
        "r": -0.01,
        "p": -11,
        "why": "Rank"
      },
      {
        "tk": "ODFL",
        "in": "2017-12-22",
        "out": "2018-01-09",
        "ep": 42.53,
        "xp": 44.2,
        "sh": 2403,
        "r": 3.93,
        "p": 4014,
        "why": "Rank"
      },
      {
        "tk": "TXN",
        "in": "2017-12-22",
        "out": "2018-01-24",
        "ep": 81.87,
        "xp": 94.21,
        "sh": 1231,
        "r": 15.08,
        "p": 15195,
        "why": "Rank"
      },
      {
        "tk": "MNST",
        "in": "2018-01-09",
        "out": "2018-01-24",
        "ep": 32.76,
        "xp": 34.22,
        "sh": 3262,
        "r": 4.48,
        "p": 4791,
        "why": "Rank"
      },
      {
        "tk": "CSCO",
        "in": "2018-01-24",
        "out": "2018-02-07",
        "ep": 32.99,
        "xp": 31.41,
        "sh": 3516,
        "r": -4.79,
        "p": -5556,
        "why": "Rank"
      },
      {
        "tk": "MAR",
        "in": "2017-12-08",
        "out": "2018-02-22",
        "ep": 120.34,
        "xp": 132.04,
        "sh": 839,
        "r": 9.72,
        "p": 9813,
        "why": "Rank"
      },
      {
        "tk": "ODFL",
        "in": "2018-01-24",
        "out": "2018-02-22",
        "ep": 47.54,
        "xp": 43.76,
        "sh": 2397,
        "r": -7.94,
        "p": -9042,
        "why": "Rank"
      },
      {
        "tk": "MELI",
        "in": "2018-02-22",
        "out": "2018-03-08",
        "ep": 369.68,
        "xp": 407.88,
        "sh": 299,
        "r": 10.33,
        "p": 11420,
        "why": "Rank"
      },
      {
        "tk": "NFLX",
        "in": "2018-02-22",
        "out": "2018-03-22",
        "ep": 27.83,
        "xp": 31.65,
        "sh": 3921,
        "r": 13.73,
        "p": 14979,
        "why": "Rank"
      },
      {
        "tk": "AMZN",
        "in": "2018-02-07",
        "out": "2018-04-06",
        "ep": 70.87,
        "xp": 72.59,
        "sh": 1646,
        "r": 2.42,
        "p": 2820,
        "why": "50-SMA"
      },
      {
        "tk": "ADBE",
        "in": "2018-03-08",
        "out": "2018-04-06",
        "ep": 216.51,
        "xp": 223.54,
        "sh": 576,
        "r": 3.25,
        "p": 4050,
        "why": "Rank"
      },
      {
        "tk": "STX",
        "in": "2018-03-22",
        "out": "2018-04-06",
        "ep": 43.34,
        "xp": 42.74,
        "sh": 2936,
        "r": -1.39,
        "p": -1766,
        "why": "Rank"
      },
      {
        "tk": "FTNT",
        "in": "2018-04-06",
        "out": "2018-04-20",
        "ep": 10.87,
        "xp": 11.48,
        "sh": 11151,
        "r": 5.62,
        "p": 6808,
        "why": "Rank"
      },
      {
        "tk": "NFLX",
        "in": "2018-04-20",
        "out": "2018-05-04",
        "ep": 32.79,
        "xp": 31.17,
        "sh": 3834,
        "r": -4.95,
        "p": -6228,
        "why": "Rank"
      },
      {
        "tk": "PANW",
        "in": "2018-04-06",
        "out": "2018-06-04",
        "ep": 32.32,
        "xp": 34.87,
        "sh": 3861,
        "r": 7.86,
        "p": 9815,
        "why": "Rank"
      },
      {
        "tk": "CPRT",
        "in": "2018-04-06",
        "out": "2018-06-04",
        "ep": 12.42,
        "xp": 13.89,
        "sh": 9605,
        "r": 11.85,
        "p": 14132,
        "why": "Rank"
      },
      {
        "tk": "FTNT",
        "in": "2018-06-04",
        "out": "2018-06-18",
        "ep": 12.5,
        "xp": 13.06,
        "sh": 10549,
        "r": 4.45,
        "p": 5863,
        "why": "Rank"
      },
      {
        "tk": "KDP",
        "in": "2018-05-04",
        "out": "2018-07-17",
        "ep": 15.71,
        "xp": 20.38,
        "sh": 8117,
        "r": 29.69,
        "p": 37869,
        "why": "Rank"
      },
      {
        "tk": "NFLX",
        "in": "2018-06-18",
        "out": "2018-07-31",
        "ep": 39.06,
        "xp": 33.5,
        "sh": 4042,
        "r": -14.24,
        "p": -22488,
        "why": "50-SMA"
      },
      {
        "tk": "AXON",
        "in": "2018-06-04",
        "out": "2018-08-14",
        "ep": 66.1,
        "xp": 60.98,
        "sh": 2035,
        "r": -7.75,
        "p": -10425,
        "why": "50-SMA"
      },
      {
        "tk": "CTAS",
        "in": "2018-07-31",
        "out": "2018-08-28",
        "ep": 46.98,
        "xp": 48.69,
        "sh": 2876,
        "r": 3.65,
        "p": 4926,
        "why": "Rank"
      },
      {
        "tk": "AMZN",
        "in": "2018-07-17",
        "out": "2018-09-12",
        "ep": 92.24,
        "xp": 99.36,
        "sh": 1475,
        "r": 7.71,
        "p": 10494,
        "why": "Rank"
      },
      {
        "tk": "CPRT",
        "in": "2018-08-28",
        "out": "2018-09-26",
        "ep": 16.03,
        "xp": 12.88,
        "sh": 9081,
        "r": -19.63,
        "p": -28564,
        "why": "50-SMA"
      },
      {
        "tk": "COST",
        "in": "2018-08-14",
        "out": "2018-09-26",
        "ep": 199.24,
        "xp": 209.46,
        "sh": 689,
        "r": 5.13,
        "p": 7044,
        "why": "Rank"
      },
      {
        "tk": "AMD",
        "in": "2018-09-12",
        "out": "2018-10-10",
        "ep": 32.23,
        "xp": 27.24,
        "sh": 4162,
        "r": -15.47,
        "p": -20752,
        "why": "50-SMA"
      },
      {
        "tk": "ADP",
        "in": "2018-09-26",
        "out": "2018-10-10",
        "ep": 126.34,
        "xp": 126.71,
        "sh": 1061,
        "r": 0.3,
        "p": 399,
        "why": "50-SMA"
      },
      {
        "tk": "ORLY",
        "in": "2018-09-26",
        "out": "2018-10-11",
        "ep": 23.06,
        "xp": 22.43,
        "sh": 5560,
        "r": -2.73,
        "p": -3500,
        "why": "Shield"
      },
      {
        "tk": "ROST",
        "in": "2018-10-10",
        "out": "2018-10-11",
        "ep": 88.13,
        "xp": 88.09,
        "sh": 1415,
        "r": -0.05,
        "p": -62,
        "why": "Shield"
      },
      {
        "tk": "WBD",
        "in": "2018-10-10",
        "out": "2018-10-11",
        "ep": 32.08,
        "xp": 32.06,
        "sh": 3890,
        "r": -0.05,
        "p": -62,
        "why": "Shield"
      },
      {
        "tk": "KDP",
        "in": "2018-11-07",
        "out": "2018-11-09",
        "ep": 22.87,
        "xp": 23.55,
        "sh": 5386,
        "r": 2.99,
        "p": 3681,
        "why": "Shield"
      },
      {
        "tk": "DXCM",
        "in": "2018-11-07",
        "out": "2018-11-09",
        "ep": 36.18,
        "xp": 37.1,
        "sh": 3404,
        "r": 2.55,
        "p": 3138,
        "why": "Shield"
      },
      {
        "tk": "ROST",
        "in": "2018-11-07",
        "out": "2018-11-09",
        "ep": 95.3,
        "xp": 95.79,
        "sh": 1292,
        "r": 0.51,
        "p": 633,
        "why": "Shield"
      },
      {
        "tk": "TRI",
        "in": "2019-02-21",
        "out": "2019-03-07",
        "ep": 45.46,
        "xp": 46.73,
        "sh": 2776,
        "r": 2.8,
        "p": 3530,
        "why": "Shield"
      },
      {
        "tk": "SBUX",
        "in": "2019-02-21",
        "out": "2019-03-07",
        "ep": 60.01,
        "xp": 60.46,
        "sh": 2102,
        "r": 0.76,
        "p": 953,
        "why": "Shield"
      },
      {
        "tk": "KDP",
        "in": "2019-02-21",
        "out": "2019-03-07",
        "ep": 23.45,
        "xp": 22.06,
        "sh": 5381,
        "r": -5.94,
        "p": -7496,
        "why": "Shield"
      },
      {
        "tk": "XEL",
        "in": "2019-03-21",
        "out": "2019-04-04",
        "ep": 45.39,
        "xp": 44.47,
        "sh": 2751,
        "r": -2.01,
        "p": -2515,
        "why": "Rank"
      },
      {
        "tk": "SBUX",
        "in": "2019-04-04",
        "out": "2019-04-18",
        "ep": 63.11,
        "xp": 63.73,
        "sh": 2017,
        "r": 0.99,
        "p": 1254,
        "why": "Rank"
      },
      {
        "tk": "CSCO",
        "in": "2019-04-18",
        "out": "2019-05-03",
        "ep": 45.76,
        "xp": 44.55,
        "sh": 2778,
        "r": -2.64,
        "p": -3352,
        "why": "Rank"
      },
      {
        "tk": "CDNS",
        "in": "2019-03-21",
        "out": "2019-06-03",
        "ep": 63.11,
        "xp": 63.57,
        "sh": 2013,
        "r": 0.73,
        "p": 923,
        "why": "Shield"
      },
      {
        "tk": "TRI",
        "in": "2019-03-21",
        "out": "2019-06-03",
        "ep": 49.58,
        "xp": 55.26,
        "sh": 2466,
        "r": 11.46,
        "p": 14011,
        "why": "Shield"
      },
      {
        "tk": "SHOP",
        "in": "2019-05-03",
        "out": "2019-06-03",
        "ep": 26.42,
        "xp": 27.49,
        "sh": 5054,
        "r": 4.06,
        "p": 5427,
        "why": "Shield"
      },
      {
        "tk": "TRI",
        "in": "2019-06-17",
        "out": "2019-07-01",
        "ep": 56.36,
        "xp": 55.93,
        "sh": 2330,
        "r": -0.77,
        "p": -1016,
        "why": "Rank"
      },
      {
        "tk": "MDLZ",
        "in": "2019-06-17",
        "out": "2019-07-16",
        "ep": 45.73,
        "xp": 45.89,
        "sh": 2814,
        "r": 0.34,
        "p": 435,
        "why": "Rank"
      },
      {
        "tk": "SHOP",
        "in": "2019-06-17",
        "out": "2019-07-16",
        "ep": 30.6,
        "xp": 32.4,
        "sh": 4239,
        "r": 5.89,
        "p": 7637,
        "why": "Rank"
      },
      {
        "tk": "ROP",
        "in": "2019-07-16",
        "out": "2019-07-30",
        "ep": 368.34,
        "xp": 346.19,
        "sh": 374,
        "r": -6.01,
        "p": -8286,
        "why": "Rank"
      },
      {
        "tk": "TRI",
        "in": "2019-07-16",
        "out": "2019-08-13",
        "ep": 58.67,
        "xp": 57.99,
        "sh": 2352,
        "r": -1.16,
        "p": -1599,
        "why": "Rank"
      },
      {
        "tk": "SBUX",
        "in": "2019-07-01",
        "out": "2019-09-11",
        "ep": 72.1,
        "xp": 77.3,
        "sh": 1722,
        "r": 7.21,
        "p": 8953,
        "why": "50-SMA"
      },
      {
        "tk": "SHOP",
        "in": "2019-08-13",
        "out": "2019-09-11",
        "ep": 36.94,
        "xp": 33.72,
        "sh": 3478,
        "r": -8.71,
        "p": -11190,
        "why": "50-SMA"
      },
      {
        "tk": "COST",
        "in": "2019-07-30",
        "out": "2019-09-11",
        "ep": 253.43,
        "xp": 269.76,
        "sh": 534,
        "r": 6.44,
        "p": 8719,
        "why": "Rank"
      },
      {
        "tk": "PDD",
        "in": "2019-09-11",
        "out": "2019-09-25",
        "ep": 36.69,
        "xp": 30.99,
        "sh": 3632,
        "r": -15.53,
        "p": -20696,
        "why": "Rank"
      },
      {
        "tk": "WDC",
        "in": "2019-09-11",
        "out": "2019-09-25",
        "ep": 46.98,
        "xp": 43.51,
        "sh": 2836,
        "r": -7.39,
        "p": -9843,
        "why": "Rank"
      },
      {
        "tk": "FER",
        "in": "2019-09-11",
        "out": "2019-10-09",
        "ep": 24.15,
        "xp": 23.67,
        "sh": 4895,
        "r": -1.98,
        "p": -2344,
        "why": "50-SMA"
      },
      {
        "tk": "CPRT",
        "in": "2019-09-25",
        "out": "2019-10-23",
        "ep": 20.27,
        "xp": 20.78,
        "sh": 5859,
        "r": 2.53,
        "p": 3002,
        "why": "Rank"
      },
      {
        "tk": "KLAC",
        "in": "2019-10-09",
        "out": "2019-10-23",
        "ep": 14.54,
        "xp": 15.03,
        "sh": 8112,
        "r": 3.34,
        "p": 3939,
        "why": "Rank"
      },
      {
        "tk": "XEL",
        "in": "2019-09-25",
        "out": "2019-11-06",
        "ep": 52.97,
        "xp": 49.27,
        "sh": 2322,
        "r": -6.98,
        "p": -8585,
        "why": "50-SMA"
      },
      {
        "tk": "PDD",
        "in": "2019-10-23",
        "out": "2019-11-20",
        "ep": 35.52,
        "xp": 40.72,
        "sh": 3001,
        "r": 14.65,
        "p": 15612,
        "why": "50-SMA"
      },
      {
        "tk": "FER",
        "in": "2019-10-23",
        "out": "2019-11-20",
        "ep": 24.67,
        "xp": 25.26,
        "sh": 5186,
        "r": 2.4,
        "p": 3071,
        "why": "Rank"
      },
      {
        "tk": "KLAC",
        "in": "2019-11-06",
        "out": "2019-12-05",
        "ep": 15.93,
        "xp": 14.86,
        "sh": 8028,
        "r": -6.7,
        "p": -8572,
        "why": "50-SMA"
      },
      {
        "tk": "AMD",
        "in": "2019-11-20",
        "out": "2019-12-05",
        "ep": 41.0,
        "xp": 39.69,
        "sh": 3155,
        "r": -3.2,
        "p": -4135,
        "why": "Rank"
      },
      {
        "tk": "FER",
        "in": "2019-12-05",
        "out": "2019-12-19",
        "ep": 25.28,
        "xp": 26.2,
        "sh": 4841,
        "r": 3.64,
        "p": 4454,
        "why": "Rank"
      },
      {
        "tk": "ALNY",
        "in": "2019-12-05",
        "out": "2019-12-19",
        "ep": 124.29,
        "xp": 115.34,
        "sh": 984,
        "r": -7.2,
        "p": -8809,
        "why": "Rank"
      },
      {
        "tk": "TER",
        "in": "2019-12-19",
        "out": "2020-01-06",
        "ep": 66.82,
        "xp": 66.47,
        "sh": 1855,
        "r": -0.53,
        "p": -658,
        "why": "Rank"
      },
      {
        "tk": "AMGN",
        "in": "2019-12-19",
        "out": "2020-01-21",
        "ep": 197.12,
        "xp": 196.74,
        "sh": 644,
        "r": -0.19,
        "p": -247,
        "why": "Rank"
      },
      {
        "tk": "AAPL",
        "in": "2019-11-20",
        "out": "2020-02-04",
        "ep": 63.36,
        "xp": 74.27,
        "sh": 1749,
        "r": 17.22,
        "p": 19081,
        "why": "Rank"
      },
      {
        "tk": "AMD",
        "in": "2020-01-06",
        "out": "2020-02-04",
        "ep": 48.41,
        "xp": 48.02,
        "sh": 2610,
        "r": -0.81,
        "p": -1029,
        "why": "Rank"
      },
      {
        "tk": "TER",
        "in": "2020-01-21",
        "out": "2020-02-04",
        "ep": 69.74,
        "xp": 66.05,
        "sh": 1911,
        "r": -5.29,
        "p": -7048,
        "why": "Rank"
      },
      {
        "tk": "TRI",
        "in": "2020-02-04",
        "out": "2020-02-19",
        "ep": 71.5,
        "xp": 71.48,
        "sh": 1753,
        "r": -0.03,
        "p": -32,
        "why": "Rank"
      },
      {
        "tk": "CPRT",
        "in": "2020-02-04",
        "out": "2020-03-04",
        "ep": 25.68,
        "xp": 20.94,
        "sh": 4724,
        "r": -18.44,
        "p": -22370,
        "why": "50-SMA"
      },
      {
        "tk": "TSLA",
        "in": "2020-02-04",
        "out": "2020-03-09",
        "ep": 59.17,
        "xp": 46.9,
        "sh": 2037,
        "r": -20.73,
        "p": -24990,
        "why": "Shield"
      },
      {
        "tk": "SHOP",
        "in": "2020-02-19",
        "out": "2020-03-09",
        "ep": 54.35,
        "xp": 47.21,
        "sh": 1987,
        "r": -13.14,
        "p": -14189,
        "why": "Shield"
      },
      {
        "tk": "FER",
        "in": "2020-03-04",
        "out": "2020-03-09",
        "ep": 27.95,
        "xp": 27.94,
        "sh": 3643,
        "r": -0.05,
        "p": -51,
        "why": "Shield"
      },
      {
        "tk": "TSLA",
        "in": "2020-04-16",
        "out": "2020-05-14",
        "ep": 49.71,
        "xp": 52.73,
        "sh": 2030,
        "r": 6.09,
        "p": 6141,
        "why": "Rank"
      },
      {
        "tk": "REGN",
        "in": "2020-04-16",
        "out": "2020-05-14",
        "ep": 535.15,
        "xp": 571.72,
        "sh": 203,
        "r": 6.83,
        "p": 7425,
        "why": "Rank"
      },
      {
        "tk": "DXCM",
        "in": "2020-04-16",
        "out": "2020-05-29",
        "ep": 76.61,
        "xp": 90.46,
        "sh": 1174,
        "r": 18.08,
        "p": 16262,
        "why": "Rank"
      },
      {
        "tk": "SHOP",
        "in": "2020-05-14",
        "out": "2020-06-12",
        "ep": 75.47,
        "xp": 72.51,
        "sh": 1473,
        "r": -3.92,
        "p": -4352,
        "why": "Rank"
      },
      {
        "tk": "CRWD",
        "in": "2020-06-12",
        "out": "2020-06-26",
        "ep": 23.29,
        "xp": 26.43,
        "sh": 5442,
        "r": 13.46,
        "p": 17065,
        "why": "Rank"
      },
      {
        "tk": "SHOP",
        "in": "2020-06-26",
        "out": "2020-08-10",
        "ep": 91.05,
        "xp": 105.31,
        "sh": 1710,
        "r": 15.67,
        "p": 24396,
        "why": "Rank"
      },
      {
        "tk": "PDD",
        "in": "2020-05-14",
        "out": "2020-08-24",
        "ep": 60.87,
        "xp": 84.0,
        "sh": 2132,
        "r": 38.0,
        "p": 49312,
        "why": "50-SMA"
      },
      {
        "tk": "AAPL",
        "in": "2020-08-24",
        "out": "2020-09-08",
        "ep": 122.03,
        "xp": 117.23,
        "sh": 1857,
        "r": -3.94,
        "p": -8927,
        "why": "Rank"
      },
      {
        "tk": "ODFL",
        "in": "2020-09-08",
        "out": "2020-09-22",
        "ep": 94.43,
        "xp": 86.77,
        "sh": 2373,
        "r": -8.11,
        "p": -18176,
        "why": "50-SMA"
      },
      {
        "tk": "CTAS",
        "in": "2020-09-22",
        "out": "2020-10-06",
        "ep": 76.03,
        "xp": 78.89,
        "sh": 3012,
        "r": 3.77,
        "p": 8638,
        "why": "Rank"
      },
      {
        "tk": "NVDA",
        "in": "2020-08-10",
        "out": "2020-10-20",
        "ep": 11.12,
        "xp": 13.44,
        "sh": 17120,
        "r": 20.87,
        "p": 39726,
        "why": "Rank"
      },
      {
        "tk": "SHOP",
        "in": "2020-10-06",
        "out": "2020-10-20",
        "ep": 104.18,
        "xp": 106.9,
        "sh": 2248,
        "r": 2.61,
        "p": 6121,
        "why": "Rank"
      },
      {
        "tk": "DDOG",
        "in": "2020-10-20",
        "out": "2020-11-03",
        "ep": 108.64,
        "xp": 88.33,
        "sh": 2182,
        "r": -18.7,
        "p": -44326,
        "why": "50-SMA"
      },
      {
        "tk": "CPRT",
        "in": "2020-10-20",
        "out": "2020-11-17",
        "ep": 28.76,
        "xp": 29.01,
        "sh": 7216,
        "r": 0.88,
        "p": 1827,
        "why": "Rank"
      },
      {
        "tk": "MELI",
        "in": "2020-11-03",
        "out": "2020-11-17",
        "ep": 1234.59,
        "xp": 1286.31,
        "sh": 170,
        "r": 4.19,
        "p": 8793,
        "why": "Rank"
      },
      {
        "tk": "QCOM",
        "in": "2020-11-17",
        "out": "2020-12-02",
        "ep": 131.71,
        "xp": 133.88,
        "sh": 1656,
        "r": 1.64,
        "p": 3585,
        "why": "Rank"
      },
      {
        "tk": "PDD",
        "in": "2020-11-17",
        "out": "2020-12-16",
        "ep": 132.44,
        "xp": 142.03,
        "sh": 1795,
        "r": 7.24,
        "p": 17221,
        "why": "Rank"
      },
      {
        "tk": "MSTR",
        "in": "2020-12-02",
        "out": "2020-12-16",
        "ep": 32.15,
        "xp": 28.58,
        "sh": 8049,
        "r": -11.1,
        "p": -28727,
        "why": "Rank"
      },
      {
        "tk": "LRCX",
        "in": "2020-12-16",
        "out": "2020-12-31",
        "ep": 46.65,
        "xp": 45.78,
        "sh": 5557,
        "r": -1.85,
        "p": -4783,
        "why": "Rank"
      },
      {
        "tk": "MELI",
        "in": "2020-12-16",
        "out": "2020-12-31",
        "ep": 1670.37,
        "xp": 1712.94,
        "sh": 155,
        "r": 2.55,
        "p": 6598,
        "why": "Rank"
      },
      {
        "tk": "CRWD",
        "in": "2020-12-31",
        "out": "2021-01-15",
        "ep": 52.98,
        "xp": 56.4,
        "sh": 5103,
        "r": 6.46,
        "p": 17470,
        "why": "Rank"
      },
      {
        "tk": "TER",
        "in": "2021-01-15",
        "out": "2021-02-01",
        "ep": 134.51,
        "xp": 111.12,
        "sh": 2764,
        "r": -17.39,
        "p": -64656,
        "why": "50-SMA"
      },
      {
        "tk": "TSLA",
        "in": "2020-05-29",
        "out": "2021-03-02",
        "ep": 55.69,
        "xp": 239.48,
        "sh": 1678,
        "r": 329.98,
        "p": 308386,
        "why": "50-SMA"
      },
      {
        "tk": "CRWD",
        "in": "2021-03-02",
        "out": "2021-03-16",
        "ep": 55.55,
        "xp": 50.14,
        "sh": 7458,
        "r": -9.75,
        "p": -40387,
        "why": "50-SMA"
      },
      {
        "tk": "MSTR",
        "in": "2020-12-31",
        "out": "2021-03-30",
        "ep": 38.87,
        "xp": 63.13,
        "sh": 6095,
        "r": 62.4,
        "p": 147862,
        "why": "50-SMA"
      },
      {
        "tk": "WBD",
        "in": "2021-02-01",
        "out": "2021-03-30",
        "ep": 42.14,
        "xp": 41.23,
        "sh": 5823,
        "r": -2.16,
        "p": -5305,
        "why": "50-SMA"
      },
      {
        "tk": "AMAT",
        "in": "2021-03-30",
        "out": "2021-04-14",
        "ep": 121.25,
        "xp": 129.16,
        "sh": 2575,
        "r": 6.53,
        "p": 20376,
        "why": "Rank"
      },
      {
        "tk": "HON",
        "in": "2021-03-30",
        "out": "2021-04-28",
        "ep": 193.02,
        "xp": 197.21,
        "sh": 1624,
        "r": 2.17,
        "p": 6797,
        "why": "Rank"
      },
      {
        "tk": "TSLA",
        "in": "2021-04-14",
        "out": "2021-04-28",
        "ep": 244.2,
        "xp": 234.91,
        "sh": 1350,
        "r": -3.8,
        "p": -12535,
        "why": "Rank"
      },
      {
        "tk": "AMAT",
        "in": "2021-04-28",
        "out": "2021-05-12",
        "ep": 129.79,
        "xp": 118.12,
        "sh": 2520,
        "r": -8.99,
        "p": -29412,
        "why": "50-SMA"
      },
      {
        "tk": "STX",
        "in": "2021-04-28",
        "out": "2021-05-12",
        "ep": 81.44,
        "xp": 74.74,
        "sh": 4017,
        "r": -8.23,
        "p": -26918,
        "why": "Rank"
      },
      {
        "tk": "FANG",
        "in": "2021-03-16",
        "out": "2021-05-26",
        "ep": 65.75,
        "xp": 60.73,
        "sh": 4762,
        "r": -7.64,
        "p": -23904,
        "why": "Rank"
      },
      {
        "tk": "ODFL",
        "in": "2021-05-12",
        "out": "2021-05-26",
        "ep": 124.82,
        "xp": 127.16,
        "sh": 2441,
        "r": 1.88,
        "p": 5727,
        "why": "Rank"
      },
      {
        "tk": "CCEP",
        "in": "2021-05-12",
        "out": "2021-05-26",
        "ep": 48.83,
        "xp": 51.56,
        "sh": 6240,
        "r": 5.61,
        "p": 17082,
        "why": "Rank"
      },
      {
        "tk": "KHC",
        "in": "2021-05-26",
        "out": "2021-06-10",
        "ep": 34.19,
        "xp": 33.6,
        "sh": 9001,
        "r": -1.74,
        "p": -5353,
        "why": "Rank"
      },
      {
        "tk": "TRI",
        "in": "2021-06-10",
        "out": "2021-06-24",
        "ep": 88.39,
        "xp": 88.25,
        "sh": 3554,
        "r": -0.16,
        "p": -510,
        "why": "Rank"
      },
      {
        "tk": "GOOGL",
        "in": "2021-06-24",
        "out": "2021-07-09",
        "ep": 121.48,
        "xp": 123.94,
        "sh": 2669,
        "r": 2.03,
        "p": 6568,
        "why": "Rank"
      },
      {
        "tk": "GOOG",
        "in": "2021-05-26",
        "out": "2021-07-23",
        "ep": 120.67,
        "xp": 132.16,
        "sh": 2623,
        "r": 9.52,
        "p": 30138,
        "why": "Rank"
      },
      {
        "tk": "IDXX",
        "in": "2021-07-09",
        "out": "2021-08-06",
        "ep": 667.36,
        "xp": 705.76,
        "sh": 510,
        "r": 5.75,
        "p": 19582,
        "why": "Rank"
      },
      {
        "tk": "PAYX",
        "in": "2021-08-06",
        "out": "2021-08-20",
        "ep": 98.87,
        "xp": 98.69,
        "sh": 3819,
        "r": -0.18,
        "p": -679,
        "why": "Rank"
      },
      {
        "tk": "GOOG",
        "in": "2021-08-20",
        "out": "2021-09-03",
        "ep": 137.3,
        "xp": 142.96,
        "sh": 2744,
        "r": 4.12,
        "p": 15539,
        "why": "Rank"
      },
      {
        "tk": "COST",
        "in": "2021-09-03",
        "out": "2021-09-20",
        "ep": 438.57,
        "xp": 435.47,
        "sh": 906,
        "r": -0.71,
        "p": -2809,
        "why": "Rank"
      },
      {
        "tk": "FTNT",
        "in": "2021-05-26",
        "out": "2021-10-04",
        "ep": 43.16,
        "xp": 59.6,
        "sh": 6550,
        "r": 38.08,
        "p": 107659,
        "why": "50-SMA"
      },
      {
        "tk": "INTU",
        "in": "2021-07-23",
        "out": "2021-10-04",
        "ep": 509.74,
        "xp": 524.47,
        "sh": 728,
        "r": 2.89,
        "p": 10722,
        "why": "50-SMA"
      },
      {
        "tk": "GOOG",
        "in": "2021-09-20",
        "out": "2021-10-04",
        "ep": 137.87,
        "xp": 135.27,
        "sh": 2824,
        "r": -1.89,
        "p": -7345,
        "why": "50-SMA"
      },
      {
        "tk": "PAYX",
        "in": "2021-10-04",
        "out": "2021-10-18",
        "ep": 98.53,
        "xp": 102.02,
        "sh": 3857,
        "r": 3.55,
        "p": 13483,
        "why": "Rank"
      },
      {
        "tk": "BKR",
        "in": "2021-10-04",
        "out": "2021-11-01",
        "ep": 22.7,
        "xp": 22.36,
        "sh": 16713,
        "r": -1.5,
        "p": -5703,
        "why": "Rank"
      },
      {
        "tk": "FTNT",
        "in": "2021-10-18",
        "out": "2021-11-01",
        "ep": 65.38,
        "xp": 67.27,
        "sh": 6147,
        "r": 2.89,
        "p": 11601,
        "why": "Rank"
      },
      {
        "tk": "FANG",
        "in": "2021-10-04",
        "out": "2021-11-15",
        "ep": 83.7,
        "xp": 89.36,
        "sh": 4356,
        "r": 6.76,
        "p": 24658,
        "why": "Rank"
      },
      {
        "tk": "TSLA",
        "in": "2021-11-01",
        "out": "2021-11-15",
        "ep": 403.06,
        "xp": 344.47,
        "sh": 976,
        "r": -14.54,
        "p": -57185,
        "why": "Rank"
      },
      {
        "tk": "INTU",
        "in": "2021-11-01",
        "out": "2021-11-15",
        "ep": 588.02,
        "xp": 605.28,
        "sh": 669,
        "r": 2.93,
        "p": 11545,
        "why": "Rank"
      },
      {
        "tk": "DDOG",
        "in": "2021-11-15",
        "out": "2021-11-30",
        "ep": 191.1,
        "xp": 182.99,
        "sh": 1985,
        "r": -4.24,
        "p": -16089,
        "why": "Rank"
      },
      {
        "tk": "MPWR",
        "in": "2021-11-15",
        "out": "2021-11-30",
        "ep": 543.78,
        "xp": 544.82,
        "sh": 697,
        "r": 0.19,
        "p": 726,
        "why": "Rank"
      },
      {
        "tk": "PANW",
        "in": "2021-11-30",
        "out": "2021-12-14",
        "ep": 91.2,
        "xp": 89.15,
        "sh": 4281,
        "r": -2.25,
        "p": -8771,
        "why": "50-SMA"
      },
      {
        "tk": "NVDA",
        "in": "2021-11-15",
        "out": "2021-12-14",
        "ep": 29.94,
        "xp": 28.07,
        "sh": 11982,
        "r": -6.24,
        "p": -22400,
        "why": "Rank"
      },
      {
        "tk": "AAPL",
        "in": "2021-12-14",
        "out": "2021-12-29",
        "ep": 170.37,
        "xp": 175.13,
        "sh": 2147,
        "r": 2.79,
        "p": 10219,
        "why": "Rank"
      },
      {
        "tk": "COST",
        "in": "2021-11-30",
        "out": "2022-01-12",
        "ep": 512.24,
        "xp": 495.51,
        "sh": 693,
        "r": -3.27,
        "p": -11590,
        "why": "50-SMA"
      },
      {
        "tk": "ODFL",
        "in": "2021-12-14",
        "out": "2022-01-12",
        "ep": 171.75,
        "xp": 158.69,
        "sh": 2123,
        "r": -7.6,
        "p": -27726,
        "why": "50-SMA"
      },
      {
        "tk": "ADP",
        "in": "2021-12-29",
        "out": "2022-01-12",
        "ep": 224.35,
        "xp": 212.73,
        "sh": 1665,
        "r": -5.18,
        "p": -19351,
        "why": "Rank"
      },
      {
        "tk": "STX",
        "in": "2022-01-12",
        "out": "2022-01-20",
        "ep": 99.05,
        "xp": 89.49,
        "sh": 3435,
        "r": -9.65,
        "p": -32815,
        "why": "Shield"
      },
      {
        "tk": "EXC",
        "in": "2022-01-12",
        "out": "2022-01-20",
        "ep": 34.0,
        "xp": 34.29,
        "sh": 10008,
        "r": 0.84,
        "p": 2867,
        "why": "Shield"
      },
      {
        "tk": "KLAC",
        "in": "2022-01-12",
        "out": "2022-01-20",
        "ep": 41.45,
        "xp": 37.55,
        "sh": 8209,
        "r": -9.42,
        "p": -32053,
        "why": "Shield"
      },
      {
        "tk": "PDD",
        "in": "2023-01-26",
        "out": "2023-01-30",
        "ep": 104.71,
        "xp": 104.68,
        "sh": 3001,
        "r": -0.03,
        "p": -97,
        "why": "Shield"
      },
      {
        "tk": "AXON",
        "in": "2023-01-26",
        "out": "2023-01-30",
        "ep": 192.43,
        "xp": 191.61,
        "sh": 1633,
        "r": -0.42,
        "p": -1333,
        "why": "Shield"
      },
      {
        "tk": "ROST",
        "in": "2023-01-26",
        "out": "2023-01-30",
        "ep": 116.41,
        "xp": 115.17,
        "sh": 2699,
        "r": -1.07,
        "p": -3357,
        "why": "Shield"
      },
      {
        "tk": "PDD",
        "in": "2023-02-09",
        "out": "2023-02-24",
        "ep": 93.93,
        "xp": 86.11,
        "sh": 3322,
        "r": -8.32,
        "p": -25968,
        "why": "50-SMA"
      },
      {
        "tk": "AXON",
        "in": "2023-02-09",
        "out": "2023-03-10",
        "ep": 183.9,
        "xp": 217.89,
        "sh": 1602,
        "r": 18.48,
        "p": 54449,
        "why": "Shield"
      },
      {
        "tk": "PCAR",
        "in": "2023-02-09",
        "out": "2023-03-10",
        "ep": 64.79,
        "xp": 66.14,
        "sh": 4818,
        "r": 2.08,
        "p": 6491,
        "why": "Shield"
      },
      {
        "tk": "ORLY",
        "in": "2023-02-24",
        "out": "2023-03-10",
        "ep": 55.48,
        "xp": 54.82,
        "sh": 5591,
        "r": -1.19,
        "p": -3700,
        "why": "Shield"
      },
      {
        "tk": "BKNG",
        "in": "2023-03-24",
        "out": "2023-04-24",
        "ep": 97.94,
        "xp": 105.26,
        "sh": 3327,
        "r": 7.47,
        "p": 24336,
        "why": "Rank"
      },
      {
        "tk": "TRI",
        "in": "2023-03-24",
        "out": "2023-04-24",
        "ep": 118.04,
        "xp": 123.2,
        "sh": 2776,
        "r": 4.38,
        "p": 14341,
        "why": "Rank"
      },
      {
        "tk": "AXON",
        "in": "2023-03-24",
        "out": "2023-05-08",
        "ep": 216.69,
        "xp": 219.91,
        "sh": 1542,
        "r": 1.49,
        "p": 4968,
        "why": "Rank"
      },
      {
        "tk": "CCEP",
        "in": "2023-04-24",
        "out": "2023-05-22",
        "ep": 56.53,
        "xp": 60.41,
        "sh": 5922,
        "r": 6.87,
        "p": 22996,
        "why": "Rank"
      },
      {
        "tk": "CPRT",
        "in": "2023-04-24",
        "out": "2023-07-06",
        "ep": 39.29,
        "xp": 45.24,
        "sh": 10452,
        "r": 15.14,
        "p": 62193,
        "why": "Rank"
      },
      {
        "tk": "AAPL",
        "in": "2023-07-06",
        "out": "2023-07-20",
        "ep": 189.09,
        "xp": 192.24,
        "sh": 2491,
        "r": 1.66,
        "p": 7840,
        "why": "Rank"
      },
      {
        "tk": "ISRG",
        "in": "2023-07-20",
        "out": "2023-08-03",
        "ep": 347.83,
        "xp": 313.87,
        "sh": 1469,
        "r": -9.76,
        "p": -49893,
        "why": "50-SMA"
      },
      {
        "tk": "NVDA",
        "in": "2023-05-08",
        "out": "2023-08-17",
        "ep": 29.11,
        "xp": 43.4,
        "sh": 10715,
        "r": 49.12,
        "p": 153177,
        "why": "50-SMA"
      },
      {
        "tk": "META",
        "in": "2023-05-22",
        "out": "2023-08-17",
        "ep": 246.28,
        "xp": 291.73,
        "sh": 1533,
        "r": 18.45,
        "p": 69670,
        "why": "50-SMA"
      },
      {
        "tk": "PLTR",
        "in": "2023-08-03",
        "out": "2023-08-17",
        "ep": 18.72,
        "xp": 15.45,
        "sh": 25444,
        "r": -17.47,
        "p": -83185,
        "why": "50-SMA"
      },
      {
        "tk": "CEG",
        "in": "2023-08-17",
        "out": "2023-08-31",
        "ep": 102.87,
        "xp": 103.72,
        "sh": 4132,
        "r": 0.83,
        "p": 3517,
        "why": "Rank"
      },
      {
        "tk": "BKR",
        "in": "2023-08-17",
        "out": "2023-08-31",
        "ep": 32.75,
        "xp": 33.85,
        "sh": 12980,
        "r": 3.33,
        "p": 14167,
        "why": "Rank"
      },
      {
        "tk": "NVDA",
        "in": "2023-08-31",
        "out": "2023-09-15",
        "ep": 49.28,
        "xp": 45.5,
        "sh": 9260,
        "r": -7.69,
        "p": -35073,
        "why": "50-SMA"
      },
      {
        "tk": "ADBE",
        "in": "2023-08-31",
        "out": "2023-09-15",
        "ep": 559.62,
        "xp": 552.16,
        "sh": 815,
        "r": -1.33,
        "p": -6080,
        "why": "Rank"
      },
      {
        "tk": "BKR",
        "in": "2023-09-15",
        "out": "2023-09-29",
        "ep": 33.97,
        "xp": 34.35,
        "sh": 12879,
        "r": 1.14,
        "p": 4981,
        "why": "50-SMA"
      },
      {
        "tk": "APP",
        "in": "2023-08-17",
        "out": "2023-10-13",
        "ep": 37.84,
        "xp": 39.69,
        "sh": 10660,
        "r": 4.89,
        "p": 19733,
        "why": "50-SMA"
      },
      {
        "tk": "FANG",
        "in": "2023-09-29",
        "out": "2023-10-13",
        "ep": 138.83,
        "xp": 145.46,
        "sh": 3070,
        "r": 4.78,
        "p": 20361,
        "why": "Rank"
      },
      {
        "tk": "NVDA",
        "in": "2023-10-13",
        "out": "2023-10-27",
        "ep": 45.4,
        "xp": 40.25,
        "sh": 9794,
        "r": -11.34,
        "p": -50421,
        "why": "50-SMA"
      },
      {
        "tk": "META",
        "in": "2023-10-13",
        "out": "2023-10-27",
        "ep": 312.11,
        "xp": 285.84,
        "sh": 1424,
        "r": -8.42,
        "p": -37404,
        "why": "50-SMA"
      },
      {
        "tk": "CEG",
        "in": "2023-09-15",
        "out": "2023-11-10",
        "ep": 107.89,
        "xp": 118.33,
        "sh": 3706,
        "r": 9.68,
        "p": 38698,
        "why": "Rank"
      },
      {
        "tk": "PDD",
        "in": "2023-10-27",
        "out": "2023-11-10",
        "ep": 108.33,
        "xp": 108.33,
        "sh": 3720,
        "r": -0.0,
        "p": -15,
        "why": "Rank"
      },
      {
        "tk": "MSFT",
        "in": "2023-10-27",
        "out": "2023-11-10",
        "ep": 322.42,
        "xp": 352.44,
        "sh": 1249,
        "r": 9.31,
        "p": 37485,
        "why": "Rank"
      },
      {
        "tk": "NVDA",
        "in": "2023-11-10",
        "out": "2023-11-27",
        "ep": 48.27,
        "xp": 47.69,
        "sh": 8910,
        "r": -1.21,
        "p": -5186,
        "why": "Rank"
      },
      {
        "tk": "APP",
        "in": "2023-11-10",
        "out": "2023-11-27",
        "ep": 43.81,
        "xp": 39.49,
        "sh": 9817,
        "r": -9.86,
        "p": -42428,
        "why": "Rank"
      },
      {
        "tk": "ADBE",
        "in": "2023-11-27",
        "out": "2023-12-11",
        "ep": 619.58,
        "xp": 610.01,
        "sh": 670,
        "r": -1.54,
        "p": -6412,
        "why": "Rank"
      },
      {
        "tk": "MSTR",
        "in": "2023-11-27",
        "out": "2024-01-10",
        "ep": 49.56,
        "xp": 57.73,
        "sh": 7783,
        "r": 16.48,
        "p": 63558,
        "why": "Rank"
      },
      {
        "tk": "META",
        "in": "2023-11-10",
        "out": "2024-02-08",
        "ep": 326.07,
        "xp": 465.5,
        "sh": 1370,
        "r": 42.76,
        "p": 191021,
        "why": "Rank"
      },
      {
        "tk": "PANW",
        "in": "2024-02-08",
        "out": "2024-02-23",
        "ep": 183.6,
        "xp": 133.91,
        "sh": 3400,
        "r": -27.06,
        "p": -168952,
        "why": "50-SMA"
      },
      {
        "tk": "CRWD",
        "in": "2023-12-11",
        "out": "2024-02-23",
        "ep": 61.77,
        "xp": 77.73,
        "sh": 7726,
        "r": 25.83,
        "p": 123262,
        "why": "Rank"
      },
      {
        "tk": "COST",
        "in": "2024-02-23",
        "out": "2024-03-08",
        "ep": 728.06,
        "xp": 774.7,
        "sh": 795,
        "r": 6.41,
        "p": 37075,
        "why": "Rank"
      },
      {
        "tk": "MSTR",
        "in": "2024-03-08",
        "out": "2024-04-08",
        "ep": 142.63,
        "xp": 143.9,
        "sh": 4582,
        "r": 0.89,
        "p": 5818,
        "why": "Rank"
      },
      {
        "tk": "NVDA",
        "in": "2024-01-10",
        "out": "2024-04-22",
        "ep": 54.28,
        "xp": 76.07,
        "sh": 7491,
        "r": 40.14,
        "p": 163211,
        "why": "50-SMA"
      },
      {
        "tk": "PCAR",
        "in": "2024-02-23",
        "out": "2024-04-22",
        "ep": 103.23,
        "xp": 103.56,
        "sh": 5710,
        "r": 0.32,
        "p": 1886,
        "why": "50-SMA"
      },
      {
        "tk": "MSTR",
        "in": "2024-04-22",
        "out": "2024-05-06",
        "ep": 132.47,
        "xp": 122.3,
        "sh": 4161,
        "r": -7.67,
        "p": -42302,
        "why": "50-SMA"
      },
      {
        "tk": "CEG",
        "in": "2024-04-22",
        "out": "2024-05-06",
        "ep": 180.59,
        "xp": 191.96,
        "sh": 3052,
        "r": 6.3,
        "p": 34722,
        "why": "Rank"
      },
      {
        "tk": "NVDA",
        "in": "2024-05-06",
        "out": "2024-05-20",
        "ep": 92.03,
        "xp": 92.32,
        "sh": 6258,
        "r": 0.32,
        "p": 1830,
        "why": "Rank"
      },
      {
        "tk": "WDC",
        "in": "2024-05-06",
        "out": "2024-05-20",
        "ep": 54.65,
        "xp": 54.25,
        "sh": 10538,
        "r": -0.74,
        "p": -4252,
        "why": "Rank"
      },
      {
        "tk": "FANG",
        "in": "2024-05-20",
        "out": "2024-06-04",
        "ep": 186.05,
        "xp": 179.27,
        "sh": 3215,
        "r": -3.65,
        "p": -21817,
        "why": "50-SMA"
      },
      {
        "tk": "MSTR",
        "in": "2024-05-20",
        "out": "2024-06-04",
        "ep": 172.81,
        "xp": 162.74,
        "sh": 3462,
        "r": -5.83,
        "p": -34860,
        "why": "Rank"
      },
      {
        "tk": "CEG",
        "in": "2024-06-04",
        "out": "2024-06-18",
        "ep": 200.53,
        "xp": 209.19,
        "sh": 2869,
        "r": 4.32,
        "p": 24849,
        "why": "Rank"
      },
      {
        "tk": "APP",
        "in": "2024-04-08",
        "out": "2024-07-18",
        "ep": 78.09,
        "xp": 80.19,
        "sh": 6907,
        "r": 2.69,
        "p": 14511,
        "why": "50-SMA"
      },
      {
        "tk": "NVDA",
        "in": "2024-06-04",
        "out": "2024-08-01",
        "ep": 116.29,
        "xp": 116.83,
        "sh": 4779,
        "r": 0.46,
        "p": 2549,
        "why": "50-SMA"
      },
      {
        "tk": "COST",
        "in": "2024-06-18",
        "out": "2024-08-01",
        "ep": 860.48,
        "xp": 813.06,
        "sh": 696,
        "r": -5.51,
        "p": -33008,
        "why": "50-SMA"
      },
      {
        "tk": "VRTX",
        "in": "2024-08-01",
        "out": "2024-08-15",
        "ep": 506.03,
        "xp": 471.44,
        "sh": 1127,
        "r": -6.84,
        "p": -38986,
        "why": "50-SMA"
      },
      {
        "tk": "AEP",
        "in": "2024-08-01",
        "out": "2024-08-15",
        "ep": 93.91,
        "xp": 90.97,
        "sh": 6076,
        "r": -3.13,
        "p": -17857,
        "why": "Rank"
      },
      {
        "tk": "TMUS",
        "in": "2024-08-15",
        "out": "2024-08-29",
        "ep": 187.41,
        "xp": 193.84,
        "sh": 2915,
        "r": 3.43,
        "p": 18748,
        "why": "Rank"
      },
      {
        "tk": "REGN",
        "in": "2024-08-15",
        "out": "2024-09-13",
        "ep": 1164.92,
        "xp": 1153.57,
        "sh": 487,
        "r": -0.97,
        "p": -5528,
        "why": "Rank"
      },
      {
        "tk": "CTAS",
        "in": "2024-07-18",
        "out": "2024-09-27",
        "ep": 186.15,
        "xp": 203.41,
        "sh": 2840,
        "r": 9.27,
        "p": 49004,
        "why": "Rank"
      },
      {
        "tk": "AEP",
        "in": "2024-09-13",
        "out": "2024-09-27",
        "ep": 97.5,
        "xp": 94.24,
        "sh": 5951,
        "r": -3.34,
        "p": -19386,
        "why": "Rank"
      },
      {
        "tk": "WMT",
        "in": "2024-08-29",
        "out": "2024-10-11",
        "ep": 75.09,
        "xp": 78.18,
        "sh": 7322,
        "r": 4.12,
        "p": 22664,
        "why": "Rank"
      },
      {
        "tk": "RKLB",
        "in": "2024-09-27",
        "out": "2024-10-11",
        "ep": 9.78,
        "xp": 9.39,
        "sh": 58662,
        "r": -4.04,
        "p": -23165,
        "why": "Rank"
      },
      {
        "tk": "KDP",
        "in": "2024-10-11",
        "out": "2024-10-25",
        "ep": 34.48,
        "xp": 33.1,
        "sh": 17257,
        "r": -4.01,
        "p": -23839,
        "why": "50-SMA"
      },
      {
        "tk": "TMUS",
        "in": "2024-10-11",
        "out": "2024-10-25",
        "ep": 205.81,
        "xp": 225.52,
        "sh": 2891,
        "r": 9.58,
        "p": 56983,
        "why": "Rank"
      },
      {
        "tk": "PLTR",
        "in": "2024-10-25",
        "out": "2024-11-22",
        "ep": 44.88,
        "xp": 61.36,
        "sh": 15302,
        "r": 36.71,
        "p": 252140,
        "why": "Rank"
      },
      {
        "tk": "MSTR",
        "in": "2024-11-22",
        "out": "2024-12-09",
        "ep": 422.09,
        "xp": 395.01,
        "sh": 3034,
        "r": -6.42,
        "p": -82164,
        "why": "Rank"
      }
    ]
  },
  "build": {
    "botLoc": 15264,
    "botServices": 33,
    "botEndpoints": 39,
    "eodReports": 75,
    "researchPdfs": 24,
    "mql5": 46,
    "pineScripts": 7
  }
};
