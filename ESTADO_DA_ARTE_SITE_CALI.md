# ESTADO DA ARTE — cali-site.vercel.app
**Data:** 30 de maio de 2026
**Versão:** commit `95d0b48`

---

## VISÃO GERAL

Site institucional e de vendas da marca **CALI MOVIMIENTO** (Camila Lucena).
Objetivos principais: vender imersões presenciais (Brasil + Europa), apresentar o APP Spine Lab e publicar conteúdo de blog.

- **Produção:** https://cali-site.vercel.app
- **Repositório:** https://github.com/camilalucenacali/cali-site
- **Deploy:** push em `main` → Vercel CI/CD automático (~2 min)

---

## STACK

| Camada | Tecnologia |
|--------|-----------|
| Framework | Astro 4 (saída estática — SSG) |
| Estilo | CSS puro (sem Tailwind), design tokens em `global.css` |
| JavaScript | Vanilla — cursor, scroll reveal, modal, pricing dinâmico |
| Conteúdo | Content Collections (Markdown) para blog |
| Dados | `src/data/workshops.js` — array JS simples |
| Deploy | Vercel (CI/CD via GitHub Actions) |
| Fontes | Cormorant Garamond · Fraunces · DM Sans (Google Fonts) |

---

## PÁGINAS ATIVAS

### `/` — Home
Seções em ordem:
1. **Hero** — espaço sideral com stars animadas, título CALI MOVIMIENTO, CTA "Ver imersões"
2. **Manifesto** — 3 cards: Consumo Consciente, Ambientes, O pé na terra
3. **Próximas imersões** — grid 3 cards das próximas imersões com pricing dinâmico
4. **1ª aula online** — R$15,00 (BRL) ou €15,00 (EUR, detectado via timezone) + botão Calendly (placeholder)
5. **Quem é a Cami** — bio + placeholder de foto
6. **Spine Lab — 2 horas** — 6 blocos de prática (Abertura, Aquecimento, Prática Central, Nauli, Invertidas, Encerramento)
7. **CTA Final** — botões WhatsApp + modal de pagamento
8. **Blog preview** — últimos 3 posts

---

### `/imersoes` — Agenda de Imersões
- Grid único, máx 3 cards por linha (desktop), 2 (tablet), 1 (mobile)
- Banner topo: "Todas as imersões incluem material impresso + acesso ao APP Spine Lab"
- Legenda de tiers de preço (early bird / regular / no dia / PIX)
- Preço calculado dinamicamente no cliente com base na data atual vs. data da imersão
- Modal de pagamento ao clicar em "Reservar lugar"

**Redirect ativo:** `/workshops` → 301 → `/imersoes`

#### Dados das imersões (`src/data/workshops.js`):

| ID | Cidade | Local | Data | Horário | Early Bird | Regular | No dia | Status |
|----|--------|-------|------|---------|-----------|---------|--------|--------|
| rj-amarathi-1106 | Rio de Janeiro | AMARATHI — Rua da Quitanda, 109, Centro | 11 jun 2026 | 12h30–13h30 | R$116,45 | R$137 | R$150,70 | upcoming |
| floripa-junho | Florianópolis | Rio Tavares Sunset | 14–17 jun (a definir) | Sunset | R$177,30 | R$197 | R$216,70 | **tbd** |
| poa-junho | Porto Alegre | Bairro Santana | 19 jun 2026 | Sunset | R$177,30 | R$197 | R$216,70 | upcoming |
| europa-verao | Europa | a confirmar | 24 jun – 24 ago 2026 | a confirmar | €80 | €100 | €120 | upcoming |

**Regras de preço:**
- Early bird: 3+ dias antes da imersão
- Regular: até 1 dia antes
- No dia: mesmo dia da imersão
- PIX: 10% de desconto sobre qualquer tier

**Add-on exclusivo Rio:** marmita ayurvédica — R$192 (substitui valor base, não soma)

---

