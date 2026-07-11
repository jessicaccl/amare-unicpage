import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 24): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
});

export const IconWhatsApp = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20.5 11.6a8.4 8.4 0 0 1-11.9 7.6l-4 1.2a.6.6 0 0 1-.8-.8l1.2-4A8.4 8.4 0 1 1 20.5 11.6z" /></svg>
);

export const IconShip = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} strokeWidth={1.3} {...p}><rect x="1" y="6" width="15" height="11" rx="1" /><path d="M16 9h4l3 3v5h-7" /><circle cx="6" cy="18" r="2" /><circle cx="19" cy="18" r="2" /></svg>
);

export const IconCard = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} strokeWidth={1.3} {...p}><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
);

export const IconUser = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} strokeWidth={1.3} {...p}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
);

export const IconInstagram = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
);

export const IconTikTok = ({ size = 24, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable={false} {...p}><path d="M16 3a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.7V15a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.1a3 3 0 1 0 2 2.8V3h3z" /></svg>
);

export const IconMapPin = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);

export const IconClose = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} strokeWidth={1.8} {...p}><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>
);

export const IconSoundOn = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} strokeWidth={1.6} {...p}><path d="M11 5 6 9H2v6h4l5 4V5z" /><path d="M15.5 8.5a5 5 0 0 1 0 7" /><path d="M18.5 5.5a9 9 0 0 1 0 13" /></svg>
);

export const IconSoundOff = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} strokeWidth={1.6} {...p}><path d="M11 5 6 9H2v6h4l5 4V5z" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>
);

export const STEP_ICONS = {
  chat: IconWhatsApp,
  ship: IconShip,
  card: IconCard,
  user: IconUser,
} as const;
