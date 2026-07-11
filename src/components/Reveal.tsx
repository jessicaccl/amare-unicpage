import { createElement, type ElementType, type ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

type RevealProps = {
  as?: ElementType;
  delay?: 1 | 2 | 3;
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
};

/** Aplica a classe .reveal (e o observer) diretamente no elemento renderizado. */
export function Reveal({ as = 'div', delay, className, children, ...rest }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  const cls = ['reveal', delay ? `d${delay}` : '', className].filter(Boolean).join(' ');
  return createElement(as, { ref, className: cls, ...rest }, children);
}
