import { useState } from 'react';
import { Reveal } from './Reveal';
import { Modal } from './Modal';
import { LOOKS, type Look } from '../data/content';

export function Editorial({ onContact }: { onContact: () => void }) {
  const [active, setActive] = useState<Look | null>(null);

  return (
    <section className="editorial" id="colecao" aria-labelledby="collection-title">
      <span className="seam" aria-hidden="true"><span className="seam-node" style={{ top: 0 }} /></span>
      <div className="wrap">
        <div className="section-head">
          <div>
            <Reveal as="p" className="eyebrow">Editorial</Reveal>
            <Reveal as="h2" delay={1} id="collection-title">Editorial <em>Essência</em></Reveal>
          </div>
          <Reveal as="p" delay={1}>Retratos de afeto e estilo que atravessam gerações.</Reveal>
        </div>

        <div className="looks">
          {LOOKS.map((look, i) => (
            <Reveal as="figure" key={look.number} delay={(i || undefined) as 1 | 2 | undefined} className="look">
              <button className="look__hit" onClick={() => setActive(look)} aria-label={`Ampliar look ${look.title}`}>
                <img src={look.image} alt={look.alt} loading="lazy" />
              </button>
              <figcaption className="look__cap">
                <span><span className="n">{look.number}</span> <span className="t">{look.title}</span></span>
                <span className="view">Ampliar</span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <Reveal className="editorial__cta">
          <button className="btn" onClick={onContact}>Inspire-se e fale conosco</button>
        </Reveal>
      </div>

      {active && (
        <Modal onClose={() => setActive(null)} label={active.title} className="lightbox" bare>
          <img src={active.image} alt={active.alt} />
        </Modal>
      )}
    </section>
  );
}
