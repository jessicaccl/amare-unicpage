import { Reveal } from './Reveal';
import { Carousel } from './Carousel';
import { LEGACY, STORE_GALLERY } from '../data/content';

export function Legacy() {
  return (
    <section className="legacy" aria-labelledby="legacy-title">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">{LEGACY.eyebrow}</Reveal>
        <Reveal as="h2" delay={1} id="legacy-title">
          Fechamos a porta da loja em 2025, mas não a <em>história</em>.
        </Reveal>
        <Reveal delay={1} className="legacy__note">
          {LEGACY.note.map((p, i) => <p key={i}>{p}</p>)}
        </Reveal>
        <Reveal delay={2} className="legacy__sign">
          <span className="from">{LEGACY.signFrom}</span>
          <div className="names">{LEGACY.signNames}</div>
        </Reveal>

        <Reveal className="gallery">
          <p className="eyebrow">{STORE_GALLERY.eyebrow}</p>
          <Carousel photos={STORE_GALLERY.photos} label="Fotos do último dia da loja Amare" />
          <p className="gallery__caption">{STORE_GALLERY.caption}</p>
        </Reveal>
      </div>
    </section>
  );
}
