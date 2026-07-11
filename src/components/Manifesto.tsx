import { Reveal } from './Reveal';
import { MANIFESTO } from '../data/content';

export function Manifesto() {
  return (
    <section className="manifesto" aria-labelledby="about-title">
      <span className="seam" aria-hidden="true">
        <span className="seam-node" style={{ top: 0 }} />
        <span className="seam-node" style={{ top: '100%' }} />
      </span>
      <div className="wrap grid">
        <div>
          <Reveal as="p" className="eyebrow">{MANIFESTO.eyebrow}</Reveal>
          <Reveal as="p" delay={1} className="manifesto__lede" id="about-title">
            Desde 2015, criando <span className="accent">conexões reais</span> através da moda.
          </Reveal>
        </div>
        <Reveal delay={1} className="manifesto__body">
          {MANIFESTO.body.map((p, i) => <p key={i}>{p}</p>)}
          <div className="pillars">
            {MANIFESTO.pillars.map((p) => <span key={p}>{p}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
