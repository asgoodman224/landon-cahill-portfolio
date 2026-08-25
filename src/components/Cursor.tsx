import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../hooks';

/**
 * A small blended dot that grows over interactive elements.
 * Fine pointers only — hidden by CSS on touch and under reduced motion.
 */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const el = ref.current;
    if (!el) return;
    let frame = 0;

    const move = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--cx', `${e.clientX}px`);
        el.style.setProperty('--cy', `${e.clientY}px`);

        const target = e.target as HTMLElement | null;
        const hot = Boolean(
          target?.closest('a, button, input, textarea, [data-cursor="hot"]'),
        );
        el.dataset.hot = String(hot);
      });
    };

    const leave = () => (el.style.opacity = '0');
    const enter = () => (el.style.opacity = '1');

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
      cancelAnimationFrame(frame);
    };
  }, [reduced]);

  if (reduced) return null;
  return <div className="cursor" ref={ref} aria-hidden="true" />;
}
