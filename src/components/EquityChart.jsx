import React from 'react';

/* Log-scale equity curve with a matching underwater drawdown panel.
   Bear-regime spans — the sessions the macro shield holds cash — are shaded, so
   the flat stretches in the curve can be read against the rule that caused them. */

const W = 900;
const H_EQ = 300;
const H_DD = 92;
const PAD_L = 52;
const PAD_R = 12;
const PAD_T = 10;

const money = (v) =>
  v >= 1_000_000 ? `$${(v / 1_000_000).toFixed(v >= 10_000_000 ? 0 : 1)}M` : `$${Math.round(v / 1000)}k`;

export default function EquityChart({ curve, ddFloor }) {
  const vals = curve.flatMap((p) => [p.e, p.q]).filter((v) => v > 0);
  const lo = Math.min(...vals);
  const hi = Math.max(...vals);
  const logLo = Math.log10(lo);
  const logHi = Math.log10(hi);

  const x = (i) => PAD_L + (i / (curve.length - 1)) * (W - PAD_L - PAD_R);
  const y = (v) =>
    PAD_T + (1 - (Math.log10(Math.max(v, lo)) - logLo) / (logHi - logLo)) * (H_EQ - PAD_T - 22);

  const line = (key) => curve.map((p, i) => `${i ? 'L' : 'M'} ${x(i).toFixed(1)} ${y(p[key]).toFixed(1)}`).join(' ');

  // Y gridlines on the round numbers that fall inside the plotted range.
  const ticks = [100_000, 250_000, 500_000, 1_000_000, 2_000_000, 3_000_000].filter(
    (t) => t >= lo * 0.95 && t <= hi * 1.05
  );

  // First point of each calendar year, for the x axis.
  const years = [];
  curve.forEach((p, i) => {
    const yr = p.d.slice(0, 4);
    if (!years.length || years[years.length - 1].yr !== yr) years.push({ yr, i });
  });

  // Contiguous runs where the shield is in cash.
  const bears = [];
  let open = null;
  curve.forEach((p, i) => {
    if (!p.b && open === null) open = i;
    if ((p.b || i === curve.length - 1) && open !== null) {
      bears.push([open, i]);
      open = null;
    }
  });

  // The curve is thinned for the SVG, so scale the underwater panel to the true
  // trough of the full daily series rather than the deepest sampled point.
  const ddMin = Math.min(ddFloor ?? 0, ...curve.map((p) => p.dd));
  const yDd = (v) => 4 + (v / ddMin) * (H_DD - 20);
  const ddArea =
    `M ${x(0)} ${yDd(0)} ` +
    curve.map((p, i) => `L ${x(i).toFixed(1)} ${yDd(p.dd).toFixed(1)}`).join(' ') +
    ` L ${x(curve.length - 1)} ${yDd(0)} Z`;

  return (
    <div className="chart">
      <div className="chart-legend">
        <span className="ck strat">Setup F — $100k start</span>
        <span className="ck bench">QQQ buy &amp; hold</span>
        <span className="ck bear">Macro shield in cash</span>
      </div>

      <svg viewBox={`0 0 ${W} ${H_EQ}`} className="chart-svg" role="img" aria-label="Equity curve, log scale">
        {bears.map(([a, b], i) => (
          <rect key={i} x={x(a)} y={PAD_T} width={Math.max(x(b) - x(a), 1)} height={H_EQ - PAD_T - 22} className="bearband" />
        ))}

        {ticks.map((t) => (
          <g key={t}>
            <line x1={PAD_L} x2={W - PAD_R} y1={y(t)} y2={y(t)} className="gridline" />
            <text x={PAD_L - 8} y={y(t) + 3.5} className="axlabel" textAnchor="end">
              {money(t)}
            </text>
          </g>
        ))}

        {years.map(({ yr, i }) => (
          <text key={yr} x={x(i)} y={H_EQ - 6} className="axlabel" textAnchor="middle">
            {yr}
          </text>
        ))}

        <path d={line('q')} className="cline bench" />
        <path d={line('e')} className="cline strat" />
      </svg>

      <svg viewBox={`0 0 ${W} ${H_DD}`} className="chart-svg dd" role="img" aria-label="Drawdown from peak">
        <path d={ddArea} className="ddarea" />
        <line x1={PAD_L} x2={W - PAD_R} y1={yDd(0)} y2={yDd(0)} className="gridline" />
        <text x={PAD_L - 8} y={yDd(ddMin) + 3.5} className="axlabel" textAnchor="end">
          −{Math.abs(ddMin).toFixed(1)}%
        </text>
        <text x={PAD_L - 8} y={yDd(0) + 3.5} className="axlabel" textAnchor="end">
          0%
        </text>
      </svg>
      <p className="chart-note">
        Log scale — equal vertical distance is equal percentage move. The underwater panel below is the same
        series measured from its own running peak.
      </p>
    </div>
  );
}
