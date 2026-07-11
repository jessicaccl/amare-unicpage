import { Reveal } from './Reveal';
import { SOCIAL } from '../data/content';
import { IconInstagram, IconTikTok, IconWhatsApp, IconMapPin } from './Icons';

export function Footer({ onContact }: { onContact: () => void }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__cta">
        <Reveal as="h2">Uma nova seleção, pronta para te <em>inspirar</em>.</Reveal>
        <Reveal as="p" delay={1}>Conheça de perto e encontre o que faz sentido pra você.</Reveal>
        <Reveal delay={1}>
          <button className="btn btn--ghost on-dark" onClick={onContact}><IconWhatsApp size={18} />Falar no WhatsApp</button>
        </Reveal>
      </div>

      <div className="footer__links">
        <div>
          <div className="footer__brand">amare</div>
          <a className="footer__loc" href={SOCIAL.maps} target="_blank" rel="noreferrer">
            <IconMapPin size={16} /> {SOCIAL.location}
          </a>
        </div>
        <nav className="footer__social" aria-label="Redes sociais">
          <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram da Amare"><IconInstagram size={20} /></a>
          <a href={SOCIAL.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok da Amare"><IconTikTok size={20} /></a>
          <a href={SOCIAL.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp da Amare"><IconWhatsApp size={20} /></a>
        </nav>
      </div>

      <div className="footer__legal">
        <span className="tag">Um legado em pausa, semeando o futuro.</span>
        © {year} Amare · Feito com afeto por Jéssica &amp; Raquel em Teresópolis.
      </div>
    </footer>
  );
}
