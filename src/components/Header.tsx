import { useScrolled } from '../hooks/useReveal';
import { IconSoundOn, IconSoundOff } from './Icons';

type HeaderProps = {
  playing: boolean;
  onToggleAudio: () => void;
  audioInvite: boolean;
};

export function Header({ playing, onToggleAudio, audioInvite }: HeaderProps) {
  const scrolled = useScrolled(60);
  return (
    <header className={`site-header${scrolled ? ' solid' : ''}`}>
      <a href="#top" className="brand" aria-label="Amare, página inicial">
        amare<small>est. 2015 · Teresópolis</small>
      </a>
      <div className="header-right">
        <button
          className={`header-audio${audioInvite && !playing ? ' audio-invite' : ''}`}
          onClick={onToggleAudio}
          aria-pressed={playing}
          aria-label={playing ? 'Desativar música ambiente' : 'Ativar música ambiente'}
        >
          <span className="ic" aria-hidden="true">{playing ? <IconSoundOn size={18} /> : <IconSoundOff size={18} />}</span>
          <span className="txt">{playing ? 'Som on' : 'Som'}</span>
        </button>
      </div>
    </header>
  );
}
