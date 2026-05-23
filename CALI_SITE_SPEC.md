# CALI MOVIMIENTO — Especificação do Site

> Documento de referência. Toda decisão de build, design e conteúdo parte daqui.

---

## 1. Identidade e Marca

| Campo | Valor |
|-------|-------|
| **Nome do site** | CALI |
| **Hierarquia visual** | CALI / MOVIMIENTO / by Camila Lucena |
| **Tagline** | *O corpo não é um problema a resolver. É um território a habitar.* |
| **Manifesto resumido** | Levar o sentir corporal a todos os cantos do mundo para ativar o ser através do movimento, da alegria e do caos. |
| **Instagram** | @camilalucena.cali |
| **Domínio provisório** | spinelab.vercel.app (Vercel) |
| **Domínio futuro** | a definir |

---

## 2. Objetivos do Site (por prioridade)

1. **Vender workshops** — objetivo principal. Toda página deve ter CTA visível.
2. **Agenda nômade** — visitante sabe onde Camila está e para onde vai.
3. **Blog** — Camila envia o texto, eu (Claude) publico. Transforma em posts para redes sociais.
4. **Imprensa** — porta de entrada para jornalistas e mídia. Releases em destaque.
5. **SEO local** — aparecer para "yoga [cidade]" em cada cidade visitada.

---

## 3. Stack Técnica

| Item | Escolha | Motivo |
|------|---------|--------|
| Framework | **Astro 4** | HTML estático puro, melhor PageSpeed/SEO |
| CSS | **Puro (sem Tailwind)** | Menor bundle, controle total |
| JS | **Mínimo (vanilla)** | Cursor, scroll reveal, modal — nada mais |
| Blog | **Content Collections (Markdown)** | Camila envia texto, Claude cria o .md e commita |
| Deploy | **Vercel via GitHub** | Push em `main` → build → produção automática |
| Sitemap | **@astrojs/sitemap** | Gerado automaticamente no build |

---

## 4. Design System

### 4.1 Estética
Inspirada no código de referência fornecido: **espaço sideral dinâmico**.
- Fundo escuro cósmico com estrelas animadas (geradas via JS)
- Seções com scroll-reveal (IntersectionObserver)
- Cursor personalizado (substituindo o cursor padrão)
- Glassmorphism nos cards e modais

### 4.2 Cores

| Token | Hex | Uso |
|-------|-----|-----|
| `--bg` | `#080818` | Fundo global |
| `--bg-card` | `rgba(255,255,255,0.04)` | Cards e painéis |
| `--orange` | `#ff6b35` | Destaque principal, cursor, datas |
| `--magenta` | `#e91e8c` | Gradiente, CTAs |
| `--lilac` | `#a855f7` | Gradiente, detalhes |
| `--gradient` | `orange → magenta → lilac` | Títulos, botões primários, logo |
| `--muted` | `rgba(255,255,255,0.6)` | Textos secundários |
| `--border` | `rgba(255,255,255,0.1)` | Bordas de cards |

### 4.3 Tipografia

| Fonte | Origem | Uso | Substitui |
|-------|--------|-----|-----------|
| **Cormorant Garamond** | Google Fonts | Títulos display (h1, logo) | TAN Mon Cheri |
| **Fraunces** | Google Fonts | Subtítulos, destaques em itálico | TAN The Laundry Room |
| **DM Sans** | Google Fonts | Corpo, nav, botões | — |

### 4.4 Cursor personalizado
- Anel laranja (`--orange`) de 18px
- Ao hover em links/botões: aumenta para 36px e vira magenta
- Desativado em dispositivos touch (pointer: coarse)

### 4.5 Animações
- **Stars:** 200 estrelas geradas por JS, twinkle aleatório, dispersas no hero
- **Scroll reveal:** `opacity 0→1 + translateY 48px→0` via IntersectionObserver (threshold 0.15)
- **Cards:** `translateY(-4px)` no hover
- **Botões:** `scale(1.04)` no hover

---

## 5. Estrutura de Páginas

```
/                  → Home (imersiva, espaço cósmico)
/workshops         → Todos os workshops + pagamento
/yoga-[cidade]     → Página SEO por cidade (gerada dinamicamente)
/blog              → Listagem de posts
/blog/[slug]       → Post individual
/imprensa          → Releases para imprensa + kit de mídia
```

### 5.1 Home — seções (ordem)

1. **Hero**
   - Stars animadas, título CALI, subtítulo MOVIMIENTO
   - Tagline: *"O corpo não é um problema a resolver. É um território a habitar."*
   - CTA: "Ver workshops"

