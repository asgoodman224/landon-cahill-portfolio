import { about, identity } from '../data/site';
import { MaskedLines, Reveal, SectionHeader } from './Primitives';

export default function About() {
  // Set the final word of the heading in serif italic for emphasis.
  const heading = about.heading.map((line, i) =>
    i === about.heading.length - 1 ? <span className="accent" key={i}>{line}</span> : line,
  );

  return (
    <section className="on-paper pad-y" id="about" aria-labelledby="about-title">
      <div className="shell">
        <SectionHeader
          num="(02)"
          label="About"
          title={<span id="about-title">The person behind the work.</span>}
        />

        <div className="about__grid">
          <Reveal className="about__media">
            <figure className="about__figure">
              <div className="about__frame">
                {about.photo ? (
                  <img src={about.photo} alt={about.photoAlt} />
                ) : (
                  /* PHOTO PLACEHOLDER — set `photo` in src/data/site.ts to replace. */
                  <div className="panel">
                    <span className="panel__mark">{identity.monogram}</span>
                    <span className="panel__note">Add photo → src/data/site.ts</span>
                  </div>
                )}
              </div>
              <figcaption className="about__caption meta">
                <span>{about.photoCaption}</span>
                <span aria-hidden="true">↗</span>
              </figcaption>
            </figure>

            {/* ---- SUPPORTING SHOTS — edit in src/data/site.ts → about.gallery ---- */}
            {about.gallery.length > 0 && (
              <ul className="about__gallery">
                {about.gallery.map((shot) => (
                  <li key={shot.src}>
                    <figure className="about__figure">
                      <div className="about__frame about__frame--sm">
                        <img src={shot.src} alt={shot.alt} loading="lazy" />
                      </div>
                      {shot.caption && (
                        <figcaption className="about__caption meta">
                          <span>{shot.caption}</span>
                        </figcaption>
                      )}
                    </figure>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>

          <div>
            <MaskedLines lines={heading} className="about__heading" as="h3" />

            {/* ---- EDIT THIS COPY IN src/data/site.ts → about.paragraphs ---- */}
            <Reveal className="about__body" delay={120}>
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
