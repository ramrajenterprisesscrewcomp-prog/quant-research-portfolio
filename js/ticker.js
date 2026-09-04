/**
 * Live Market Ticker Tape Simulation
 * Continuously streams simulated market ticks for Indian & Global assets
 */

const TICKER_DATA = [
  { symbol: "NIFTY 50", price: 24850.40, change: 142.60, pct: "+0.58%", up: true, assetClass: "IND-FO" },
  { symbol: "BANKNIFTY", price: 51220.15, change: -115.80, pct: "-0.23%", up: false, assetClass: "IND-FO" },
  { symbol: "XAU/USD (GOLD)", price: 2518.60, change: 16.40, pct: "+0.65%", up: true, assetClass: "COMMODITY" },
  { symbol: "CRUDE OIL (MCX)", price: 6245.00, change: 48.00, pct: "+0.77%", up: true, assetClass: "COMMODITY" },
  { symbol: "S&P 500 (SPY)", price: 564.80, change: 4.25, pct: "+0.76%", up: true, assetClass: "US-EQUITY" },
  { symbol: "NASDAQ (QQQ)", price: 482.10, change: 6.90, pct: "+1.45%", up: true, assetClass: "US-EQUITY" },
  { symbol: "EUR/USD", price: 1.1082, change: 0.0018, pct: "+0.16%", up: true, assetClass: "FOREX" },
  { symbol: "GBP/USD", price: 1.3145, change: -0.0012, pct: "-0.09%", up: false, assetClass: "FOREX" },
  { symbol: "RELIANCE.NS", price: 3012.50, change: 24.30, pct: "+0.81%", up: true, assetClass: "IND-EQ" },
  { symbol: "HDFCBANK.NS", price: 1642.00, change: -6.40, pct: "-0.39%", up: false, assetClass: "IND-EQ" },
  { symbol: "NVDA (US)", price: 128.50, change: 4.80, pct: "+3.88%", up: true, assetClass: "US-EQUITY" },
  { symbol: "BTC/USD", price: 59420.00, change: 890.00, pct: "+1.52%", up: true, assetClass: "CRYPTO" }
];

function initTicker() {
  const tickerTrack = document.getElementById("tickerTrack");
  if (!tickerTrack) return;

  function renderItems() {
    // Duplicate data array for infinite smooth marquee scroll
    const items = [...TICKER_DATA, ...TICKER_DATA];
    tickerTrack.innerHTML = items.map((item, index) => `
      <div class="ticker-item" id="ticker-item-${index}">
        <span class="ticker-symbol">${item.symbol}</span>
        <span class="ticker-price" data-sym="${item.symbol}">${formatPrice(item.price)}</span>
        <span class="ticker-change ${item.up ? 'up' : 'down'}">
          ${item.up ? '▲' : '▼'} ${item.pct}
        </span>
      </div>
    `).join("");
  }

  function formatPrice(price) {
    if (price < 5) return price.toFixed(4);
    if (price < 100) return price.toFixed(2);
    return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  renderItems();

  // Subtle live price jitter to simulate high-frequency market updates
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * TICKER_DATA.length);
    const item = TICKER_DATA[randomIndex];
    const delta = (Math.random() - 0.48) * (item.price * 0.001);
    item.price = Math.max(0.001, item.price + delta);
    
    // Update DOM nodes for this symbol
    const priceElements = document.querySelectorAll(`[data-sym="${item.symbol}"]`);
    priceElements.forEach(el => {
      el.textContent = formatPrice(item.price);
      el.style.color = delta >= 0 ? '#00f59b' : '#ff3b69';
      setTimeout(() => {
        el.style.color = 'var(--text-secondary)';
      }, 500);
    });
  }, 1800);
}

document.addEventListener("DOMContentLoaded", initTicker);