### `/app-spine-lab` — APP Spine Lab
Seções em ordem:
1. **Hero** — "Spine Lab é uma comunidade que cuida" + contexto beta + link "A Fase 1 é gratuita"
2. **Fragmentos do manifesto** — 2 citações tipográficas grandes
3. **Por que o acesso não é aberto** — argumento do beta
4. **A jornada** — 28 dias / 7 fases × 4 dias (Compreender · Praticar · Integrar · Assimilar) / 3 durações (5, 10, 21 min) / Ciclo 1 em andamento: Respiração e Nauli Kriya
5. **O seu ritmo** — sincronização lunar/biológica
6. **Como funciona o acesso** — 5 steps:
   - 01: Sente a prática (Fase 1 gratuita, cadastro necessário)
   - 02: Entra na lista de espera
   - 03: Conversa de 15 min com a Cami
   - 04: Aprovação + link de pagamento
   - 05: Boas-vindas à Zona Spine Lab
7. **O que está dentro do app** — 4 cards (Spine Lab 2h, Aulas avulsas, Ciclos, Zona Spine Lab)
8. **Preços:**
   - Mensal: R$378,90/mês
   - Anual: R$3.358/ano (R$279,90/mês)
   - Cupom `COMUNIDADE` = 20% off (LGBTQIA+ e minorias, declaração de honra)
9. **Convite exclusivo** — 2 convites por membro, pula fila
10. **CTA Final** — "A jornada começa com uma conversa..."

**WhatsApp desta página:** mensagem customizada → "Quero saber mais sobre o Spine Lab e entrar na lista de espera"

---

### `/blog` — Listagem de Posts
Grid de cards com data, título, descrição e tags.

### `/blog/[slug]` — Post Individual
Layout artigo com tipografia editorial, tags, schema Article e link para imersões no rodapé.

#### Posts publicados:

| Slug | Título | Data | Cidade | Tags |
|------|--------|------|--------|------|
| `bem-vindo` | O corpo fala — aprenda a escutá-lo | 23 mai 2026 | Rio de Janeiro | yoga, coluna, movimento, autoconhecimento |
| `base-em-movimento` | Base em Movimento: educação ambiental, agrofloresta e corpo em uma escola pública do Rio | 29 mai 2026 | Rio de Janeiro | base em movimento, educação ambiental, agrofloresta, compostagem, corpo, escola pública, Rio de Janeiro, infância, território |

---

### `/imprensa` — Imprensa *(fora do nav, URL acessível)*
Bios curta e longa de Camila, kit de mídia (placeholders), releases, contato para jornalistas.
> Removida do nav — substituída por "APP Spine Lab".

### `/workshops` — Redirect 301 → `/imersoes`

---

## COMPONENTES

### `Header.astro`
Nav fixa com blur: **Imersões** · **APP Spine Lab** · **Blog** + botão "Reservar lugar" → `/imersoes`

### `Footer.astro`
Logo CALI, tagline, link Instagram `@camilalucena.cali`, copyright dinâmico.

### `WhatsAppButton.astro`
Botão flutuante verde, aceita prop `text` opcional.
- Default (todas as páginas): *"Olá! Quero saber mais sobre as imersões CALI."*
- `/app-spine-lab`: *"Olá! Quero saber mais sobre o Spine Lab e entrar na lista de espera."*

### `PaymentModal.astro`
Modal de checkout com:
- **Add-on** (marmita ayurvédica — só Rio): checkbox que troca o valor base para R$192
- **Cupom de desconto**: campo + botão "Aplicar" — cupom `COMUNIDADE` = 20% off
- **PIX**: chave CPF `03043151097`, desconto automático de 10%, botão copiar, link WhatsApp com comprovante pré-preenchido
- **Mercado Pago**: link placeholder (⚠️ substituir pelo link real)
- Preço recalculado em tempo real ao aplicar add-on ou cupom

### `BaseLayout.astro`
- `<head>` completo: Open Graph, Twitter Card, schema Organization, sitemap, Google Fonts
- Cursor customizado: **ponto** (6px, instantâneo) + **anel** (36px, lerp suave via `requestAnimationFrame`)
- Hover via event delegation — cobre elementos dinâmicos
- Cursor some ao sair da janela
- Scroll reveal (IntersectionObserver)
- Header scroll (blur → sólido ao rolar)
- Mobile nav toggle

---

## CHECKOUT — LÓGICA ATUAL

```
Usuário clica "Reservar lugar"
  → PaymentModal abre
  → [Opcional] Marcar add-on (marmita, só Rio) → valor = R$192
  → [Opcional] Inserir cupom → desconto aplicado sobre valor base (ou add-on)
  → Escolhe PIX ou Mercado Pago
      PIX: copia chave → paga → envia comprovante via WhatsApp
      MP:  redireciona para link externo (⚠️ placeholder)
```

