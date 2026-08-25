import { contact, footer, identity } from '../data/site';
import { Arrow } from './Primitives';

export default function Footer() {
  const socials = contact.socials.filter((s) => s.href && !s.href.startsWith('['));
  const year = new Date().getFullYear();

  return (
    <footer className="on-ink">
      <div className="shell foot">
        <div className="foot__top">
          <div>
            <p className="foot__name">{identity.fullName}</p>
            <p className="foot__tag meta">{footer.tagline}</p>
          </div>
          <nav className="foot__links" aria-label="Elsewhere">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="foot__bottom meta">
          <span>
            © {year} {identity.fullName}
          </span>
          <span className="foot__sig">{footer.signature}</span>
          <a className="to-top" href="#top">
            <Arrow rotate={-90} />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
