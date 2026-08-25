import { useRef, useState } from 'react';
import { projects, type Project } from '../data/site';
import { Arrow, Reveal, SectionHeader } from './Primitives';
import CaseStudy from './CaseStudy';

/** Fallback visual when a project has no image yet — typographic, not a grey box. */
function Panel({ project }: { project: Project }) {
  return (
    <div className="panel" aria-hidden="true">
      <span className="panel__mark">{project.index}</span>
      <span className="panel__note">{project.category}</span>
    </div>
  );
}

export default function SelectedWork() {
  const [openId, setOpenId] = useState<string | null>(null);
  const peekRef = useRef<HTMLDivElement>(null);
  const [peek, setPeek] = useState<Project | null>(null);

  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.id !== featured.id);
  const open = projects.find((p) => p.id === openId) ?? null;

  /** Move the floating preview with the cursor, offset so it never sits under it. */
  const track = (e: React.MouseEvent) => {
    const el = peekRef.current;
    if (!el) return;
    el.style.setProperty('--x', `${e.clientX + 28}px`);
    el.style.setProperty('--y', `${e.clientY - 170}px`);
  };

  return (
    <section className="on-paper pad-y" id="work" aria-labelledby="work-title">
      <div className="shell">
        <SectionHeader
          num="(01)"
          label="Selected Work"
          title={
            <span id="work-title">
              Campaigns, brands and the <span className="serif-em">thinking</span> behind them.
            </span>
          }
          note="Six projects spanning brand strategy, social, partnerships, print design, branding and copy. Open any one for the full case study."
        />

        {/* ---- Featured project: full-bleed composition, not a card ---- */}
        <Reveal className="work__feature">
          <button
            className={`work__feature-media ${
              featured.imageFit === 'contain' ? 'work__feature-media--mark' : ''
            }`}
            onClick={() => setOpenId(featured.id)}
            aria-label={`Open case study: ${featured.title}`}
            data-cursor="hot"
          >
            {featured.image ? (
              <img src={featured.image} alt={featured.imageAlt ?? featured.title} />
            ) : (
              <Panel project={featured} />
            )}
          </button>

          <div className="work__feature-body">
            <span className="badge">
              {featured.index} &nbsp;·&nbsp; Featured
            </span>
            <h3>{featured.title}</h3>
            <p>{featured.blurb}</p>
            <div className="work__feature-actions">
              <button
                className="btn btn--ghost"
                onClick={() => setOpenId(featured.id)}
                data-cursor="hot"
              >
                View Case Study
                <Arrow />
              </button>
              <span className="meta" style={{ color: 'var(--faint)' }}>
                {featured.category} — {featured.year}
              </span>
            </div>
          </div>
        </Reveal>

        {/* ---- The index: rows with a cursor-tracked preview ---- */}
        <Reveal>
          <ul className="index" role="list">
            {rest.map((p) => (
              <li key={p.id}>
                <button
                  className="row"
                  onClick={() => setOpenId(p.id)}
                  onMouseEnter={() => setPeek(p)}
                  onMouseLeave={() => setPeek(null)}
                  onMouseMove={track}
                  aria-label={`Open case study: ${p.title}`}
                >
                  <span className="row__inner">
                    <span className="row__num">{p.index}</span>
                    <span>
                      <span className="row__title">{p.title}</span>
                      <span className="row__cat">{p.category}</span>
                      <span className="row__skills">
                        {p.skills.map((s) => (
                          <span key={s}>{s}</span>
                        ))}
                      </span>
                    </span>
                    <span className="row__meta">
                      <span>{p.year}</span>
                      <span className="row__cta">
                        View <Arrow />
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Floating hover preview (desktop, fine pointers only) */}
      <div
        className={`peek ${peek?.imageFit === 'contain' ? 'peek--mark' : ''}`}
        ref={peekRef}
        data-visible={Boolean(peek)}
        aria-hidden="true"
      >
        {peek &&
          (peek.image ? (
            <img src={peek.image} alt="" />
          ) : (
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Panel project={peek} />
            </div>
          ))}
      </div>

      {open && <CaseStudy project={open} onClose={() => setOpenId(null)} />}
    </section>
  );
}
