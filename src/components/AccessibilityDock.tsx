import { useEffect, useState } from 'react';

/** Controle de tamanho de texto (ajusta a variável CSS --fs). */
export function AccessibilityDock() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    document.documentElement.style.setProperty('--fs', String(scale));
  }, [scale]);

  const dec = () => setScale((s) => Math.max(0.85, Math.round((s - 0.1) * 100) / 100));
  const inc = () => setScale((s) => Math.min(1.5, Math.round((s + 0.1) * 100) / 100));

  return (
    <div className="dock">
      <div className="dock__group" role="group" aria-label="Tamanho do texto">
        <button className="dock__btn" onClick={dec} aria-label="Diminuir texto">A−</button>
        <span className="dock__label">Texto</span>
        <button className="dock__btn" onClick={inc} aria-label="Aumentar texto">A+</button>
      </div>
    </div>
  );
}
