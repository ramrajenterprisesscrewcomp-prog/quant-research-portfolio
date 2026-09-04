/**
 * Interactive Candlestick & Quantitative Strategy Canvas Engine
 * Renders OHLCV bars, EMAs, Supertrend, Order Blocks, and Algo Signal Markers
 */

class QuantChartEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    // Strategy & Indicator Toggles
    this.toggles = {
      ema: true,
      supertrend: true,
      orderBlocks: true,
      signals: true
    };

    this.activeSymbol = 'NIFTY';
    this.data = [];
    this.mouse = { x: null, y: null, active: false };

    this.symbolsData = {
      NIFTY: { basePrice: 24700, volatility: 45, name: "NIFTY 50 (5m)", sharpe: "2.41", winRate: "68.4%", profitFactor: "2.18", maxDd: "6.8%", trades: "342" },
      BANKNIFTY: { basePrice: 51100, volatility: 110, name: "BANKNIFTY (5m)", sharpe: "2.55", winRate: "66.2%", profitFactor: "2.35", maxDd: "8.4%", trades: "418" },
      XAUUSD: { basePrice: 2505, volatility: 4.5, name: "XAU/USD Gold (15m)", sharpe: "2.72", winRate: "71.0%", profitFactor: "2.42", maxDd: "5.5%", trades: "284" },
      EURUSD: { basePrice: 1.1040, volatility: 0.0015, name: "EUR/USD (15m)", sharpe: "2.15", winRate: "64.5%", profitFactor: "1.92", maxDd: "4.8%", trades: "520" },
      QQQ: { basePrice: 478, volatility: 1.8, name: "QQQ US Tech (5m)", sharpe: "2.38", winRate: "69.1%", profitFactor: "2.26", maxDd: "7.1%", trades: "310" }
    };

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => {
      this.resize();
      this.render();
    });

    this.generateData(this.activeSymbol);
    this.setupListeners();
    this.render();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);
    this.width = rect.width;
    this.height = rect.height;
  }

  setupListeners() {
    // Mouse hover crosshair
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
      this.mouse.active = true;
      this.render();
    });

    this.canvas.addEventListener('mouseleave', () => {
      this.mouse.active = false;
      this.render();
    });

    // Symbol Switchers
    document.querySelectorAll('.symbol-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.symbol-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const sym = btn.getAttribute('data-symbol');
        this.setSymbol(sym);
      });
    });

    // Indicator Toggle Buttons
    document.querySelectorAll('.toggle-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const ind = pill.getAttribute('data-indicator');
        pill.classList.toggle('active');
        this.toggles[ind] = pill.classList.contains('active');
        this.render();
      });
    });
  }

  setSymbol(sym) {
    if (!this.symbolsData[sym]) return;
    this.activeSymbol = sym;
    this.generateData(sym);
    this.updateMetricsUI();
    this.render();
  }

  updateMetricsUI() {
    const meta = this.symbolsData[this.activeSymbol];
    const elWin = document.getElementById('metricWinRate');
    const elSharpe = document.getElementById('metricSharpe');
    const elPF = document.getElementById('metricProfitFactor');
    const elDD = document.getElementById('metricMaxDD');
    const elTrades = document.getElementById('metricTrades');

    if (elWin) elWin.textContent = meta.winRate;
    if (elSharpe) elSharpe.textContent = meta.sharpe;
    if (elPF) elPF.textContent = meta.profitFactor;
    if (elDD) elDD.textContent = meta.maxDd;
    if (elTrades) elTrades.textContent = meta.trades;
  }

  generateData(sym) {
    const meta = this.symbolsData[sym];
    const numBars = 55;
    this.data = [];
    let currentPrice = meta.basePrice;

    for (let i = 0; i < numBars; i++) {
      // Trend wave motion
      const trend = Math.sin(i * 0.2) * (meta.volatility * 0.45) + (Math.random() - 0.48) * meta.volatility;
      const open = currentPrice;
      const close = open + trend;
      const high = Math.max(open, close) + Math.random() * (meta.volatility * 0.6);
      const low = Math.min(open, close) - Math.random() * (meta.volatility * 0.6);
      const volume = Math.floor(Math.random() * 8000) + 2000;

      currentPrice = close;
      this.data.push({
        index: i,
        open,
        high,
        low,
        close,
        volume,
        bullish: close >= open
      });
    }

    // Calculate Indicators
    this.calculateIndicators();
  }

  calculateIndicators() {
    // EMAs: 9, 21
    const closes = this.data.map(d => d.close);
    const calcEMA = (period) => {
      const k = 2 / (period + 1);
      let ema = closes[0];
      return closes.map((c, i) => {
        if (i === 0) return ema;
        ema = c * k + ema * (1 - k);
        return ema;
      });
    };

    const ema9 = calcEMA(9);
    const ema21 = calcEMA(21);

    this.data.forEach((d, i) => {
      d.ema9 = ema9[i];
      d.ema21 = ema21[i];
      
      // Simulated Supertrend line
      d.supertrend = d.ema21 + (d.close > d.ema21 ? -1 : 1) * (d.high - d.low) * 0.8;
      d.supertrendBull = d.close >= d.supertrend;

      // Algo Signals at EMA cross points
      d.signal = null;
      if (i > 5 && i < this.data.length - 2) {
        if (ema9[i] > ema21[i] && ema9[i - 1] <= ema21[i - 1]) {
          d.signal = { type: 'BUY', target: d.close * 1.015, sl: d.low };
        } else if (ema9[i] < ema21[i] && ema9[i - 1] >= ema21[i - 1]) {
          d.signal = { type: 'SELL', target: d.close * 0.985, sl: d.high };
        }
      }
    });
  }

  render() {
    if (!this.ctx || !this.width || !this.height) return;
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;

    // Clear background
    ctx.fillStyle = '#080c14';
    ctx.fillRect(0, 0, w, h);

    if (!this.data || this.data.length === 0) return;

    // Dimensions
    const padding = { top: 30, right: 75, bottom: 40, left: 15 };
    const chartW = w - padding.left - padding.right;
    const chartH = (h - padding.top - padding.bottom) * 0.78; // Candlesticks
    const volumeH = (h - padding.top - padding.bottom) * 0.20; // Volume sub-pane
    const volumeTop = padding.top + chartH + 10;

    // Min / Max Price
    let minPrice = Infinity;
    let maxPrice = -Infinity;
    let maxVolume = 0;

    this.data.forEach(d => {
      if (d.low < minPrice) minPrice = d.low;
      if (d.high > maxPrice) maxPrice = d.high;
      if (d.volume > maxVolume) maxVolume = d.volume;
    });

    const priceRange = (maxPrice - minPrice) || 1;
    const priceToY = (price) => padding.top + chartH - ((price - minPrice) / priceRange) * chartH;
    const barSpacing = chartW / this.data.length;
    const candleWidth = Math.max(3, barSpacing * 0.65);

    // 1. Draw Grid Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    const gridSteps = 5;
    for (let i = 0; i <= gridSteps; i++) {
      const y = padding.top + (chartH / gridSteps) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(w - padding.right, y);
      ctx.stroke();

      // Price scale text on right
      const priceAtY = maxPrice - (i / gridSteps) * priceRange;
      ctx.fillStyle = '#64748b';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textAlign = 'left';
      ctx.fillText(this.formatPrice(priceAtY), w - padding.right + 10, y + 3);
    }

    // 2. Draw Order Block Liquidity Zones (if enabled)
    if (this.toggles.orderBlocks) {
      // Bullish Demand Zone
      const demandY = priceToY(minPrice + priceRange * 0.15);
      const demandH = chartH * 0.12;
      ctx.fillStyle = 'rgba(0, 245, 155, 0.05)';
      ctx.fillRect(padding.left, demandY, chartW, demandH);
      ctx.strokeStyle = 'rgba(0, 245, 155, 0.2)';
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(padding.left, demandY, chartW, demandH);
      ctx.setLineDash([]);

      ctx.fillStyle = 'rgba(0, 245, 155, 0.6)';
      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.fillText('INSTITUTIONAL DEMAND BLOCK', padding.left + 8, demandY + 14);

      // Bearish Supply Zone
      const supplyY = priceToY(maxPrice - priceRange * 0.05);
      const supplyH = chartH * 0.10;
      ctx.fillStyle = 'rgba(255, 59, 105, 0.05)';
      ctx.fillRect(padding.left, supplyY, chartW, supplyH);
      ctx.strokeStyle = 'rgba(255, 59, 105, 0.2)';
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(padding.left, supplyY, chartW, supplyH);
      ctx.setLineDash([]);

      ctx.fillStyle = 'rgba(255, 59, 105, 0.6)';
      ctx.fillText('SUPPLY & LIQUIDITY SWEEP', padding.left + 8, supplyY + 14);
    }

    // 3. Draw EMAs
    if (this.toggles.ema) {
      // EMA 9 (Neon Cyan)
      ctx.strokeStyle = '#00e5ff';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      this.data.forEach((d, i) => {
        const x = padding.left + i * barSpacing + barSpacing / 2;
        const y = priceToY(d.ema9);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // EMA 21 (Neon Gold)
      ctx.strokeStyle = '#ffb703';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      this.data.forEach((d, i) => {
        const x = padding.left + i * barSpacing + barSpacing / 2;
        const y = priceToY(d.ema21);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    }

    // 4. Draw Supertrend (if enabled)
    if (this.toggles.supertrend) {
      ctx.lineWidth = 2;
      this.data.forEach((d, i) => {
        if (i === 0) return;
        const prev = this.data[i - 1];
        const x1 = padding.left + (i - 1) * barSpacing + barSpacing / 2;
        const y1 = priceToY(prev.supertrend);
        const x2 = padding.left + i * barSpacing + barSpacing / 2;
        const y2 = priceToY(d.supertrend);

        ctx.strokeStyle = d.supertrendBull ? 'rgba(0, 245, 155, 0.7)' : 'rgba(255, 59, 105, 0.7)';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });
    }

    // 5. Draw Volume Bars & Candlesticks
    let hoveredBar = null;

    this.data.forEach((d, i) => {
      const x = padding.left + i * barSpacing + barSpacing / 2;
      const openY = priceToY(d.open);
      const closeY = priceToY(d.close);
      const highY = priceToY(d.high);
      const lowY = priceToY(d.low);

      const color = d.bullish ? '#00f59b' : '#ff3b69';

      // Volume Bar
      const volHeight = (d.volume / maxVolume) * volumeH;
      const volY = volumeTop + volumeH - volHeight;
      ctx.fillStyle = d.bullish ? 'rgba(0, 245, 155, 0.25)' : 'rgba(255, 59, 105, 0.25)';
      ctx.fillRect(x - candleWidth / 2, volY, candleWidth, volHeight);

      // Candlestick Wick
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(x, highY);
      ctx.lineTo(x, lowY);
      ctx.stroke();

      // Candlestick Body
      ctx.fillStyle = color;
      const bodyTop = Math.min(openY, closeY);
      const bodyH = Math.max(Math.abs(closeY - openY), 2);
      ctx.fillRect(x - candleWidth / 2, bodyTop, candleWidth, bodyH);

      // Check mouse hover
      if (this.mouse.active && Math.abs(this.mouse.x - x) < barSpacing / 2) {
        hoveredBar = d;
      }
    });

    // 6. Draw Algo Signal Markers
    if (this.toggles.signals) {
      this.data.forEach((d, i) => {
        if (!d.signal) return;
        const x = padding.left + i * barSpacing + barSpacing / 2;

        if (d.signal.type === 'BUY') {
          const y = priceToY(d.low) + 16;
          // Up Neon Arrow
          ctx.fillStyle = '#00f59b';
          ctx.beginPath();
          ctx.moveTo(x, y - 8);
          ctx.lineTo(x - 6, y + 4);
          ctx.lineTo(x + 6, y + 4);
          ctx.closePath();
          ctx.fill();

          ctx.font = 'bold 9px "JetBrains Mono", monospace';
          ctx.textAlign = 'center';
          ctx.fillText('BUY', x, y + 15);
        } else {
          const y = priceToY(d.high) - 16;
          // Down Neon Arrow
          ctx.fillStyle = '#ff3b69';
          ctx.beginPath();
          ctx.moveTo(x, y + 8);
          ctx.lineTo(x - 6, y - 4);
          ctx.lineTo(x + 6, y - 4);
          ctx.closePath();
          ctx.fill();

          ctx.font = 'bold 9px "JetBrains Mono", monospace';
          ctx.textAlign = 'center';
          ctx.fillText('SELL', x, y - 8);
        }
      });
    }

    // 7. Mouse Crosshair & Tooltip
    if (this.mouse.active && hoveredBar) {
      const hx = padding.left + hoveredBar.index * barSpacing + barSpacing / 2;

      // Crosshair lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.setLineDash([3, 3]);

      // Vertical line
      ctx.beginPath();
      ctx.moveTo(hx, padding.top);
      ctx.lineTo(hx, h - padding.bottom);
      ctx.stroke();

      // Horizontal line
      ctx.beginPath();
      ctx.moveTo(padding.left, this.mouse.y);
      ctx.lineTo(w - padding.right, this.mouse.y);
      ctx.stroke();
      ctx.setLineDash([]);

      // Update overlay element info
      const overlay = document.getElementById('chartOverlayInfo');
      if (overlay) {
        overlay.innerHTML = `
          <span>O: <strong>${this.formatPrice(hoveredBar.open)}</strong></span>
          <span>H: <strong>${this.formatPrice(hoveredBar.high)}</strong></span>
          <span>L: <strong>${this.formatPrice(hoveredBar.low)}</strong></span>
          <span>C: <strong style="color:${hoveredBar.bullish ? '#00f59b' : '#ff3b69'}">${this.formatPrice(hoveredBar.close)}</strong></span>
          <span>Vol: <strong>${hoveredBar.volume.toLocaleString()}</strong></span>
        `;
      }
    }
  }

  formatPrice(price) {
    if (price < 5) return price.toFixed(4);
    if (price < 100) return price.toFixed(2);
    return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.quantChart = new QuantChartEngine('candlestickCanvas');
});
