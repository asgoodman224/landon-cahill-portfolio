import { contact, contactSection, identity } from '../data/site';
import { MaskedLines, Reveal, SectionHeader } from './Primitives';

export default function Contact() {
  const heading = contactSection.heading.map((line, i) =>
    i === contactSection.heading.length - 1 ? (
      <span key={i}>
        people <span className="em">remember.</span>
      </span>
    ) : (
      line
    ),
  );

  return (
    <section className="on-ink pad-y" id="contact" aria-labelledby="contact-title">
      <div className="shell">
        <SectionHeader
          num="(05)"
          label="Contact"
          title={<span id="contact-title">Say hello.</span>}
        />

        <MaskedLines lines={heading} className="contact__head" as="h3" stagger={100} />
        <Reveal delay={140}>
          <p className="contact__blurb">{contactSection.blurb}</p>
        </Reveal>

        <Reveal className="contact__outro" delay={200}>
          <dl className="contact__details contact__details--row">
            <div className="contact__detail">
              <dt className="meta">LinkedIn</dt>
              <dd>
                <a className="ul" href={contact.linkedin} target="_blank" rel="noreferrer">
                  {contact.linkedinLabel}
                </a>
              </dd>
            </div>
            <div className="contact__detail">
              <dt className="meta">Based in</dt>
              <dd>{identity.location}</dd>
            </div>
            <div className="contact__detail">
              <dt className="meta">Currently</dt>
              <dd>{identity.availability}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
