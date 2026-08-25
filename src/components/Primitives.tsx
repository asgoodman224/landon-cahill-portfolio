import type { ReactNode, ElementType } from 'react';
import { useInView } from '../hooks';

/* -------------------------------------------------------------------------
 * Reveal — fades + lifts its children in as they enter the viewport.
 * ---------------------------------------------------------------------- */
export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`.trim()}
      style={{ ['--d' as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* -------------------------------------------------------------------------
 * MaskedLines — headline lines that slide up from behind a mask.
 * Each string is one visual line, so line breaks stay art-directed.
 * ---------------------------------------------------------------------- */
export function MaskedLines({
  lines,
  className = '',
  stagger = 90,
  startDelay = 0,
  as: Tag = 'h2',
}: {
  lines: ReactNode[];
  className?: string;
  stagger?: number;
  startDelay?: number;
  as?: ElementType;
}) {
  const { ref, inView } = useInView<HTMLHeadingElement>(0.25);
  return (
    <Tag ref={ref} className={`${inView ? 'is-in' : ''} ${className}`.trim()}>
      {lines.map((line, i) => (
        <span className="line" key={i}>
          <span style={{ ['--d' as string]: `${startDelay + i * stagger}ms` }}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

/* -------------------------------------------------------------------------
 * SectionHeader — the mono label + rule that opens every section.
 * ---------------------------------------------------------------------- */
export function SectionHeader({
  num,
  label,
  title,
  note,
}: {
  num: string;
  label: string;
  title: ReactNode;
  note?: string;
}) {
  return (
    <Reveal className="sec-head">
      <p className="meta sec-head__label">
        <span className="sec-head__num">{num}</span>
        <span>{label}</span>
      </p>
      <div>
        <h2 className="sec-head__title">{title}</h2>
        {note && <p className="sec-head__note">{note}</p>}
      </div>
    </Reveal>
  );
}

/* -------------------------------------------------------------------------
 * Arrow — the one icon used across the site.
 * ---------------------------------------------------------------------- */
export function Arrow({ rotate = 0 }: { rotate?: number }) {
  return (
    <svg
      className="btn__arrow"
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      aria-hidden="true"
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      <path d="M0 5h12M8.5 1L12.5 5L8.5 9" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
