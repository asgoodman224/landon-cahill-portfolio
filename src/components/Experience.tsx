import { useState } from 'react';
import { experience, type ExperienceItem } from '../data/site';
import { Reveal, SectionHeader } from './Primitives';

const FILTERS = ['All', 'Leadership', 'Experience', 'Education'] as const;
type Filter = (typeof FILTERS)[number];

export default function Experience() {
  const [filter, setFilter] = useState<Filter>('All');
  const visible: ExperienceItem[] =
    filter === 'All' ? experience : experience.filter((e) => e.kind === filter);

  return (
    <section className="on-paper pad-y" id="experience" aria-labelledby="exp-title">
      <div className="shell">
        <SectionHeader
          num="(03)"
          label="Experience"
          title={<span id="exp-title">Where the work has happened so far.</span>}
        />

        <Reveal>
          <div className="filters" role="group" aria-label="Filter experience">
            {FILTERS.map((f) => (
              <button
                key={f}
                className="filter"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <ol className="tl" role="list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {visible.map((item, i) => (
            <Reveal as="li" className="tl__item" key={`${item.org}-${item.role}`} delay={i * 70}>
              <div className="tl__aside">
                <span className="tl__period">{item.period}</span>
                <span className="tl__kind" data-kind={item.kind}>
                  {item.kind}
                </span>
              </div>
              <div>
                <h3 className="tl__role">{item.role}</h3>
                <p className="tl__org">
                  {item.org}
                  {item.location && <span style={{ color: 'var(--faint)' }}> — {item.location}</span>}
                </p>
                <ul className="tl__points">
                  {item.points.map((p) => (
                    <li key={p}>
                      <span aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