2. **Cuidando da sua coluna** *(manifesto / filosofia)*
   - Intro: "Ativista do sentir corporal livre..."
   - Bloco: Consumo Consciente como Movimento
   - Bloco: "Para sentir o corpo, precisamos de ambientes menos sintéticos"
   - Bloco: "O pé na terra ativa terminações nervosas..."
   - Estética: texto em colunas com fundo cósmico, sem imagem — o texto É o visual

3. **Próximos workshops** *(conversão)*
   - 3 cards com as datas mais próximas
   - Botão "Reservar" em cada card → abre modal de pagamento

4. **Quem é a Cami** *(sobre)*
   - "Ativista do sentir corporal livre..."
   - "Se você quer entender melhor sobre si mesma, fases e ciclos da sua vida..."
   - "Na aula comigo conseguimos entrar em todos esses temas..."
   - Prática presencial ou online via Zoom
   - Foto de Camila (placeholder até receber)

5. **A Prática — Spine Lab 2h** *(diferencial)*
   - Estrutura da aula (Abertura → Aquecimento → Prática Central → Nauli → Invertidas → Encerramento)
   - Bloco Nauli como destaque especial ("o coração do Spine Lab")

6. **CTA final** *(conversão fechamento)*
   - Headline: "Fico muito feliz que vamos nos encontrar em tempo real!"
   - Subheadline: "Você pode tirar todas as dúvidas que quiser..."
   - Dois botões lado a lado:
     - **"Vamos ver"** → abre WhatsApp com mensagem pré-preenchida
     - **"Já quero"** → abre modal de pagamento (workshop mais próximo)

7. **Blog preview** — últimos 3 posts
8. **Imprensa preview** — 2 últimos releases + "Ver todos"
9. **Footer** — logo, Instagram, copyright

### 5.2 Workshops — estrutura
- Hero com agenda nômade (mapa visual de cidades)
- Cards por cidade ordenados por data
- Cada card: cidade · local · data · horário · preços · botão "Reservar"
- Modal de pagamento ao clicar em "Reservar"
- Nota de rodapé: "Datas europeias a confirmar — entre na lista de espera"

### 5.3 Blog — regras
- Camila envia o texto via chat
- Claude cria o arquivo `.md` em `src/content/blog/[slug].md`
- Commit no GitHub → build automático no Vercel
- Cada post tem: título, data, descrição (para SEO), corpo em Markdown
- Sem sistema de comentários (para manter o site leve)

### 5.4 Imprensa — estrutura
- Headline: "Para a Imprensa"
- Lista de releases em ordem cronológica reversa
- Cada release: data · título · link para o post completo
- Seção "Kit de Mídia": logo (download), foto (download), bio curta, contato

---

## 6. Sistema de Pagamento

### Fluxo completo
```
Card do workshop → botão "Reservar"
  → Modal abre
    → Opção 1: PIX (destaque, 10% desconto)
    → Opção 2: Mercado Pago (cartão)
    → WhatsApp flutuante (dúvidas + envio de comprovante)
```

### Preços Brasil
| Momento | Valor |
|---------|-------|
| Early bird (até 2 dias antes) | R$180 |
| Regular | R$200 |
| No dia | R$220 |
| **PIX early bird (–10%)** | **R$162** |
| **PIX regular (–10%)** | **R$180** |
| **PIX no dia (–10%)** | **R$198** |

### Preços Europa
| Momento | Valor |
|---------|-------|
| Early bird | €80 |
| Regular | €100 |
| No dia | €120 |
| **PIX/transferência (–10%)** | **€72 / €90 / €108** |

### Dados operacionais
| Item | Valor |
|------|-------|
| Chave PIX | `03043151097` |
| WhatsApp | `+55 51 99959 5522` |
| Mercado Pago | ⚠️ **A ADICIONAR** — Camila precisa criar o link de pagamento no MP e substituir o placeholder em `src/components/PaymentModal.astro` |

### Modal — comportamento
- Abre ao clicar em "Reservar" em qualquer card
- Carrega automaticamente: nome do workshop, valor, desconto PIX calculado
- Botão "Copiar chave PIX" → copia para clipboard → confirma visualmente
- Botão "Enviar comprovante" → abre WhatsApp com texto pré-preenchido
- Fecha com: clique fora, botão ✕, ou tecla Escape

---

## 7. SEO — Regras

### Princípio geral
> Cada cidade que Camila visita deve gerar uma página indexável para "yoga [cidade]".

### Títulos por tipo de página
| Página | Padrão de título |
|--------|-----------------|
| Home | `CALI MOVIMIENTO — Yoga, Dança e Movimento com Camila Lucena` |
| Workshops | `Workshops de Yoga — CALI MOVIMIENTO by Camila Lucena` |
| Cidade | `Yoga [Cidade] — Workshop CALI com Camila Lucena` |
| Post de blog | `[Título do post] — CALI MOVIMIENTO` |
| Imprensa | `Imprensa — CALI MOVIMIENTO by Camila Lucena` |

