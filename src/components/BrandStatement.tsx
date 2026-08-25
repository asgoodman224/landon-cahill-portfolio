import { brandStatement, identity } from '../data/site';
import { MaskedLines } from './Primitives';

/** The gold marquee strip that separates the hero from the work index. */
export function Strip() {
  const words = [...identity.disciplines, 'Consumer Behaviour', 'Copy', 'Art Direction'];
  const group = (
    <span className="strip__group" aria-hidden="true">
      {words.map((w, i) => (
        <span key={i}>{w}</span>
      ))}
    </span>
  );
  return (
    <div className="strip">
      {/* Duplicated once so the loop is seamless; hidden from screen readers. */}
      <div className="strip__track">
        {group}
        {group}
      </div>
    </div>
  );
}

export default function BrandStatement() {
  const lines = [
    ...brandStatement.lines,
    <span className="em" key="em">
      {brandStatement.emphasis}
    </span>,
  ];

  return (
    <section className="on-ink statement" aria-label="Brand statement">
      <div className="shell">
        <blockquote style={{ margin: 0 }}>
          <MaskedLines lines={lines} className="statement__q" as="p" stagger={110} />
        </blockquote>
        <p className="meta statement__attr">{brandStatement.attribution}</p>
      </div>
    </section>
  );
}
