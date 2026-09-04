/**
 * Anand P — Quantitative Trader & Algo Developer Portfolio
 * Main Application Logic: Real Code Vault, Filters, Modal, Toasts, and Event Handlers
 */

// Production-grade authentic code from Anand's actual repository
const CODE_SNIPPETS = {
  pinescript: `//@version=6
// RRE Liquidity + VWMA Institutional Indicator
// Developed by Anand P (Equity Trader & Quant Developer)
indicator('RRE Liquidity + VWMA', overlay = true, max_lines_count = 200)

// --- INPUTS ---
liqPivotBars = input.int(2, 'Liquidity Confirmation Bars', minval = 1, maxval = 10, group = 'Liquidity', tooltip = 'Bars needed to confirm swing point.')
maxLiqLines  = input.int(5, 'Max Liquidity Lines', minval = 3, maxval = 20, group = 'Liquidity')
extendRight  = input.int(40, 'Extend Right Bars', minval = 10, maxval = 200, group = 'Liquidity')
liqBuyColor  = input.color(#00BCD4, 'Buy Signal Color (Swept Low)', group = 'Liquidity')
liqSellColor = input.color(#E91E63, 'Sell Signal Color (Swept High)', group = 'Liquidity')

// --- VWMA ENGINE ---
useVwmaFilter = input.bool(true, 'Filter Signals by VWMA', group = 'VWMA')
showVWMA      = input.bool(true, 'Show VWMA Line', group = 'VWMA')
vwmaLen       = input.int(20, 'VWMA Length', minval = 1, group = 'VWMA')
vwmaSrc       = input.source(close, 'VWMA Source', group = 'VWMA')

vwma = ta.vwma(vwmaSrc, vwmaLen)
plot(showVWMA ? vwma : na, title = 'VWMA', color = #2962FF, linewidth = 2)

// --- LIQUIDITY SWEEP DETECTION ---
liqSwingHigh = ta.pivothigh(high, liqPivotBars, liqPivotBars)
liqSwingLow  = ta.pivotlow(low, liqPivotBars, liqPivotBars)

var array<line> buyLiq  = array.new_line()
var array<line> sellLiq = array.new_line()

var bool newBuyLiq  = false
var bool newSellLiq = false

// Sweep of Low -> Candle confirmed below -> Institutional Liquidity Sweep (BUY)
if not na(liqSwingLow)
    l = line.new(bar_index[liqPivotBars], liqSwingLow, bar_index + extendRight, liqSwingLow, color = liqBuyColor, width = 2)
    array.push(buyLiq, l)
    if array.size(buyLiq) > maxLiqLines
        line.delete(array.shift(buyLiq))

// Sweep of High -> Candle confirmed above -> Institutional Supply Sweep (SELL)
if not na(liqSwingHigh)
    l = line.new(bar_index[liqPivotBars], liqSwingHigh, bar_index + extendRight, liqSwingHigh, color = liqSellColor, width = 2)
    array.push(sellLiq, l)
    if array.size(sellLiq) > maxLiqLines
        line.delete(array.shift(sellLiq))
`,

  mql5: `//+------------------------------------------------------------------+
//|                                     Anand_Institutional_EA.mq5    |
//|                        Copyright 2026, Anand P (Quant Trader)     |
//|                                   https://linkedin.com/in/anand-p |
//+------------------------------------------------------------------+
#property copyright "Anand P - Quantitative Systems Developer"
#property link      "stocksanand35@gmail.com"
#property version   "3.20"
#property strict

#include <Trade\\Trade.mqh>
CTrade trade;

input group "--- Risk & Lot Management ---"
input double InpRiskPercent      = 1.5;     // Maximum Risk per trade (%)
input double InpMaxSpreadPoints  = 20.0;    // Max Spread allowed (Points)
input int    InpAtrPeriod        = 14;      // ATR Period for Volatility Stop
input double InpAtrMultiplier    = 2.0;     // ATR Multiplier

input group "--- Strategy Parameters ---"
input int    InpFastMA           = 9;       // Fast EMA Period
input int    InpSlowMA           = 21;      // Slow EMA Period
input ulong  InpMagicNumber      = 884129;  // EA Unique Magic Identifier

int hAtr, hFastMA, hSlowMA;

int OnInit()
{
   trade.SetExpertMagicNumber(InpMagicNumber);
   hAtr    = iATR(_Symbol, _Period, InpAtrPeriod);
   hFastMA = iMA(_Symbol, _Period, InpFastMA, 0, MODE_EMA, PRICE_CLOSE);
   hSlowMA = iMA(_Symbol, _Period, InpSlowMA, 0, MODE_EMA, PRICE_CLOSE);
   
   if(hAtr == INVALID_HANDLE || hFastMA == INVALID_HANDLE || hSlowMA == INVALID_HANDLE)
      return(INIT_FAILED);
   
   Print("Anand_Institutional_EA initialized successfully. Execution active.");
   return(INIT_SUCCEEDED);
}

void OnTick()
{
   // 1. Institutional Spread Protection
   long currentSpread = SymbolInfoInteger(_Symbol, SYMBOL_SPREAD);
   if(currentSpread > InpMaxSpreadPoints) return;
   
   // 2. Bar close check & Buffer read
   double maFast[], maSlow[], atrBuffer[];
   ArraySetAsSeries(maFast, true);
   ArraySetAsSeries(maSlow, true);
   ArraySetAsSeries(atrBuffer, true);
   
   if(CopyBuffer(hFastMA, 0, 0, 3, maFast) < 3) return;
   if(CopyBuffer(hSlowMA, 0, 0, 3, maSlow) < 3) return;
   if(CopyBuffer(hAtr, 0, 0, 3, atrBuffer) < 3) return;

   // 3. Execution & Fractional Risk Sizing
   if(PositionsTotal() == 0)
   {
      if(maFast[1] > maSlow[1] && maFast[2] <= maSlow[2])
      {
         double ask = SymbolInfoDouble(_Symbol, SYMBOL_ASK);
         double sl  = ask - (atrBuffer[1] * InpAtrMultiplier);
         double tp  = ask + ((ask - sl) * 2.5);
         double lot = CalculateLotSize(ask - sl);
         trade.Buy(lot, _Symbol, ask, sl, tp, "Anand Quant Long");
      }
   }
}

double CalculateLotSize(double slDistance)
{
   double balance   = AccountInfoDouble(ACCOUNT_BALANCE);
   double riskMoney = balance * (InpRiskPercent / 100.0);
   double tickSize  = SymbolInfoDouble(_Symbol, SYMBOL_TRADE_TICK_SIZE);
   double tickValue = SymbolInfoDouble(_Symbol, SYMBOL_TRADE_TICK_VALUE);
   if(slDistance <= 0 || tickSize <= 0) return 0.01;
   double lot = riskMoney / ((slDistance / tickSize) * tickValue);
   return NormalizeDouble(MathMax(0.01, lot), 2);
}
`,

  python: `"""
Indian F&O Opening Range Breakout (ORB) & Composite Alpha Execution Engine
Developed by Anand P for High-Beta Intraday Trading
"""

import os
import pandas as pd
import numpy as np

def screen_fo_top5_and_execute_top2(df_features, df_betas):
    # 1. Merge Features & Beta Filtering (Beta >= 1.50)
    df = pd.merge(df_features, df_betas, on="TckrSymb", how="left").fillna({"Beta": 1.0})
    
    # 2. Institutional Setup Classification
    cond_long_buildup = (
        (df["Price_Gain_Pct"] >= 1.50) &
        (df["OI_Chg_Pct"] >= 3.0) &
        (df["HOD_Pct"] >= 75.0) &
        (df["Vol_Ratio"] >= 1.30)
    )
    cond_short_covering = (
        (df["Price_Gain_Pct"] >= 2.00) &
        (df["OI_Chg_Pct"] <= -2.0) &
        (df["HOD_Pct"] >= 70.0) &
        (df["Vol_Ratio"] >= 1.30)
    )
    
    df["Setup_Type"] = np.where(cond_long_buildup, "🟢 LONG BUILDUP",
                       np.where(cond_short_covering, "🟣 SHORT COVERING", "NONE"))
    
    candidates = df[df["Setup_Type"] != "NONE"].copy()
    
    # 3. Anand Composite Alpha Score Formula:
    # Alpha = (Vol_Ratio * 0.40) + (Price_Gain * 0.35) + (HOD_Pct * 0.15) + (abs(OI_Chg) * 0.10)
    candidates["Alpha_Score"] = (
        (candidates["Vol_Ratio"] * 0.40) +
        (candidates["Price_Gain_Pct"].abs() * 0.35) +
        ((candidates["HOD_Pct"] / 100.0) * 0.15) +
        (candidates["OI_Chg_Pct"].abs() * 0.10)
    )
    
    # 4. Filter Top 5 candidates, select Top 2 with Beta > 1.5 for execution
    top5 = candidates.sort_values(by="Alpha_Score", ascending=False).head(5)
    executed_trades = top5[top5["Beta"] >= 1.5].head(2)
    
    print(f"[ORB ENGINE] Top 5 Filtered | Executing Top {len(executed_trades)} Ultra-High Beta Contracts:")
    for _, row in executed_trades.iterrows():
        sl_prev_day_low = row["Prev_Day_Low"]
        print(f" -> {row['TckrSymb']} | Score: {row['Alpha_Score']:.2f} | Entry: {row['Close']} | SL: {sl_prev_day_low}")
        
    return executed_trades
`,

  fastapi: `"""
Ramraj Enterprises (RRE) Automated Trading Daemon & Reporting Pipeline
Built by Anand P — Production FastAPI Service on Cloud VPS
"""

from fastapi import FastAPI
import asyncio
from contextlib import asynccontextmanager
from services.nse_service import get_fno_oi_buildup, get_option_chain, parse_option_chain
from services.angel_service import get_fno_lot_and_margin_async
from services.pm_report_service import pm_report_loop
from services.eod_report_service import eod_report_loop
from services.telegram_service import send_market_summary

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Start autonomous daily market reporting & alert background workers
    asyncio.create_task(pm_report_loop())     # Post-Market Gap & F&O Summary
    asyncio.create_task(eod_report_loop())    # End-of-Day Institutional PDF Report
    print("[RRE DAEMON] All Trading Background Workers Initialized on Cloud VPS.")
    yield

app = FastAPI(title="RRE Stock Analysis Dashboard", version="1.0.0", lifespan=lifespan)

@app.get("/api/fno-pulse")
async def get_fno_pulse():
    oi_data = get_fno_oi_buildup()
    summary = {
        "long_buildup_count": len([x for x in oi_data if x["type"] == "LONG_BUILDUP"]),
        "short_covering_count": len([x for x in oi_data if x["type"] == "SHORT_COVERING"]),
        "timestamp": "2026-09-01 15:30:00 IST"
    }
    return summary
`
};

