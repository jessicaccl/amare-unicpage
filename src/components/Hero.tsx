import { Reveal } from './Reveal';
import { HERO } from '../data/content';
import { IconWhatsApp } from './Icons';
import heroImg from '../assets/hero.jpeg';

export function Hero({ onContact }: { onContact: () => void }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <img
          className="kenburns"
          src={heroImg}
          alt="Retrato editorial Amare: mulher em peça atemporal, luz suave e afetiva."
        />
      </div>
      <div className="hero__inner">
        <Reveal as="p" className="eyebrow">{HERO.eyebrow}</Reveal>
        <Reveal as="h1" delay={1} id="hero-title">
          Vista a sua <em>história</em>
        </Reveal>
        <Reveal as="p" delay={2} className="hero__sub">{HERO.subtitle}</Reveal>
        <Reveal delay={3} className="hero__cta">
          <button className="btn btn--wine" onClick={onContact}><IconWhatsApp size={18} />Falar no WhatsApp</button>
          <a className="link-underline" href="#colecao" style={{ color: '#F3E7E2' }}>Ver o editorial</a>
        </Reveal>
      </div>
    </section>
  );
}
