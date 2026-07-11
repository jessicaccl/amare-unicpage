# Amare · one page (reformulada)

Editorial afetivo, no espírito da Zara porém com alma: marfim quente, acento **vinho/rosewood** (amor + herança), tipografia **Fraunces + Inter + Parisienne** (assinatura manuscrita das irmãs), fio de costura como assinatura visual e a seção **Legado** como coração emocional. Reusa as mesmas imagens e a mesma música do repositório atual.

---

## ▶ Rodar agora (esta pasta já é um projeto completo)

```bash
npm install
npm run dev
```

Abra o endereço que o Vite mostrar (geralmente `http://localhost:5173`).

> **⚠️ As imagens e a música aqui são PLACEHOLDERS** (retângulos quentes com o nome do arquivo) só pra o projeto rodar de primeira. **Substitua** pelos arquivos reais do seu repositório, mantendo os mesmos nomes:
>
> `src/assets/hero.jpeg`, `src/assets/look1.jpeg`, `src/assets/look2.jpeg`, `src/assets/look3.jpeg`, `src/assets/ambient-music.mp3`
>
> É só copiar a pasta `src/assets` do seu clone original por cima desta. Nomes iguais = nada mais a mexer.

---

## O que mudou

- **Uma fonte de estilo**: `src/styles/amare.css` (custom properties + camadas). Saíram os `styled-components` por componente e o `theme.ts`/`global.ts`. O CSS agora é único, legível e fácil de ajustar. Menos código, build mais leve.
- **Conteúdo centralizado**: tudo o que é texto/links vive em `src/data/content.ts`. Você edita a página inteira num só arquivo.
- **Ícones inline** (`src/components/Icons.tsx`), sem depender de `@phosphor-icons/react`.
- **Acessibilidade de verdade**: skip link, landmarks semânticas, `aria-*`, foco visível, modais com foco preso + Esc + devolução de foco, `prefers-reduced-motion` respeitado em toda animação, controle de tamanho de texto.
- **Experiência**: hero com Ken Burns, reveals no scroll (IntersectionObserver), hover editorial + lightbox, música ambiente com *fade* e convite sutil.
- **Nova seção Legado**: a loja física encerrada em 2025, a pausa pela família e a semente do e-commerce futuro, assinada à mão por "Jéssica & Raquel".

## Estrutura

```
index.html                    ← fontes (Fraunces/Inter/Parisienne) + metatags
preview.html                  ← preview autossuficiente (abra no navegador)
src/
  main.tsx                    ← importa styles/amare.css
  App.tsx                     ← compõe as seções + modal + áudio + a11y
  styles/amare.css            ← todos os estilos (tokens no :root)
  data/content.ts             ← TODO o conteúdo editável
  hooks/
    useReveal.ts              ← reveal no scroll, header sólido, reduced-motion
    useAmbientAudio.ts        ← música com fade in/out
  components/
    Header, Hero, Manifesto, Editorial, Legacy,
    HowItWorks, Testimonials, Footer,
    AccessibilityDock, Modal, ContactModal, Reveal, Icons
  assets/                     ← MANTENHA: hero.jpeg, look1..3.jpeg, ambient-music.mp3
```

## Como aplicar no seu repositório

1. **Mantenha** a pasta `src/assets/` como está (imagens + música).
2. **Substitua** `index.html`, `src/main.tsx` e `src/App.tsx` pelos daqui.
3. **Adicione** `src/styles/amare.css`, `src/data/content.ts`, a pasta `src/hooks/` e os novos arquivos de `src/components/`.
4. **Remova** os componentes antigos e o tema, que não são mais usados:
   `src/styles/theme.ts`, `src/styles/global.ts` e as pastas
   `src/components/{Hero,About,Collection,HowToBuy,SocialProof,Footer,AudioPlayer,AccessibilityTools,VisuallyHildden}/`.
5. `npm run dev` 🎉

### Dependências

Nada novo a instalar. O novo código **não usa** `styled-components`, `@phosphor-icons/react` nem `react-icons`. Se quiser enxugar, pode remover:

```bash
npm uninstall styled-components @phosphor-icons/react react-icons @types/styled-components
```

(Manter também funciona; ficam apenas sem uso.)

## Onde editar

- **Textos, links e passos**: `src/data/content.ts`.
- **Depoimentos**: em `TESTIMONIALS` (mesmo arquivo). Sem foto, aparece um monograma elegante com as iniciais. Para exibir a foto, **preencha `avatar`** com a URL da imagem (importe de `../assets` ou use uma URL pública):

  ```ts
  { name: 'Camila F.', handle: '@camilaferreira',
    avatar: '/caminho/para/foto.jpg',   // ← deixe vazio para usar o monograma
    text: '...' },
  ```

- **Paleta e tipografia**: variáveis no topo de `src/styles/amare.css` (`:root`).
- **Contatos do WhatsApp**: `CONTACTS` em `content.ts` (Jéssica e Raquel).

## Detalhes técnicos

- **Áudio**: navegadores bloqueiam autoplay com som; a música só toca após o clique no botão "Som" (no header). Volume entra e sai com *fade*.
- **Movimento reduzido**: se o sistema pedir `prefers-reduced-motion`, animações e reveals são desligados e o conteúdo aparece imediatamente.
- **Imagens**: são importadas (`import hero from '../assets/hero.jpeg'`), então o Vite versiona e otimiza. As mesmas do repositório atual.
