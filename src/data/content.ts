import look1 from '../assets/look1.jpeg';
import look2 from '../assets/look2.jpeg';
import look3 from '../assets/look3.jpeg';
import loja1 from '../assets/loja1.jpeg';
import loja2 from '../assets/loja2.jpeg';
import loja3 from '../assets/loja3.jpeg';

/**
 * Todo o conteúdo editável da página em um só lugar.
 * Para adicionar a foto de um depoimento, basta preencher `avatar`
 * com a URL da imagem (ex.: importar de ../assets ou uma URL pública).
 */

export const CONTACTS = [
  { name: 'Jéssica', whatsapp: '5521996032769' },
  { name: 'Raquel', whatsapp: '5521967077361' },
] as const;

export const HERO = {
  eyebrow: 'Irmãs Amare · desde 2015',
  subtitle:
    'Um ensaio sobre a beleza de ser quem você é. Moda atemporal, com atendimento que lembra o seu nome.',
};

export const MANIFESTO = {
  eyebrow: 'A Amare',
  body: [
    'A Amare nasce do encontro entre estilo e essência, para mulheres que se expressam com autenticidade e enxergam na forma de se vestir uma extensão de quem são.',
    'Cada peça é escolhida com intenção, não apenas para vestir, mas para valorizar, acolher e traduzir a sua identidade. Dez anos de um atendimento que é quase carta escrita à mão: perto, atento, feito por duas irmãs.',
  ],
  pillars: ['Identidade', 'Proximidade', 'Essência', 'Conexão'],
};

export type Look = { image: string; number: string; title: string; alt: string };

export const LOOKS: Look[] = [
  {
    image: look1,
    number: '01',
    title: 'Herança e Estilo',
    alt: 'Look Herança e Estilo: peça atemporal em retrato editorial.',
  },
  {
    image: look2,
    number: '02',
    title: 'Detalhes de Afeto',
    alt: 'Look Detalhes de Afeto: composição delicada e afetiva.',
  },
  {
    image: look3,
    number: '03',
    title: 'Laços que Inspiram',
    alt: 'Look Laços que Inspiram: retrato que celebra vínculos e gerações.',
  },
];

export const LEGACY = {
  eyebrow: 'Um capítulo em pausa',
  note: [
    'Por dez anos, a Amare foi um espaço físico de moda atemporal e de personalidade, com um atendimento que era só nosso. Hoje escolhemos uma pausa para cuidar do que veio primeiro: nossos filhos, nossa família.',
    'Esta página é um voto. Um legado que deixamos plantado para que, no tempo certo, a Amare volte a vestir vocês, agora também em um e-commerce, com o mesmo afeto de sempre.',
  ],
  signFrom: 'com amor,',
  signNames: 'Jéssica & Raquel',
};

export type GalleryPhoto = { image: string; alt: string };

/** Carrossel do último dia da loja (julho de 2025). A foto das irmãs vem primeiro. */
export const STORE_GALLERY = {
  eyebrow: 'O último dia · julho de 2025',
  caption: 'Um até logo cheio de afeto, ao lado de quem construiu a Amare com a gente.',
  photos: [
    { image: loja1, alt: 'Jéssica e Raquel, as irmãs Amare, juntas no último dia da loja.' },
    { image: loja2, alt: 'Interior da loja Amare no último dia, com araras de roupas e mesa posta.' },
    { image: loja3, alt: 'Mesa de despedida com quitutes e o letreiro Amare ao fundo.' },
  ] as GalleryPhoto[],
};

export type Step = { icon: 'chat' | 'ship' | 'card' | 'user'; number: string; title: string; text?: string; list?: { label: string; value: string }[] };

export const STEPS: Step[] = [
  { icon: 'chat', number: '01', title: 'Atendimento no WhatsApp', text: 'Conexão direta e personalizada: você fala com a Jéssica ou com a Raquel, de verdade.' },
  { icon: 'ship', number: '02', title: 'Envio nacional', list: [
    { label: 'Teresópolis:', value: 'entrega rápida via motoboy.' },
    { label: 'Todo o Brasil:', value: 'Correios, rastreável.' },
  ] },
  { icon: 'card', number: '03', title: 'Pagamento facilitado', list: [
    { label: 'Crédito:', value: 'até 6x sem juros.' },
    { label: 'Pix:', value: '5% de desconto.' },
    { label: 'Débito:', value: 'rápido e seguro.' },
  ] },
  { icon: 'user', number: '04', title: 'Consultoria de estilo', text: 'Ajuda individual pra escolher o que combina com você, sem pressa, do seu jeito.' },
];

export type Testimonial = { name: string; handle: string; text: string; avatar?: string };

/** Depoimentos: preencha `avatar` com a URL da foto quando quiser exibi-la. */
export const TESTIMONIALS: Testimonial[] = [
  { name: 'Daisy Perrota', handle: '@daisyperrota', avatar: '', text: 'Amare é mais do que uma marca. É a certeza de elegância e conforto. E ainda tem o carinho e o atendimento mais que especial que só as lindas Jessica e Raquel tem a oferecer. Hoje sou mais que uma cliente, sou uma amiga.' },
  { name: 'Alexandra Gallindo', handle: '@alexandra21ale', avatar: '', text: 'Amare não é só uma loja, é conexão e cuidado. Cada look escolhido eleva minha autoestima, me fazendo sentir confiante e especial em qualquer ocasião.' },
  { name: 'Thamires Oliveira', handle: '@thamires_pb_oliveira', avatar: '', text: 'A Amare é aquele lugar onde sinto meu coração alegre, é onde encontro a minha amiga de infância e vejo exatamente a essência dela em cada cantinho do espaço. E um lugar cheio de energia boa e que exala criatividade. Lá tem acolhimento, tem risadas, tem choro, tem abraços, tem amizade, tem afeto. Como não amar e celebrar a Amare?' },
];

export const SOCIAL = {
  instagram: 'https://www.instagram.com/amare.fashion',
  tiktok: 'https://www.tiktok.com',
  whatsapp: 'https://wa.me/5521996032769',
  maps: 'https://www.google.com/maps/search/?api=1&query=Teresópolis,+RJ',
  location: 'Teresópolis, RJ',
};