import React from 'react';

/* A downloadable primary document, with the figures printed on its own cover. */
export default function Doc({ doc }) {
  return (
    <a className="doc" href={doc.href} target="_blank" rel="noreferrer">
      <div className="doc-top">
        <span className="doc-title">{doc.title}</span>
        <span className="doc-get">Open PDF →</span>
      </div>
      <div className="doc-meta">{doc.meta}</div>

      {doc.figures && (
        <div className="doc-figs">
          {doc.figures.map(([k, v]) => (
            <div key={k}>
              <div className="doc-fig-v">{v}</div>
              <div className="doc-fig-k">{k}</div>
            </div>
          ))}
        </div>
      )}

      {doc.note && <p className="doc-note">{doc.note}</p>}
    </a>
  );
}
