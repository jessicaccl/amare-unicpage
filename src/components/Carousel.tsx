import { useCallback, useEffect, useRef, useState } from 'react';
import type { GalleryPhoto } from '../data/content';

type CarouselProps = {
  photos: GalleryPhoto[];
  label?: string;
};

/** Carrossel acessível: setas, indicadores, teclado (←/→) e gesto de arrastar. */
export function Carousel({ photos, label = 'Galeria de fotos' }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const n = photos.length;
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);

  const go = useCallback((to: number) => setIndex(((to % n) + n) % n), [n]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
  };

  const onPointerDown = (e: React.PointerEvent) => { startX.current = e.clientX; deltaX.current = 0; };
  const onPointerMove = (e: React.PointerEvent) => { if (startX.current !== null) deltaX.current = e.clientX - startX.current; };
  const onPointerUp = () => {
    if (startX.current === null) return;
    if (Math.abs(deltaX.current) > 45) { deltaX.current < 0 ? next() : prev(); }
    startX.current = null;
  };

  // suave auto-avanço, pausado ao interagir e desligado em prefers-reduced-motion
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || n <= 1) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = window.setTimeout(next, 7000);
    return () => window.clearTimeout(t);
  }, [index, paused, next, n]);

  return (
    <div
      className="gallery__frame"
      role="group"
      aria-roledescription="carrossel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="gallery__viewport"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { startX.current = null; }}
      >
        <div className="gallery__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {photos.map((p, i) => (
            <figure
              className="gallery__slide"
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${n}`}
              aria-hidden={i !== index}
            >
              <img src={p.image} alt={p.alt} draggable={false} loading={i === 0 ? 'eager' : 'lazy'} />
            </figure>
          ))}
        </div>
      </div>

      <button className="gallery__btn gallery__btn--prev" onClick={prev} aria-label="Foto anterior">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button className="gallery__btn gallery__btn--next" onClick={next} aria-label="Próxima foto">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
      </button>

      <div className="gallery__dots" role="tablist" aria-label="Escolher foto">
        {photos.map((_, i) => (
          <button
            key={i}
            className={`gallery__dot${i === index ? ' is-active' : ''}`}
            aria-label={`Ir para a foto ${i + 1}`}
            aria-current={i === index}
            onClick={() => go(i)}
          />
        ))}
      </div>

      <p className="visually-hidden" aria-live="polite">Foto {index + 1} de {n}</p>
    </div>
  );
}
