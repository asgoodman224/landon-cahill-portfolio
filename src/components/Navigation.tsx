import { useEffect, useState } from 'react';
import { identity, navLinks, contact } from '../data/site';
import { useActiveSection, useEscape, useLockBody, useScrolled } from '../hooks';
import { Arrow } from './Primitives';

const SECTION_IDS = navLinks.map((l) => l.id);

export default function Navigation() {
  const scrolled = useScrolled(40);
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);

  useLockBody(open);
  useEscape(open, () => setOpen(false));

  // Close the drawer if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 940px)');
    const close = () => mq.matches && setOpen(false);
    mq.addEventListener('change', close);
    return () => mq.removeEventListener('change', close);
  }, []);

  return (
    <>
      <header className="nav" data-scrolled={scrolled || open}>
        <div className="shell nav__inner">
          <a className="nav__brand" href="#top" aria-label={`${identity.fullName} — home`}>
            <span className="mono-mark" aria-hidden="true">
              {identity.monogram}
            </span>
            <span>{identity.fullName}</span>
          </a>

          <nav className="nav__links" aria-label="Sections">
            {navLinks.map((link) => (
              <a
                key={link.id}
                className="nav__link"
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a className="btn btn--solid nav__cta" href="#contact">
            Let&rsquo;s Talk
            <Arrow />
          </a>

          <button
            className="nav__burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className="drawer" id="mobile-menu" data-open={open} aria-hidden={!open}>
        <nav aria-label="Mobile">
          <ul className="drawer__list">
            {navLinks.map((link, i) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                  <span className="meta">0{i + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="drawer__foot meta">
          <a
            className="ul"
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            tabIndex={open ? 0 : -1}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
