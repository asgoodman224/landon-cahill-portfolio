import { useEffect, useRef, useState } from 'react';
import { identity } from '../data/site';
import { usePrefersReducedMotion } from '../hooks';
import { Arrow } from './Primitives';

export default function Hero() {
  const [entered, setEntered] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  // Trigger the entrance on first paint rather than on scroll.
  useEffect(() => {
    const t = window.setTimeout(() => setEntered(true), 120);
    return () => window.clearTimeout(t);
  }, []);

  // Slow parallax drift on the ambient glow only — nothing else moves.
  useEffect(() => {
    if (reduced) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = glowRef.current;
        if (el) el.style.transform = `translate3d(0, ${window.scrollY * 0.22}px, 0)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [reduced]);

  // The positioning line, with its final word set in serif italic.
  const words = identity.positioning.split(' ');
  const lead = words.slice(0, -1).join(' ');
  const last = words[words.length - 1];

  return (
    <section className={`hero on-ink ${entered ? 'is-in' : ''}`} id="top">
      <div className="hero__grid" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="hero__glow" ref={glowRef} aria-hidden="true" />

      <div className="shell hero__inner">
        <p className="meta hero__eyebrow line">
          <span style={{ ['--d' as string]: '80ms' }}>
            <span className="dot" aria-hidden="true" />
            {identity.availability} &nbsp;/&nbsp; {identity.location}
          </span>
        </p>

        <h1 className="hero__name">
          <span className="line">
            <span style={{ ['--d' as string]: '160ms' }}>{identity.firstName}</span>
          </span>
          <span className="line indent">
            <span style={{ ['--d' as string]: '270ms' }}>{identity.lastName}</span>
          </span>
        </h1>

        <div className="hero__rule" aria-hidden="true" />

        <div className="hero__bottom">
          <div>
            <h2 className="hero__statement">
              <span className="line">
                <span style={{ ['--d' as string]: '520ms' }}>
                  {lead} <em>{last}</em>
                </span>
              </span>
            </h2>
            <ul className="hero__disciplines meta">
              {identity.disciplines.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="hero__intro">{identity.intro}</p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="#work">
                Explore My Work
                <Arrow />
              </a>
              <a className="btn btn--ghost" href="#contact">
                Let&rsquo;s Connect
                <Arrow />
              </a>
            </div>
          </div>
        </div>

        <div className="hero__foot meta">
          <a className="scroll-cue" href="#work" aria-label="Scroll to selected work">
            <span className="scroll-cue__track" aria-hidden="true" />
            <span>Scroll</span>
          </a>
          <span aria-hidden="true">(2026)</span>
        </div>
      </div>
    </section>
  );
}
