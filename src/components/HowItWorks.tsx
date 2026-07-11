import { Reveal } from './Reveal';
import { STEPS } from '../data/content';
import { STEP_ICONS } from './Icons';

export function HowItWorks() {
  return (
    <section className="how" aria-labelledby="how-title">
      <span className="seam" aria-hidden="true"><span className="seam-node" style={{ top: 0 }} /></span>
      <div className="wrap">
        <div className="section-head">
          <div>
            <Reveal as="p" className="eyebrow">A experiência</Reveal>
            <Reveal as="h2" delay={1} id="how-title">Como a gente <em>cuida</em> de você</Reveal>
          </div>
          <Reveal as="p" delay={1}>Do primeiro "oi" à peça na sua porta, tudo com toque humano.</Reveal>
        </div>

        <div className="how__grid">
          {STEPS.map((step, i) => {
            const Icon = STEP_ICONS[step.icon];
            return (
              <Reveal key={step.number} delay={(i || undefined) as 1 | 2 | 3 | undefined} className="how__card">
                <span className="how__ic"><Icon size={28} /></span>
                <span className="how__num">{step.number}</span>
                <h3>{step.title}</h3>
                {step.text && <p>{step.text}</p>}
                {step.list && (
                  <ul>
                    {step.list.map((li) => (
                      <li key={li.label}><strong>{li.label}</strong> {li.value}</li>
                    ))}
                  </ul>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