**Cupons ativos:**
| Código | Desconto | Público |
|--------|---------|---------|
| `COMUNIDADE` | 20% | LGBTQIA+ e minorias |

---

## SEO & PERFORMANCE

- Sitemap automático (`@astrojs/sitemap`)
- Schema markup: Organization (global), Event (imersões), Article (blog posts)
- Canonical URLs configuradas
- Open Graph + Twitter Card em todas as páginas
- Saída 100% estática — sem JS no servidor
- Fontes via Google Fonts com `preconnect`

---

## DADOS OPERACIONAIS

| Campo | Valor |
|-------|-------|
| PIX | CPF `03043151097` |
| WhatsApp | +55 51 99959-5522 (`5551999595522`) |
| Instagram | `@camilalucena.cali` |
| APP Spine Lab | https://calispinelab.vercel.app |
| Mercado Pago | ⚠️ PLACEHOLDER |
| Calendly (1ª aula) | ⚠️ PLACEHOLDER (`#calendly-placeholder` em `index.astro`) |

---

## PENDÊNCIAS — NECESSITA AÇÃO DA CAMILA

| Prioridade | Item | Onde editar |
|-----------|------|-------------|
| 🔴 Alta | **Link real do Mercado Pago** | `src/components/PaymentModal.astro` — linha `href="https://www.mercadopago.com.br"` |
| 🔴 Alta | **Data exata da imersão Floripa** (entre 14–17 jun) | `src/data/workshops.js` — campo `date` e `dateDisplay` do `floripa-junho` |
| 🔴 Alta | **Link do Calendly** (1ª aula online) | `src/pages/index.astro` — `id="btn-agendar"` href |
| 🟡 Média | **Foto de Camila** (hero home + seção "Quem é a Cami") | `src/pages/index.astro` — substituir `<div>` placeholder pelo `<img>` |
| 🟡 Média | **Link do app Spine Lab** (botão na home) | Adicionar botão/banner quando tiver URL definitiva |
| 🟢 Baixa | **Domínio próprio** | Configurar no painel Vercel + atualizar `siteUrl` em `BaseLayout.astro` |
| 🟢 Baixa | **Google Search Console** | Submeter `sitemap-index.xml` |
| 🟢 Baixa | **Kit de mídia** (logo, fotos, PDF bio) | `src/pages/imprensa.astro` — substituir placeholders pelos arquivos reais |

---

## PENDÊNCIAS — FEATURES A IMPLEMENTAR

| Item | Descrição |
|------|-----------|
| Feed do Instagram | Requer Instagram Graph API (Meta for Developers) — processo de configuração de ~1h |
| Página Imersão Presencial | Página dedicada com datas, local, valores e botão de inscrição |
| Formulário de lista de espera | Atualmente redireciona para WhatsApp — integrar Formspree ou similar para capturar email/nome/tel |
| Sistema de convites rastreável | Gerar links únicos por membro para rastrear quem indicou quem |
| Integração Mercado Pago real | Checkout Pro com campo de cupom nativo |

---

## ESTRUTURA DE ARQUIVOS

```
cali-site/
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── PaymentModal.astro       ← checkout completo (add-on + cupom + PIX + MP)
│   │   └── WhatsAppButton.astro     ← aceita prop `text`
│   ├── content/
│   │   ├── config.ts
│   │   └── blog/
│   │       ├── bem-vindo.md
│   │       └── base-em-movimento.md
│   ├── data/
│   │   └── workshops.js             ← fonte única de verdade das imersões
│   ├── layouts/
│   │   └── BaseLayout.astro         ← cursor, SEO, scroll reveal, header scroll
│   ├── pages/
│   │   ├── index.astro              ← home
│   │   ├── imersoes.astro           ← agenda (URL canônica)
│   │   ├── workshops.astro          ← redirect 301 → /imersoes
│   │   ├── app-spine-lab.astro      ← página do app/comunidade
│   │   ├── imprensa.astro           ← fora do nav, URL acessível
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       └── global.css               ← design tokens, cursor, grid, cards, modal
└── ESTADO_DA_ARTE.md                ← este arquivo
```

---

*Gerado em 30/05/2026 · Claude Sonnet 4.6*
