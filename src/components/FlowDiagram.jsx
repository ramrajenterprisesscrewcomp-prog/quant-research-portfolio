import React from 'react';

/* Both live-execution routes, drawn as one figure.
   Colours come from CSS custom properties so the diagram tracks the theme.
   Fixed viewBox + horizontal scroll container keeps it legible on narrow screens. */

const W = 980;
const H = 340;

// One rounded node with a label and an optional second line.
function Node({ x, y, w, h, title, sub, accent, dashed }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="4"
        fill="var(--ink-3)"
        stroke={accent ? 'var(--brass)' : 'var(--line-2)'}
        strokeWidth="1"
        strokeDasharray={dashed ? '4 3' : undefined}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 5 : y + h / 2 + 4}
        textAnchor="middle"
        fill="var(--text)"
        fontSize="12.5"
        fontFamily="var(--sans)"
        fontWeight="600"
      >
        {title}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 13}
          textAnchor="middle"
          fill="var(--text-3)"
          fontSize="10"
          fontFamily="var(--mono)"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

// Horizontal arrow with an optional label sitting above it.
function Arrow({ x1, x2, y, label, dashed }) {
  return (
    <g>
      <line
        x1={x1}
        y1={y}
        x2={x2 - 7}
        y2={y}
        stroke="var(--line-2)"
        strokeWidth="1.4"
        strokeDasharray={dashed ? '4 3' : undefined}
      />
      <path d={`M ${x2 - 7} ${y - 4} L ${x2} ${y} L ${x2 - 7} ${y + 4} Z`} fill="var(--brass)" />
      {label && (
        <text
          x={(x1 + x2) / 2}
          y={y - 9}
          textAnchor="middle"
          fill="var(--text-3)"
          fontSize="9.5"
          fontFamily="var(--mono)"
          letterSpacing="0.06em"
        >
          {label}
        </text>
      )}
    </g>
  );
}

function LaneLabel({ y, n, text, tone }) {
  return (
    <text x="0" y={y} fill={tone} fontSize="10" fontFamily="var(--mono)" letterSpacing="0.12em">
      {n} · {text}
    </text>
  );
}

export default function FlowDiagram() {
  const boxH = 46;

  // Lane A — EA runs inside the terminal. Lane B — signal arrives over the network.
  const aY = 74;
  const bY = 212;

  return (
    <div className="diagramwrap">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        role="img"
        aria-label="Two live execution routes: an expert advisor running inside MetaTrader 5 on a VPS, and a TradingView alert delivered by webhook to a Flask receiver that places orders through the MetaTrader 5 Python API."
      >
        {/* ---------------------------------------------------------- lane A */}
        <LaneLabel y={38} n="PATH A" text="EXPERT ADVISOR — RUNNING" tone="var(--pos)" />

        <Node x={0} y={aY} w={150} h={boxH} title="Expert Advisor" sub=".mq5 → .ex5" accent />
        <Arrow x1={150} x2={240} y={aY + boxH / 2} label="on bar" />
        <Node x={240} y={aY} w={164} h={boxH} title="MetaTrader 5" sub="terminal on VPS" accent />
        <Arrow x1={404} x2={500} y={aY + boxH / 2} label="order_send" />
        <Node x={500} y={aY} w={130} h={boxH} title="Broker" sub="fill" />

        <text
          x={660}
          y={aY + 20}
          fill="var(--text-3)"
          fontSize="10.5"
          fontFamily="var(--sans)"
        >
          Signal and execution share
        </text>
        <text x={660} y={aY + 34} fill="var(--text-3)" fontSize="10.5" fontFamily="var(--sans)">
          one process — no network hop.
        </text>

        {/* divider */}
        <line x1="0" y1="152" x2={W} y2="152" stroke="var(--line)" strokeWidth="1" />

        {/* ---------------------------------------------------------- lane B */}
        <LaneLabel y={182} n="PATH B" text="WEBHOOK RECEIVER — ARCHITECTURE" tone="var(--text-3)" />

        <Node x={0} y={bY} w={150} h={boxH} title="TradingView" sub="Pine Script alert" dashed />
        <Arrow x1={150} x2={246} y={bY + boxH / 2} label="HTTPS POST" dashed />
        <Node x={246} y={bY} w={160} h={boxH} title="Flask receiver" sub="auth · sizing · risk" dashed />
        <Arrow x1={406} x2={510} y={bY + boxH / 2} label="MetaTrader5 py" dashed />
        <Node x={510} y={bY} w={164} h={boxH} title="MetaTrader 5" sub="same VPS terminal" dashed />
        <Arrow x1={674} x2={754} y={bY + boxH / 2} dashed />
        <Node x={754} y={bY} w={130} h={boxH} title="Broker" sub="fill" dashed />

        {/* reconciliation loop back from terminal to receiver */}
        <path
          d={`M ${592} ${bY + boxH} L ${592} ${bY + boxH + 26} L ${326} ${bY + boxH + 26} L ${326} ${bY + boxH + 7}`}
          fill="none"
          stroke="var(--line-2)"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        <path
          d={`M ${322} ${bY + boxH + 14} L ${326} ${bY + boxH + 6} L ${330} ${bY + boxH + 14} Z`}
          fill="var(--text-3)"
        />
        <text
          x={459}
          y={bY + boxH + 42}
          textAnchor="middle"
          fill="var(--text-3)"
          fontSize="9.5"
          fontFamily="var(--mono)"
          letterSpacing="0.06em"
        >
          position state read back — reconcile, never assume
        </text>
      </svg>
    </div>
  );
}