document.addEventListener("DOMContentLoaded", () => {
  setupNavbar();
  setupAssetFiltering();
  setupCodeVault();
  setupContactForm();
  setupCopyButtons();
});

/* 1. Navbar Scroll & Mobile Navigation */
function setupNavbar() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  const mobileToggle = document.getElementById("mobileNavToggle");
  const navLinks = document.getElementById("navLinks");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      const isVisible = navLinks.style.display === "flex";
      navLinks.style.display = isVisible ? "none" : "flex";
      if (!isVisible) {
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "100%";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.background = "#090d16";
        navLinks.style.padding = "1.5rem";
        navLinks.style.borderBottom = "1px solid var(--border-subtle)";
      }
    });
  }
}

/* 2. Asset Class Matrix Filtering */
function setupAssetFiltering() {
  const filterBtns = document.querySelectorAll(".asset-tab-btn");
  const cards = document.querySelectorAll(".asset-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");

      cards.forEach(card => {
        const cardCat = card.getAttribute("data-category");
        if (category === "all" || cardCat === category) {
          card.style.display = "flex";
          card.style.animation = "fadeIn 0.3s ease";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* 3. Code Vault Switching & Copy */
function setupCodeVault() {
  const tabs = document.querySelectorAll(".vault-tab");
  const codePre = document.getElementById("codePreBox");
  const copyBtn = document.getElementById("copyCodeBtn");

  function renderSyntaxHighlighted(code, lang) {
    let escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    if (lang === "pinescript") {
      escaped = escaped
        .replace(/\b(indicator|input|ta|plot|var|float|int|bool|color|array|line)\b/g, '<span class="code-func">$1</span>')
        .replace(/\b(if|else|for|while|and|or|not)\b/g, '<span class="code-keyword">$1</span>')
        .replace(/(".*?"|'.*?')/g, '<span class="code-string">$1</span>')
        .replace(/(\/\/[^\n]*)/g, '<span class="code-comment">$1</span>');
    } else if (lang === "mql5") {
      escaped = escaped
        .replace(/\b(input|double|int|void|string|ulong|bool|CTrade|ArraySetAsSeries)\b/g, '<span class="code-func">$1</span>')
        .replace(/\b(if|else|return|group)\b/g, '<span class="code-keyword">$1</span>')
        .replace(/(".*?"|'.*?')/g, '<span class="code-string">$1</span>')
        .replace(/(\/\/[^\n]*)/g, '<span class="code-comment">$1</span>');
    } else {
      escaped = escaped
        .replace(/\b(def|class|import|from|return|if|elif|else|while|for|async|await)\b/g, '<span class="code-keyword">$1</span>')
        .replace(/(".*?"|'.*?'|""".*?""")/gs, '<span class="code-string">$1</span>')
        .replace(/(#[^\n]*)/g, '<span class="code-comment">$1</span>');
    }

    return escaped;
  }

  let currentLang = "pinescript";

  function setLanguage(lang) {
    currentLang = lang;
    const raw = CODE_SNIPPETS[lang] || "";
    codePre.innerHTML = renderSyntaxHighlighted(raw, lang);
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const lang = tab.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Initial code load
  setLanguage("pinescript");

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const raw = CODE_SNIPPETS[currentLang];
      navigator.clipboard.writeText(raw).then(() => {
        showToast("✓ Code snippet copied to clipboard!");
      });
    });
  }
}

/* 4. Copy Direct Contact Buttons */
function setupCopyButtons() {
  document.querySelectorAll(".copy-contact-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute("data-copy");
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`✓ Copied: ${textToCopy}`);
      }).catch(() => {
        showToast(`Copied: ${textToCopy}`);
      });
    });
  });
}

/* 5. Contact Form Handler */
function setupContactForm() {
  const form = document.getElementById("strategyInquiryForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("inquiryName").value.trim();
    const email = document.getElementById("inquiryEmail").value.trim();
    const service = document.getElementById("inquiryService").value;
    const asset = document.getElementById("inquiryAsset").value;
    const message = document.getElementById("inquiryMessage").value.trim();

    if (!name || !email) {
      showToast("⚠ Please enter your Name and Email");
      return;
    }

    const subject = encodeURIComponent(`Trading & Algo Opportunity: ${service} (${asset}) - from ${name}`);
    const body = encodeURIComponent(
      `Hi Anand,\n\nName: ${name}\nEmail: ${email}\nRole / Inquiry: ${service}\nAsset Focus: ${asset}\n\nMessage:\n${message}\n\nBest regards,\n${name}`
    );

    showToast("🚀 Opening your email client to send message to Anand...");
    setTimeout(() => {
      window.location.href = `mailto:stocksanand35@gmail.com?subject=${subject}&body=${body}`;
    }, 400);
  });
}

/* 6. Animated Toast Notification */
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
