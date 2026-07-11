import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Controla a música ambiente com fade suave de volume.
 * Uso: const { playing, toggle, audioProps } = useAmbientAudio(src, 0.45)
 */
export function useAmbientAudio(src: string, targetVolume = 0.45) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);
  const [playing, setPlaying] = useState(false);

  const fade = useCallback((to: number, done?: () => void) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (fadeRef.current) window.clearInterval(fadeRef.current);
    const step = (to - audio.volume) / 12;
    fadeRef.current = window.setInterval(() => {
      const v = audio.volume + step;
      if ((step >= 0 && v >= to) || (step < 0 && v <= to)) {
        audio.volume = Math.max(0, Math.min(1, to));
        if (fadeRef.current) window.clearInterval(fadeRef.current);
        done?.();
      } else {
        audio.volume = Math.max(0, Math.min(1, v));
      }
    }, 40);
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!playing) {
      audio.volume = 0;
      audio.play().catch(() => {/* autoplay bloqueado até o gesto (ok) */});
      fade(targetVolume);
      setPlaying(true);
    } else {
      fade(0, () => audio.pause());
      setPlaying(false);
    }
  }, [playing, fade, targetVolume]);

  useEffect(() => () => { if (fadeRef.current) window.clearInterval(fadeRef.current); }, []);

  const audioProps = { ref: audioRef, src, loop: true, preload: 'none' as const };
  return { playing, toggle, audioProps };
}
