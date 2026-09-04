import React from 'react';
import { CERTIFICATES, CERTIFICATES_NOTE } from '../data/content';
import { Section, Reveal } from '../components/ui';

export default function Certificates() {
  return (
    <Section
      id="certificates"
      num="13 — Credentials"
      title="Certificates, with their verification IDs"
      lede={CERTIFICATES_NOTE}
      source="Nine certificate documents · issuer, date and ID read off each scan"
    >
      <Reveal>
        <div className="certgrid">
          {CERTIFICATES.map((c) => (
            <figure className="cert" key={c.file}>
              <a
                className="cert-shot"
                href={`assets/certificates/${c.file}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`assets/certificates/${c.file}`}
                  alt={`${c.title} certificate issued by ${c.issuer}`}
                  loading="lazy"
                  decoding="async"
                  width="1080"
                  height="763"
                />
              </a>

              <figcaption className="cert-body">
                <div className="cert-title">{c.title}</div>
                <div className="cert-issuer">{c.issuer}</div>

                <div className="cert-meta">
                  <span>{c.date}</span>
                  {c.note && <span className="cert-dot">·</span>}
                  {c.note && <span>{c.note}</span>}
                </div>

                <div className="cert-id">
                  ID <span>{c.id}</span>
                  {c.verify && (
                    <>
                      {' '}
                      <a href={c.verify} target="_blank" rel="noreferrer">
                        verify →
                      </a>
                    </>
                  )}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
