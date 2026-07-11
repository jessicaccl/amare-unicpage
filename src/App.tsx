import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Editorial } from './components/Editorial';
import { Legacy } from './components/Legacy';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { AccessibilityDock } from './components/AccessibilityDock';
import { ContactModal } from './components/ContactModal';

import { useAmbientAudio } from './hooks/useAmbientAudio';
import ambientMusic from './assets/ambient-music.mp3';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [audioInvite, setAudioInvite] = useState(true);
  const { playing, toggle, audioProps } = useAmbientAudio(ambientMusic, 0.45);

  const openContact = () => setContactOpen(true);

  useEffect(() => {
    const t = window.setTimeout(() => setAudioInvite(false), 9000);
    return () => window.clearTimeout(t);
  }, []);

  const onToggleAudio = () => { setAudioInvite(false); toggle(); };

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      <Header playing={playing} onToggleAudio={onToggleAudio} audioInvite={audioInvite} />

      <main id="conteudo">
        <span id="top" />
        <Hero onContact={openContact} />
        <Manifesto />
        <Editorial onContact={openContact} />
        <Legacy />
        <HowItWorks />
        <Testimonials />
      </main>

      <Footer onContact={openContact} />

      <AccessibilityDock />

      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio {...audioProps} />

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </>
  );
}
