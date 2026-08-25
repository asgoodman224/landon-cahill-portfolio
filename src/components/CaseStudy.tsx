import { Fragment, useEffect, useRef } from 'react';
import type { Project } from '../data/site';
import { useEscape, useLockBody } from '../hooks';
import { Arrow } from './Primitives';

const CHAPTERS = [
  { key: 'challenge', num: '01', label: 'The Challenge' },
  { key: 'insight', num: '02', label: 'The Insight' },
  { key: 'strategy', num: '03', label: 'The Strategy' },
  { key: 'execution', num: '04', label: 'The Execution' },
  { key: 'results', num: '05', label: 'The Results' },
] as const;

export default function CaseStudy({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useLockBody(true);
  useEscape(true, onClose);

  // Send focus into the overlay, and return it to the page on close.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => previous?.focus?.();
  }, []);

  // Keep Tab inside the overlay while it is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div
      className="overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cs-title"
      ref={panelRef}
    >
      <div className="overlay__bar">
        <div className="shell overlay__bar-inner">
          <span className="meta">
            Case Study &nbsp;/&nbsp; {project.index}
          </span>
          <button className="overlay__close" onClick={onClose} ref={closeRef}>
            Close
            <span aria-hidden="true">✕</span>
          </button>
        </div>
      </div>

      <div className="shell">
        <header className="overlay__hero">
          <p className="overlay__num" aria-hidden="true">
            {project.index}
          </p>
          <h2 className="overlay__title" id="cs-title">
            {project.title}
          </h2>

          <dl className="overlay__facts">
            <div>
              <dt className="meta">Category</dt>
              <dd className="serif">{project.category}</dd>
            </div>
            <div>
              <dt className="meta">Year</dt>
              <dd className="serif">{project.year}</dd>
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <dt className="meta">Skills Applied</dt>
              <dd className="tags">
                {project.skills.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </header>

        {CHAPTERS.map((chapter) => {
          const body = project.caseStudy[chapter.key];

          /* A chapter still holding a bracketed note-to-self is skipped entirely.
             Visitors should never see the editing scaffolding, and an omitted
             chapter is better than an invented one. Fill the text in
             src/data/site.ts and the chapter reappears on its own. */
          if (body.trim().startsWith('[')) return null;

          return (
            <Fragment key={chapter.key}>
              <section
                className={`chapter ${chapter.key === 'results' ? 'chapter--result' : ''}`}
              >
                <h3 className="meta chapter__label">
                  <span>{chapter.num}</span>
                  <span>{chapter.label}</span>
                </h3>
                <p className="chapter__body">{body}</p>
              </section>

              {/* The finished pieces sit directly under the execution they describe. */}
              {chapter.key === 'execution' && project.gallery?.length ? (
                <section className="chapter">
                  <h3 className="meta chapter__label">
                    <span aria-hidden="true">—</span>
                    <span>The Pieces</span>
                  </h3>
                  <ul className="cs-gallery" role="list">
                    {project.gallery.map((piece) => (
                      <li key={piece.src}>
                        <figure className="cs-gallery__figure">
                          <span className="cs-gallery__plate">
                            <img src={piece.src} alt={piece.alt} loading="lazy" />
                          </span>
                          <figcaption className="meta">{piece.caption}</figcaption>
                        </figure>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </Fragment>
          );
        })}

        <div className="overlay__foot">
          {project.links?.length ? (
            <div className="overlay__links">
              {project.links.map((link, i) => (
                <a
                  className={`btn ${i === 0 ? 'btn--solid' : 'btn--ghost'}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  key={link.href}
                >
                  {link.label}
                  <Arrow rotate={-45} />
                </a>
              ))}
            </div>
          ) : null}
          <button className="btn btn--ghost" onClick={onClose}>
            <Arrow rotate={180} />
            Back to all work
          </button>
        </div>
      </div>
    </div>
  );
}
