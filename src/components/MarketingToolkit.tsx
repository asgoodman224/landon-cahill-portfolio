import { certifications, toolkit } from '../data/site';
import { Reveal, SectionHeader } from './Primitives';

export default function MarketingToolkit() {
  return (
    <section className="on-paper pad-y" id="toolkit" aria-labelledby="kit-title">
      <div className="shell">
        <SectionHeader
          num="(04)"
          label="The Marketing Toolkit"
          title={
            <span id="kit-title">
              What I bring to a <span className="serif-em">brief</span>.
            </span>
          }
          note="Grouped by what they are actually for, rather than ranked by a number nobody can verify."
        />

        <div className="kit">
          {toolkit.map((group, i) => (
            <Reveal className="kit__group" key={group.id} delay={i * 70}>
              <div>
                <div className="kit__label">
                  <span className="kit__num">0{i + 1}</span>
                  <h3 className="kit__name">{group.label}</h3>
                </div>
                <p className="kit__caption">{group.caption}</p>
              </div>
              <ul className="kit__items">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {certifications.length > 0 && (
          <Reveal>
            <ul className="certs meta">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
