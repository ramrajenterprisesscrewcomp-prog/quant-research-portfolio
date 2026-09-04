import React, { useEffect, useRef, useState } from 'react';

/* Fades a block in the first time it enters the viewport. */
export function Reveal({ children, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: '-40px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);

  return (
    <Tag ref={ref} className={`reveal${seen ? ' in' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}

export function Section({ id, num, title, lede, children, source }) {
  return (
    <section className="section" id={id}>
      <div className="wrap">
        <Reveal as="header" className="sec-head">
          <span className="sec-num">{num}</span>
          <h2 className="sec-title">{title}</h2>
          {lede && <p className="sec-lede">{lede}</p>}
        </Reveal>
        {children}
        {source && (
          <p className="source">
            Source · <b>{source}</b>
          </p>
        )}
      </div>
    </section>
  );
}

export function Stat({ value, label, note, tone }) {
  return (
    <div className="stat">
      <div className={`stat-v${tone ? ` ${tone}` : ''}`}>{value}</div>
      <div className="stat-k">{label}</div>
      {note && <div className="stat-note">{note}</div>}
    </div>
  );
}

/* A right-aligned number with a proportional bar behind it. */
export function BarCell({ value, max, display, tone }) {
  const pct = max > 0 ? Math.min(100, (Math.abs(value) / max) * 100) : 0;
  return (
    <div className="barcell">
      <span className={tone}>{display}</span>
      <span className="bartrack">
        <span className={`barfill${tone ? ` ${tone}` : ''}`} style={{ width: `${pct}%` }} />
      </span>
    </div>
  );
}

export const num = (n) => n.toLocaleString('en-US');
