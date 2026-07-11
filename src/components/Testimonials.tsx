import { Reveal } from './Reveal';
import { TESTIMONIALS } from '../data/content';

function initials(name: string) {
  return name.split(' ').map((s) => s[0]).join('').slice(0, 2);
}

export function Testimonials() {
  return (
    <section className="voices" aria-labelledby="voices-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <Reveal as="p" className="eyebrow" style={{ justifyContent: 'center' }}>A voz de quem veste</Reveal>
            <Reveal as="h2" delay={1} id="voices-title">Quem passou por aqui, <em>lembra</em></Reveal>
          </div>
        </div>

        <div className="voices__grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="article" key={t.name} delay={(i || undefined) as 1 | 2 | undefined} className="voice">
              <span className="voice__mark" aria-hidden="true">&ldquo;</span>
              <p className="voice__quote">{t.text}</p>
              <div className="voice__who">
                {/* Para exibir a foto, preencha `avatar` em content.ts com a URL da imagem. */}
                {t.avatar ? (
                  <img className="voice__avatar" src={t.avatar} alt={`Foto de ${t.name}`} loading="lazy" />
                ) : (
                  <span className="voice__avatar"><span aria-hidden="true">{initials(t.name)}</span></span>
                )}
                <div>
                  <div className="voice__name">{t.name}</div>
                  <div className="voice__handle">{t.handle}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
