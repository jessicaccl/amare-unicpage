import { Modal } from './Modal';
import { CONTACTS } from '../data/content';
import { IconWhatsApp } from './Icons';

export function ContactModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal onClose={onClose} labelledBy="contact-title">
      <p className="eyebrow">Atendimento Amare</p>
      <h3 id="contact-title">Com quem você quer falar?</h3>
      <p>Atendimento humano, de irmã pra você.</p>
      <div className="modal__opts">
        {CONTACTS.map((c) => (
          <a
            key={c.name}
            className="btn btn--wine"
            target="_blank"
            rel="noreferrer"
            href={`https://wa.me/${c.whatsapp}?text=${encodeURIComponent(
              `Olá, ${c.name}! Vim pelo site da Amare e gostaria de um atendimento.`,
            )}`}
          >
            <IconWhatsApp size={18} />Falar com {c.name}
          </a>
        ))}
      </div>
    </Modal>
  );
}