### Schema markup obrigatório
- **Organization** — em todas as páginas (no BaseLayout)
- **Event** — em cada workshop (data, local, preço, organizador)
- **Article** — em cada post de blog
- **BreadcrumbList** — em páginas internas

### Outros requisitos
- `<link rel="canonical">` em todas as páginas
- Open Graph + Twitter Card completos
- `robots.txt` liberando tudo
- `sitemap.xml` gerado automaticamente pelo Astro
- Alt text em todas as imagens
- Meta description única por página (máx. 155 caracteres)
- H1 único por página contendo a keyword principal

---

## 8. Agenda Nômade — Workshops

### Datas confirmadas (atualizar conforme necessário)

| Cidade | Local | Data | Horário |
|--------|-------|------|---------|
| Rio de Janeiro | Copanema | 08/06/2026 | 07h00 |
| Rio de Janeiro | Centro | 09/06/2026 | 12h30 |
| Rio de Janeiro | Posto 4 — Barra da Tijuca | 10/06/2026 | 18h30 |
| Florianópolis | a confirmar | 13–18/06/2026 | a confirmar |
| Porto Alegre | a confirmar | 18–24/06/2026 | a confirmar |
| Europa | a confirmar | 24/06 – 24/08/2026 | a confirmar |

### Como adicionar nova data
1. Abrir `src/data/workshops.js`
2. Adicionar objeto seguindo o padrão existente
3. Commit → Vercel publica automaticamente

---

## 9. Blog — Fluxo de Publicação

1. Camila escreve o texto e envia para Claude no chat
2. Claude cria `src/content/blog/[slug].md` com o frontmatter correto
3. Claude commita no GitHub com mensagem: `content: add post "[título]"`
4. Vercel faz o build e publica em ~2 minutos
5. URL disponível: `spinelab.vercel.app/blog/[slug]`

### Frontmatter padrão de post
```markdown
---
title: "Título do post"
description: "Descrição SEO (máx. 155 caracteres)"
pubDate: 2026-06-01
city: "Rio de Janeiro"
tags: ["yoga", "respiração", "coluna"]
---

Conteúdo em Markdown aqui...
```

---

## 10. Deploy — Fluxo CI/CD

```
Camila/Claude → commit em main no GitHub
  → GitHub Actions (ou Vercel hook direto)
    → Vercel build (astro build)
      → Deploy em produção automático
        → URL: spinelab.vercel.app
```

### Setup necessário (uma vez só)
1. Criar repo `cali-site` no GitHub (conta: camilalucenacali)
2. Conectar repo ao Vercel (Import Project)
3. Framework preset: **Astro**
4. Build command: `npm run build`
5. Output dir: `dist`
6. Branch de deploy: `main`

---

## 11. Componentes e Arquivos

```
cali-site/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro      ← SEO, cursor, scroll reveal, fonts
│   ├── components/
│   │   ├── Header.astro           ← Nav fixo
│   │   ├── Footer.astro           ← Rodapé
│   │   ├── WhatsAppButton.astro   ← Botão flutuante verde
│   │   └── PaymentModal.astro     ← Modal PIX + Mercado Pago
│   ├── pages/
│   │   ├── index.astro            ← Home imersiva
│   │   ├── workshops.astro        ← Todos os workshops
│   │   ├── imprensa.astro         ← Imprensa
│   │   ├── yoga-[cidade].astro    ← SEO por cidade (dinâmico)
│   │   └── blog/
│   │       ├── index.astro        ← Listagem de posts
│   │       └── [slug].astro       ← Post individual
│   ├── content/
│   │   ├── config.ts              ← Schema das collections
│   │   └── blog/
│   │       └── *.md               ← Posts (Camila envia, Claude publica)
│   ├── data/
│   │   └── workshops.js           ← Dados de todos os workshops
│   └── styles/
│       └── global.css             ← Design system completo
├── public/
│   └── robots.txt
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 12. Pendências (antes de ir ao ar)

- [ ] Camila criar conta no Mercado Pago e adicionar link de pagamento
- [ ] Definir domínio definitivo (substituir `spinelab.vercel.app`)
- [ ] Adicionar foto de Camila (hero + sobre)
- [ ] Escrever primeiro post de blog
- [ ] Confirmar datas de Floripa, POA e cidades europeias
- [ ] Criar conta no Google Search Console e submeter sitemap
- [ ] Criar conta no Google My Business para cada cidade (Rio, Floripa, POA)

---

*Documento mantido por Claude Code. Atualizar a cada mudança de decisão relevante.*
